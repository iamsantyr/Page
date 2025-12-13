import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sergio',
      role: 'AI & Backend Engineer',
      avatar: 'S',
      background: 'Specialized in machine learning, transformers, and LLM integration. Expert in backend development and infrastructure deployment using Docker and virtual machines.',
      expertise: ['Machine Learning', 'Transformers', 'LLM Integration', 'Backend Development', 'Docker', 'Virtual Machines']
    },
    {
      name: 'Santiago',
      role: 'Frontend & Quality Engineer',
      avatar: 'S',
      background: 'Expert in frontend development, comprehensive testing methodologies, and technical documentation. Ensures optimal user experience and system reliability.',
      expertise: ['Frontend Development', 'Testing', 'Documentation', 'Quality Assurance', 'User Experience']
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate experts dedicated to pushing the boundaries of AI
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" data-aos="fade-up" key={index}>
              <div className="team-avatar">{member.avatar}</div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-background">{member.background}</p>
                <div className="team-expertise">
                  {member.expertise.map((skill, skillIndex) => (
                    <span className="expertise-tag" key={skillIndex}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;