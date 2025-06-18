import profile from "../assets/ownPic.png";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen 
                 flex items-center 
                 justify-center 
                 px-4
                 md:px-12 
                 relative 
                 bg-cover 
                 bg-center 
                 bg-no-repeat 
                 bg-fixed"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/*Content*/}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 items-center z-10 py-12 animate-fadeInUp">

            {/*Right -Profile Pic & Tech Logos*/}
        <div className="flex flex-1 flex-col items-center space-y-6">
            <div className="w-40 h-40 md:w-60 md:h-60 rounded-full border-[3px] border-gradient-to-r from-purple-400 to-cyan-400 shadow-xl overflow-hidden animate-glow md:mb-0 mb-8">

                <img src={profile} 
                     alt="Profile" 
                     className="w-full h-full object-cover"
                     />
            </div>
        </div>
        {/* Left:Animated Text & Button Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <TypeAnimation
            sequence={[
              "I'm Barun Das",
              2000,
              "I'm a Frontend Developer",
              2000,
              "I'm a React UI Designer",
              2000,
              "I'm Gen-AI Enthusiast",
              2000
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="text-3xl 
                     md:text-5xl
                     leading-15
                     font-bold 
                     bg-gradient-to-r 
                     from-cyan-400 
                     to-yellow-400 
                     text-transparent 
                      bg-clip-text 
                      md:bg-gradient-to-r 
                    md:from-pink-400 
                     md:to-purple-600
                       md:text-transparent 
                       md:bg-clip-text"
          />

          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6">
            <a
              href="/Barun_Das_frontend_Resume.pdf"
              download={"Barun's_portfolio.pdf"}
              className="px-6 py-3 
                          bg-gradient-to-r 
                        from-purple-600 
                        to-pink-600 
                        text-white 
                          rounded-l-lg
                          shadow-md
                          hover:scale-105
                          transition-all"
            >
              DownLoad CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
