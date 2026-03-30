import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Leaf, Droplets, Trash2, Wind, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Environment() {
  const initiatives = [
    { title: 'Tree Plantation', desc: 'Massive plantation drives to increase the green cover in Ghatkopar and surrounding urban areas.' },
    { title: 'Waste Management', desc: 'Conducting awareness sessions on waste segregation and composting at source.' },
    { title: 'Water Conservation', desc: 'Promoting rainwater harvesting and water-saving techniques in housing societies.' },
    { title: 'Cleanliness Drives', desc: 'Regular community cleaning initiatives in public parks, streets, and station areas.' }
  ];

  return (
    <PageLayout title="Environment & Sustainability" subtitle="Building a greener, cleaner, and healthier Ghatkopar.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><Leaf size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Protecting Our Local Ecosystem</h2>
            <p className="text-secondary m-0">A sustainable environment is essential for the well-being of our community and future generations.</p>
          </div>
        </div>

        <h3 className="mb-8">Sustainable Initiatives</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card" style={{ borderTopColor: '#4CAF50' }}>
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box" style={{ background: '#2E7D32' }}>
          <h2 className="text-white">Our Green Footprint</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number" style={{ color: '#A9E49E' }}>5,000+</span>
              <span className="impact-label">Trees Planted</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: '#A9E49E' }}>50+</span>
              <span className="impact-label">Clean-up Drives</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number" style={{ color: '#A9E49E' }}>20+</span>
              <span className="impact-label">Eco-Society Awards</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Make Your Society Green</h2>
              <p className="text-secondary">Join our environmental workshops to learn about composting and water conservation for your building.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/get-involved/volunteer" className="btn btn-primary">Contact Our Eco-Team <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
