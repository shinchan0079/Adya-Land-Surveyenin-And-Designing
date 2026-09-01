import { useState } from 'react';
import { 
  ArrowRight, 
  Map, 
  Ruler, 
  HardHat, 
  CheckCircle2, 
  Crosshair, 
  Settings,
  PenTool,
  ChevronDown,
  ChevronUp,
  Target,
  Layers,
  Cpu
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Equipment = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "What equipment is used for land surveying?",
      a: "For modern professional land surveying, we primarily use Total Stations for high-precision angle and coordinate measurements, Auto Levels for elevation mapping, and DGPS systems for large-scale coordinate establishment."
    },
    {
      q: "What is a Total Station used for?",
      a: "A Total Station is an electronic/optical instrument used for surveying and building construction. It measures both vertical and horizontal angles and the slope distance from the instrument to a particular point, allowing for exact coordinate mapping."
    },
    {
      q: "Which instrument is used for level measurement?",
      a: "We use the Auto Level (Automatic Level) for fast and highly accurate elevation readings and level transfers across construction sites and topographical surveys."
    },
    {
      q: "Do you use digital surveying equipment?",
      a: "Yes, all our primary measurement tools, including Total Stations and DGPS, are fully digital. This allows us to log raw data directly into the instrument and transfer it electronically to our CAD software, minimizing human error."
    },
    {
      q: "How is survey data converted into drawings?",
      a: "Raw field data (coordinates and levels) is downloaded from the Total Station/DGPS in CSV/TXT formats. We then process this data using engineering software like AutoCAD to generate precise 2D and 3D technical drawings, contour maps, and site plans."
    },
    {
      q: "Can students receive practical instrument training?",
      a: "Yes, we offer dedicated training programs where students and fresh engineers can get hands-on practical experience operating the Total Station, Auto Level, and associated CAD software."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* 1. EQUIPMENT HERO */}
      <section className="bg-[#10263F] relative overflow-hidden py-16 lg:py-24">
        {/* Technical Engineering Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Topographical contour overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/survey2.jpg')] bg-cover bg-center mix-blend-screen"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-white text-xs font-bold px-4 py-2 mb-6 rounded-sm uppercase tracking-wider border border-white/20">
                <Target size={14} className="text-[#F59E0B]" />
                <span>Equipment & Technology</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
                Precision in the Field.<br/>
                <span className="text-[#F59E0B]">Technology Behind the Work.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                Professional surveying combines practical field experience with the right instruments and engineering tools to collect, process and transform site data into useful technical outputs.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button to="#equipment" variant="primary" className="text-lg px-6 py-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] rounded-sm hover:-translate-y-1 transform transition-all">
                  Explore Equipment <ArrowRight className="ml-2 rotate-90" size={20} />
                </Button>
                <Button to="/quote" variant="outline" className="text-lg px-6 py-3 border-2 border-white text-white rounded-sm hover:-translate-y-1 transform transition-all hover:bg-white hover:text-[#10263F]">
                  Request a Survey <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            
            {/* Right Visual (Technical Composition) */}
            <div className="relative h-[450px] lg:h-[550px] hidden md:flex items-center justify-center">
              {/* Decorative Crosshairs */}
              <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-[#F59E0B]/50"></div>
              <div className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-[#F59E0B]/50"></div>
              
              {/* Central Image with CAD-style borders */}
              <div className="relative w-4/5 h-4/5 z-10">
                <div className="absolute -inset-4 border border-white/20 bg-white/5 backdrop-blur-sm z-0"></div>
                <img 
                  src="/survey3.jpg" 
                  alt="Total Station on Site" 
                  className="w-full h-full object-cover grayscale-[20%] relative z-10 border border-white/10 shadow-2xl"
                />
                
                {/* Floating Coordinate Badges */}
                <div className="absolute -right-12 top-1/4 bg-[#10263F] border border-[#F59E0B] text-white text-xs font-mono px-3 py-1.5 z-20 shadow-lg">
                  N: 2984532.14
                </div>
                <div className="absolute -left-8 bottom-1/3 bg-[#10263F] border border-[#F59E0B] text-white text-xs font-mono px-3 py-1.5 z-20 shadow-lg">
                  E: 543921.88
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNOLOGY INTRODUCTION */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Image */}
            <div className="relative">
              <img 
                src="/survey4.jpg" 
                alt="Survey Site Data" 
                className="w-full h-[400px] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#10263F]/5 mix-blend-multiply"></div>
            </div>

            {/* Right Content */}
            <div>
              <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">Built For Precision</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F] mb-6">
                Experience Supported by the Right Tools.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With more than 20 years of practical civil engineering experience, ADYA combines field knowledge with surveying instruments and engineering tools according to project requirements.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Field Measurement",
                  "Data Collection",
                  "Technical Analysis",
                  "Engineering Drawing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm font-bold text-[#10263F] bg-gray-50 px-4 py-3 border border-gray-200 rounded-sm">
                    <Crosshair size={16} className="text-[#F59E0B] mr-2 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. SURVEYING EQUIPMENT CARDS */}
      <section id="equipment" className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">Field Equipment</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#10263F]">
              Tools Used Where Accuracy Matters.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* 01 Total Station */}
            <div className="bg-white rounded-sm overflow-hidden border border-gray-200 shadow-md group">
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img src="/survey3.jpg" alt="Total Station" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white font-mono text-[#10263F] text-xs font-bold px-3 py-1 shadow-sm">
                  01 — INSTRUMENT
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-[#10263F] mb-3">Total Station</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An electronic surveying instrument used for precise angle, distance and coordinate-based measurements.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Distance Measurement", "Angle Measurement", "Coordinate Survey", "Topographical Survey", "Layout / Setting Out"].map((tag, i) => (
                    <span key={i} className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 Auto Level */}
            <div className="bg-white rounded-sm overflow-hidden border border-gray-200 shadow-md group">
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img src="/survey4.jpg" alt="Auto Level" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white font-mono text-[#10263F] text-xs font-bold px-3 py-1 shadow-sm">
                  02 — INSTRUMENT
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-[#10263F] mb-3">Auto Level</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Used for determining and transferring precise levels and elevations across a construction or survey site.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Reduced Levels", "Height Difference", "Level Transfer", "Site Leveling", "Construction Level Work"].map((tag, i) => (
                    <span key={i} className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 03 DGPS */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
              <div className="text-xs font-mono font-bold text-gray-400 mb-2">03 — INSTRUMENT</div>
              <h3 className="text-xl font-heading font-bold text-[#10263F] mb-3">DGPS / GNSS</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Satellite-based positioning for large area surveys and global coordinate establishment.</p>
              <div className="flex flex-wrap gap-2">
                {["Coordinate Survey", "Positioning", "Large Area Survey"].map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
            
            {/* 04 Accessories */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
              <div className="text-xs font-mono font-bold text-gray-400 mb-2">04 — ACCESSORIES</div>
              <h3 className="text-xl font-heading font-bold text-[#10263F] mb-3">Other Survey Instruments</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Essential professional accessories that support the primary surveying instruments on the field.</p>
              <div className="flex flex-wrap gap-2">
                {["Measuring Tape", "Prism", "Survey Staff", "Tripod", "Ranging Rod"].map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOTAL STATION SHOWCASE */}
      <section className="py-24 bg-[#10263F] relative overflow-hidden">
        {/* Subtle technical background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-12 font-mono">Built for Work in the Field</div>
          
          <div className="max-w-4xl mx-auto">
            {/* The flow graphic */}
            <div className="flex flex-col items-center">
              
              <div className="bg-white/10 border border-[#F59E0B] text-white font-heading font-bold text-xl px-6 py-3 tracking-widest shadow-[0_0_30px_rgba(245,158,11,0.2)] z-10">
                TOTAL STATION
              </div>
              
              {/* Main Vertical Stem */}
              <div className="h-12 w-px bg-[#F59E0B]"></div>
              
              {/* Horizontal Branching */}
              <div className="w-full max-w-2xl border-t border-[#F59E0B] flex justify-between relative">
                {/* Left Drop */}
                <div className="absolute left-0 top-0 h-12 w-px bg-[#F59E0B]"></div>
                {/* Center Drop */}
                <div className="absolute left-1/2 top-0 h-12 w-px bg-[#F59E0B]"></div>
                {/* Right Drop */}
                <div className="absolute right-0 top-0 h-12 w-px bg-[#F59E0B]"></div>
              </div>
              
              {/* Values */}
              <div className="w-full max-w-2xl flex justify-between mt-12 px-4 relative z-10">
                <div className="bg-[#10263F] text-gray-300 font-mono text-sm px-4 py-2 border border-gray-700 w-32 shadow-lg -ml-16">DISTANCE</div>
                <div className="bg-[#10263F] text-gray-300 font-mono text-sm px-4 py-2 border border-gray-700 w-32 shadow-lg -ml-16 md:ml-0">ANGLES</div>
                <div className="bg-[#10263F] text-gray-300 font-mono text-sm px-4 py-2 border border-gray-700 w-32 shadow-lg -mr-16">COORDINATES</div>
              </div>

              {/* Lower joining branch */}
              <div className="w-full max-w-2xl border-b border-[#F59E0B] flex justify-between relative mt-4">
                <div className="absolute left-0 bottom-0 h-12 w-px bg-[#F59E0B]"></div>
                <div className="absolute left-1/2 bottom-0 h-16 w-px bg-[#F59E0B]"></div>
                <div className="absolute right-0 bottom-0 h-12 w-px bg-[#F59E0B]"></div>
              </div>

              {/* Final Output */}
              <div className="mt-16 bg-[#F59E0B] text-[#10263F] font-heading font-bold text-2xl px-12 py-5 shadow-[0_0_30px_rgba(245,158,11,0.5)] z-10 border-4 border-[#10263F]">
                SITE DATA
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. FIELD TO DRAWING WORKFLOW */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">Field to Drawing</div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F] mb-6">
            Measurements Are Only the Beginning.
          </h2>
          <p className="text-lg text-gray-600 mb-16 leading-relaxed">
            Field measurements become useful when they are correctly processed, interpreted and transformed into the drawings or technical information required for a project.
          </p>

          <div className="flex flex-col items-center">
            {[
              "ACTUAL SITE",
              "SURVEY EQUIPMENT",
              "FIELD DATA",
              "DATA PROCESSING",
              "ENGINEERING SOFTWARE",
              "DRAWING / DESIGN",
              "FINAL OUTPUT"
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div className="bg-gray-50 text-[#10263F] font-mono font-bold tracking-widest uppercase py-4 px-8 rounded-sm shadow-sm w-full max-w-md border border-gray-200 hover:border-[#10263F] transition-colors">
                  {step}
                </div>
                {idx < 6 && (
                  <div className="py-3 text-gray-300">
                    <ChevronDown size={28} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING SOFTWARE */}
      <section className="py-20 lg:py-24 bg-[#F5F6F7] relative overflow-hidden">
        {/* Blueprint background styling */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/survey2.jpg')] bg-cover bg-center mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">Design & Processing</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#10263F]">
              From Survey Data to Digital Drawings.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AutoCAD */}
            <div className="bg-white p-10 rounded-sm border-l-4 border-blue-600 shadow-sm flex flex-col">
              <div className="flex items-center mb-6">
                <Cpu size={32} className="text-blue-600 mr-4" />
                <h3 className="text-2xl font-heading font-bold text-[#10263F]">AutoCAD</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                Professional CAD drafting software used to convert processed survey data into final engineering drawings and site plans.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Survey Drawings", "Site Plans", "Layout Drawings", "Technical Drafting"].map((use, i) => (
                  <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                    <CheckCircle2 size={16} className="text-blue-600 mr-2" /> {use}
                  </div>
                ))}
              </div>
            </div>

            {/* Civil 3D */}
            <div className="bg-white p-10 rounded-sm border-l-4 border-red-600 shadow-sm flex flex-col">
              <div className="flex items-center mb-6">
                <Layers size={32} className="text-red-600 mr-4" />
                <h3 className="text-2xl font-heading font-bold text-[#10263F]">Civil 3D</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                Advanced civil engineering software for precise terrain modeling, contour generation, and complex topographical analysis.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Survey Points", "Surface Generation", "Contours", "Terrain Analysis"].map((use, i) => (
                  <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                    <CheckCircle2 size={16} className="text-red-600 mr-2" /> {use}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACCURACY + EXPERIENCE */}
      <section className="py-24 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/20 pb-8 lg:pb-0 lg:pr-8">
              <div className="text-[#F59E0B] font-heading font-black leading-none" style={{ fontSize: '6rem' }}>
                20+
              </div>
              <div className="text-xl font-bold uppercase tracking-widest text-gray-300 mt-2">
                Years of Practical Experience
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Technology Is Powerful.<br/>
                <span className="text-[#F59E0B]">Experience Makes It Useful.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                Professional instruments can collect measurements, but practical engineering experience helps determine what needs to be measured, how site conditions should be approached and how the collected information should be used.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Experience", desc: "Understanding the site.", icon: <HardHat size={28} /> },
              { title: "Equipment", desc: "Collecting required measurements.", icon: <Crosshair size={28} /> },
              { title: "Engineering", desc: "Turning data into useful outputs.", icon: <PenTool size={28} /> }
            ].map((card, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors">
                <div className="text-[#F59E0B] mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EQUIPMENT BY SERVICE */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">Applications</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F]">
              Different Requirements. Different Tools.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { service: "Land Surveying", tool: "Total Station • Accessories" },
              { service: "Topographical Survey", tool: "Total Station • DGPS" },
              { service: "Level Survey", tool: "Auto Level" },
              { service: "Layout / Setting Out", tool: "Total Station" },
              { service: "Contour Work", tool: "Survey Equipment → Processing Software" },
              { service: "Engineering Drawing", tool: "AutoCAD" }
            ].map((app, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-6 rounded-sm border border-gray-100 hover:border-[#F59E0B] transition-colors">
                <h3 className="text-xl font-bold text-[#10263F] mb-2 sm:mb-0">{app.service}</h3>
                <div className="font-mono text-sm font-bold text-gray-500 bg-white px-4 py-2 border border-gray-200">{app.tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SURVEYING WORKFLOW */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F]">
              How Technology Fits Into Our Work.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Requirement", desc: "Understand what information is required." },
              { num: "02", title: "Site Inspection", desc: "Review ground conditions." },
              { num: "03", title: "Equipment Setup", desc: "Prepare the appropriate surveying instrument." },
              { num: "04", title: "Measurement", desc: "Collect required site information." },
              { num: "05", title: "Processing", desc: "Analyze and organize survey data." },
              { num: "06", title: "Output", desc: "Prepare the required drawing/design." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm border border-gray-200 flex flex-col shadow-sm">
                <div className="text-[#F59E0B] font-mono font-bold text-lg mb-4">{step.num} — {step.title}</div>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REAL EQUIPMENT GALLERY */}
      <section className="py-24 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">In The Field</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Our Tools at Work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <div className="relative group md:col-span-2 overflow-hidden border border-white/20">
              <img src="/survey3.jpg" alt="Total Station" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider">Total Station on Site</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden border border-white/20">
              <img src="/survey4.jpg" alt="Surveying on Site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider">Site Surveying</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden border border-white/20">
              <img src="/survey5.jpg" alt="Auto Level" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider">Auto Level</h3>
              </div>
            </div>
            <div className="relative group md:col-span-2 overflow-hidden border border-white/20">
              <img src="/survey6.jpg" alt="CAD Drawing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider">Engineering Drafting</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY + TRAINING */}
      <section className="py-20 bg-gray-50 border-b border-gray-200 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">Learn The Technology</div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F] mb-6">
            Want to Learn Practical Surveying?
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            ADYA also provides practical training opportunities where learners can understand surveying procedures, field workflows and applicable instruments.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Total Station Training", "Land Surveying", "Auto Level", "CAD"].map((chip, i) => (
              <span key={i} className="bg-white border border-gray-200 text-[#10263F] font-bold px-4 py-2 text-sm shadow-sm">{chip}</span>
            ))}
          </div>
          <Button to="/training" variant="primary" className="px-5 py-2.5 text-sm md:text-base shadow-sm rounded-sm">
            Explore Training Programs <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-sm overflow-hidden transition-colors duration-300 ${activeFaq === index ? 'border-[#F59E0B] bg-orange-50/10' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
              >
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span className={`font-bold text-lg pr-8 ${activeFaq === index ? 'text-[#10263F]' : 'text-gray-700'}`}>{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-[#F59E0B] text-white' : 'bg-white border border-gray-200 text-gray-500'}`}>
                    {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 bg-[#10263F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-4 font-mono">Precision Starts in the Field</div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
            Need Professional Surveying<br/>for Your Site?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Tell us about your land or project requirements and discuss the appropriate surveying approach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/quote" variant="primary" className="text-lg px-10 py-4 shadow-lg shadow-orange-500/20 rounded-sm">
              Request a Survey <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-10 py-4 border-2 border-white text-white rounded-sm hover:bg-white hover:text-[#10263F]">
              Discuss Your Requirement
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Equipment;
