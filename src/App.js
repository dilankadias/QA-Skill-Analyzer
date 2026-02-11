// GitHub Copilot, generate a complete React App component for Skill Gap Visualizer:
// - Import SkillForm, RadarChart, ResetButton
// - Manage state for userSkills and targetSkills
// - Pass props to RadarChart
// - Style the page with TailwindCSS
// - Use sample data if no input

import React, { useState, useEffect } from 'react';
import SkillForm from './components/SkillForm';
import RadarChart from './components/RadarChart';
import ResetButton from './components/ResetButton';
import { sampleUserSkills, sampleTargetSkills } from './data';
import './App.css';

function App() {
  const [userSkills, setUserSkills] = useState(sampleUserSkills);
  const [targetSkills, setTargetSkills] = useState(sampleTargetSkills);

  // Load persisted data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('skillData');
    if (saved) {
      const { user, target } = JSON.parse(saved);
      setUserSkills(user);
      setTargetSkills(target);
    }
  }, []);

  const handleSkillsUpdate = (user, target) => {
    setUserSkills(user);
    setTargetSkills(target);
  };

  const handleReset = () => {
    setUserSkills([]);
    setTargetSkills(sampleTargetSkills);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-950 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧪</span>
            <h1 className="text-xl font-bold text-white">QA Skills Analyzer</h1>
          </div>
          <div className="text-xs text-slate-400 font-medium">Professional Edition</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-semibold border border-blue-700">
              Career Development Platform
            </div>
            <h2 className="text-5xl font-bold text-white mb-3">
              QA Skills Gap Analyzer
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Identify and master your Quality Assurance competencies. Track your journey from QA Engineer to QA Lead with our professional skill assessment platform.
            </p>
            <div className="flex gap-2 justify-center mt-4 text-sm text-slate-400">
              <span>✓ 93+ QA Skills</span>
              <span>•</span>
              <span>✓ 12 Categories</span>
              <span>•</span>
              <span>✓ Career Paths</span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Left Column - Form */}
            <div className="transform transition-all">
              <SkillForm
                onSkillsUpdate={handleSkillsUpdate}
                defaultUserSkills={userSkills}
                defaultTargetSkills={targetSkills}
              />
            </div>

            {/* Right Column - Chart */}
            <div className="transform transition-all">
              <RadarChart userSkills={userSkills} />
            </div>
          </div>

          {/* Professional Stats Section */}
          {targetSkills.length > 0 && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 mb-10 text-white border border-blue-500">
              <h3 className="text-2xl font-bold mb-6">📊 Your QA Development Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-800 bg-opacity-60 rounded-lg p-6 backdrop-blur-sm border border-slate-600">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">
                    {userSkills.length}
                  </div>
                  <p className="text-slate-100 font-semibold">Skills Mastered</p>
                  <p className="text-slate-300 text-sm mt-1">Core competencies acquired</p>
                </div>
                <div className="bg-slate-800 bg-opacity-60 rounded-lg p-6 backdrop-blur-sm border border-slate-600">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    {targetSkills.length - userSkills.length}
                  </div>
                  <p className="text-slate-100 font-semibold">Skills to Develop</p>
                  <p className="text-slate-300 text-sm mt-1">Growth opportunities</p>
                </div>
                <div className="bg-slate-800 bg-opacity-60 rounded-lg p-6 backdrop-blur-sm border border-slate-600">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {targetSkills.length > 0
                      ? Math.round((userSkills.length / targetSkills.length) * 100)
                      : 0}
                    %
                  </div>
                  <p className="text-slate-100 font-semibold">Proficiency Level</p>
                  <p className="text-slate-300 text-sm mt-1">Overall QA mastery</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="text-center mb-12">
            <ResetButton onReset={handleReset} />
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-slate-950 text-slate-300 py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">About</h4>
              <p className="text-sm text-slate-400">Professional QA skills assessment and career development platform for quality assurance professionals.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Features</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ 93+ QA Skills & Tools</li>
                <li>✓ Category-based Assessment</li>
                <li>✓ Career Path Guidance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Stats</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• 12 Skill Categories</li>
                <li>• 2 Career Paths</li>
                <li>• Real-time Progress</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-slate-500 mb-4 md:mb-0">
              <p>© 2026 QA Skills Analyzer. All rights reserved.</p>
            </div>
            <div className="text-center">
              <p className="text-slate-300 font-medium">Designed by <span className="text-blue-400 font-semibold">Dilanka Dias</span></p>
              <p className="text-xs text-slate-600 mt-1">Premium Quality Assurance Development Platform</p>
            </div>
            <div className="text-sm text-slate-500 md:text-right">
              <p>Version 2.0 - Dark Mode</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
