import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { TrendingUp, Users, Target, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function CommunityGrowth() {
  const initiatives = [
    { title: 'Networking Events', desc: 'Bringing together local professionals, entrepreneurs, and activists to discuss community needs.' },
    { title: 'Civic Awareness', desc: 'Mass campaigns on cleanliness, traffic discipline, and responsible citizenship.' },
    { title: 'Capacity Building', desc: 'Training local community leaders to identify and solve problems at the grassroots level.' },
    { title: 'Neighbor Connect', desc: 'Initiatives aimed at strengthening the social fabric of housing societies and chawls.' }
  ];

  return (
    <PageLayout title="Community Growth" subtitle="Fostering a sense of belonging and collective responsibility.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><TrendingUp size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Stronger Together</h2>
            <p className="text-secondary m-0">Our goal is to create a vibrant, aware, and proactive community where residents are not just neighbors, but partners in progress.</p>
          </div>
        </div>

        <h3 className="mb-8">Growth Pillars</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <h2 className="text-white">Our Shared Progress</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>5,000+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Engaged Residents</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>100+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Community Events</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>1</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Common Vision</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Become a GWA Member</h2>
              <p className="text-secondary">Official members get voting rights and a direct voice in our strategic decision-making process.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/get-involved/volunteer" className="btn btn-primary">Register Now <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
