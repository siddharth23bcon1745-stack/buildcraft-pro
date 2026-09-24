import React from 'react';
import Hero from '../components/Hero';
import QuickEstimator from '../components/QuickEstimator';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Star, Award, MapPin, CheckCircle2, ArrowRight, Building, Users, Clock, DollarSign } from 'lucide-react';

export default function LandingPage() {
  const { contractors, switchRole, setActiveTab } = useApp();

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <Hero />

      {/* Quick Estimator Section */}
      <QuickEstimator />

      {/* Services Showcase */}
      <Services />

      {/* Portfolio Showcase */}
      <Portfolio />

      {/* Contractor Directory Showcase */}
      <section className="py-16 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Verified Partner Network
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Top Rated <span className="gradient-text">General Contractors</span>
            </h2>
            <p className="text-sm text-slate-400">
              Vetted for licenses, bonding, insurance coverage, and historical on-time delivery rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contractors.map((c) => (
              <div
                key={c.id}
                className="glass-card p-6 rounded-3xl border border-slate-800 space-y-5 hover:border-amber-500/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-amber-500/30"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      {c.name}
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold">{c.badge}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" /> {c.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 text-xs">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{c.rating}</span>
                    <span className="text-slate-500 font-normal">({c.reviewsCount} reviews)</span>
                  </div>
                  <span className="text-slate-300 font-semibold">{c.projectsCompleted} Projects Built</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Specializations:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.specialties.map((spec, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => switchRole('contractor')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  View Contractor Bidding Profile <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-amber-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-left z-10">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                Ready to Start Building?
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Launch Your Dream Construction Project Today
              </h2>
              <p className="text-sm text-slate-300">
                Generate instant quotations, review verified general contractor bids, and manage site progress in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 z-10 w-full md:w-auto">
              <button
                onClick={() => setActiveTab('estimator')}
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-xl shadow-amber-500/20 transition-all text-center"
              >
                Instant Estimator
              </button>
              <button
                onClick={() => switchRole('customer')}
                className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-all text-center"
              >
                Test Customer Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
