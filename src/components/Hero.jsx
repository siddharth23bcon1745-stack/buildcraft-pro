import React from 'react';
import { useApp } from '../context/AppContext';
import {
  HardHat,
  Calculator,
  ShieldCheck,
  Building,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

export default function Hero() {
  const { setActiveTab, switchRole } = useApp();

  return (
    <div className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-28">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold backdrop-blur-md shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>Next-Gen Enterprise Construction Platform</span>
              <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-[10px] font-bold text-amber-300">Phase 1 - 9 Live</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Architecting the Future of <span className="gradient-text">Smart Construction</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              An all-in-one digital ecosystem unifying <strong className="text-amber-400">Property Owners</strong>, <strong className="text-emerald-400">General Contractors</strong>, <strong className="text-sky-400">Site Engineers</strong>, and <strong className="text-purple-400">Platform Admins</strong> with automated cost estimation, escrow payments, real-time drone updates, and labour management.
            </p>

            {/* Feature Highlights Bullet Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Instant Dynamic Quotations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Milestone Bank Escrow</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Daily Labour Ledger & Wage Logs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Material Stock & Budget Variance</span>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('estimator')}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                Calculate Instant Project Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => switchRole('customer')}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-card hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Demo Customer Portal
              </button>
            </div>

            {/* Trust Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div>
                <p className="text-2xl font-extrabold text-white">380+</p>
                <p className="text-xs text-slate-400 font-medium">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-amber-400">₹500 Cr+</p>
                <p className="text-xs text-slate-400 font-medium">Escrow Value Managed</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-emerald-400">99.4%</p>
                <p className="text-xs text-slate-400 font-medium">On-Time Milestones</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-800 p-3 shadow-2xl animate-float">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80"
                  alt="Modern Construction Project"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Milestone Progress Badge on Image */}
                <div className="absolute top-4 left-4 glass-card px-4 py-2.5 rounded-2xl border border-slate-700/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    68%
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Villa Ananda</p>
                    <p className="text-[10px] text-emerald-400 font-medium">Framing Complete</p>
                  </div>
                </div>

                {/* Floating Site Supervisor Live Feed Card */}
                <div className="absolute bottom-4 right-4 left-4 glass-panel p-3.5 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                      alt="Ramesh Kumar Supervisor"
                      className="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-500/40"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Ramesh Kumar (Site Supervisor)</p>
                      <p className="text-[10px] text-slate-300">Concrete Slab Quality Sign-Off Verified</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    APPROVED
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
