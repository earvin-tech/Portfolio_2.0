// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-black/80 backdrop-blur text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold font-orbitron">Earvin Tumpao</h1>

        <nav className="hidden md:flex gap-6 text-sm uppercase">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
