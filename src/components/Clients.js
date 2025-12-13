import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'TechCorp', industry: 'Technology', logo: 'TC' },
    { name: 'FinanceFlow', industry: 'FinTech', logo: 'FF' },
    { name: 'HealthTech', industry: 'Healthcare', logo: 'HT' },
    { name: 'RetailMax', industry: 'E-commerce', logo: 'RM' },
    { name: 'AutoDrive', industry: 'Automotive', logo: 'AD' },
    { name: 'EduSmart', industry: 'Education', logo: 'ES' },
    { name: 'GreenEnergy', industry: 'Energy', logo: 'GE' },
    { name: 'SecureBank', industry: 'Banking', logo: 'SB' }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            We work with forward-thinking companies across various industries
          </p>
        </div>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <div className="client-logo">{client.logo}</div>
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-industry">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="clients-stats">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Client Retention</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Industries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;