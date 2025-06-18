import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full min-h-screen bg-[#1a0f2b] text-white flex items-center justify-center px-6 md:px-10 py-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* === Left Text Content === */}
        <div className="md:w-2/3 text-left space-y-6">
          <h2
            className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-700 ${
              inView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>

          <p
            className={`text-base leading-7 text-neutral-300 transition-all duration-700 ${
              inView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            I'm <span className="text-white font-semibold">Barun Das</span>, a
            passionate Frontend Developer with a strong focus on building
            clean, responsive, and interactive UIs using modern tools like{" "}
            <span className="text-sky-200 font-medium">React.js</span>,{" "}
            <span className="text-sky-400 font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-purple-400 font-medium">Bootstrap</span>.
            <br />
            <br />
            I enjoy exploring creative UI design, love working with
            Generative-AI tools, and constantly improve my craft by building
            real-world projects.
          </p>
        </div>

        {/* === Right Profile Image === */}
        <div
          className={`md:w-1/3 flex justify-center transition-all duration-700 ${
            inView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_1280.jpg"
            alt="Barun Das"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-purple-600 animate-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
