import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Briefcase, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Livelihood() {
  const initiatives = [
    { title: 'Vocational Training', desc: 'Job-oriented courses in retail, basic accounting, and hospital management for local youth.' },
    { title: 'Micro-Finance Support', desc: 'Assisting small entrepreneurs with credit access and linkage to government schemes.' },
    { title: 'Placement Assistance', desc: 'Connecting trained candidates with local businesses and industries in Mumbai.' },
    { title: 'Entrepreneurship Labs', desc: 'Mentoring programs for those looking to start their own small-scale social ventures.' }
  ];

  return (
    <PageLayout title="Livelihood & Employment" subtitle="Creating pathways to financial independence and dignity.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><Briefcase size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Empowering Economic Growth</h2>
            <p className="text-secondary m-0">We focus on bridging the gap between talent and opportunity by providing skills that the modern market demands.</p>
          </div>
        </div>

        <h3 className="mb-8">Economic Initiatives</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
                <div className="flex align-center gap-small mb-4">
                  <div className="bg-sand p-2 rounded-lg text-primary-brand"><TrendingUp size={18} /></div>
                  <h4 className="m-0">{item.title}</h4>
                </div>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--dark)' }}>
          <h2 className="text-white">Sustainable Livelihoods</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number">800+</span>
              <span className="impact-label">Jobs Secured</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">15+</span>
              <span className="impact-label">Skill Centers</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">65%</span>
              <span className="impact-label">Income Boost</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Hire from Our Pool</h2>
              <p className="text-secondary">If you are a business owner looking for trained and motivated local staff, partner with GWA.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/contact" className="btn btn-primary">Recruit Talent <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
