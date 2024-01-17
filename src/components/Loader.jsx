import React from 'react';

const AnimatedDots = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="loader border-t-[0.4em] border-[#d9dfff] bg-[#ffffff00]  w-[5.4em] h-[5.4em] rounded-full animate-spin"></div>
    </div>
  );
};

export default AnimatedDots;
