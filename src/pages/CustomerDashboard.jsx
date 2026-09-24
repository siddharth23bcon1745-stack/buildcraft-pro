import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Building,
  CheckCircle2,
  Clock,
  IndianRupee,
  Camera,
  FileText,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Plus
} from 'lucide-react';

export default function CustomerDashboard() {
  const { currentUser, projects, quotations, acceptBid, setActiveTab } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('projects'); // 'projects', 'bids', 'photos', 'payments'

  const myProjects = projects.filter((p) => p.clientId === currentUser?.id || true);
  const myQuotes = quotations;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
            alt={currentUser?.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">{currentUser?.name || 'Priya Sharma'}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                Phase 4: Customer Portal
              </span>
            </div>
            <p className="text-xs text-slate-400">Property Owner & Client Account • {myProjects.length} Active Projects</p>
          </div>
        </div>

        {/* Quick Action CTA */}
        <button
          onClick={() => setActiveTab('estimator')}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" /> Request New Quote
        </button>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Active Projects</span>
          <p className="text-2xl font-extrabold text-white">{myProjects.length}</p>
          <span className="text-[10px] text-emerald-400">On-track for Q4 completion</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Total Project Value</span>
          <p className="text-2xl font-extrabold text-amber-400">
            ₹{myProjects.reduce((acc, curr) => acc + curr.totalBudget, 0).toLocaleString('en-IN')}
          </p>
          <span className="text-[10px] text-slate-400">Escrow backed protection</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Paid to Date</span>
          <p className="text-2xl font-extrabold text-emerald-400">
            ₹{myProjects.reduce((acc, curr) => acc + curr.amountPaid, 0).toLocaleString('en-IN')}
          </p>
          <span className="text-[10px] text-emerald-400">Verified milestone releases</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Pending Bids Review</span>
          <p className="text-2xl font-extrabold text-purple-400">2 Bids</p>
          <span className="text-[10px] text-purple-300">New proposal received today</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-800 gap-4 text-xs font-bold">
        {[
          { id: 'projects', label: 'My Projects & Milestones', icon: Building },
          { id: 'bids', label: 'Quotation Requests & Bids', icon: FileText },
          { id: 'photos', label: 'Live Site Photo Updates', icon: Camera },
          { id: 'payments', label: 'Financial Escrow & Invoices', icon: IndianRupee }
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 pb-3 transition-colors border-b-2 ${
                active
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: My Projects & Milestones */}
      {activeSubTab === 'projects' && (
        <div className="space-y-6">
          {myProjects.map((project) => (
            <div key={project.id} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
              
              {/* Project Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Location: {project.location} • Contractor: <strong className="text-slate-200">{project.contractor}</strong>
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Overall Completion</span>
                  <span className="text-2xl font-extrabold text-emerald-400">{project.overallProgress}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-500 transition-all duration-700"
                  style={{ width: `${project.overallProgress}%` }}
                />
              </div>

              {/* Milestones Breakdown Cards */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Milestone Payments & Engineering Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.milestones.map((m) => (
                    <div
                      key={m.id}
                      className={`p-4 rounded-2xl border flex items-center justify-between text-xs ${
                        m.status === 'Completed'
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                          : m.status === 'In Progress'
                          ? 'bg-amber-950/20 border-amber-500/30 text-amber-300'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-bold">
                          {m.status === 'Completed' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4 text-amber-400" />}
                          <span>{m.name}</span>
                        </div>
                        <p className="text-[10px] text-slate-400">Target Date: {m.date} • Cost: ₹{m.cost.toLocaleString('en-IN')}</p>
                      </div>

                      <div className="text-right">
                        <span className="font-extrabold text-sm">{m.progress}%</span>
                        <p className="text-[10px] block font-semibold">{m.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Quotation Requests & Contractor Bids */}
      {activeSubTab === 'bids' && (
        <div className="space-y-6">
          {myQuotes.map((quote) => (
            <div key={quote.id} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white">{quote.projectTitle}</h3>
                  <p className="text-xs text-slate-400">Type: {quote.projectType} • Area: {quote.areaSqFt.toLocaleString()} sq.ft • Grade: {quote.grade}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20">
                  {quote.status}
                </span>
              </div>

              {/* Bids List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Received Contractor Proposal Bids ({quote.bids.length})</h4>
                
                {quote.bids.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No contractor bids submitted yet. Our algorithm has dispatched your tender to 5 GCs.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quote.bids.map((bid) => (
                      <div key={bid.id} className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="text-sm font-bold text-white">{bid.contractorName}</h5>
                            <p className="text-[11px] text-amber-400 font-semibold">★ {bid.contractorRating} Verified GC</p>
                          </div>
                          <span className="text-lg font-extrabold text-emerald-400">₹{bid.proposedCost.toLocaleString('en-IN')}</span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                          "{bid.remarks}"
                        </p>

                        <div className="flex justify-between items-center text-[11px] text-slate-400">
                          <span>Timeline: {bid.timelineMonths} months</span>
                          <span>Warranty: {bid.warrantyYears} Years Structure</span>
                        </div>

                        <button
                          onClick={() => acceptBid(quote.id, bid.id)}
                          className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" /> Accept Bid & Award Contract
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Live Site Photo Updates Feed */}
      {activeSubTab === 'photos' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-400" /> Live Daily Site Photo Logbook
            </h3>
            <p className="text-xs text-slate-400">Site Engineers upload photos daily upon completing concrete pours, steel reinforcement, and inspections.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {myProjects.flatMap((p) => p.sitePhotos).map((photo) => (
                <div key={photo.id} className="glass-card rounded-2xl overflow-hidden border border-slate-800 space-y-3 p-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-bold text-amber-400">
                      {photo.date}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white">{photo.caption}</p>
                  <span className="text-[10px] text-slate-400 block">Uploaded by: {photo.uploadedBy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Financial Escrow & Invoices */}
      {activeSubTab === 'payments' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">Escrow Payment Protection</h3>
              <p className="text-xs text-slate-400">Funds are held safely in bank escrow and only disbursed when site milestones are verified.</p>
            </div>
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 flex justify-between items-center text-xs">
              <div>
                <p className="font-bold text-emerald-300">Milestone 3 Disbursement: RCC Concrete Framing Slab (M25)</p>
                <p className="text-[10px] text-slate-400">Approved on June 05, 2026 • Verified by Municipal Structural Engineer</p>
              </div>
              <span className="text-base font-extrabold text-emerald-400">₹54,00,000 RELEASED</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex justify-between items-center text-xs">
              <div>
                <p className="font-bold text-amber-300">Milestone 4 Pending: Red Clay Brick Masonry & Electrical Rough-in (85%)</p>
                <p className="text-[10px] text-slate-400">Expected release: Sept 30, 2026</p>
              </div>
              <span className="text-base font-extrabold text-amber-400">₹36,00,000 IN ESCROW</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
