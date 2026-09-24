import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  MOCK_USERS,
  MOCK_PROJECTS,
  MOCK_QUOTATIONS,
  MOCK_LABOUR_RECORDS,
  MOCK_MATERIAL_STOCK,
  MOCK_CONTRACTOR_DIRECTORY,
  MOCK_SERVICES
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation & Role State
  const [currentRole, setCurrentRole] = useState('public'); // 'public', 'customer', 'contractor', 'labour_manager', 'admin'
  const [activeTab, setActiveTab] = useState('landing'); // 'landing', 'estimator', 'services', 'portfolio', 'customer-dashboard', 'contractor-dashboard', 'project-management', 'admin-panel'
  const [currentUser, setCurrentUser] = useState(null);

  // Data Store State
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [quotations, setQuotations] = useState(MOCK_QUOTATIONS);
  const [labourRecords, setLabourRecords] = useState(MOCK_LABOUR_RECORDS);
  const [materialStock, setMaterialStock] = useState(MOCK_MATERIAL_STOCK);
  const [contractors] = useState(MOCK_CONTRACTOR_DIRECTORY);
  const [services] = useState(MOCK_SERVICES);

  // UI Modals & Toasts
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-sync activeTab when role switches
  const switchRole = (newRole) => {
    setCurrentRole(newRole);
    if (newRole === 'customer') {
      setCurrentUser(MOCK_USERS.customer);
      setActiveTab('customer-dashboard');
      addToast('Switched to Customer Persona (Priya Sharma)', 'info');
    } else if (newRole === 'contractor') {
      setCurrentUser(MOCK_USERS.contractor);
      setActiveTab('contractor-dashboard');
      addToast('Switched to Contractor Persona (Rajesh Patel)', 'info');
    } else if (newRole === 'labour_manager') {
      setCurrentUser(MOCK_USERS.labour_manager);
      setActiveTab('project-management');
      addToast('Switched to Site Labour Manager Persona (Ramesh Kumar)', 'info');
    } else if (newRole === 'admin') {
      setCurrentUser(MOCK_USERS.admin);
      setActiveTab('admin-panel');
      addToast('Switched to Platform Admin Persona (Vikram Malhotra)', 'info');
    } else {
      setCurrentUser(null);
      setActiveTab('landing');
      addToast('Browsing as Public Visitor', 'info');
    }
  };

  // Toast Notification System
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Project Actions
  const updateMilestoneProgress = (projectId, milestoneId, newProgress) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const updatedMilestones = proj.milestones.map((m) => {
            if (m.id === milestoneId) {
              const status = newProgress === 100 ? 'Completed' : newProgress > 0 ? 'In Progress' : 'Pending';
              return { ...m, progress: newProgress, status };
            }
            return m;
          });
          const totalProgress = Math.round(
            updatedMilestones.reduce((acc, curr) => acc + curr.progress, 0) / updatedMilestones.length
          );
          return { ...proj, milestones: updatedMilestones, overallProgress: totalProgress };
        }
        return proj;
      })
    );
    addToast('Milestone progress updated successfully!');
  };

  const addSitePhoto = (projectId, photoUrl, caption) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const newPhoto = {
            id: 'p_' + Date.now(),
            caption,
            date: new Date().toISOString().split('T')[0],
            url: photoUrl,
            uploadedBy: currentUser?.name || 'Site Supervisor'
          };
          return { ...proj, sitePhotos: [newPhoto, ...proj.sitePhotos] };
        }
        return proj;
      })
    );
    addToast('Site update photo uploaded to project timeline!');
  };

  // Quotation & Bidding Actions
  const createQuotationRequest = (newQuote) => {
    const quoteObj = {
      id: 'q_' + Date.now(),
      clientName: currentUser?.name || 'Priya Sharma',
      status: 'Pending Contractor Bids',
      dateSubmitted: new Date().toISOString().split('T')[0],
      bids: [],
      ...newQuote
    };
    setQuotations((prev) => [quoteObj, ...prev]);
    addToast('Your construction quotation request has been published for contractor bids!');
    setActiveTab('customer-dashboard');
  };

  const submitContractorBid = (quoteId, bidDetails) => {
    setQuotations((prev) =>
      prev.map((q) => {
        if (q.id === quoteId) {
          const newBid = {
            id: 'bid_' + Date.now(),
            contractorName: currentUser?.company || 'Patel Infra & Construction Projects Pvt Ltd',
            contractorRating: currentUser?.rating || 4.9,
            ...bidDetails
          };
          return { ...q, bids: [...q.bids, newBid] };
        }
        return q;
      })
    );
    addToast('Bid proposal submitted to client!');
  };

  const acceptBid = (quoteId, bidId) => {
    setQuotations((prev) =>
      prev.map((q) => {
        if (q.id === quoteId) {
          return { ...q, status: 'Contract Awarded' };
        }
        return q;
      })
    );
    addToast('Bid accepted! Project contract has been initialized.', 'success');
  };

  // Labour Management Actions
  const addLabourWorker = (worker) => {
    const newWorker = {
      id: 'lab_' + Date.now(),
      status: 'Present',
      checkIn: '08:00 AM',
      hoursLogged: 8.0,
      ...worker
    };
    setLabourRecords((prev) => [newWorker, ...prev]);
    addToast(`Added worker ${worker.workerName} to site roster.`);
  };

  const toggleWorkerAttendance = (workerId) => {
    setLabourRecords((prev) =>
      prev.map((w) => {
        if (w.id === workerId) {
          const newStatus = w.status === 'Present' ? 'On Leave' : 'Present';
          return { ...w, status: newStatus, hoursLogged: newStatus === 'Present' ? 8.0 : 0 };
        }
        return w;
      })
    );
    addToast('Worker attendance toggled!');
  };

  // Material Management Actions
  const updateStockQuantity = (matId, delta) => {
    setMaterialStock((prev) =>
      prev.map((mat) => {
        if (mat.id === matId) {
          const newQty = Math.max(0, mat.currentStock + delta);
          return { ...mat, currentStock: newQty, lowStock: newQty <= mat.minimumThreshold };
        }
        return mat;
      })
    );
    addToast('Inventory stock level updated!');
  };

  const addMaterialItem = (item) => {
    const newMat = {
      id: 'mat_' + Date.now(),
      lastRestock: new Date().toISOString().split('T')[0],
      lowStock: false,
      ...item
    };
    setMaterialStock((prev) => [newMat, ...prev]);
    addToast(`Material ${item.item} added to site inventory!`);
  };

  return (
    <AppContext.Provider
      value={{
        currentRole,
        switchRole,
        activeTab,
        setActiveTab,
        currentUser,
        setCurrentUser,
        projects,
        quotations,
        labourRecords,
        materialStock,
        contractors,
        services,
        isAuthModalOpen,
        setIsAuthModalOpen,
        toasts,
        addToast,
        removeToast,
        updateMilestoneProgress,
        addSitePhoto,
        createQuotationRequest,
        submitContractorBid,
        acceptBid,
        addLabourWorker,
        toggleWorkerAttendance,
        updateStockQuantity,
        addMaterialItem,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
