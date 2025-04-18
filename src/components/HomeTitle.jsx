import React from 'react';

export function HomeTitles() {
    return(
        <div className="flex flex-col items-center">
        <img
            src="/site_images/mainPhoto.png"
            alt="Profile placeholder"
            className="w-28 h-28 rounded-full object-cover mb-4 border border-white/20 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold font-orbitron mb-4">Earvin Tumpao</h1>
        <p className="text-xl">Full-stack Developer</p>
        </div>
    )
}