// QA Skills Category Progress Chart
// Shows proficiency by skill category instead of individual skills

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define QA skill categories
const QA_CATEGORIES = {
  'Manual Testing': ['Manual Testing', 'Test Case Design', 'Requirements Analysis', 'Exploratory Testing', 'Bug Reporting', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'UAT Testing'],
  'Test Automation': ['Selenium', 'Cypress', 'Appium', 'TestNG', 'JUnit', 'Pytest', 'Robot Framework', 'Behavior Driven Development (BDD)'],
  'API Testing': ['REST API Testing', 'API Automation', 'Postman', 'Rest Assured', 'SoapUI', 'JSON/XML', 'Web Services Testing', 'GraphQL Testing'],
  'Performance Testing': ['Load Testing', 'Performance Testing', 'Stress Testing', 'JMeter', 'LoadRunner', 'New Relic', 'Profiling & Monitoring'],
  'Mobile Testing': ['Mobile Testing', 'Android Testing', 'iOS Testing', 'Appium', 'XCUITest', 'EarlGrey', 'Espresso'],
  'Test Management': ['JIRA', 'TestRail', 'TestLink', 'Azure DevOps', 'HP ALM (Quality Center)', 'BugZilla', 'Confluence', 'Test Case Management'],
  'Programming': ['Java', 'Python', 'JavaScript', 'C#', 'SQL', 'HTML/CSS Basics', 'Git/Version Control', 'Shell Scripting'],
  'CI/CD & DevOps': ['Jenkins', 'Git', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'GitHub Actions', 'GitLab CI'],
  'Specialized Testing': ['Security Testing', 'Database Testing', 'Cross-browser Testing', 'Accessibility Testing (WCAG)', 'Localization Testing', 'Compatibility Testing'],
  'Monitoring & Debugging': ['Charles Proxy', 'Fiddler', 'Browser DevTools', 'Wireshark', 'Log Analysis', 'Network Testing'],
  'QA Leadership': ['Test Strategy', 'Test Planning', 'Risk Analysis', 'Quality Metrics', 'Defect Management', 'Team Leadership', 'Stakeholder Management', 'Process Improvement', 'Mentoring & Training', 'Agile Methodology', 'Scrum', 'Kanban'],
  'Soft Skills': ['Communication', 'Problem Solving', 'Critical Thinking', 'Documentation', 'Attention to Detail', 'Time Management', 'Adaptability'],
};

export default function RadarChart({ userSkills = [] }) {
  // Calculate proficiency by category
  const categoryData = Object.entries(QA_CATEGORIES).map(([category, skills]) => {
    const mastered = skills.filter(skill => userSkills.includes(skill)).length;
    const proficiency = skills.length > 0 ? Math.round((mastered / skills.length) * 100) : 0;
    return {
      category,
      mastered,
      total: skills.length,
      proficiency,
    };
  });

  const data = {
    labels: categoryData.map(c => c.category),
    datasets: [
      {
        label: 'Proficiency %',
        data: categoryData.map(c => c.proficiency),
        backgroundColor: categoryData.map(c => {
          if (c.proficiency >= 80) return '#10b981'; // Green
          if (c.proficiency >= 60) return '#3b82f6'; // Blue
          if (c.proficiency >= 40) return '#f59e0b'; // Amber
          if (c.proficiency >= 20) return '#ef5350'; // Light Red
          return '#9ca3af'; // Gray
        }),
        borderColor: '#1f2937',
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const idx = context.dataIndex;
            return `${categoryData[idx].mastered}/${categoryData[idx].total} skills - ${context.parsed.x}%`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
  };

  const overallProficiency = userSkills.length > 0 
    ? Math.round((userSkills.length / Object.values(QA_CATEGORIES).flat().length) * 100)
    : 0;

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">📊 Proficiency Dashboard</h2>
        <p className="text-purple-100 text-sm mt-1">Category-based skill assessment</p>
      </div>

      <div className="p-6">
        {Object.values(QA_CATEGORIES).flat().length > 0 ? (
          <>
            <div className="mb-8 p-5 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600">
              <p className="text-sm text-slate-300 font-medium mb-2">Overall QA Proficiency</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {overallProficiency}%
                </div>
                <div className="flex-1 h-3 bg-slate-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" 
                    style={{ width: `${overallProficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', height: '450px' }} className="mb-8">
              <Bar data={data} options={options} />
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-4">Category Progress</h3>
              <div className="grid grid-cols-2 gap-3">
                {categoryData.map((cat) => (
                  <div key={cat.category} className="p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-600 hover:shadow-md transition">
                    <p className="font-semibold text-slate-100 text-sm mb-2">{cat.category}</p>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-slate-400">{cat.mastered}/{cat.total}</p>
                      <p className="text-sm font-bold text-slate-200">{cat.proficiency}%</p>
                    </div>
                    <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500" 
                        style={{ width: `${cat.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="p-12 text-center">
            <div className="text-5xl mb-4">📝</div>
            <p className="text-slate-300 font-medium">Select skills to see your proficiency dashboard</p>
            <p className="text-slate-400 text-sm mt-2">Choose from 12 QA skill categories and track your development</p>
          </div>
        )}
      </div>
    </div>
  );
}
