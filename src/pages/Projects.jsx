import { useState } from 'react';
import { 
  CheckCircle2, 
  Crosshair, 
  MessageCircle,
  Map,
  Ruler
} from 'lucide-react';
import { projects, getCategories } from '../data/projectData';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import ProjectCard from '../components/cards/ProjectCard';

const Projects = () => {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === activeCategory);

  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. PROJECTS HERO */}
      <PageHero 
        eyebrow="Our Projects"
        title="Experience Built in the Field."
        description="Explore surveying, civil engineering and design work completed through practical field experience, technical understanding and attention to accuracy."
        image="/survey4.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects" }
        ]}
      />

      {/* 2. PROJECTS INTRODUCTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Our Work"
            title="Every Site Has a Different Challenge."
            description="From land measurement and topographical surveys to site layouts and engineering designs, every project requires a clear understanding of ground conditions and client requirements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Field Experience", desc: "Real-world understanding of site conditions and terrain.", icon: <Crosshair size={28} /> },
              { title: "Technical Approach", desc: "Surveying and engineering knowledge applied according to requirements.", icon: <Ruler size={28} /> },
              { title: "Practical Solutions", desc: "Outputs designed to support actual project needs and execution.", icon: <CheckCircle2 size={28} /> }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#F59E0B] transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#10263F] mx-auto flex items-center justify-center mb-6 group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-[#10263F] mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4 & 5. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#10263F] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FEATURED PROJECTS (Only show when ALL is selected) */}
          {activeCategory === "ALL" && (
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-[#10263F]">Featured Work</h3>
                <div className="ml-6 flex-grow h-px bg-gray-200"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {featuredProjects.map((project, idx) => (
                  <ProjectCard 
                    key={idx}
                    title={project.title}
                    category={project.category}
                    location={project.location}
                    image={project.image}
                    slug={`/projects/${project.id}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ALL PROJECTS GRID */}
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-[#10263F]">
              {activeCategory === "ALL" ? "All Projects" : `${activeCategory} Projects`}
            </h3>
            <div className="ml-6 flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={idx}
                title={project.title}
                category={project.category}
                location={project.location}
                image={project.image}
                slug={`/projects/${project.id}`}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
              <button onClick={() => setActiveCategory("ALL")} className="mt-4 text-[#F59E0B] font-bold hover:underline">
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 6. OUR WORK ACROSS SERVICES */}
      <section className="py-20 bg-[#10263F] text-white border-y-4 border-[#F59E0B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-700 text-center">
            <div className="px-4 py-4 md:py-0">
              <Map size={48} className="mx-auto text-[#F59E0B] mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">Surveying</h3>
              <p className="text-gray-400 text-base font-medium">Land Survey &bull; Boundary &bull; Topographical</p>
            </div>
            <div className="px-4 py-4 md:py-0">
              <Crosshair size={48} className="mx-auto text-[#F59E0B] mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">Site Engineering</h3>
              <p className="text-gray-400 text-base font-medium">Layout &bull; Level &bull; Setting Out</p>
            </div>
            <div className="px-4 py-4 md:py-0">
              <Ruler size={48} className="mx-auto text-[#F59E0B] mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">Design</h3>
              <p className="text-gray-400 text-base font-medium">Planning &bull; CAD &bull; Engineering Drawings</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPERIENCE BEHIND THE WORK */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/survey5.jpg')] bg-cover bg-center grayscale mix-blend-screen"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="font-heading font-black text-[#F59E0B] leading-none mb-6" style={{ fontSize: '7rem' }}>
            20+
          </div>
          <div className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest mb-8">
            Years of Practical Experience
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project benefits from more than two decades of practical civil engineering and field experience.
          </p>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection 
        eyebrow="Have a Similar Project?"
        title="Let's Discuss Your Site."
        description="Whether you need a land survey, site measurement, layout or engineering design, tell us about your requirement."
        primaryText="Request a Survey"
        primaryLink="/quote"
        secondaryText="WhatsApp Us"
        secondaryLink="https://wa.me/919453072917"
      />

    </div>
  );
};

export default Projects;
