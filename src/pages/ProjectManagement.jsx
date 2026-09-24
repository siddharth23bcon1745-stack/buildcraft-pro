import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  Box,
  TrendingDown,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Clock,
  IndianRupee,
  Package,
  HardHat,
  Truck,
  FileSpreadsheet,
  CloudSun
} from 'lucide-react';

export default function ProjectManagement() {
  const {
    currentUser,
    labourRecords,
    materialStock,
    addLabourWorker,
    toggleWorkerAttendance,
    updateStockQuantity,
    addMaterialItem
  } = useApp();

  const [activeTab, setActiveTab] = useState('labour'); // 'labour', 'materials', 'budget', 'logbook'

  // New worker modal state
  const [isWorkerModalOpen, setIsWorkerModalOpen] = useState(false);
  const [workerName, setWorkerName] = useState('');
  const [trade, setTrade] = useState('Senior Mason (Mistri)');
  const [dailyWage, setDailyWage] = useState('950');

  // New material modal state
  const [isMatModalOpen, setIsMatModalOpen] = useState(false);
  const [matItem, setMatItem] = useState('');
  const [matCategory, setCategory] = useState('Structural Steel');
  const [matUnit, setUnit] = useState('Tons');
  const [matQty, setQty] = useState('40');
  const [unitPrice, setUnitPrice] = useState('68500');
  const [supplier, setSupplier] = useState('Tata Tiscon Authorized Dealer');

  const handleAddWorker = (e) => {
    e.preventDefault();
    addLabourWorker({
      workerName,
      trade,
      dailyWage: Number(dailyWage),
      site: 'Villa Ananda'
    });
    setIsWorkerModalOpen(false);
    setWorkerName('');
  };

  const handleAddMaterial = (e) => {
    e.preventDefault();
    addMaterialItem({
      item: matItem,
      category: matCategory,
      unit: matUnit,
      currentStock: Number(matQty),
      minimumThreshold: 10,
      unitPrice: Number(unitPrice),
      supplier
    });
    setIsMatModalOpen(false);
    setMatItem('');
  };

  const totalDailyWageExpense = labourRecords
    .filter((w) => w.status === 'Present')
    .reduce((acc, curr) => acc + curr.dailyWage, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'}
            alt={currentUser?.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-sky-500/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">{currentUser?.name || 'Ramesh Kumar'}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold border border-sky-500/20">
                Phase 7: Site Labour & Materials Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Site Supervisor • Assigned Site: <strong className="text-slate-200">Villa Ananda Luxury Estate</strong> • {labourRecords.length} Active Crew Members
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsWorkerModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Labourer
          </button>
          <button
            onClick={() => setIsMatModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
          >
            <Plus className="w-4 h-4" /> Log Material Delivery
          </button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Today's Active Crew</span>
          <p className="text-2xl font-extrabold text-white">
            {labourRecords.filter((w) => w.status === 'Present').length} / {labourRecords.length} Workers
          </p>
          <span className="text-[10px] text-emerald-400">92% Attendance rate</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Daily Labour Payroll</span>
          <p className="text-2xl font-extrabold text-sky-400">₹{totalDailyWageExpense.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-slate-400">Disbursed end of day</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Inventory Items Tracked</span>
          <p className="text-2xl font-extrabold text-amber-400">{materialStock.length} SKUs</p>
          <span className="text-[10px] text-amber-400">1 Item low stock alert</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">Material Budget Variance</span>
          <p className="text-2xl font-extrabold text-emerald-400">-3.4% Under Budget</p>
          <span className="text-[10px] text-emerald-300">Sourced at direct mill rates</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-800 gap-4 text-xs font-bold">
        {[
          { id: 'labour', label: 'Daily Labour Attendance Ledger', icon: Users },
          { id: 'materials', label: 'Material Inventory & Stock', icon: Box },
          { id: 'budget', label: 'Budget vs Actual Variance', icon: TrendingDown },
          { id: 'logbook', label: 'Site Weather & Daily Logbook', icon: CloudSun }
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 transition-colors border-b-2 ${
                active
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Daily Labour Attendance Ledger */}
      {activeTab === 'labour' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">Daily Site Worker Roster</h3>
              <p className="text-xs text-slate-400">Clock in/out times and daily wage calculations for on-site tradespeople.</p>
            </div>
            <span className="text-xs font-bold text-amber-400">Total Payroll: ₹{totalDailyWageExpense.toLocaleString('en-IN')}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/80 uppercase text-[10px] text-slate-400 tracking-wider">
                <tr>
                  <th className="p-3">Worker Name</th>
                  <th className="p-3">Trade / Skill</th>
                  <th className="p-3">Daily Wage</th>
                  <th className="p-3">Check-In</th>
                  <th className="p-3">Hours Logged</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {labourRecords.map((worker) => (
                  <tr key={worker.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-3 font-bold text-white">{worker.workerName}</td>
                    <td className="p-3">{worker.trade}</td>
                    <td className="p-3 font-semibold text-emerald-400">₹{worker.dailyWage.toLocaleString('en-IN')} / day</td>
                    <td className="p-3">{worker.checkIn}</td>
                    <td className="p-3">{worker.hoursLogged} hrs</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        worker.status === 'Present' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {worker.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => toggleWorkerAttendance(worker.id)}
                        className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-white transition-colors"
                      >
                        Toggle Attendance
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Material Inventory & Stock */}
      {activeTab === 'materials' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">Site Material Stock Inventory</h3>
              <p className="text-xs text-slate-400">Track raw material quantities, unit prices, and automatic low-stock notifications.</p>
            </div>
            <span className="text-xs font-bold text-amber-400">Direct Supplier Pricing</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materialStock.map((mat) => (
              <div
                key={mat.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 ${
                  mat.lowStock
                    ? 'bg-rose-950/20 border-rose-500/40 text-rose-100'
                    : 'bg-slate-900/80 border-slate-800 text-slate-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-white">{mat.item}</h4>
                    <p className="text-[10px] text-slate-400">Category: {mat.category} • Supplier: {mat.supplier}</p>
                  </div>
                  {mat.lowStock && (
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> LOW STOCK
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Current Stock Level</span>
                    <span className="text-lg font-extrabold text-white">{mat.currentStock} {mat.unit}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">Unit Price</span>
                    <span className="text-sm font-bold text-emerald-400">₹{mat.unitPrice.toLocaleString('en-IN')} / {mat.unit}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="text-[10px] text-slate-400">Last restock: {mat.lastRestock}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateStockQuantity(mat.id, -10)}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white"
                    >
                      -10
                    </button>
                    <button
                      onClick={() => updateStockQuantity(mat.id, 50)}
                      className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                    >
                      +50 Restock
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Budget vs Actual Variance Chart Representation */}
      {activeTab === 'budget' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="pb-4 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Project Spend Variance Breakdown</h3>
            <p className="text-xs text-slate-400">Comparing estimated quotation budget against actual site expenditure.</p>
          </div>

          <div className="space-y-4">
            {[
              { category: 'Civil & Concrete Framing', budget: 5400000, actual: 5160000, percentage: 95 },
              { category: 'Electrical & Plumbing Concealing', budget: 3600000, actual: 3450000, percentage: 96 },
              { category: 'Interior Finishings & Vitrified Tiles', budget: 3600000, actual: 3720000, percentage: 103 },
              { category: 'Municipal Sanctions & Soil Testing', budget: 750000, actual: 705000, percentage: 94 }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">{item.category}</span>
                  <span className="text-slate-400">
                    Budget: <strong className="text-white">₹{item.budget.toLocaleString('en-IN')}</strong> | Actual: <strong className="text-emerald-400">₹{item.actual.toLocaleString('en-IN')}</strong>
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden flex">
                  <div
                    className={`h-full ${item.actual > item.budget ? 'bg-amber-500' : 'bg-emerald-400'} rounded-full`}
                    style={{ width: `${Math.min(100, item.percentage)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Site Weather & Daily Logbook */}
      {activeTab === 'logbook' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">Supervisor Daily Site Logbook</h3>
              <p className="text-xs text-slate-400">Site weather conditions, machinery status, and site engineer observations.</p>
            </div>
            <CloudSun className="w-8 h-8 text-amber-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400">Weather & Temperature</span>
              <p className="text-slate-300">Clear Skies, 28°C. Wind 6 km/h. Ideal concrete curing weather conditions.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="font-bold text-emerald-400">Heavy Equipment On Site</span>
              <p className="text-slate-300">1x Tower Crane (Operational), 2x Transit RMC Mixers (Dispatched 08:30 AM from UltraTech plant).</p>
            </div>
          </div>
        </div>
      )}

      {/* Add Worker Modal */}
      {isWorkerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-panel border border-slate-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Add Worker to Site Roster</h3>
            <form onSubmit={handleAddWorker} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300">Worker Full Name</label>
                <input
                  type="text"
                  value={workerName}
                  onChange={(e) => setWorkerName(e.target.value)}
                  placeholder="e.g. Raju Prajapati"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-slate-300">Trade / Skill Category</label>
                <select
                  value={trade}
                  onChange={(e) => setTrade(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                >
                  <option value="Senior Mason (Mistri)">Senior Mason (Mistri)</option>
                  <option value="Master Electrician">Master Electrician</option>
                  <option value="Plumbing Specialist">Plumbing Specialist</option>
                  <option value="RCC Bar Bender & Steel Fixer">RCC Bar Bender & Steel Fixer</option>
                  <option value="Site Beldar / Helper">Site Beldar / Helper</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-300">Daily Wage (₹/day)</label>
                <input
                  type="number"
                  value={dailyWage}
                  onChange={(e) => setDailyWage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsWorkerModalOpen(false)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs"
                >
                  Save Worker
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Material Modal */}
      {isMatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-panel border border-slate-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Log Material Stock Delivery</h3>
            <form onSubmit={handleAddMaterial} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300">Item Name</label>
                <input
                  type="text"
                  value={matItem}
                  onChange={(e) => setMatItem(e.target.value)}
                  placeholder="e.g. Ready-Mix Concrete 40MPa"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-300">Quantity</label>
                  <input
                    type="number"
                    value={matQty}
                    onChange={(e) => setQty(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300">Unit Price (₹)</label>
                  <input
                    type="number"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsMatModalOpen(false)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Add Inventory Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
