import { useState } from "react";
import { useInView } from "react-intersection-observer";

// Updated data: "technologies" is an array of { name, logo }
const allProjects = [
  {
    id: 1,
    title: "e-Commerce WebDesign",
    technologies: [
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
    image: "https://res.cloudinary.com/dpywncjnh/image/upload/v1744825721/Landing_q17kad.png",
    repo: "https://github.com/barundas97/Jewellery_Store",
    demo: "https://trinayonii.netlify.app/",
  },
  {
    id: 2,
    title: "TO-DO Web-App",
    technologies: [
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
    image: "https://res.cloudinary.com/dpywncjnh/image/upload/v1750322095/Untitled_ipbqqp.png",
    repo: "https://github.com/barundas97/Taskify",
    demo: "https://taskify-v.netlify.app/",
  },
  {
    id: 3,
    title: "Weather App",
    technologies: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
    image: "/assets/project3.png",
    repo: "https://github.com/yourname/weather-app",
    demo: "https://weatherapp.vercel.app",
  },
  {
    id: 4,
    title: "Blog Website",
    technologies: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
    image: "/assets/project4.png",
    repo: "https://github.com/yourname/blog",
    demo: "https://blogsite.vercel.app",
  },
  {
    id: 5,
    title: "E-commerce",
    technologies: [],
    image: "/assets/project5.png",
    repo: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Chat App",
    technologies: [],
    image: "/assets/project6.png",
    repo: "#",
    demo: "#",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visibleCount, setVisibleCount] = useState(4);

  const handleToggle = () => {
    setVisibleCount((prev) =>
      prev === 4 ? allProjects.length : 4
    );
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full min-h-screen px-6 md:px-10 py-16 bg-white transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-12 text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 leading-12 transition-all duration-700 ${
            inView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {allProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={project.id}
              className={`p-4 rounded-xl border-none transition-all duration-700 ${
                inView ? "animate-fadeInUp " : "opacity-0 translate-y-8"
              } bg-none`}
            >
              <div
                className={`relative w-full h-64 overflow-hidden rounded-xl group transform transition-transform duration-500 ${
                  index % 2 === 0 ? "-rotate-3 hover:rotate-0 animate-glow" : "rotate-3 hover:rotate-0 animate-glow"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/20 bg-opacity-40 backdrop-blur-sm text-white font-semibold flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                  <span className="mb-3 text-2xl">{project.title}</span>
                  <div className="flex gap-4">
                    {project.technologies && project.technologies.length > 0 && project.technologies.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center">
                        <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
                        <span className="text-base mt-1">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-gray-600 to-black hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Link */}
        <div className="mt-12 flex justify-center">
          <span
            onClick={handleToggle}
            className="text-red-500 font-semibold cursor-pointer underline-offset-4 hover:underline transition-all duration-300"
          >
            {visibleCount === 4 ? "See More" : "See Less"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;