// Indian mock database for BuildCraft Pro Platform

export const MOCK_USERS = {
  customer: {
    id: 'usr_cust_101',
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    role: 'customer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    phone: '+91 98765 43210',
    activeProjectsCount: 2,
    totalSpent: '₹1,85,00,000'
  },
  contractor: {
    id: 'usr_cont_202',
    name: 'Rajesh Patel',
    company: 'Patel Infra & Construction Projects Pvt Ltd',
    email: 'rajesh@patelinfra.in',
    role: 'contractor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    phone: '+91 98230 12345',
    verified: true,
    rating: 4.9,
    licenseNo: 'RERA-MH-2024-8849',
    completedProjects: 38,
    activeBids: 4
  },
  labour_manager: {
    id: 'usr_sup_303',
    name: 'Ramesh Kumar',
    role: 'labour_manager',
    company: 'Apex Site Operations India',
    email: 'ramesh.k@siteops.in',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    assignedSite: 'Villa Ananda Luxury Estate, Whitefield',
    managedWorkersCount: 24
  },
  admin: {
    id: 'usr_adm_404',
    name: 'Vikram Malhotra',
    role: 'admin',
    email: 'vikram.m@buildcraft.in',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    accessLevel: 'Super Admin',
    pendingApprovalsCount: 5
  }
};

