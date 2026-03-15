import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { ShieldAlert, Zap, Truck, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function DisasterRelief() {
  const initiatives = [
    { title: 'Emergency Response', desc: 'Mobilising volunteer teams for immediate rescue and support during Mumbai floods or fires.' },
    { title: 'Relief Distribution', desc: 'Providing dry ration, medication, and essential kits to families displaced by crises.' },
    { title: 'Rehabilitation Support', desc: 'Long-term assistance for rebuilding livelihoods after a disaster has passed.' },
    { title: 'Resource Mobilization', desc: 'Partnering with logistics and supply chain providers for rapid movement of aid.' }
  ];

  return (
    <PageLayout title="Disaster Relief & Response" subtitle="Standing with the community during their toughest hours.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><ShieldAlert size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Rapid Response for Crises</h2>
            <p className="text-secondary m-0">When disaster strikes, GWA is on the frontlines to ensure that help reaches the most vulnerable without delay.</p>
          </div>
        </div>

        <h3 className="mb-8">Relief Strategy</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card" style={{ borderTopColor: 'var(--accent)' }}>
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <h2 className="text-white">Standing Strong Together</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>2,500+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Families Helped</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>48 hrs</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Response Time</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>10+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Townships Covered</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Contribute to Relief Fund</h2>
              <p className="text-secondary">We maintain a reserve fund to ensure we can act instantly during seasonal calamities or accidents.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/donate" className="btn btn-primary">Donate to Relief <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
