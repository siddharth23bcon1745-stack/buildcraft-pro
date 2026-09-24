import React from 'react';
import { useApp } from '../context/AppContext';
import { HardHat, ShieldCheck, Award, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const { setActiveTab, switchRole } = useApp();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl glass-card border border-slate-800 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Bank Escrow Protection</h4>
              <p className="text-xs text-slate-400">Funds released only upon milestone verification and customer sign-off.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Verified GC Network</h4>
              <p className="text-xs text-slate-400">All general contractors undergo background, license & bond validation.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Live Site Drone Feed</h4>
              <p className="text-xs text-slate-400">Daily visual progress reporting & material log auditing.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <HardHat className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">BuildCraft <span className="text-amber-400">PRO</span></span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The next-generation end-to-end digital construction platform connecting property owners, general contractors, site supervisors, and administrators.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Platform Status: <strong className="text-emerald-400">All Systems Operational</strong></span>
            </div>
          </div>

          {/* Column 2: Platform Modules (Phase 1 - 9) */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Platform Modules</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('estimator')} className="hover:text-amber-400 transition-colors">Phase 1: Cost Estimator</button></li>
              <li><button onClick={() => switchRole('customer')} className="hover:text-amber-400 transition-colors">Phase 4: Customer Dashboard</button></li>
              <li><button onClick={() => switchRole('contractor')} className="hover:text-amber-400 transition-colors">Phase 5: Contractor Portal</button></li>
              <li><button onClick={() => setActiveTab('estimator')} className="hover:text-amber-400 transition-colors">Phase 6: Instant Bidding</button></li>
              <li><button onClick={() => switchRole('labour_manager')} className="hover:text-amber-400 transition-colors">Phase 7: Labour & Materials</button></li>
              <li><button onClick={() => switchRole('admin')} className="hover:text-amber-400 transition-colors">Phase 8: Admin Control Panel</button></li>
            </ul>
          </div>

          {/* Column 3: Construction Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-amber-400 transition-colors">Turnkey Residential Villas</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-amber-400 transition-colors">Commercial Office Retrofits</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-amber-400 transition-colors">Interior & Smart Home Fitout</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-amber-400 transition-colors">Heavy Civil Foundation & Piling</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-amber-400 transition-colors">Structural Steel Fabrication</button></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Stay Updated</h4>
            <p className="text-xs text-slate-400">Receive weekly construction material market price updates & project trends.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter work email..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all"
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 BuildCraft Pro Inc. All rights reserved. Enterprise Construction Engine v2.4.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
            <a href="#security" className="hover:text-slate-400">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
