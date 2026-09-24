import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, User, Briefcase, Users, ShieldCheck, ArrowRight, HardHat, Check } from 'lucide-react';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, switchRole } = useApp();
  const [selectedRole, setSelectedRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleDemoLogin = (roleKey) => {
    switchRole(roleKey);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-panel border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Decorative Glow background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5" />
            Phase 2: Authentication & Role Engine
          </div>
          <h3 className="text-2xl font-extrabold text-white">Sign In to BuildCraft Pro</h3>
          <p className="text-sm text-slate-400">Select your account type or use 1-click instant demo access below.</p>
        </div>

        {/* 1-Click Instant Persona Switcher (For Testing & Review) */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">⚡ 1-Click Instant Demo Login</span>
            <span className="text-[10px] text-amber-400/80">No password required</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handleDemoLogin('customer')}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500 text-left transition-all group"
            >
              <div>
                <p className="text-xs font-bold text-white group-hover:text-emerald-300">Priya Sharma</p>
                <p className="text-[10px] text-slate-400">Customer / Owner</p>
              </div>
              <User className="w-4 h-4 text-emerald-400" />
            </button>

            <button
              onClick={() => handleDemoLogin('contractor')}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-amber-950/40 border border-amber-500/30 hover:border-amber-500 text-left transition-all group"
            >
              <div>
                <p className="text-xs font-bold text-white group-hover:text-amber-300">Rajesh Patel</p>
                <p className="text-[10px] text-slate-400">General Contractor</p>
              </div>
              <Briefcase className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={() => handleDemoLogin('labour_manager')}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-sky-950/40 border border-sky-500/30 hover:border-sky-500 text-left transition-all group"
            >
              <div>
                <p className="text-xs font-bold text-white group-hover:text-sky-300">Ramesh Kumar</p>
                <p className="text-[10px] text-slate-400">Site Supervisor</p>
              </div>
              <Users className="w-4 h-4 text-sky-400" />
            </button>

            <button
              onClick={() => handleDemoLogin('admin')}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-purple-950/40 border border-purple-500/30 hover:border-purple-500 text-left transition-all group"
            >
              <div>
                <p className="text-xs font-bold text-white group-hover:text-purple-300">Vikram Malhotra</p>
                <p className="text-[10px] text-slate-400">Platform Admin</p>
              </div>
              <ShieldCheck className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>

        {/* Standard Credentials Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleDemoLogin(selectedRole); }} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Work Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-sm font-extrabold shadow-lg shadow-amber-500/20 transition-all"
          >
            Authenticate & Proceed <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
