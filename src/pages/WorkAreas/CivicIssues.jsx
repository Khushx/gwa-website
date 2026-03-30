import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Gavel, Megaphone, Users, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function CivicIssues() {
  const initiatives = [
    { title: 'Public Infrastructure', desc: 'Reporting and following up on road repairs, drainage issues, and public lighting in Ghatkopar.' },
    { title: 'Governance Monitoring', desc: 'Promoting transparency by attending ward meetings and tracking budget utilization.' },
    { title: 'Rights Awareness', desc: 'Educating residents on how to file RTIs and access municipal services effectively.' },
    { title: 'Urban Safety', desc: 'Collaborating with local police to improve neighbourhood safety and traffic management.' }
  ];

  return (
    <PageLayout title="Civic Issues & Governance" subtitle="Empowering citizens to demand and build better public services.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><Gavel size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Your Voice, Our Mission</h2>
            <p className="text-secondary m-0">We bridge the gap between residents and the Ward office to ensure that Ghatkopar remains a livable and safe city for all.</p>
          </div>
        </div>

        <h3 className="mb-8">Civic Initiatives</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <h2 className="text-white">Active Citizenship</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>500+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Grievances Solved</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>50+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Ward Meetings</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>100%</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Lawful Advocacy</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Report a Civic Concern</h2>
              <p className="text-secondary">Does your street have a pothole or a broken light? Let us know, and we'll help you escalate it.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/about/complaint" className="btn btn-primary">Report Issue <Megaphone size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
