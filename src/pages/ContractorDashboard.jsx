import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Briefcase,
  Building2,
  FileText,
  IndianRupee,
  Calendar,
  CheckSquare,
  ShieldCheck,
  TrendingUp,
  Plus,
  Send,
  Sliders,
  Award,
  AlertTriangle
} from 'lucide-react';

export default function ContractorDashboard() {
  const { currentUser, projects, quotations, submitContractorBid, updateMilestoneProgress } = useApp();
  const [activeTab, setActiveTab] = useState('tenders'); // 'tenders', 'projects', 'safety', 'earnings'

  // Modal for submitting bid
  const [biddingQuote, setBiddingQuote] = useState(null);
  const [proposedCost, setProposedCost] = useState('');
  const [timelineMonths, setTimelineMonths] = useState(8);
  const [warrantyYears, setWarrantyYears] = useState(10);
  const [remarks, setRemarks] = useState('');

  // Safety checklist state
  const [safetyChecklist, setSafetyChecklist] = useState([
    { id: 1, task: 'Scaffolding stability & safety netting inspect', status: true },
    { id: 2, task: 'Worker hardhat & harness PPE enforcement', status: true },
    { id: 3, task: 'Electrical temporary distribution box earthing', status: false },
    { id: 4, task: 'First aid site kit restocked', status: true }
  ]);

  const toggleSafety = (id) => {
    setSafetyChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: !item.status } : item))
    );
  };

  const handleOpenBidModal = (quote) => {
    setBiddingQuote(quote);
    setProposedCost(quote.estimatedTotal);
  };

  const handleSubmitBid = (e) => {
    e.preventDefault();
    if (!biddingQuote) return;
    submitContractorBid(biddingQuote.id, {
      proposedCost: Number(proposedCost),
      timelineMonths: Number(timelineMonths),
      warrantyYears: Number(warrantyYears),
      remarks: remarks || 'Full structural warranty & daily site camera feed included.'
    });
    setBiddingQuote(null);
    setRemarks('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Contractor Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'}
            alt={currentUser?.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-amber-500/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">{currentUser?.company || 'Patel Infra & Construction Projects Pvt Ltd'}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold border border-amber-500/20">
                Phase 5: Contractor Portal
              </span>
            </div>
            <p className="text-xs text-slate-400">
              RERA Builder License: <strong className="text-slate-200">{currentUser?.licenseNo || 'RERA-MH-2024-8849'}</strong> • Verified Rating: <strong className="text-amber-400">★ 4.9</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Platform Verified GC
          </span>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Active Construction Sites</span>
          <p className="text-2xl font-extrabold text-white">3 Sites</p>
          <span className="text-[10px] text-amber-400">24 Labourers deployed today</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Open Customer Tenders</span>
          <p className="text-2xl font-extrabold text-amber-400">{quotations.length} Available</p>
          <span className="text-[10px] text-slate-400">Submit bids to win contracts</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Current Escrow Billings</span>
          <p className="text-2xl font-extrabold text-emerald-400">
            ₹{projects.reduce((acc, curr) => acc + (curr.totalBudget - curr.amountPaid), 0).toLocaleString('en-IN')}
          </p>
          <span className="text-[10px] text-emerald-400">Milestone payments pending</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Safety Score</span>
          <p className="text-2xl font-extrabold text-sky-400">98 / 100</p>
          <span className="text-[10px] text-sky-300">NBC & BIS Compliant</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-800 gap-4 text-xs font-bold">
        {[
          { id: 'tenders', label: 'Customer Tenders Bidding Board', icon: FileText },
          { id: 'projects', label: 'Active Site Milestones & Gantt', icon: Building2 },
          { id: 'safety', label: 'Daily Safety & OSHA Checklist', icon: ShieldCheck },
          { id: 'earnings', label: 'Earnings & Cash Flow', icon: TrendingUp }
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 transition-colors border-b-2 ${
                active
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Customer Tenders Bidding Board */}
      {activeTab === 'tenders' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Available Customer Project Tenders</h3>
            <span className="text-xs text-slate-400">Showing all open requests for proposal</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotations.map((q) => (
              <div key={q.id} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-white">{q.projectTitle}</h4>
                    <p className="text-xs text-slate-400">Client: {q.clientName} • Type: {q.projectType}</p>
                  </div>
                  <span className="text-base font-extrabold text-amber-400">
                    Est: ₹{q.estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Built Area:</span>
                    <span className="font-bold text-white">{q.areaSqFt.toLocaleString()} sq.ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Grade Required:</span>
                    <span className="font-bold text-amber-300">{q.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Add-ons requested:</span>
                    <span className="font-semibold text-emerald-300">{q.requestedAddons?.join(', ') || 'None'}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenBidModal(q)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Proposal Bid
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Active Site Milestones & Progress Slider */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                  <p className="text-xs text-slate-400">Site Supervisor: {proj.siteSupervisor} • Budget: ₹{proj.totalBudget.toLocaleString('en-IN')}</p>
                </div>
                <span className="text-2xl font-extrabold text-emerald-400">{proj.overallProgress}%</span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Update Milestone Progress</h4>
                <div className="space-y-3">
                  {proj.milestones.map((m) => (
                    <div key={m.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white">{m.name}</span>
                        <p className="text-[10px] text-slate-400">Target Date: {m.date} • Cost: ₹{m.cost.toLocaleString('en-IN')}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          value={m.progress}
                          onChange={(e) => updateMilestoneProgress(proj.id, m.id, Number(e.target.value))}
                          className="w-32 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                        <span className="w-12 text-right text-xs font-extrabold text-amber-400">{m.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Daily Safety Checklist */}
      {activeTab === 'safety' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" /> Daily Site Safety Inspection Checklist
              </h3>
              <p className="text-xs text-slate-400">Mandatory daily safety protocol validation before shift start.</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
              NBC & BIS Code Compliant
            </span>
          </div>

          <div className="space-y-3">
            {safetyChecklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleSafety(item.id)}
                className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  item.status
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                    : 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => {}}
                    className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-xs font-semibold">{item.task}</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  {item.status ? 'VERIFIED PASSED' : 'ACTION REQUIRED'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bidding Modal */}
      {biddingQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Submit Proposal Bid</h3>
            <p className="text-xs text-slate-400">Tender: {biddingQuote.projectTitle}</p>

            <form onSubmit={handleSubmitBid} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Proposed Total Price (₹)</label>
                <input
                  type="number"
                  value={proposedCost}
                  onChange={(e) => setProposedCost(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Timeline (Months)</label>
                  <input
                    type="number"
                    value={timelineMonths}
                    onChange={(e) => setTimelineMonths(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Warranty (Years)</label>
                  <input
                    type="number"
                    value={warrantyYears}
                    onChange={(e) => setWarrantyYears(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Contractor Remarks & Features</label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Mention custom materials, warranty scope, camera feeds..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500 h-24"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setBiddingQuote(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Send Proposal to Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
