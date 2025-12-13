import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      background: 'PhD in Computer Science from Stanford. Former ML Lead at Google AI with 10+ years experience in deep learning and neural networks.',
      expertise: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'Research Leadership']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      background: 'MS in Software Engineering from MIT. Built scalable ML systems at Netflix and Amazon, specializing in production AI deployment.',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'MLOps', 'Team Leadership']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Senior Data Scientist',
      background: 'PhD in Statistics from Cambridge. Expert in natural language processing and predictive analytics with published research in top-tier conferences.',
      expertise: ['NLP', 'Statistical Modeling', 'Time Series', 'Research']
    },
    {
      name: 'David Kim',
      role: 'AI Solutions Architect',
      background: 'MS in AI from Carnegie Mellon. Designed and implemented AI solutions for Fortune 500 companies across finance, healthcare, and retail.',
      expertise: ['Solution Design', 'Business Analysis', 'AI Strategy', 'Client Relations']
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Experts</h2>
          <p className="section-subtitle">
            World-class talent passionate about pushing the boundaries of AI
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
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
        
        <div className="team-cta">
          <h3>Want to work with us?</h3>
          <p>We're always looking for talented individuals to join our team</p>
          <Link to="/contact" className="btn btn-primary">
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;