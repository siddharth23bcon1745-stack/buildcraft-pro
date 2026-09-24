import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, MapPin, Calendar, IndianRupee, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const { projects } = useApp();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential Villa', 'Commercial Office', 'Residential Duplex'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <section className="py-16 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Phase 1: Real-Time Built Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured <span className="gradient-text">Construction Portfolio</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Explore active and delivered construction projects tracked live through the BuildCraft Pro ecosystem.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  filter === cat
                    ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Cover Image & Progress Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-amber-400">
                    {proj.type}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {proj.location}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                      {proj.overallProgress}% Complete
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Milestone Progress</span>
                      <span className="font-bold text-amber-400">{proj.overallProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-1000"
                        style={{ width: `${proj.overallProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Key Metrics Pill Table */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block">Total Budget</span>
                      <span className="font-extrabold text-white">₹{proj.totalBudget.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block">Built Area</span>
                      <span className="font-extrabold text-white">{proj.areaSqFt.toLocaleString()} sq.ft</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer Contractor Info */}
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/40 flex items-center justify-between text-xs">
                <span className="text-slate-400 truncate">Contractor: <strong className="text-white">{proj.contractor}</strong></span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
