import React from 'react';

// src/components/Skills.jsx
const skills = [
  { name: "HTML5", icon: "🟧" },
  { name: "CSS3", icon: "🟦" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "PostgreSQL", icon: "🐘" }, // Elephant emoji = Postgres mascot
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Flask", icon: "🧪" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔧" },
  { name: "Vite", icon: "⚡" },
  { name: "GitHub", icon: "🐱" },
];

  
  
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
  
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  