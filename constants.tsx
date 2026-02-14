
import { Project, CapabilityGroup, Experience, ResearchItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'P-SW-13',
    title: 'RETRORACER ARCADE ENGINE',
    category: 'Software Systems',
    problem: 'High latency in web-based graphics pipelines causing non-deterministic frame intervals and input lag during intensive rendering cycles.',
    architecture: 'Modular interactive rendering architecture leveraging an event-driven input architecture, frame update loop, and performance-optimized state management.',
    stack: ['TypeScript', 'Canvas API', 'EventBus', 'State Machines'],
    decisions: 'Implemented a double-buffered frame loop for jitter-free performance and utilized bitwise operations for pixel-level collision detection optimization.',
    githubUrl: 'https://github.com/aadityakamble18/RetroRacer',
    results: [
      { metric: 'Frame Stability', value: '60FPS' },
      { metric: 'Input Latency', value: '<5ms' },
      { metric: 'CPU Overhead', value: '-40%' },
      { metric: 'Logic Accuracy', value: '100%' },
      { metric: 'Asset Load', value: '<200ms' }
    ]
  },
  {
    id: 'P-FS-14',
    title: 'STREAMBOX MEDIA PLATFORM',
    category: 'Full-Stack Web System',
    problem: 'Sub-optimal loading sequences and layout instabilities in content-heavy media streaming applications affecting Core Web Vitals and user retention.',
    architecture: 'Scalable UI system featuring component-based lazy loading optimization, dynamic routing partitions, and a performance-tuned responsive grid layout.',
    stack: ['React', 'Node.js', 'CSS Grid', 'Intersection Observer'],
    decisions: 'Adopted a skeleton-loading strategy combined with memoized component structures to minimize Cumulative Layout Shift (CLS) and improve First Contentful Paint (FCP).',
    githubUrl: 'https://github.com/aadityakamble18/StreamBox',
    results: [
      { metric: 'CLS Delta', value: '-92%' },
      { metric: 'FCP Score', value: '0.8s' },
      { metric: 'TTI Reduction', value: '30%' },
      { metric: 'Reuse Ratio', value: '90%' },
      { metric: 'Bundle Size', value: '-15%' }
    ]
  },
  {
    id: 'P-EV-01',
    title: 'DUAL-MOTOR ELECTRIC GO-KART PLATFORM',
    category: 'EV Systems',
    problem: 'Asynchronous torque distribution and regenerative braking instability in a dual 36V BLDC hub-motor configuration leading to energy inefficiency.',
    architecture: 'Closed-loop Arduino-based traction control system with real-time sensor fusion from INA226 current monitors and DS18B20 thermal probes.',
    stack: ['Arduino', 'C++', 'MATLAB/Simulink', 'CAN Bus', 'VRLA BMS'],
    decisions: 'Implemented a custom slip-ratio estimation algorithm to dynamically modulate PWM duty cycles, preventing energy wastage during low-traction launch phases.',
    results: [
      { metric: 'Efficiency Improvement', value: '+22.4%' },
      { metric: 'Latency Reduction', value: '45ms' },
      { metric: 'Thermal Stability', value: '+15.2%' },
      { metric: 'Slip Reduction', value: '38%' },
      { metric: 'Safety Factor', value: '2.1' }
    ]
  },
  {
    id: 'P-AG-02',
    title: 'FARM SCAFFOLDING VEHICLE (FSV)',
    category: 'Embedded & Hardware',
    problem: 'Structural instability and excessive frame mass in height-adjustable mobile platforms navigating uneven terrain under high payloads.',
    architecture: 'Aluminum 6061-T6 space frame with a dual-stage scissor lift mechanism and chain-gear rear drive reduction for high torque output.',
    stack: ['SOLIDWORKS', 'ANSYS FEA', 'Aluminum Metallurgy', 'Gear Kinematics'],
    decisions: 'Conducted topology optimization on the main chassis rails, reducing weight while maintaining a 2.5 Safety Factor for operation at maximum elevation.',
    results: [
      { metric: 'Weight Reduction', value: '12.4kg' },
      { metric: 'Static Load Capacity', value: '250kg' },
      { metric: 'Stability Index', value: '0.94' },
      { metric: 'Safety Factor', value: '2.5' },
      { metric: 'Assembly Time', value: '-20%' }
    ]
  },
  {
    id: 'P-ML-03',
    title: 'PHYSICS-INFORMED NEURAL NETWORKS (PINN) FOR HEAT TRANSFER',
    category: 'Simulation & Energy',
    problem: 'High computational latency in traditional CFD solvers for real-time thermal property estimation in complex composite materials.',
    architecture: 'DeepXDE-based neural network architecture embedding 2D heat conduction PDEs into the loss function for physics-constrained learning.',
    stack: ['Python', 'TensorFlow', 'DeepXDE', 'NumPy', 'Physics-ML'],
    decisions: 'Integrated a physics-constrained loss function to reduce training data dependency by 60% compared to purely data-driven models.',
    results: [
      { metric: 'Accuracy Gain', value: '98.5%' },
      { metric: 'Computation Speedup', value: '12x' },
      { metric: 'Data Dependency', value: '-60%' },
      { metric: 'MAE (Mean Abs Error)', value: '<0.012' },
      { metric: 'Model Convergence', value: '2x Faster' }
    ]
  },
  {
    id: 'P-CFD-04',
    title: 'DUAL-FUEL DIESEL ENGINE COMBUNDION SIMULATION',
    category: 'Simulation & Energy',
    problem: 'Inconsistent heat release rates and excessive NOx formation in retrofitted CNG-Diesel dual-fuel compression ignition engines.',
    architecture: '3D CFD simulation using ANSYS Forte with GRI-Mech 3.0 chemical kinetics for high-fidelity combustion modeling.',
    stack: ['ANSYS Forte', 'Chemkin', 'CFD', 'Internal Combustion Theory'],
    decisions: 'Optimized pilot injection timing to achieve a more homogeneous pre-mixture, smoothing the pressure curve and reducing peak combustion noise.',
    results: [
      { metric: 'NOx Reduction', value: '18.2%' },
      { metric: 'Thermal Efficiency', value: '+3.4%' },
      { metric: 'Peak Pressure Gain', value: '+5.1%' },
      { metric: 'Soot Formation', value: '-12%' },
      { metric: 'Noise Reduction', value: '8.4 dB' }
    ]
  },
  {
    id: 'P-CRY-05',
    title: 'LIQUID HYDROGEN CRYOGENIC TANK ANALYSIS',
    category: 'Simulation & Energy',
    problem: 'Hydrogen embrittlement and high boil-off rates in Type IV composite pressure vessels for long-haul aerospace LH2 storage.',
    architecture: 'Multi-layer insulation (MLI) structural model evaluating thermal stress concentrations across carbon-fiber/PEEK thermoplastic interfaces.',
    stack: ['ANSYS Static Structural', 'Thermal Analysis', 'Materials Science', 'Cryogenics'],
    decisions: 'Pivoted to a PEEK-based thermoplastic matrix to improve low-temperature fracture toughness and reduce micro-cracking under thermal cycling.',
    results: [
      { metric: 'Weight Reduction', value: '14.5kg' },
      { metric: 'Boil-off Rate', value: '-92%' },
      { metric: 'Safety Factor', value: '2.25' },
      { metric: 'Stress Mitigation', value: '15%' },
      { metric: 'Storage Density', value: '+4.8%' }
    ]
  },
  {
    id: 'P-ROC-06',
    title: 'HIGH-POWER MODEL ROCKETRY LAUNCHPAD SYSTEM',
    category: 'Embedded & Hardware',
    problem: 'Dynamic thrust-induced vibration and structural deflection in 3.5m launch structures causing flight path deviation in L-Class motors.',
    architecture: 'Truss-based steel structure with adjustable rail guides, validated through dynamic FEA for ground-coupled vibration damping.',
    stack: ['AutoCAD', 'Structural FEA', 'Steel Fabrication', 'Dynamic Load Modeling'],
    decisions: 'Implemented a tripod-stabilized base with ground-anchor interfaces to ensure a first-mode frequency 5x higher than motor vibration frequencies.',
    results: [
      { metric: 'Launch Stability', value: '+42%' },
      { metric: 'Max Thrust Capacity', value: '18kN' },
      { metric: 'Deflection (Max)', value: '<1.8mm' },
      { metric: 'Vibration Damping', value: '+28%' },
      { metric: 'Setup Latency', value: '-15ms' }
    ]
  },
  {
    id: 'P-SEC-07',
    title: 'BIOMETRIC-LOCKED SMART SUITCASE SYSTEM',
    category: 'Embedded & Hardware',
    problem: 'Vulnerability of mechanical travel locks to physical tampering and high power consumption in always-on biometric modules.',
    architecture: 'Embedded C++ firmware on Arduino Pro Mini managing optical fingerprint authentication and high-torque solenoid actuators.',
    stack: ['Arduino', 'C++', 'Embedded Systems', 'Biometric API', 'Security Protocol'],
    decisions: 'Designed a rolling-code encrypted logs system and an ultra-low-power sleep state, extending operational battery life to over 6 months.',
    results: [
      { metric: 'Authentication Latency', value: '480ms' },
      { metric: 'Security Factor', value: 'ASIL-B' },
      { metric: 'Energy Efficiency', value: '+32%' },
      { metric: 'Tamper Detection', value: '99.2%' },
      { metric: 'Weight Added', value: '0.42kg' }
    ]
  },
  {
    id: 'P-NAV-08',
    title: 'GLOBAL FLIGHT ROUTE NAVIGATION OPTIMIZATION',
    category: 'Data & Algorithms',
    problem: 'Computational inefficiency in multi-stop global flight pathing under dynamic fuel-burn and wind-speed constraints.',
    architecture: 'Comparative graph-theory implementation analyzing Dijkstra, Bellman-Ford, and Floyd-Warshall across sparse connectivity matrices.',
    stack: ['Python', 'Graph Theory', 'Algorithms', 'Complexity Analysis'],
    decisions: 'Engineered a modified A* search heuristic utilizing aircraft-specific fuel-burn coefficients, outperforming standard Dijkstra by 28%.',
    results: [
      { metric: 'Route Efficiency', value: '+9.4%' },
      { metric: 'Search Latency', value: '14ms' },
      { metric: 'Computational Saving', value: '35%' },
      { metric: 'Big-O Optimization', value: 'Logarithmic' },
      { metric: 'Accuracy Gain', value: '99.8%' }
    ]
  },
  {
    id: 'P-OPT-09',
    title: 'MARKETING CAMPAIGN BUDGET OPTIMIZATION',
    category: 'Data & Algorithms',
    problem: 'Sub-optimal budget allocation across multi-channel campaigns leading to 18% loss in potential conversion ROI.',
    architecture: 'Integer Linear Programming (ILP) model formulated with Simplex methods to maximize lead conversion subject to saturation constraints.',
    stack: ['Python', 'SciPy Optimize', 'Linear Programming', 'SQL'],
    decisions: 'Utilized regression-based coefficients to weigh channel performance, allowing the model to pivot spend dynamically based on real-time CPA.',
    results: [
      { metric: 'ROI Increase', value: '18.5%' },
      { metric: 'CPA Reduction', value: '12.4%' },
      { metric: 'Optimization Latency', value: '<800ms' },
      { metric: 'Budget Utilization', value: '99.9%' },
      { metric: 'Accuracy Gain', value: '94%' }
    ]
  },
  {
    id: 'P-DSC-10',
    title: 'INSTAGRAM EXPLORE DISCOVERABILITY MODEL',
    category: 'Data & Algorithms',
    problem: 'Lack of predictive analytics for content discoverability metrics leading to inefficient engagement strategies for creator profiles.',
    architecture: 'RandomForest Regressor ensemble model integrated with TextBlob sentiment analysis for reach prediction based on metadata.',
    stack: ['Python', 'Scikit-learn', 'TextBlob', 'Pandas', 'Sentiment Analysis'],
    decisions: 'Engineered features based on the "velocity of engagement" (first 10 minutes) which was identified as the 85% predictor of overall reach.',
    results: [
      { metric: 'Reach Prediction Acc', value: '92.4%' },
      { metric: 'Engagement Gain', value: '+24%' },
      { metric: 'Sentiment Correlation', value: '0.74' },
      { metric: 'Processing Latency', value: '12ms' },
      { metric: 'Accuracy Gain', value: '15%' }
    ]
  },
  {
    id: 'P-UX-11',
    title: 'TALENDY GLOBAL WEBSITE ARCHITECTURE REDESIGN',
    category: 'Product & UX',
    problem: 'Inconsistent information architecture and 22% drop-off rates in the conversion funnel during Talendy global expansion.',
    architecture: 'Data-driven UX overhaul focusing on cognitive load reduction and hierarchical storytelling for high-fidelity interactive prototyping.',
    stack: ['Figma', 'UX Research', 'Information Architecture', 'Hotjar Analysis'],
    decisions: 'Simplified the primary navigation from 7 tiers to 4 based on heatmap evidence, reducing average "Time-to-Value" for new users.',
    results: [
      { metric: 'Conversion Rate', value: '+28%' },
      { metric: 'Bounce Rate', value: '-15%' },
      { metric: 'User Satisfaction', value: '85%' },
      { metric: 'Latency Reduction', value: '120ms' },
      { metric: 'Safety Factor', value: 'UX-Audit' }
    ]
  },
  {
    id: 'P-LDR-12',
    title: 'BOLTHEADS ENGINEERING LEADERSHIP & COORDINATION',
    category: 'Leadership',
    problem: 'Coordinating multi-vehicle development cycles and cross-functional review processes within a high-stakes engineering framework.',
    architecture: 'Systems-level oversight of integrated EV platforms, implementing rigorous CAD/FEA review gates and ignition-cycle workshop methodologies.',
    stack: ['Engineering Leadership', 'CAD Review', 'Project Mgmt', 'EV Integration'],
    decisions: 'Spearheaded the "Ignition Camp" methodology, reducing vehicle assembly time by 50% through improved pre-production verification.',
    results: [
      { metric: 'Team Efficiency', value: '+40%' },
      { metric: 'Assembly Lead Time', value: '-50%' },
      { metric: 'Technical Debt', value: '-30%' },
      { metric: 'Accuracy Gain', value: '25%' },
      { metric: 'Safety Factor', value: 'Audit-Lead' }
    ]
  }
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    category: 'MATERIALS & MECHANICAL',
    items: ['Metallurgy (AL/Steel)', 'Cryogenic Modeling', 'FEA/Topology Optimization', 'CFD (Combustion/Aero)']
  },
  {
    category: 'ELECTRIFICATION',
    items: ['EV Powertrains', 'BMS Architecture', 'BLDC Motor Control', 'Power Electronics']
  },
  {
    category: 'CONTROL SYSTEMS',
    items: ['Embedded C++', 'Sensor Fusion', 'PID/Kalman Filters', 'RTOS Kernels']
  },
  {
    category: 'SIMULATION & ML',
    items: ['Physics-Informed ML', 'MATLAB/Simulink', 'DeepXDE Framework', 'Graph Algorithms']
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'EX01',
    role: 'OVERALL COORDINATOR',
    company: 'BOLTHEADS ENGINEERING // MULTI-VEHICLE EV DEVELOPMENT',
    period: '2024 — 2025',
    description: 'Directing systems-level coordination for high-performance electric vehicle development. Overseeing cross-functional design reviews between powertrain, structural, and electronics departments to ensure rigorous architectural alignment.',
    milestones: [
      'Orchestrated the simultaneous development cycle for 3 distinct EV prototype platforms.',
      'Implemented a unified CAD-FEA version control system, reducing integration errors by 30%.',
      'Optimized vendor procurement workflows, reducing overall component lead times by 15%.'
    ]
  },
  {
    id: 'EX02',
    role: 'TECHNICAL WORKSHOP LEAD',
    company: 'IGNITION CAMP // ADVANCED CAD & INTRO TO AUTOMOBILES',
    period: '2024',
    description: 'Led a technical track focused on industrial-standard CAD modeling and vehicle subsystem architecture. Developed comprehensive curriculum covering parametric surfacing, assembly kinematics, and structural validation.',
    milestones: [
      'Authored 150+ pages of technical training documentation and procedural guidelines.',
      'Mentored a cohort of 40+ engineering students in hands-on structural analysis workflows.',
      'Achieved a 95% competency rating in structural validation modules for all participants.'
    ]
  }
];

