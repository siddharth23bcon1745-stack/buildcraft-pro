import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calculator, Check, ArrowRight, Sparkles, Building2, Home, Paintbrush, ShieldAlert, FileText } from 'lucide-react';

export default function QuickEstimator() {
  const { createQuotationRequest, switchRole, setActiveTab } = useApp();

  const [projectType, setProjectType] = useState('Residential Villa');
  const [areaSqFt, setAreaSqFt] = useState(3500);
  const [grade, setGrade] = useState('Premium Grade');
  const [selectedAddons, setSelectedAddons] = useState(['Solar Rooftop Grid (5kW)', 'Smart Home & Security Automation']);

  const gradeRates = {
    'Standard Grade': 1650,
    'Premium Grade': 2250,
    'Ultra Luxury Grade': 3400
  };

  const addonPrices = {
    'Solar Rooftop Grid (5kW)': 250000,
    'Smart Home & Security Automation': 180000,
    'Rainwater Harvesting & Filtration': 120000,
    'Landscaping & Terrace Garden': 350000
  };

  const basePricePerSqFt = gradeRates[grade] || 2250;
  const subtotalConstruction = areaSqFt * basePricePerSqFt;
  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + (addonPrices[curr] || 0), 0);
  const grandTotal = subtotalConstruction + addonsTotal;

  // Breakdown estimates
  const civilCost = Math.round(subtotalConstruction * 0.45);
  const mepCost = Math.round(subtotalConstruction * 0.22);
  const finishingCost = Math.round(subtotalConstruction * 0.23);
  const permitsCost = Math.round(subtotalConstruction * 0.10);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const handleGenerateQuote = () => {
    createQuotationRequest({
      projectTitle: `${projectType} Custom Build`,
      projectType,
      areaSqFt,
      grade,
      estimatedTotal: grandTotal,
      breakdown: {
        civilWork: civilCost,
        mepSystems: mepCost,
        finishingInteriors: finishingCost,
        permitsOverheads: permitsCost
      },
      requestedAddons: selectedAddons
    });
    switchRole('customer');
  };

  return (
    <section className="py-16 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Phase 6: Instant Bidding & Quotation Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Calculate Your <span className="gradient-text">Construction Estimate</span> in Seconds
          </h2>
          <p className="text-sm text-slate-400">
            Real-time material market pricing algorithm with custom grade pickers and instant itemized financial breakdowns.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">1. Select Property Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'Residential Villa', label: 'Villa', icon: Home },
                  { id: 'Commercial Building', label: 'Commercial', icon: Building2 },
                  { id: 'Apartment Complex', label: 'Apartment', icon: Building2 },
                  { id: 'Renovation', label: 'Fitout', icon: Paintbrush }
                ].map((type) => {
                  const Icon = type.icon;
                  const selected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        selected
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-lg shadow-amber-500/10 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-2 text-amber-400" />
                      <p className="text-xs font-semibold">{type.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Built-Up Area Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">2. Built-Up Area (Square Feet)</label>
                <span className="text-lg font-extrabold text-amber-400">{areaSqFt.toLocaleString()} sq.ft</span>
              </div>
              <input
                type="range"
                min="1000"
                max="20000"
                step="250"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1,000 sq.ft</span>
                <span>10,000 sq.ft</span>
                <span>20,000 sq.ft</span>
              </div>
            </div>

            {/* Step 3: Material & Finish Grade */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">3. Finish & Specification Grade</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Standard Grade', rate: '₹1,650/sq.ft', desc: 'Quality ceramic tiles, basic MEP & RCC frame' },
                  { name: 'Premium Grade', rate: '₹2,250/sq.ft', desc: 'Kajaria vitrified tiles, Jaquar bathware, smart DB' },
                  { name: 'Ultra Luxury Grade', rate: '₹3,400/sq.ft', desc: 'Italian marble, VRV AC ducting, elevation facade' }
                ].map((g) => (
                  <button
                    key={g.name}
                    onClick={() => setGrade(g.name)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      grade === g.name
                        ? 'bg-amber-500/20 border-amber-500 text-white ring-1 ring-amber-500'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white">{g.name}</span>
                      {grade === g.name && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <p className="text-xs font-extrabold text-amber-400 mb-1">{g.rate}</p>
                    <p className="text-[10px] text-slate-400 leading-tight">{g.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-On Customizations */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">4. Turnkey Add-On Modules</label>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(addonPrices).map(([addon, price]) => {
                  const active = selectedAddons.includes(addon);
                  return (
                    <button
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-all ${
                        active
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{addon}</span>
                      <span className="text-[10px] text-emerald-400 font-bold">+₹{price.toLocaleString('en-IN')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  Estimated Project Quote
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  Instant Algorithmic Estimate
                </span>
              </div>

              {/* Big Grand Total Display */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Estimated Budget</span>
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-sans tracking-tight">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </p>
                <p className="text-[11px] text-slate-400">
                  Equivalent to ~₹{Math.round(grandTotal / areaSqFt).toLocaleString('en-IN')} / sq.ft overall turnkey
                </p>
              </div>

              {/* Itemized Cost Breakdown Table */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-900/50">
                  <span className="text-slate-400">Civil & Structural Framework (45%)</span>
                  <span className="font-bold text-white">₹{civilCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-900/50">
                  <span className="text-slate-400">Electrical, Plumbing & HVAC Conduits (22%)</span>
                  <span className="font-bold text-white">₹{mepCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-900/50">
                  <span className="text-slate-400">Interior Fitout & Finishes (23%)</span>
                  <span className="font-bold text-white">₹{finishingCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-900/50">
                  <span className="text-slate-400">Municipal Sanctions & Soil Testing (10%)</span>
                  <span className="font-bold text-white">₹{permitsCost.toLocaleString('en-IN')}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                    <span>Selected Turnkey Add-ons</span>
                    <span className="font-bold">+₹{addonsTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Action CTA to Publish Quote Request */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleGenerateQuote}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all"
              >
                Publish Quote & Request Contractor Bids
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-slate-500">
                Submitting this quote will automatically save it to your Customer Dashboard and notify top verified General Contractors.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
