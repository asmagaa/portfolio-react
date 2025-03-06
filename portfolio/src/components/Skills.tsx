import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 50 },
        { name: "TypeScript", level: 50 },
        { name: "React", level: 40 }
      ]
    },
    {
      title: "Programowanie (basic?)",
      skills: [
        { name: "C++", level: 60 },
        { name: "C#", level: 35 },
        { name: "Java 🏳️‍🌈", level: 5 }
      ]
    },
    {
      title: "Narzędzia",
      skills: [
        { name: "Git", level: 85 },
        { name: "Vite", level: 75 },
        { name: "npm", level: 80 },
        { name: "VS Code", level: 95 }
      ]
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Moje Umiejętności</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-item-name">{skill.name}</span>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;