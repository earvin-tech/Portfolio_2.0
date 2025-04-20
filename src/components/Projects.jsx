import React from 'react';

// src/components/Projects.jsx
const projects = [
    {
      title: "Task Manager API [IN PROGRESS - TO BE DEPLOYED]",
      description: "A backend API for managing tasks with deadlines and tags, built with Express and MongoDB.",
      link: "#",
      code: "https://github.com/earvin-tech/task_manager"
    },
    {
      title: "Miracle Café Website [IN PROGRESS]",
      description: "Responsive café website built with Vite, React, and Tailwind. Includes Google Maps and carousel.",
      link: "https://miraclecafekew.netlify.app/",
      code: "https://github.com/earvin-tech/miracle_cafe"
    },
    {
      title: "Fitness API",
      description: "An API that allows you to track workouts, built with Flask.",
      link: "https://fitness-api-ky6u.onrender.com",
      code: "https://github.com/earvin-tech/Book_Application"
    }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 text-white bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12">Projects</h2>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.link} className="text-blue-400 hover:underline">Live</a>
                  <a href={project.code} className="text-blue-400 hover:underline">Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  