export const MOCK_PROJECTS = [
  {
    id: 'proj_001',
    title: 'Villa Ananda Modern Luxury Residence',
    type: 'Residential Villa',
    client: 'Priya Sharma',
    clientId: 'usr_cust_101',
    contractor: 'Patel Infra & Construction Projects Pvt Ltd',
    contractorId: 'usr_cont_202',
    siteSupervisor: 'Ramesh Kumar',
    location: 'Whitefield, Bengaluru, Karnataka',
    areaSqFt: 4800,
    totalBudget: 18500000,
    amountPaid: 11500000,
    startDate: '2026-02-15',
    estimatedCompletion: '2026-11-30',
    overallProgress: 68,
    grade: 'Luxury Finish',
    status: 'In Progress',
    description: 'Custom 2-story luxury contemporary villa featuring 100% Vastu compliance, Italian marble flooring, rooftop solar array, rainwater harvesting pit, and smart home automation.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    milestones: [
      { id: 'm1', name: 'BBMP Municipal Sanction & Architectural Approvals', progress: 100, status: 'Completed', date: '2026-02-28', cost: 750000 },
      { id: 'm2', name: 'Foundation, Earthwork & Anti-Termite Treatment', progress: 100, status: 'Completed', date: '2026-04-10', cost: 2850000 },
      { id: 'm3', name: 'RCC Framing & Concrete Slab (UltraTech M25)', progress: 100, status: 'Completed', date: '2026-06-05', cost: 5400000 },
      { id: 'm4', name: 'Red Clay Brick Masonry & Electrical Rough-in', progress: 85, status: 'In Progress', date: '2026-08-20', cost: 3600000 },
      { id: 'm5', name: 'CPVC Plumbing & VRV Air Conditioning Ducting', progress: 40, status: 'In Progress', date: '2026-09-30', cost: 2400000 },
      { id: 'm6', name: 'Italian Marble Flooring, Interior Fitouts & Handover', progress: 0, status: 'Pending', date: '2026-11-30', cost: 3500000 }
    ],
    sitePhotos: [
      { id: 'p1', caption: '2nd floor RCC slab casting completed with UltraTech RMC', date: '2026-09-02', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=600&auto=format&fit=crop&q=80', uploadedBy: 'Ramesh Kumar' },
      { id: 'p2', caption: 'Tata Tiscon Fe550D rebar cage inspection passed by structural engineer', date: '2026-08-24', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80', uploadedBy: 'Ramesh Kumar' },
      { id: 'p3', caption: 'Boundary wall plinth foundation trenching and casting', date: '2026-08-10', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80', uploadedBy: 'Rajesh Patel' }
    ]
  },
  {
    id: 'proj_002',
    title: 'Apex Cyber Heights Commercial IT Office',
    type: 'Commercial Office',
    client: 'Priya Sharma',
    clientId: 'usr_cust_101',
    contractor: 'BuildTech Commercial Solutions India',
    contractorId: 'usr_cont_505',
    siteSupervisor: 'Ramesh Kumar',
    location: 'Cyber City, Gurugram, Haryana',
    areaSqFt: 14500,
    totalBudget: 34500000,
    amountPaid: 24600000,
    startDate: '2026-01-10',
    estimatedCompletion: '2026-10-15',
    overallProgress: 84,
    grade: 'Executive Grade',
    status: 'In Progress',
    description: 'Commercial grade open-plan corporate headquarters conversion, structural glass atrium installation, central VRV chillers, and smart building energy automation.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    milestones: [
      { id: 'm101', name: 'Interior Demolition & Fire Safety NOC Clearance', progress: 100, status: 'Completed', date: '2026-02-15', cost: 4500000 },
      { id: 'm102', name: 'Seismic Grade Column Retrofitting & Heavy Steel', progress: 100, status: 'Completed', date: '2026-05-01', cost: 12000000 },
      { id: 'm103', name: 'Structural Glazed Atrium & Skylight Installation', progress: 90, status: 'In Progress', date: '2026-08-30', cost: 9000000 },
      { id: 'm104', name: 'Acoustic Ceiling, VRV HVAC & Smart IoT Systems', progress: 45, status: 'In Progress', date: '2026-10-15', cost: 9000000 }
    ],
    sitePhotos: [
      { id: 'p101', caption: 'Atrium structural steel frame erection verified by chief engineer', date: '2026-08-28', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80', uploadedBy: 'Ramesh Kumar' }
    ]
  },
  {
    id: 'proj_003',
    title: 'Godavari Bay Seafront Luxury Duplex',
    type: 'Residential Duplex',
    client: 'Rohit Verma',
    clientId: 'usr_cust_109',
    contractor: 'Patel Infra & Construction Projects Pvt Ltd',
    contractorId: 'usr_cont_202',
    siteSupervisor: 'Ramesh Kumar',
    location: 'Bandra West, Mumbai, Maharashtra',
    areaSqFt: 6200,
    totalBudget: 26700000,
    amountPaid: 4500000,
    startDate: '2026-07-01',
    estimatedCompletion: '2027-04-30',
    overallProgress: 25,
    grade: 'Premium Finish',
    status: 'In Progress',
    description: 'Bespoke sea-facing dual duplex apartments with hydraulic private elevator, stilt podium parking, and landscaped rooftop terrace.',
    coverImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80',
    milestones: [
      { id: 'm201', name: 'MCGM Sanction & Deep Soil Bearing Test', progress: 100, status: 'Completed', date: '2026-07-15', cost: 1200000 },
      { id: 'm202', name: 'Basement Piling & Marine Grade Concrete Raft', progress: 70, status: 'In Progress', date: '2026-09-25', cost: 5400000 },
      { id: 'm203', name: 'Ground Floor Stilt Slab & Podium Columns', progress: 0, status: 'Pending', date: '2026-11-15', cost: 6600000 }
    ],
    sitePhotos: []
  }
];

export const MOCK_QUOTATIONS = [
  {
    id: 'q_901',
    clientName: 'Priya Sharma',
    projectTitle: 'Modern Eco-Smart 4BHK Villa Build',
    projectType: 'Residential Villa',
    areaSqFt: 3500,
    grade: 'Premium Grade',
    estimatedTotal: 7875000,
    breakdown: {
      civilWork: 3543750,
      mepSystems: 1732500,
      finishingInteriors: 1811250,
      permitsOverheads: 787500
    },
    requestedAddons: ['Rooftop Solar PV (5kW)', 'Vastu Certified Architecture', 'Rainwater Harvesting Pit'],
    status: 'Pending Contractor Bids',
    dateSubmitted: '2026-09-01',
    bids: [
      {
        id: 'bid_1',
        contractorName: 'Patel Infra & Construction Projects Pvt Ltd',
        contractorRating: 4.9,
        proposedCost: 7650000,
        timelineMonths: 9,
        warrantyYears: 10,
        remarks: 'Includes Kajaria vitrified floor tiles, Tata Tiscon Fe550D rebar, and 10-year structural warranty with zero leak guarantee.'
      },
      {
        id: 'bid_2',
        contractorName: 'Apex Civil Infra Group India',
        contractorRating: 4.7,
        proposedCost: 7480000,
        timelineMonths: 10,
        warrantyYears: 5,
        remarks: 'Competitive quotation with direct UltraTech cement bulk tie-up and local kiln-fired brick pricing.'
      }
    ]
  },
  {
    id: 'q_902',
    clientName: 'TechPark Ventures India Pvt Ltd',
    projectTitle: 'IT Data Hub Expansion Wing',
    projectType: 'Commercial Building',
    areaSqFt: 18000,
    grade: 'Ultra Luxury Grade',
    estimatedTotal: 61200000,
    breakdown: {
      civilWork: 27540000,
      mepSystems: 13464000,
      finishingInteriors: 14076000,
      permitsOverheads: 6120000
    },
    requestedAddons: ['Industrial Diesel Backup Genset (250kVA)', 'Seismic Isolation Foundation'],
    status: 'Approved',
    dateSubmitted: '2026-08-15',
    bids: []
  }
];

export const MOCK_LABOUR_RECORDS = [
  { id: 'lab_1', workerName: 'Raju Prajapati', trade: 'Senior Mason (Mistri)', dailyWage: 950, status: 'Present', checkIn: '08:00 AM', hoursLogged: 8.5, site: 'Villa Ananda' },
  { id: 'lab_2', workerName: 'Sunil Sharma', trade: 'Master Electrician', dailyWage: 1100, status: 'Present', checkIn: '08:30 AM', hoursLogged: 8.0, site: 'Villa Ananda' },
  { id: 'lab_3', workerName: 'Mohammed Arif', trade: 'Plumbing Specialist', dailyWage: 1000, status: 'Present', checkIn: '08:15 AM', hoursLogged: 8.0, site: 'Apex Cyber Heights' },
  { id: 'lab_4', workerName: 'Manoj Yadav', trade: 'RCC Bar Bender & Steel Fixer', dailyWage: 850, status: 'On Leave', checkIn: '--', hoursLogged: 0.0, site: 'Villa Ananda' },
  { id: 'lab_5', workerName: 'Vikram Singh', trade: 'Heavy Crane & JCB Operator', dailyWage: 1400, status: 'Present', checkIn: '07:30 AM', hoursLogged: 9.0, site: 'Godavari Bay' },
  { id: 'lab_6', workerName: 'Santosh Das', trade: 'Site Beldar / Helper', dailyWage: 650, status: 'Present', checkIn: '08:00 AM', hoursLogged: 8.5, site: 'Villa Ananda' }
];

export const MOCK_MATERIAL_STOCK = [
  { id: 'mat_1', item: 'Tata Tiscon TMT Steel (16mm Fe550D)', category: 'Structural Steel', unit: 'Tons', currentStock: 42, minimumThreshold: 15, unitPrice: 68500, supplier: 'Tata Tiscon Authorized Dealer', lastRestock: '2026-08-28' },
  { id: 'mat_2', item: 'UltraTech Cement (53 Grade OPC)', category: 'Binders & Cement', unit: 'Bags', currentStock: 850, minimumThreshold: 200, unitPrice: 385, supplier: 'UltraTech Building Solutions Hub', lastRestock: '2026-09-03' },
  { id: 'mat_3', item: 'Red Clay Kiln Bricks (Class 1)', category: 'Masonry', unit: 'Units', currentStock: 14000, minimumThreshold: 5000, unitPrice: 11, supplier: 'Bharat Kiln Brick Works', lastRestock: '2026-08-20' },
  { id: 'mat_4', item: 'Kajaria Vitrified Floor Tiles (800x800mm)', category: 'Finishing & Flooring', unit: 'Boxes', currentStock: 65, minimumThreshold: 100, unitPrice: 850, supplier: 'Kajaria Ceramics Gallery', lastRestock: '2026-07-15', lowStock: true },
  { id: 'mat_5', item: 'Finolex Heavy Duty PVC Conduit Pipes (25mm)', category: 'MEP Electrical', unit: 'Meters', currentStock: 1200, minimumThreshold: 300, unitPrice: 85, supplier: 'Finolex Industries Dealer', lastRestock: '2026-08-30' }
];

export const MOCK_CONTRACTOR_DIRECTORY = [
  {
    id: 'c_1',
    name: 'Patel Infra & Construction Projects Pvt Ltd',
    specialties: ['Residential Villas', 'RCC Earthquake-Resistant Framing', 'Turnkey Luxury Homes'],
    rating: 4.9,
    reviewsCount: 42,
    projectsCompleted: 38,
    licenseNo: 'RERA-MH-2024-8849',
    city: 'Mumbai & Pune, Maharashtra',
    verified: true,
    badge: 'RERA Registered Platinum Builder',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'c_2',
    name: 'BuildTech Commercial Solutions India',
    specialties: ['Commercial Office Fitouts', 'Steel PEB Structures', 'IGBC Green Buildings'],
    rating: 4.8,
    reviewsCount: 29,
    projectsCompleted: 24,
    licenseNo: 'RERA-KA-2023-4192',
    city: 'Bengaluru, Karnataka',
    verified: true,
    badge: 'Grade-A Commercial Enterprise',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'c_3',
    name: 'Apex Civil & Heavy Infrastructure Ltd',
    specialties: ['Deep Piling & Excavation', 'Basement Raft Foundations', 'Heavy Civil Structures'],
    rating: 4.7,
    reviewsCount: 31,
    projectsCompleted: 56,
    licenseNo: 'RERA-DL-2023-7721',
    city: 'New Delhi & NCR',
    verified: true,
    badge: 'Heavy Infrastructure Specialist',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&auto=format&fit=crop&q=80'
  }
];

export const MOCK_SERVICES = [
  {
    id: 'srv_1',
    title: 'Custom Villa & Residential Construction',
    icon: 'Home',
    tagline: 'Turnkey architectural luxury homes from concept to Griha Pravesh.',
    features: ['Vastu Shastra & Architectural CAD Planning', 'Municipal Sanctions & RERA Approvals', 'Earthquake Resistant RCC Framed Structure', 'Fixed-Price Milestone Escrow Contracting'],
    avgPrice: '₹1,850 - ₹2,800 / sq.ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'srv_2',
    title: 'Commercial Infrastructure & IT Tech Parks',
    icon: 'Building2',
    tagline: 'High-rise corporate tech hubs, retail malls, and industrial PEB complexes.',
    features: ['Steel PEB & Concrete Frame Engineering', 'HVAC, Fire NOC & High-Rise MEP Integration', 'IGBC & LEED Certified Green Building Specs', 'Accelerated Precast & Modular Construction'],
    avgPrice: '₹2,400 - ₹4,200 / sq.ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'srv_3',
    title: 'Interior Design & Smart Renovations',
    icon: 'Paintbrush',
    tagline: 'Modern structural alterations, Italian marble, modular woodwork & IoT.',
    features: ['3D Photorealistic Renderings & Virtual Walkthroughs', 'Italian Marble, Teakwood & Modular Kitchens', 'KNX / Zigbee Smart Home & Security Automation', '45-Day Express Turnaround Guarantee'],
    avgPrice: '₹950 - ₹1,850 / sq.ft',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'srv_4',
    title: 'Site Supervision & Material Procurement',
    icon: 'HardHat',
    tagline: 'Dedicated site engineers, mistri/labour management & direct mill material supply.',
    features: ['CCTV Real-Time Drone Monitoring', 'Direct Mill Cement & Steel Supply', 'Daily Mistri & Labour Muster Roll', 'Concrete Cube Strength Testing & Safety Audits'],
    avgPrice: 'Custom Site Retainer',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80'
  }
];
