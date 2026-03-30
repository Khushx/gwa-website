import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Utensils, Heart, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function FoodSecurity() {
  const initiatives = [
    {
      title: 'Weekly Free Food Drives',
      desc: 'Our volunteer teams organise regular free food distribution drives, particularly on weekends, ensuring that vulnerable populations receive freshly cooked, nutritious meals.'
    },
    {
      title: 'Emergency Food Assistance',
      desc: 'During crises or community emergencies, we mobilise resources to provide immediate food relief, dry ration kits, and essential supplies to affected families.'
    },
    {
      title: 'Nutrition Awareness',
      desc: 'We conduct awareness programmes to educate families about the importance of a balanced diet, proper nutrition for children, and healthy eating practices.'
    },
    {
      title: 'Slum Feeding Programs',
      desc: 'Dedicated outreach to the most neglected urban clusters in Ghatkopar, bringing hot meals directly to those who cannot reach our distribution centers.'
    }
  ];

  return (
    <PageLayout title="Food Security & Nutrition" subtitle="Ensuring no one in Ghatkopar goes to sleep hungry.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><Utensils size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Our Core Mission: Zero Hunger</h2>
            <p className="text-secondary m-0">Access to adequate nutrition is a basic human necessity. GWA is committed to addressing hunger through organized distribution and awareness.</p>
          </div>
        </div>

        <h3 className="mb-8">Key Initiatives</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: 'var(--primary-brand)' }}>
          <span className="badge badge-accent mb-4">Our Track Record</span>
          <h2 className="text-white">Feeding Thousands Weekly</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>10,000+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Meals Served</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>500+</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Weekly Volunteers</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: 'white' }}>24/7</span>
              <span className="impact-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Emergency Support</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Support Our Sunday Food Drive</h2>
              <p className="text-secondary">Every Sunday, we serve freshly prepared food to those in need. Your contribution can help us reach more people.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/donate" className="btn btn-primary">Donate Now <ArrowRight size={16} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline">Join as Volunteer</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
