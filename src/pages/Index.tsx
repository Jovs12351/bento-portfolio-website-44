import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1a1a1a] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2 group">
          <div className="absolute top-4 right-4 text-xs text-gray-500">welcome</div>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hi, I'm <span className="text-blue-400">Your Name</span>
            </h1>
            <p className="text-gray-300 text-xl">
              A software developer with a passion for creating beautiful and functional web experiences
            </p>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About me</h2>
          <p className="text-gray-300 text-lg mb-6">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">My tools:</p>
            <ul className="space-y-3">
              {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((tool) => (
                <li key={tool} className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card group">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
            <p className="text-4xl font-bold font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {time.toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
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
                className={`p-3 rounded-full hover:bg-white/10 transition-colors ${color}`}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Project 1", desc: "Description of your amazing project" },
              { title: "Project 2", desc: "Description of another cool project" }
            ].map((project) => (
              <div key={project.title} className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
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