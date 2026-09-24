import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  HardHat,
  Calculator,
  User,
  ShieldCheck,
  Building2,
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Layers,
  Sparkles,
  Menu,
  X,
  Briefcase,
  Users
} from 'lucide-react';

export default function Navbar() {
  const {
    currentRole,
    switchRole,
    activeTab,
    setActiveTab,
    currentUser,
    setIsAuthModalOpen
  } = useApp();

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const roleLabels = {
    public: { name: 'Public Visitor', color: 'bg-slate-800 text-slate-300 border-slate-700' },
    customer: { name: 'Customer / Owner', color: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' },
    contractor: { name: 'General Contractor', color: 'bg-amber-950/80 text-amber-300 border-amber-500/40' },
    labour_manager: { name: 'Site Labour Manager', color: 'bg-sky-950/80 text-sky-300 border-sky-500/40' },
    admin: { name: 'Platform Admin', color: 'bg-purple-950/80 text-purple-300 border-purple-500/40' }
  };

  const navLinks = [
    { id: 'landing', label: 'Home', icon: Building2 },
    { id: 'estimator', label: 'Instant Estimator', icon: Calculator },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'portfolio', label: 'Projects Gallery', icon: Sparkles }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/30">
              <HardHat className="w-6 h-6 text-slate-950 fill-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">BuildCraft</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">PRO</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">Enterprise Construction Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Role Switcher & User Profile */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Interactive Role Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold border backdrop-blur-md transition-all shadow-md ${
                  roleLabels[currentRole].color
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                <span>Role: {roleLabels[currentRole].name}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isRoleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-panel rounded-2xl shadow-2xl border border-slate-800 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Switch Live Persona (Phase 2 Demo)
                  </div>
                  <div className="py-1 space-y-1">
                    <button
                      onClick={() => { switchRole('public'); setIsRoleDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                        currentRole === 'public' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-slate-400" /> Visitor / Public Website</span>
                    </button>
                    <button
                      onClick={() => { switchRole('customer'); setIsRoleDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                        currentRole === 'customer' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-emerald-400" /> Customer (Priya)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Phase 4</span>
                    </button>
                    <button
                      onClick={() => { switchRole('contractor'); setIsRoleDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                        currentRole === 'contractor' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className="flex items-center gap-2"><Briefcase className="w-3.5 h-3.5 text-amber-400" /> Contractor (Rajesh)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">Phase 5</span>
                    </button>
                    <button
                      onClick={() => { switchRole('labour_manager'); setIsRoleDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                        currentRole === 'labour_manager' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-sky-400" /> Labour Supervisor (Ramesh)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">Phase 7</span>
                    </button>
                    <button
                      onClick={() => { switchRole('admin'); setIsRoleDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                        currentRole === 'admin' ? 'bg-purple-500/20 text-purple-300 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Admin (Vikram)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">Phase 8</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Link to Current Dashboard if Logged in */}
            {currentRole !== 'public' ? (
              <button
                onClick={() => {
                  if (currentRole === 'customer') setActiveTab('customer-dashboard');
                  else if (currentRole === 'contractor') setActiveTab('contractor-dashboard');
                  else if (currentRole === 'labour_manager') setActiveTab('project-management');
                  else if (currentRole === 'admin') setActiveTab('admin-panel');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                Go to Portal
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                Sign In / Demo Login
              </button>
            )}

          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl p-4 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActiveTab(link.id); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  activeTab === link.id ? 'bg-amber-500/20 text-amber-300' : 'text-slate-300'
                }`}
              >
                <link.icon className="w-5 h-5 text-amber-400" />
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select Persona</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { switchRole('customer'); setIsMobileMenuOpen(false); }}
                className="px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium text-left"
              >
                Customer Portal
              </button>
              <button
                onClick={() => { switchRole('contractor'); setIsMobileMenuOpen(false); }}
                className="px-3 py-2 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-medium text-left"
              >
                Contractor Portal
              </button>
              <button
                onClick={() => { switchRole('labour_manager'); setIsMobileMenuOpen(false); }}
                className="px-3 py-2 rounded-lg bg-sky-950/60 border border-sky-500/40 text-sky-300 text-xs font-medium text-left"
              >
                Site Ops & Labour
              </button>
              <button
                onClick={() => { switchRole('admin'); setIsMobileMenuOpen(false); }}
                className="px-3 py-2 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-medium text-left"
              >
                Admin Panel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
