import React from 'react';


export default function Background({ children }) {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-start justify-center pt-28
"
      style={{
        backgroundImage: "url('/site_images/portfolioBackground.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white text-center p-4">
        {children}
      </div>
    </div>
  );
}