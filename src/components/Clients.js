import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'TechCorp', initial: 'T' },
    { name: 'FinanceFlow', initial: 'F' },
    { name: 'HealthTech', initial: 'H' },
    { name: 'AutoDrive', initial: 'A' },
    { name: 'CloudScale', initial: 'C' },
    { name: 'DataViz', initial: 'D' }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            We've partnered with innovative companies across various industries
          </p>
        </div>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" data-aos="fade-up" key={index}>
              <div className="client-logo">{client.initial}</div>
              <div className="client-name">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;