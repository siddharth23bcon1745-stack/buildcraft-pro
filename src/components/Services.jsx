import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, Home, Building2, Paintbrush, HardHat, CheckCircle2, ArrowRight, X } from 'lucide-react';

export default function Services() {
  const { services, setActiveTab } = useApp();
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    Home: Home,
    Building2: Building2,
    Paintbrush: Paintbrush,
    HardHat: HardHat
  };

  return (
    <section className="py-16 bg-slate-950/60 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Phase 1: Construction Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            End-to-End <span className="gradient-text">Construction Solutions</span>
          </h2>
          <p className="text-sm text-slate-400">
            From structural engineering and city permits to turnkey interior fitouts and daily site supervision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || HardHat;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group glass-card p-6 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="space-y-2 pt-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-amber-400">{service.avgPrice}</span>
                  <span className="text-xs font-bold text-slate-300 group-hover:text-amber-400 flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl glass-panel border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                {React.createElement(iconMap[selectedService.icon] || HardHat, { className: 'w-7 h-7' })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                <p className="text-xs text-amber-400 font-semibold">{selectedService.avgPrice}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{selectedService.tagline}</p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">What's Included in Scope:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((f, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                onClick={() => { setSelectedService(null); setActiveTab('estimator'); }}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all"
              >
                Estimate Cost for This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
