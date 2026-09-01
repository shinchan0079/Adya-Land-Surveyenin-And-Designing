export const projects = [
  {
    id: "topographical-survey-lucknow",
    title: "Topographical Survey for Residential Layout",
    category: "Topographical",
    location: "Gomti Nagar, Lucknow",
    image: "/site visiting.jpg",
    service: "Topographical Survey",
    year: "2025",
    siteArea: "5 Acres",
    equipment: ["Total Station", "Auto Level"],
    shortDesc: "Detailed mapping of existing ground levels and site features for residential development planning.",
    overview: "This project required a highly accurate topographical survey to capture the existing terrain, slopes, and all physical features on a 5-acre undeveloped site in Gomti Nagar. The data collected was critical for the architect's residential layout planning.",
    clientRequirement: "The client, a residential developer, needed precise ground elevation data and the location of existing trees, boundaries, and adjacent roads to plan a sustainable and level residential layout.",
    siteChallenge: "The site had irregular boundaries and significant elevation differences toward the northern edge, requiring careful grid-leveling and dense coordinate plotting to ensure accurate earthwork calculations later.",
    approach: [
      { step: "Requirement", desc: "Understand developer's planning needs" },
      { step: "Site Inspection", desc: "Identify boundary pegs and control points" },
      { step: "Field Survey", desc: "Grid leveling and feature capture using Total Station" },
      { step: "Data Processing", desc: "Coordinate extraction and error checking" },
      { step: "Drafting", desc: "Generation of 2D CAD topographical map" }
    ],
    deliverables: ["2D AutoCAD Drawing (.dwg)", "PDF Topographical Plan", "Coordinate List (.csv)"],
    outcome: "The completed survey provided the architect with the exact site terrain model required to optimize the building layout and minimize earth-moving costs during construction."
  },
  {
    id: "boundary-demarcation-industrial",
    title: "Industrial Plot Boundary Demarcation",
    category: "Boundary",
    location: "Kanpur Road Industrial Area",
    image: "/site visiting2.jpg",
    service: "Boundary Survey & Setting Out",
    year: "2025",
    siteArea: "12 Acres",
    equipment: ["DGPS", "Total Station"],
    shortDesc: "Precise identification and physical marking of property boundaries for a large industrial plot.",
    overview: "We were contracted to verify and physically establish the property boundaries of a 12-acre industrial plot on Kanpur Road. The project involved cross-referencing old land records with actual ground coordinates.",
    clientRequirement: "Prior to constructing a boundary wall, the client needed to ensure their property lines were accurate to avoid future disputes with neighboring industrial units.",
    siteChallenge: "Existing boundary markers were missing, and the site was heavily overgrown with vegetation. DGPS was required to establish accurate global coordinates before using the Total Station for precise local plotting.",
    approach: [
      { step: "Record Review", desc: "Analyzing official land documents" },
      { step: "Control Establishment", desc: "Setting up DGPS base and rover" },
      { step: "Surveying", desc: "Locating boundary coordinates" },
      { step: "Setting Out", desc: "Physical marking of corners with pegs" }
    ],
    deliverables: ["Boundary Survey Report", "AutoCAD Boundary Plan", "On-site Pegging"],
    outcome: "The boundaries were successfully established and marked on the ground, allowing the civil contractor to begin boundary wall construction without any legal or spatial ambiguity."
  },
  {
    id: "civil-layout-commercial-complex",
    title: "Column Layout for Commercial Complex",
    category: "Layout",
    location: "Hazratganj, Lucknow",
    image: "/site visintg3.jpg",
    service: "Layout / Setting Out",
    year: "2024",
    siteArea: "20,000 Sq. Ft.",
    equipment: ["Total Station"],
    shortDesc: "Translating architectural and structural drawings into precise physical markings on the ground.",
    overview: "For a multi-story commercial complex in a dense urban area, we provided precise layout and setting out services to mark column centerlines and excavation boundaries directly on the site.",
    clientRequirement: "The structural engineer and contractor required millimeter-level accuracy for the column footing layout to ensure the structural grid matched the CAD design perfectly.",
    siteChallenge: "The tight urban environment and deep excavation required setting up multiple offset control points, as direct line-of-sight across the site was frequently obstructed.",
    approach: [
      { step: "CAD Analysis", desc: "Extracting coordinates from structural drawings" },
      { step: "Site Setup", desc: "Establishing offset control stations" },
      { step: "Setting Out", desc: "Marking column centerlines" },
      { step: "Verification", desc: "Cross-checking diagonal distances" }
    ],
    deliverables: ["Physical Markings on Site", "Setting Out Verification Report"],
    outcome: "The layout was completed flawlessly, enabling the excavation and foundation teams to proceed immediately with absolute confidence in the grid alignment."
  },
  {
    id: "contour-mapping-hill-resort",
    title: "Contour Mapping for Resort Development",
    category: "Topographical",
    location: "Nainital, Uttarakhand",
    image: "/survey10.jpg",
    service: "Contour Survey",
    year: "2024",
    siteArea: "8 Acres",
    equipment: ["Total Station", "DGPS"],
    shortDesc: "High-density contour mapping of hilly terrain to support landscape architecture and resort design.",
    overview: "A challenging topographical and contour survey conducted in hilly terrain. The data was essential for the landscape architect to design stepped cottages and internal access roads.",
    clientRequirement: "The client needed a detailed 0.5-meter interval contour map to understand the steep slopes and plan drainage, retaining walls, and safe building zones.",
    siteChallenge: "Steep gradients and dense pine tree cover made conventional line-of-sight surveying difficult. The team had to establish a dense network of traverse stations.",
    approach: [
      { step: "Traversing", desc: "Establishing control points across the slope" },
      { step: "Data Collection", desc: "High-density spot level recording" },
      { step: "Processing", desc: "Generating digital terrain model (DTM)" },
      { step: "Drafting", desc: "Creating the final contour map" }
    ],
    deliverables: ["Contour Map (0.5m interval)", "Digital Terrain Model", "AutoCAD Drawing"],
    outcome: "The high-resolution contour data allowed the architects to design the resort with minimal cut-and-fill operations, preserving the natural landscape and reducing costs."
  },
  {
    id: "highway-alignment-survey",
    title: "Highway Alignment & Leveling Survey",
    category: "Land Survey",
    location: "Purvanchal Expressway Link",
    image: "/survey9.jpg",
    service: "Level Survey",
    year: "2023",
    siteArea: "5 KM Stretch",
    equipment: ["Auto Level", "Total Station"],
    shortDesc: "Longitudinal and cross-sectional leveling survey for an approach road alignment.",
    overview: "Conducted a detailed leveling survey along a 5-kilometer stretch to support the design and earthwork estimation of a new highway link road.",
    clientRequirement: "The civil engineering contractor required precise ground profiles (L-Section and Cross-Section) every 20 meters to calculate the volume of earthwork (cut/fill) required.",
    siteChallenge: "Working along an active traffic corridor required strict safety protocols and efficient instrument setups to avoid delays and ensure surveyor safety.",
    approach: [
      { step: "Benchmarking", desc: "Transferring Temporary Benchmarks (TBM)" },
      { step: "Leveling", desc: "Recording center, left, and right levels" },
      { step: "Drafting", desc: "Plotting L-Sections and Cross-Sections" },
      { step: "Estimation", desc: "Earthwork volume calculation" }
    ],
    deliverables: ["L-Section & Cross-Section Drawings", "Level Book Data", "Earthwork Volume Report"],
    outcome: "The precise leveling data resulted in an accurate Bill of Quantities (BOQ) for the earthwork, allowing the contractor to submit a highly competitive and realistic project bid."
  },
  {
    id: "residential-civil-design",
    title: "Civil Design for Private Residence",
    category: "Civil Design",
    location: "Gomti Nagar Extension, Lucknow",
    image: "/survey8.jpg",
    service: "CAD / Drawing",
    year: "2023",
    siteArea: "3,200 Sq. Ft.",
    equipment: ["AutoCAD", "Total Station"],
    shortDesc: "Complete site measurement and subsequent generation of civil engineering and architectural CAD drawings.",
    overview: "A turnkey technical project where we first surveyed the vacant plot to confirm dimensions, and then developed the comprehensive civil engineering plans for a modern 2-story residence.",
    clientRequirement: "The homeowner wanted a seamless process from the initial land measurement to the final approval-ready architectural and structural drawings.",
    siteChallenge: "Maximizing the usable floor area while strictly adhering to local municipal setbacks and building codes based on the exact surveyed dimensions.",
    approach: [
      { step: "Site Survey", desc: "Plot measurement and diagonal check" },
      { step: "Concept Planning", desc: "Initial floor plan layouts" },
      { step: "Engineering Design", desc: "Structural and civil detailing" },
      { step: "Final Drafting", desc: "Preparation of working drawings" }
    ],
    deliverables: ["Site Plan", "Floor Plans & Elevations", "Structural Drawings"],
    outcome: "The client received a complete, highly accurate set of working drawings, ensuring a smooth approval process and providing clear instructions for the construction team."
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.id === slug);
};

export const getCategories = () => {
  const categories = ["ALL", ...new Set(projects.map(p => p.category.toUpperCase()))];
  return categories;
};
