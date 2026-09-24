import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Building2,
  Users,
  IndianRupee,
  TrendingUp,
  Award,
  CheckCircle2,
  XCircle,
  FileText,
  AlertTriangle,
  Activity,
  Check
} from 'lucide-react';

export default function AdminDashboard() {
  const { currentUser, projects, contractors, addToast } = useApp();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'verification', 'audit'

  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 'app_1', name: 'Apex Civil & Heavy Infrastructure Ltd', license: 'RERA-DL-2023-7721', insuranceVal: '₹25,00,00,000 (₹25 Cr)', city: 'New Delhi & NCR', status: 'Pending Review' },
    { id: 'app_2', name: 'Skyline Infra & Foundations', license: 'RERA-KA-2024-5519', insuranceVal: '₹15,00,00,000 (₹15 Cr)', city: 'Bengaluru, Karnataka', status: 'Pending Review' }
  ]);

  const approveContractor = (id) => {
    setPendingApprovals((prev) => prev.filter((a) => a.id !== id));
    addToast('Contractor license approved & added to verified directory!', 'success');
  };

  const totalGMV = projects.reduce((acc, curr) => acc + curr.totalBudget, 0);
  const platformRevenue = Math.round(totalGMV * 0.035); // 3.5% commission fee

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Admin Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'}
            alt={currentUser?.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-purple-500/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">{currentUser?.name || 'Vikram Malhotra'}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 text-[10px] font-bold border border-purple-500/20">
                Phase 8: Enterprise Admin Panel
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Platform Master Administrator • Access Level: <strong className="text-purple-300">Super Admin</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
          <Activity className="w-4 h-4" /> Global Platform Health: 100%
        </div>
      </div>

      {/* Admin KPI Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Total Platform GMV</span>
          <p className="text-2xl font-extrabold text-white">₹{totalGMV.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-emerald-400">+18% YoY Project volume</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Platform Commission Revenue</span>
          <p className="text-2xl font-extrabold text-purple-400">₹{platformRevenue.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-purple-300">3.5% transaction cut</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Verified GC Network</span>
          <p className="text-2xl font-extrabold text-amber-400">{contractors.length} Verified GCs</p>
          <span className="text-[10px] text-amber-300">{pendingApprovals.length} pending applications</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Active Construction Sites</span>
          <p className="text-2xl font-extrabold text-emerald-400">{projects.length} Sites Live</p>
          <span className="text-[10px] text-emerald-300">Zero open disputes</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-800 gap-4 text-xs font-bold">
        {[
          { id: 'overview', label: 'Platform Performance Overview', icon: TrendingUp },
          { id: 'verification', label: `Contractor Approvals Queue (${pendingApprovals.length})`, icon: Award },
          { id: 'audit', label: 'Real-Time System Audit Logs', icon: FileText }
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 transition-colors border-b-2 ${
                active
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Active Projects Oversight</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900/80 uppercase text-[10px] text-slate-400 tracking-wider">
                  <tr>
                    <th className="p-3">Project Title</th>
                    <th className="p-3">Client</th>
                    <th className="p-3">Contractor</th>
                    <th className="p-3">Total Value</th>
                    <th className="p-3">Progress</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {projects.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-white">{p.title}</td>
                      <td className="p-3">{p.client}</td>
                      <td className="p-3">{p.contractor}</td>
                      <td className="p-3 font-bold text-emerald-400">₹{p.totalBudget.toLocaleString('en-IN')}</td>
                      <td className="p-3 font-semibold text-amber-400">{p.overallProgress}%</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Contractor Approvals Queue */}
      {activeTab === 'verification' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="pb-4 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Contractor License Verification Center</h3>
            <p className="text-xs text-slate-400">Validate general contractor license numbers, insurance certificates, and bonding documents before granting bidding permissions.</p>
          </div>

          {pendingApprovals.length === 0 ? (
            <p className="text-xs text-slate-500 italic">No pending contractor license applications in queue.</p>
          ) : (
            <div className="space-y-4">
              {pendingApprovals.map((app) => (
                <div key={app.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{app.name}</h4>
                    <p className="text-xs text-slate-400">
                      RERA License: <strong className="text-slate-200">{app.license}</strong> • Location: {app.city} • Bank Guarantee: <strong className="text-emerald-400">{app.insuranceVal}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => approveContractor(app.id)}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" /> Approve & Verify License
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Audit Logs */}
      {activeTab === 'audit' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white">Global Platform Audit Trail</h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-slate-300">
              <span>[2026-09-07 17:02] Client <strong>Priya Sharma</strong> requested quotation for 3,500 sq.ft Modern Coastal Villa in Whitefield, Bengaluru.</span>
              <span className="text-[10px] text-slate-500">EVENT_ID #8892</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-slate-300">
              <span>[2026-09-07 16:40] Escrow Disbursement ₹54,00,000 released for Villa Ananda (Milestone 3 RCC Slab Casting).</span>
              <span className="text-[10px] text-slate-500">EVENT_ID #8891</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-slate-300">
              <span>[2026-09-07 15:12] Site Engineer <strong>Ramesh Kumar</strong> uploaded concrete pour cube test inspection report.</span>
              <span className="text-[10px] text-slate-500">EVENT_ID #8890</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
