import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    // Welcome sequence timing
    setTimeout(() => {
      setShowWelcome(false);
      setTimeout(() => setIsLoaded(true), 500);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  // Add mouse move effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.bento-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      {/* Welcome Animation */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A] transition-opacity duration-1000
        ${showWelcome ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center">
          <h1 className="welcome-text text-7xl font-bold bg-gradient-to-r from-[#9b87f5] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className={`bento-grid opacity-0 transform translate-y-4
        ${isLoaded ? 'animate-content-load' : ''}`}>
        {/* Welcome Card */}
        <div className="bento-card col-span-2 group">
          <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">welcome</div>
          <div className="flex flex-col justify-center h-full">
            <div className="overflow-hidden">
              <h1 className={`text-6xl font-bold mb-4 bg-gradient-to-r from-[#9b87f5] via-[#8B5CF6] to-[#D946EF] 
                bg-clip-text text-transparent transform translate-y-full
                ${isLoaded ? 'animate-slide-up' : ''}`}>
                Hi, I'm <span className="text-[#8B5CF6]">Your Name</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className={`text-gray-300 text-xl leading-relaxed transform translate-y-full
                ${isLoaded ? 'animate-slide-up-delay' : ''}`}>
                A software developer with a passion for creating beautiful and functional web experiences
              </p>
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About me
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-6">
            <p className="text-lg text-gray-400">My tools:</p>
            <ul className="space-y-4">
              {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((tool) => (
                <li key={tool} className="flex items-center space-x-3 text-gray-300">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card group">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg text-gray-400 mb-4 font-mono">Current Time</h2>
            <p className="text-4xl font-bold font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {time.toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="flex space-x-6 justify-center">
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-purple-400" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:your@email.com", color: "hover:text-pink-400" },
              { icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-400" }
            ].map(({ icon: Icon, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full hover:bg-white/10 transition-all duration-300 ${color}`}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Project 1", desc: "Description of your amazing project" },
              { title: "Project 2", desc: "Description of another cool project" }
            ].map((project) => (
              <div 
                key={project.title} 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;