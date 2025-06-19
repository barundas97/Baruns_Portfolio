import { useInView } from "react-intersection-observer";

const timelineData = [
  {
    type: "certification",
    title: "📜 Complition Modern Front-end Web Development",
    year: "27th March,2025",
    link: "https://www.udemy.com/certificate/UC-0b11bd06-1142-49f1-bce8-c927b76853eb/",
  },
  {
    type: "organization",
    title: "🏢 Emmvee Photovoltaic Power Pvt.Ltd",
    institution: "EL Testing Operator",
    year: "01 Sep,2019 - 30 Jan 2020",
    popup: {
      role:
        "Worked on Production EL Testing on Solar Panels to check foreign micro particles & damaged cells.",
    },
  },
  {
    type: "organization",
    title: "🏢 Kaynes Technology India.Ltd",
    institution: "Quality Testing",
    year: "01 Mar,2018 - 01 Aug 2019",
    popup: {
      role: "Production Quality Testing Operator",
    },
  },
  {
    type: "college",
    title: "🏛️ Diploma in Engineering",
    institution: "Durgapur Polytechnic College",
    year: "2017",
    location: "Durgapur",
    popup: {
      degree: "Diploma in Electrical Engineering",
      cgpa: "69.86",
      percentage: "7.2%",
    },
  },
  {
    type: "certification",
    title: "📜 Diploma in Office Automation & publishing (DOAP)",
    year: "2013 -2014",
    link: "https://drive.google.com/file/d/1_u7aVvxnP0Lm4cSJt0_4GVV2kU3X30rK/view?usp=drive_link",
  },
  {
    type: "school",
    title: "🎓 High School",
    institution: "Kumud Kumari Institution",
    year: "2013",
    location: "Jhargram",
  },
];

const Work_Education = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      className="w-full min-h-screen px-4 md:px-10 py-16 bg-[#1a0f2b] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className={`text-4xl font-bold mb-16 text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 ${
            headingInView ? "animate-fadeInUp" : "opacity-0 translate-y-10"
          }`}
        >
          Work & Education
        </h2>

        <div className="relative">
          {/* Central gradient line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-cyan-400 z-0" />

          <div className="space-y-20">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative w-full flex ${
                    isLeft ? "justify-start" : "justify-end"
                  } items-start z-10 ${
                    inView ? "animate-fadeInUp" : "opacity-0 translate-y-10"
                  } transition-all duration-700`}
                >
                  {/* Glowing point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_cyan] z-20" />

                  {/* Card */}
                  <div
                    className={`relative max-w-md p-6 rounded-xl bg-[#2c1a40] border border-purple-600 animate-glow ${
                      isLeft ? "ml-4 md:ml-10" : "mr-4 md:mr-10"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    {item.institution && (
                      <p className="mb-1 font-medium">
                        {item.institution} — {item.year}
                      </p>
                    )}
                    {item.location && (
                      <p className="text-sm text-neutral-400 mb-2">
                        📍 {item.location}
                      </p>
                    )}
                    {item.popup && (
                      <div className="text-sm space-y-1 text-neutral-300">
                        {item.popup.degree && (
                          <p>🎓 <strong>{item.popup.degree}</strong></p>
                        )}
                        {item.popup.cgpa && <p>📘 CGPA: {item.popup.cgpa}</p>}
                        {item.popup.percentage && (
                          <p>📊 Percentage: {item.popup.percentage}</p>
                        )}
                        {item.popup.role && <p>💼 {item.popup.role}</p>}
                      </div>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 underline mt-2 inline-block hover:text-white"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_Education;
