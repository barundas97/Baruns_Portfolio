import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: "Technologies",
      items: [
        { name: "HTML", color: "from-orange-500 to-red-500" },
        { name: "CSS", color: "from-sky-500 to-blue-500" },
        { name: "Bootstrap", color: "from-purple-600 to-indigo-600" },
        { name: "Tailwind CSS", color: "from-cyan-500 to-blue-500" },
        { name: "JavaScript", color: "from-yellow-400 to-orange-400" },
        { name: "React", color: "from-sky-400 to-cyan-400" },
        { name: "Redux", color: "from-purple-400 to-violet-500" },
      ],
    },
    {
      title: "Version Control",
      items: [
        { name: "Git", color: "from-red-700 to-red-500" },
        { name: "GitHub", color: "from-gray-700 to-black" },
      ],
    },
    {
      title: "AI Tools",
      items: [
        { name: "GitHub Copilot", color: "from-gray-700 to-black" },
        { name: "ChatGPT", color: "from-emerald-500 to-teal-400" },
      ],
    },
    {
      title: "Package Manager",
      items: [
        { name: "NPM", color: "from-red-600 to-pink-600" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full min-h-screen px-6 md:px-10 py-16 bg-[#1a0f2b] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-12 text-left leading-11 transition-all duration-700 ${
            inView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          Skills
        </h2>

        <div className="space-y-12">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`transition-all duration-700 ${
                inView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {section.items.map((item) => (
                  <span
                    key={item.name}
                    className={`px-4 py-2 rounded-full font-medium text-white bg-gradient-to-r ${item.color} hover:scale-105 transition-transform duration-300`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
