import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { HeartPulse, Stethoscope, Activity, ShieldCheck, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Healthcare() {
  const initiatives = [
    {
      title: 'Mobile Health Clinics',
      desc: 'Bringing primary healthcare services directly to underserved areas through our fleet of equipped medical vans.'
    },
    {
      title: 'Specialty Camps',
      desc: 'Regular camps focusing on vision care, dental health, and diabetes screening with consultation from expert doctors.'
    },
    {
      title: 'First Aid Training',
      desc: 'Empowering community members with life-saving skills through certified basic medical response workshops.'
    },
    {
      title: 'Elderly Home Care',
      desc: 'Providing dedicated healthcare support and monitoring for senior citizens who live alone in our community.'
    }
  ];

  return (
    <PageLayout title="Healthcare Initiatives" subtitle="Promoting health, well-being, and medical awareness.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><HeartPulse size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Accessible Healthcare for All</h2>
            <p className="text-secondary m-0">We believe that quality medical care is a right, not a privilege. Our programs bridge the gap between residents and essential health services.</p>
          </div>
        </div>

        <h3 className="mb-8">Our Medical Impact</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card" style={{ borderTopColor: 'var(--accent)' }}>
              <div className="flex align-center gap-small mb-4">
                <div className="bg-sand p-2 rounded-lg"><Activity size={18} className="text-accent" /></div>
                <h4 className="m-0">{item.title}</h4>
              </div>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <h2 className="text-white">Healthier Communities, Happier Lives</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>5,000+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Checkups Done</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>25+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Partner Doctors</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>12</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Health Camps / Yr</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Are You a Health Professional?</h2>
              <p className="text-secondary">We are always looking for medical experts, nurses, and technicians to volunteer their skills at our camps.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/get-involved/partner" className="btn btn-primary">Partner with Us <UserPlus size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
