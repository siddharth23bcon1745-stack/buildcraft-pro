import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Toast from './components/Toast';

// Pages & Views
import LandingPage from './pages/LandingPage';
import CustomerDashboard from './pages/CustomerDashboard';
import ContractorDashboard from './pages/ContractorDashboard';
import ProjectManagement from './pages/ProjectManagement';
import AdminDashboard from './pages/AdminDashboard';
import QuickEstimator from './components/QuickEstimator';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function MainContent() {
  const { activeTab } = useApp();

  const renderView = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPage />;
      case 'customer-dashboard':
        return <CustomerDashboard />;
      case 'contractor-dashboard':
        return <ContractorDashboard />;
      case 'project-management':
        return <ProjectManagement />;
      case 'admin-panel':
        return <AdminDashboard />;
      case 'estimator':
        return (
          <div className="pt-6">
            <QuickEstimator />
          </div>
        );
      case 'services':
        return (
          <div className="pt-6">
            <Services />
          </div>
        );
      case 'portfolio':
        return (
          <div className="pt-6">
            <Portfolio />
          </div>
        );
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
      <AuthModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
