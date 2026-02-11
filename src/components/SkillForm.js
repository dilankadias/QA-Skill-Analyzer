// GitHub Copilot, generate a React component SkillForm:
// - Form to input user skills and target skills
// - Use checkboxes or tags
// - Save input to LocalStorage
// - Styled with TailwindCSS
// - Call a callback prop when skills are updated

import React, { useState, useEffect } from 'react';

export default function SkillForm({ onSkillsUpdate, defaultUserSkills, defaultTargetSkills }) {
  const [userSkills, setUserSkills] = useState(defaultUserSkills || []);
  const [targetSkills, setTargetSkills] = useState(defaultTargetSkills || []);
  const [inputSkill, setInputSkill] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('skillData');
    if (saved) {
      const { user, target } = JSON.parse(saved);
      setUserSkills(user);
      setTargetSkills(target);
    }
  }, []);

  // Save to localStorage whenever skills change
  useEffect(() => {
    localStorage.setItem('skillData', JSON.stringify({
      user: userSkills,
      target: targetSkills,
    }));
    onSkillsUpdate?.(userSkills, targetSkills);
  }, [userSkills, targetSkills, onSkillsUpdate]);

  const addSkillToTarget = () => {
    if (inputSkill.trim() && !targetSkills.includes(inputSkill)) {
      setTargetSkills([...targetSkills, inputSkill]);
      setInputSkill('');
    }
  };

  const toggleUserSkill = (skill) => {
    setUserSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const removeTargetSkill = (skill) => {
    setTargetSkills(prev => prev.filter(s => s !== skill));
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">🎯 Select Your QA Skills</h2>
        <p className="text-blue-100 text-sm mt-1">Build your proficiency profile</p>
      </div>

      <div className="p-6">
        {/* Target Skills Input */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-200 mb-3">
            Add Custom Skills
          </label>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSkillToTarget()}
              placeholder="e.g., Selenium, TestRail, API Testing"
              className="flex-1 px-4 py-2 border border-slate-600 bg-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <button
              onClick={addSkillToTarget}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition shadow-md"
            >
              Add
            </button>
          </div>

          {targetSkills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 p-4 bg-slate-700 rounded-lg border border-slate-600">
              {targetSkills.map(skill => (
                <div
                  key={skill}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium"
                >
                  {skill}
                  <button
                    onClick={() => removeTargetSkill(skill)}
                    className="hover:text-blue-200 cursor-pointer transition"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Skills Checkboxes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-semibold text-slate-200">
              ✅ Your Current Skills
            </label>
            <span className="text-xs text-slate-400 font-medium">
              {userSkills.length} / {targetSkills.length} selected
            </span>
          </div>
          
          {targetSkills.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto border border-slate-600 p-4 rounded-lg bg-slate-700">
              {targetSkills.map(skill => (
                <label key={skill} className="flex items-center gap-3 cursor-pointer hover:bg-slate-600 p-2 rounded transition">
                  <input
                    type="checkbox"
                    checked={userSkills.includes(skill)}
                    onChange={() => toggleUserSkill(skill)}
                    className="w-4 h-4 accent-green-500 cursor-pointer"
                  />
                  <span className="text-slate-200 text-sm font-medium">{skill}</span>
                </label>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-700 rounded-lg border-2 border-dashed border-slate-600">
              <p className="text-slate-300 font-medium">No skills added yet</p>
              <p className="text-slate-400 text-sm mt-1">Start by adding custom skills above or use the pre-loaded QA skills</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
