// GitHub Copilot, generate a React component ResetButton:
// - Clears LocalStorage
// - Resets parent component state
// - Styled with TailwindCSS

import React from 'react';

export default function ResetButton({ onReset }) {
  const handleReset = () => {
    if (window.confirm('Are you sure you want to clear all your selected skills?')) {
      localStorage.removeItem('skillData');
      onReset?.();
    }
  };

  return (
    <button
      onClick={handleReset}
      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      🔄 Reset Profile
    </button>
  );
}
