# 🧪 QA Skills Gap Analyzer

A professional Quality Assurance skills assessment and career development platform built with React. Identify your QA competencies, track your development journey, and master the skills needed to advance from QA Engineer to QA Lead.

**Version:** 2.0 - Dark Mode Edition  
**Last Updated:** February 2026  
**License:** MIT  
**Designer:** Dilanka Dias

---

## 🌟 Features

- **93+ QA Skills** - Comprehensive database covering manual testing, automation, API testing, performance testing, mobile testing, and more
- **12 Skill Categories** - Organized assessment across all QA disciplines
- **Real-Time Proficiency Tracking** - Instant calculation of mastery levels per category
- **Dark Mode by Default** - Modern, eye-friendly professional interface
- **Data Persistence** - All selections automatically saved to localStorage
- **Category-Based Analytics** - Visual dashboard showing proficiency by skill category
- **Zero Backend Required** - Fully client-side, works offline
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Professional Styling** - Enterprise-grade UI with gradients and smooth animations

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone or download the repository
cd skill-gap-visualizer

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-reloads when you make changes.

---

## 📖 Usage

### 1. **Add Skills**
   - Use the "Add Custom Skills" input field to add specific QA skills
   - Or select from pre-loaded QA skills listed below
   - Press Enter or click "Add" to add custom skills

### 2. **Select Your Skills**
   - Check off skills you've already mastered
   - Your selections are immediately saved to your browser
   - See real-time count of selected skills

### 3. **View Your Dashboard**
   - Watch your proficiency percentage update in real-time
   - See category-by-category breakdown
   - Identify skill gaps and growth opportunities

### 4. **Reset Profile**
   - Click "🔄 Reset Profile" to clear all selections
   - Starts fresh with a clean slate

---

## 📊 QA Skill Categories (12 Total)

### 1. **Manual Testing** (9 Skills)
   - Manual Testing, Test Case Design, Requirements Analysis, Exploratory Testing, Bug Reporting, Regression Testing, Smoke Testing, Sanity Testing, UAT Testing

### 2. **Test Automation** (8 Skills)
   - Selenium, Cypress, Appium, TestNG, JUnit, Pytest, Robot Framework, Behavior Driven Development (BDD)

### 3. **API Testing** (8 Skills)
   - REST API Testing, API Automation, Postman, Rest Assured, SoapUI, JSON/XML, Web Services Testing, GraphQL Testing

### 4. **Performance Testing** (7 Skills)
   - Load Testing, Performance Testing, Stress Testing, JMeter, LoadRunner, New Relic, Profiling & Monitoring

### 5. **Mobile Testing** (7 Skills)
   - Mobile Testing, Android Testing, iOS Testing, Appium, XCUITest, EarlGrey, Espresso

### 6. **Test Management** (8 Skills)
   - JIRA, TestRail, TestLink, Azure DevOps, HP ALM (Quality Center), BugZilla, Confluence, Test Case Management

### 7. **Programming** (8 Skills)
   - Java, Python, JavaScript, C#, SQL, HTML/CSS Basics, Git/Version Control, Shell Scripting

### 8. **CI/CD & DevOps** (7 Skills)
   - Jenkins, Git, Docker, Kubernetes, CI/CD Pipelines, GitHub Actions, GitLab CI

### 9. **Specialized Testing** (6 Skills)
   - Security Testing, Database Testing, Cross-browser Testing, Accessibility Testing (WCAG), Localization Testing, Compatibility Testing

### 10. **Monitoring & Debugging** (6 Skills)
   - Charles Proxy, Fiddler, Browser DevTools, Wireshark, Log Analysis, Network Testing

### 11. **QA Leadership** (12 Skills)
   - Test Strategy, Test Planning, Risk Analysis, Quality Metrics, Defect Management, Team Leadership, Stakeholder Management, Process Improvement, Mentoring & Training, Agile Methodology, Scrum, Kanban

### 12. **Soft Skills** (7 Skills)
   - Communication, Problem Solving, Critical Thinking, Documentation, Attention to Detail, Time Management, Adaptability

---

## 🏗️ Project Architecture

### Components

```
src/
├── App.js                          # Main application component
├── components/
│   ├── SkillForm.js               # Skill input and selection form
│   ├── RadarChart.js              # Proficiency dashboard and visualization
│   └── ResetButton.js             # Reset/clear button
├── data.js                        # QA skills database
├── index.js                       # React entry point
├── index.css                      # Global styles (TailwindCSS)
└── App.css                        # App-specific styles
```

### Data Flow

```
App.js (State Management)
  ├── SkillForm.js (Input Component)
  │   └── Updates userSkills array
  ├── RadarChart.js (Display Component)
  │   └── Calculates and shows proficiency
  └── ResetButton.js (Action Component)
      └── Clears all selections
```

---

## 🛠️ Technologies Used

