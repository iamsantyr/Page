import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead AI Engineer',
      avatar: 'A',
      background: 'Former ML researcher at Google with 8+ years in deep learning and neural architecture design. PhD in Computer Science from Stanford.',
      expertise: ['Deep Learning', 'Neural Networks', 'PyTorch', 'Research']
    },
    {
      name: 'Maria Rodriguez',
      role: 'Cloud Architect',
      avatar: 'M',
      background: 'AWS Certified Solutions Architect with expertise in building scalable AI infrastructure. Led cloud migrations for Fortune 500 companies.',
      expertise: ['AWS', 'Kubernetes', 'Microservices', 'DevOps']
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