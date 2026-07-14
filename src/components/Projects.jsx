import useScrollReveal from '../hooks/useScrollReveal'

// Images live in src/assets/images so Vite can bundle them via import.
// (Files in /public are served as raw static paths instead — that's why
// importing from '../../public/...' didn't work.)
import ecommerceImg from '../../public/ecommerce.jpg'
import studentManagementImg from '../../public/student-management.jpg'
import inventorySystemImg from '../../public/inventorysystem.jpg'

const projects = [
  {
    image: ecommerceImg,
    alt: 'E-Commerce Website',
    badge: 'Completed Project',
    title: 'E-Commerce Website',
    text: 'A modern and fully responsive E-Commerce website developed using ASP.NET Core MVC, C#, SQL Server, HTML, CSS, Bootstrap and JavaScript. It features product browsing, category management, shopping cart, secure checkout, and an intuitive user interface.',
    tech: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Bootstrap', 'JavaScript'],
  },
  {
    image: studentManagementImg,
    alt: 'Student Management System',
    badge: 'Completed Project',
    title: 'Student Management System',
    text: 'A Windows Forms application built using C# and SQL Server featuring student registration, search, update, delete and complete CRUD operations.',
    tech: ['C#', 'SQL Server', 'Windows Forms'],
  },
  {
    image: inventorySystemImg,
    alt: 'Inventory Management System',
    badge: 'Completed Project',
    title: 'Inventory Management System',
    text: 'Inventory management software created using C#, SQL Server and Windows Forms for managing products, stock and reports.',
    tech: ['C#', 'SQL Server', 'Desktop App'],
  },
]

function ProjectCard({ project }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`project-card h-full rounded-[22px] overflow-hidden bg-white/5 transition-all duration-[450ms] hover:-translate-y-3 hover:shadow-[0_25px_45px_rgba(255,0,0,.28)] ${
        visible ? 'reveal-show' : 'reveal-hidden'
      }`}
    >
      <div className="overflow-hidden relative">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-[230px] object-cover transition-transform duration-500 hover:scale-[1.08]"
        />
      </div>

      <div className="p-[30px] relative z-[5]">
        <span className="inline-block mb-3 py-2 px-3 rounded text-[13px] tracking-wide bg-primary text-white">
          {project.badge}
        </span>

        <h4 className="text-primary font-bold mt-2 mb-4">{project.title}</h4>

        <p className="text-[#cccccc] leading-[1.9]">{project.text}</p>

        <div className="flex flex-wrap gap-[10px] mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="py-2 px-[15px] rounded-full bg-[#202020] text-primary text-[13px] font-semibold border border-white/[.08] transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-[80px] lg:py-[110px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          {/* <span className="text-primary font-bold">MY WORK</span> */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold uppercase mt-2 mb-6 section-title inline-block">
            Featured Projects
          </h2>
          <p className="text-[#bbbbbb] leading-[2] max-w-2xl mx-auto">
            Here are some of the projects I have developed using ASP.NET Core MVC, C#, SQL Server, HTML,
            CSS, Bootstrap and JavaScript.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
