import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Laptop, Globe, ShieldCheck, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Digital() {
  const initiatives = [
    { title: 'Digital Literacy', desc: 'Providing basic computer training to children and adults in underserved neighborhoods.' },
    { title: 'Online Governance', desc: 'Helping residents access government portals for documentation and schemes.' },
    { title: 'Cyber Security Awareness', desc: 'Workshops for senior citizens and students on safe internet and mobile usage.' },
    { title: 'IT Skill Center', desc: 'A dedicated lab for advanced software and vocational tech training.' }
  ];

  return (
    <PageLayout title="Digital Empowerment" subtitle="Bridging the digital divide in the heart of Ghatkopar.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><Laptop size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Technology for Inclusion</h2>
            <p className="text-secondary m-0">We ensure that no citizen is left behind in India's digital revolution. Knowledge of tech is the key to modern citizenship.</p>
          </div>
        </div>

        <h3 className="mb-8">Digital Strategy</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <h2 className="text-white">Connecting Ghatkopar</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>1,500+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Digitally Literate</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>5+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Computer Labs</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>24/7</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Support Access</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Donate a Laptop</h2>
              <p className="text-secondary">If you have old but working digital devices, donate them to our community centers for student use.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/donate" className="btn btn-primary">Donate Devices <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