- **React 19.2.4** - UI framework
- **Chart.js 4.5.1** - Data visualization library
- **react-chartjs-2 5.3.1** - React wrapper for Chart.js
- **TailwindCSS 3.x** - Utility-first CSS framework
- **PostCSS 8** - CSS processing
- **Autoprefixer** - Vendor prefix autoprefixer
- **create-react-app** - Project scaffolding

---

## 💾 Data Structure

### LocalStorage Format

```javascript
{
  "skillData": {
    "user": ["Selenium", "JIRA", "Python", ...],
    "target": ["Selenium", "JIRA", "Python", "Cypress", ...]
  }
}
```

### Category Calculation

```javascript
// For each category:
proficiency = (mastered_count / total_count) * 100

// Overall proficiency:
overall = (total_mastered / total_all_skills) * 100
```

---

## 🎨 Styling & Theming

### Dark Mode Default
- Background: Gradient from `slate-900` → `slate-800`
- Cards: Dark gradient backgrounds
- Text: Light colors for contrast
- Accents: Blue, purple, and emerald gradients
- Borders: Dark slate with subtle visibility

### Responsive Breakpoints
- **Mobile:** Single column layout
- **Tablet:** 1-2 column grid
- **Desktop:** Full 2-column grid with professional spacing

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

**Current Build Size:**
- JavaScript: 131.61 kB (gzipped)
- CSS: 4.26 kB (gzipped)
- Total: ~136 kB

### Deploy to Vercel/Netlify

```bash
# Build locally
npm run build

# Deploy build folder to your hosting service
```

### Local Testing

```bash
# Serve production build locally
npm install -g serve
serve -s build
```

---

## 🧪 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Creates an optimized production build

### `npm run eject`
Exposes all configuration (one-way operation - not recommended)

---

## 🎯 Career Paths

### QA Engineer Path
1. Master manual testing fundamentals
2. Learn test automation (Selenium, Cypress)
3. Develop programming skills (Python, Java)
4. Add API testing expertise
5. Specialize in performance or mobile testing

### QA Lead Path
1. Complete all QA Engineer skills
2. Master test management tools (JIRA, TestRail)
3. Develop leadership and soft skills
4. Learn strategic skill planning
5. Master process improvement methodologies
6. Develop mentoring capabilities

---

## 🚀 Future Enhancements

- [ ] Export skill profile as PDF
- [ ] Comparison with industry benchmarks
- [ ] Recommended learning resources per skill
- [ ] Progress timeline and milestone tracking
- [ ] Team skill aggregation and analytics
- [ ] Integration with learning platforms (Udemy, LinkedIn)
- [ ] Skill difficulty levels (Entry, Intermediate, Advanced)
- [ ] Multi-language support
- [ ] Cloud sync across devices

---

## 🐛 Known Limitations

- Data stored locally; clearing browser cache removes progress
- No multi-device sync (consider cloud storage for future versions)
- No real-time collaboration features
- No mobile app (web-responsive only)

---

## 📝 Contributing

### How to Contribute

1. **Add Skills:** Edit `src/data.js` to add new QA skills to categories
2. **Improve UI:** Modify Tailwind classes in component files
3. **Fix Bugs:** Submit issues and pull requests
4. **Suggest Features:** Open GitHub discussions

### Development Workflow

```bash
# 1. Install dependencies
npm install

# 2. Make changes
# Edit files in src/

# 3. Test locally
npm start

# 4. Build and verify
npm run build

# 5. Commit and push
git add .
git commit -m "Your feature description"
git push origin main
```

---

## 📄 License

MIT License - Feel free to use, modify, and distribute this project.

---

## 🙏 Credits

**Designed by:** Dilanka Dias  
**Project:** QA Skills Gap Analyzer  
**Edition:** Professional v2.0  

Special thanks to:
- React community for excellent tooling
- Chart.js for powerful visualization
- TailwindCSS for modern styling framework
- Create React App for project scaffolding

---

## 📞 Support

For issues, questions, or feature requests:
- Open a GitHub issue
- Contact the development team
- Check documentation in the project repository

---

## 🎓 Learning Resources

### Recommended Learning Paths

- **Selenium Automation:** [Official Documentation](https://www.selenium.dev/)
- **API Testing:** [Postman Learning Center](https://learning.postman.com/)
- **Performance Testing:** [JMeter Official Guide](https://jmeter.apache.org/usermanual/)
- **Test Management:** [JIRA Documentation](https://www.atlassian.com/software/jira)
- **QA Leadership:** Industry articles and case studies

---

## 🔄 Changelog

### Version 2.0 (Current)
- Dark mode enabled by default
- Professional UI redesign
- Enhanced category visualization
- Improved responsive design
- Better performance metrics

### Version 1.0
- Initial release with 93 QA skills
- Bar chart visualization
- LocalStorage data persistence
- Basic skill tracking

---

**Thank you for using QA Skills Gap Analyzer!** 🎉

Start tracking your QA journey today and master all the skills needed for your next career milestone.
