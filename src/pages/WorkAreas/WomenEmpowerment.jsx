import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { UserCheck, Zap, Heart, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function WomenEmpowerment() {
  const initiatives = [
    { title: 'Skill Development', desc: 'Training programs in tailoring, computer literacy, and beauty services to foster financial independence.' },
    { title: 'Legal Awareness', desc: 'Workshops on fundamental rights, domestic safety, and government schemes for women.' },
    { title: 'Self-Help Groups', desc: 'Facilitating the formation and management of SHGs for micro-savings and micro-entrepreneurship.' },
    { title: 'Health & Hygiene', desc: 'Awareness sessions on menstrual health, nutrition, and maternal care for underserved women.' }
  ];

  return (
    <PageLayout title="Women Empowerment" subtitle="Empowering women to lead, earn, and live with dignity.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><UserCheck size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Strong Women, Strong Community</h2>
            <p className="text-secondary m-0">We believe that when women are empowered, entire families and societies progress. GWA provides the tools for independence.</p>
          </div>
        </div>

        <h3 className="mb-8">Empowerment Initiatives</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-bg)', color: 'var(--text-primary)' }}>
          <h2 className="text-dark">Impact on Lives</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'var(--primary-brand)' }}>1,200+</span>
              <span className="impact-label">Women Trained</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'var(--primary-brand)' }}>15+</span>
              <span className="impact-label">Active Self-Help Groups</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'var(--primary-brand)' }}>500+</span>
              <span className="impact-label">Livelihoods Created</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Support Women Entrepreneurs</h2>
              <p className="text-secondary">Help us buy sewing machines or computer kits for our training centers. Every contribution counts.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/donate" className="btn btn-primary">Support Women <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
