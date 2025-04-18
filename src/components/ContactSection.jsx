import React from 'react';


export default function Contact() {
    return (
      <section id="contact" className="py-20 px-6 text-white bg-[#121212]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-6">Contact Me</h2>
  
          <p className="text-lg text-gray-300 mb-10">
            Interested in working together or just want to say hi? Feel free to reach out!
          </p>
  
          <div className="flex flex-col gap-4 items-center text-lg">
            <a
              href="mailto:your.earvintumpao@gmail.com"
              className="hover:text-blue-400 transition"
            >
              📧 earvintumpao@gmail.com
            </a>
  
            <a
              href="https://github.com/earvin-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              🐙 GitHub
            </a>
  
            <a
              href="https://linkedin.com/in/earvin-tumpao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }
  