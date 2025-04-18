import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 px-6 text-white bg-[#0c0c0c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12">About Me</h2>
  
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Hey, I’m Earvin — a full-stack web developer based in Melbourne, with a passion for crafting clean, functional, and responsive web experiences.
            </p>
  
            <p>
              I build with modern frontend frameworks like <span className="text-white">React</span> and <span className="text-white">Tailwind CSS</span>, and develop backend APIs using <span className="text-white">Express</span>, <span className="text-white">Flask</span>, and databases like <span className="text-white">PostgreSQL</span> and <span className="text-white">MongoDB</span>.
            </p>
  
            <p>
              My journey started with curiosity about how websites work. I began by learning HTML and CSS, then quickly moved into full-stack development. I'm currently studying at <span className="text-white">Coder Academy</span>, where I’ve built real-world projects and strengthened my ability to work across the stack.
            </p>
  
            <p>
              I’m excited to join a team where I can contribute to impactful projects, grow as a developer, and collaborate with others who are passionate about building great software.
            </p>
          </div>
        </div>
      </section>
    );
  }
  