export const RESEARCH: ResearchItem[] = [
  {
    id: 'R01',
    title: 'Heat Transfer Prediction via PINNs',
    type: 'RESEARCH',
    domain: 'Physics-Informed AI',
    status: 'ACTIVE',
    summary: 'Developing hybrid neural architectures that enforce the 2D heat conduction PDE as a soft constraint in the loss function for faster real-time property prediction.',
    objectives: [
      'Minimize PDE residual error across non-convex domains.',
      'Analyze training latency against conventional FDM/FEM solvers.',
      'Verify convergence stability for varying Reynolds numbers.'
    ],
    methodology: 'Implementation of the Navier-Stokes and Heat Conduction equations into a deep neural network loss function using the DeepXDE framework.',
    tools: ['Python', 'DeepXDE', 'TensorFlow', 'NumPy'],
    collaborators: ['AI-Mech Research Group', 'Advanced Thermal Labs'],
    data: [
      { label: 'MSE Threshold', value: '< 1e-4' },
      { label: 'Training Epochs', value: '50k' },
      { label: 'Speedup Factor', value: '12x' }
    ]
  },
  {
    id: 'R02',
    title: 'Diesel Engine CFD Simulation',
    type: 'RESEARCH',
    domain: 'Thermodynamics',
    status: 'ARCHIVED',
    summary: '3D high-fidelity combustion simulation of dual-fuel diesel engines to optimize injection timing and minimize NOx emissions.',
    objectives: [
      'Map NOx formation against pilot injection delay.',
      'Calculate Indicated Mean Effective Pressure (IMEP) variation.',
      'Evaluate soot reduction under high-pressure EGR.'
    ],
    methodology: 'RANS turbulence modeling combined with finite-rate chemistry solvers in ANSYS Forte environment.',
    tools: ['ANSYS Forte', 'CHEMKIN', 'GRI-Mech 3.0'],
    collaborators: ['Internal Combustion Engine Division'],
    data: [
      { label: 'Cylinder Count', value: '4' },
      { label: 'Peak Pressure', value: '180 bar' },
      { label: 'Efficiency Gain', value: '+3.4%' }
    ]
  },
  {
    id: 'R03',
    title: 'Liquid Hydrogen Cryogenic Tank Analysis',
    type: 'RESEARCH',
    domain: 'Aerospace Engineering',
    status: 'ACTIVE',
    summary: 'Structural integrity and boil-off analysis for Type IV composite pressure vessels designed for long-term LH2 storage in aerospace applications.',
    objectives: [
      'Determine MLI (Multi-Layer Insulation) efficiency coefficients.',
      'Analyze micro-crack propagation in carbon-fiber liners.',
      'Simulate structural stress during 20K thermal cycling.'
    ],
    methodology: 'Coupled thermal-structural analysis using multi-physics FEA modules to observe material behavior at near-absolute zero.',
    tools: ['ANSYS Mechanical', 'Material Designer', 'CryoSolver'],
    collaborators: ['Propulsion Systems Group'],
    data: [
      { label: 'Temp Gradient', value: '273K - 20K' },
      { label: 'Insulation Layers', value: '60' },
      { label: 'Stress Mitigation', value: '15%' }
    ]
  },
  {
    id: 'R04',
    title: 'Dual-Fuel Combustion Kinetics',
    type: 'RESEARCH',
    domain: 'Chemical Engineering',
    status: 'PEER_REVIEW',
    summary: 'Evaluating the chemical kinetic mechanisms of methane-diesel co-combustion to improve flame speed predictions in retrofitted engines.',
    objectives: [
      'Refine methane oxidation sub-mechanisms.',
      'Validate ignition delay against shock-tube data.',
      'Optimize multi-step reaction rates.'
    ],
    methodology: 'Detailed kinetic modeling using reduced mechanisms derived from GRI-Mech 3.0 to balance accuracy and computational cost.',
    tools: ['Python/Cantera', 'Chemkin-Pro', 'Matlab'],
    collaborators: ['Combustion Chemistry Lab'],
    data: [
      { label: 'Reaction Steps', value: '325' },
      { label: 'Species Count', value: '53' },
      { label: 'Model Accuracy', value: '98.2%' }
    ]
  },
  {
    id: 'R05',
    title: 'Magnetic Domain Visualization Methods',
    type: 'RESEARCH',
    domain: 'Materials Science',
    status: 'ARCHIVED',
    summary: 'Developing non-destructive magneto-optical Kerr effect (MOKE) setups for visualizing domain wall movement in thin-film ferromagnetic materials.',
    objectives: [
      'Calibrate MOKE sensitivity for sub-micron domains.',
      'Implement real-time image processing for wall tracking.',
      'Analyze field-induced switching behavior.'
    ],
    methodology: 'Optical polarization analysis using customized Kerr microscopy and high-speed digital signal processing.',
    tools: ['MOKE Setup', 'OpenCV', 'LabVIEW'],
    collaborators: ['Magnetism & Spin Research Lab'],
    data: [
      { label: 'Resolution', value: '250nm' },
      { label: 'Frame Rate', value: '1k FPS' },
      { label: 'Field Range', value: '±2T' }
    ]
  },
  {
    id: 'P01',
    title: 'Nuclear Magnetic Resonance (NMR)',
    type: 'PRESENTATION',
    domain: 'Spectroscopy',
    status: 'ARCHIVED',
    summary: 'A deep dive into the quantum mechanical principles of spin resonance and its applications in structural biology and materials characterization.',
    objectives: [
      'Explain Zeeman splitting in external magnetic fields.',
      'Demonstrate T1/T2 relaxation time measurements.',
      'Compare solid-state vs. liquid-state NMR capabilities.'
    ],
    methodology: 'Theoretical overview followed by a case study on protein folding analysis using 2D NOESY spectra.',
    tools: ['VnmrJ', 'TopSpin', 'LaTeX'],
    collaborators: ['Department of Applied Physics'],
    data: [
      { label: 'Field Strength', value: '600 MHz' },
      { label: 'Pulse Sequence', value: 'Multi-Phase' },
      { label: 'Sample Prep', value: 'Deuterated' }
    ]
  },
  {
    id: 'P02',
    title: 'Magnetic Domain Observation Techniques',
    type: 'PRESENTATION',
    domain: 'Instrumentation',
    status: 'ARCHIVED',
    summary: 'Comparative analysis of MOKE, Bitter patterning, and Lorentz microscopy for observing magnetic microstructure in permanent magnets.',
    objectives: [
      'Contrast spatial vs. temporal resolution of methods.',
      'Evaluate cost-benefit of in-situ observation.',
      'Discuss artifact reduction in Lorentz microscopy.'
    ],
    methodology: 'Method-by-method evaluation focusing on practical engineering applications in motor design.',
    tools: ['Microscopy Suite', 'ImageJ', 'PPTX-Core'],
    collaborators: ['Materials Characterization Lab'],
    data: [
      { label: 'Methods Analyzed', value: '5' },
      { label: 'Industry Use', value: 'EV Motors' },
      { label: 'Report Status', value: 'Finalized' }
    ]
  }
];