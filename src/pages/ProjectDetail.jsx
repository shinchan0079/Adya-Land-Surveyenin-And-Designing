import { useParams, Navigate } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle2, 
  Ruler,
  Calendar,
  Layers,
  Wrench
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ProcessSteps from '../components/common/ProcessSteps';
import CTASection from '../components/common/CTASection';
import ProjectCard from '../components/cards/ProjectCard';
import { getProjectBySlug, projects } from '../data/projectData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. PROJECT HERO */}
      <PageHero 
        eyebrow={project.service}
        title={project.title}
        description={`Location: ${project.location}`}
        image={project.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title }
        ]}
      />

      {/* 2. PROJECT OVERVIEW TABLE & TEXT */}
      <section className="relative -mt-16 lg:-mt-24 z-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview Text */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-heading font-bold text-[#10263F] mb-6">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>
            
            {/* Project Details Box */}
            <div className="bg-[#10263F] text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-heading font-bold mb-6 pb-4 border-b border-gray-700 text-[#F59E0B]">Project Details</h3>
              <ul className="space-y-6">
                <li>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Service</div>
                  <div className="font-medium flex items-center"><Ruler size={18} className="mr-3 text-[#F59E0B]" /> {project.service}</div>
                </li>
                <li>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Location</div>
                  <div className="font-medium flex items-center"><MapPin size={18} className="mr-3 text-[#F59E0B]" /> {project.location}</div>
                </li>
                <li>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Year</div>
                  <div className="font-medium flex items-center"><Calendar size={18} className="mr-3 text-[#F59E0B]" /> {project.year}</div>
                </li>
                {project.siteArea && (
                  <li>
                    <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Site Area</div>
                    <div className="font-medium flex items-center"><Layers size={18} className="mr-3 text-[#F59E0B]" /> {project.siteArea}</div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLIENT REQUIREMENT & 4. SITE CHALLENGE */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading 
                label="The Requirement"
                title="Understanding the Project."
                align="left"
              />
              <p className="text-gray-600 leading-relaxed text-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                {project.clientRequirement}
              </p>
            </div>
            
            <div>
              <SectionHeading 
                label="The Challenge"
                title="Site Conditions."
                align="left"
              />
              <p className="text-gray-600 leading-relaxed text-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                {project.siteChallenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      {project.approach && project.approach.length > 0 && (
        <section className="py-24 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SectionHeading 
              label="Our Approach"
              title="How We Executed the Project"
              align="center"
            />
            <ProcessSteps 
              steps={project.approach.map(step => ({ title: step.step, description: step.desc }))} 
              type="vertical" 
            />
          </div>
        </section>
      )}

      {/* 6. EQUIPMENT USED */}
      {project.equipment && project.equipment.length > 0 && (
        <section className="py-20 bg-[#F5F6F7] border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-12">
              Tools Used for This Project
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.equipment.map((tool, idx) => (
                <div key={idx} className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center font-bold text-[#10263F]">
                  <Wrench className="text-[#F59E0B] mr-3" size={20} /> {tool}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. DELIVERABLES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading 
            label="Deliverables"
            title="From Field Data to Technical Output."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {project.deliverables.map((item, idx) => (
              <span key={idx} className="bg-[#10263F] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center shadow-sm">
                <CheckCircle2 size={18} className="text-[#F59E0B] mr-3" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE OUTCOME */}
      <section className="py-20 bg-[#10263F] text-white border-y-4 border-[#F59E0B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-6">The Outcome</div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold leading-relaxed italic">
            "{project.outcome}"
          </h2>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Related Projects" align="center" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((rp, idx) => (
                <ProjectCard 
                  key={idx}
                  title={rp.title}
                  category={rp.category}
                  location={rp.location}
                  image={rp.image}
                  slug={`/projects/${rp.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. CTA */}
      <CTASection 
        eyebrow="Have a Similar Requirement?"
        title="Let's Discuss Your Site."
        description="Whether you need a land survey, site measurement, layout or engineering design, tell us about your requirement."
        primaryText="Request a Survey"
        primaryLink="/quote"
        showWhatsApp={false}
      />

    </div>
  );
};

export default ProjectDetail;
