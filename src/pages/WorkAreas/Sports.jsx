import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Trophy, Users, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Sports() {
  const initiatives = [
    { title: 'Youth Sports Camps', desc: 'Organizing cricket, football, and athletics training for neighborhood children.' },
    { title: 'Fitness Awareness', desc: 'Promoting Yoga and basic physical fitness routines for all age groups.' },
    { title: 'Talent Scouting', desc: 'Identifying promising young athletes and providing them with coaching support.' },
    { title: 'Sports Infrastructure', desc: 'Advocating for better maintenance and use of local public parks and sports grounds.' }
  ];

  return (
    <PageLayout title="Sports & Fitness" subtitle="Promoting physical well-being and team spirit through local sports.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><Trophy size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Champions of the Future</h2>
            <p className="text-secondary m-0">Sports build character, discipline, and community bonds. We aim to revive the playground culture in Ghatkopar.</p>
          </div>
        </div>

        <h3 className="mb-8">Our Sports Focus</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <h2 className="text-white">Active Lifestyle Impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>1,000+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Young Athletes</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>50+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Tournaments Held</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>5+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Sports Clubs</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Sponsor a Tournament</h2>
              <p className="text-secondary">Help us organize the next local inter-slum cricket tournament and provide kits for players.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/donate" className="btn btn-primary">Support Sports <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
