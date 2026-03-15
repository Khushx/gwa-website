import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Calendar, MapPin, Heart, Shield, Users, Target } from 'lucide-react';
import './About.css';

export default function Overview() {
  const highlights = [
    { icon: <Calendar size={24} />, label: 'Started On', value: 'March 4, 2024' },
    { icon: <MapPin size={24} />, label: 'Serving', value: 'Ghatkopar, Mumbai' },
    { icon: <Heart size={24} />, label: 'Core Activity', value: 'Free Food Drives' },
    { icon: <Shield size={24} />, label: 'Legal Status', value: 'Section 8 NGO' }
  ];

  return (
    <PageLayout title="Overview" subtitle="Empowering Ghatkopar through structured social welfare initiatives.">
      <div className="about-page">
        <div className="grid-2 gap-large mb-12 align-center">
          <div className="about-intro-card">
            <h2 className="mb-4">Building Bridges, <span className="text-primary-brand">Strengthening Communities</span></h2>
            <p className="text-secondary mb-4">
              <strong>Ghatkopar Welfare Association (GWA)</strong> is a community-focused non-profit organisation committed to promoting social welfare, civic responsibility, and sustainable development in Mumbai.
            </p>
            <p className="text-secondary">
              Registered as a <strong>Section 8 Non-Profit Organisation</strong>, we address grassroots challenges through food security, healthcare, and education programmes designed with transparency and accountability.
            </p>
          </div>
          <div className="grid-2 gap-small">
            {highlights.map((item, idx) => (
              <div key={idx} className="stat-item card-hover-up">
                <div className="text-primary-brand mb-2">{item.icon}</div>
                <h4>{item.value}</h4>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-padding bg-sand rounded-xl p-12 mb-12">
          <div className="grid-3 gap-large">
            <div className="text-center">
              <Users size={40} className="text-primary-brand mb-4 mx-auto" />
              <h4 className="mb-2">Community Led</h4>
              <p className="text-sm text-secondary">Driven by thousands of local residents, volunteers, and professionals working collectively.</p>
            </div>
            <div className="text-center">
              <Target size={40} className="text-primary-brand mb-4 mx-auto" />
              <h4 className="mb-2">Impact Driven</h4>
              <p className="text-sm text-secondary">Programmes aimed at measurable goals: feeding 1000s weekly and providing specialty healthcare.</p>
            </div>
            <div className="text-center">
              <Shield size={40} className="text-primary-brand mb-4 mx-auto" />
              <h4 className="mb-2">Fully Transparent</h4>
              <p className="text-sm text-secondary">Every rupee donated is accounted for and utilized exclusively for social welfare initiatives.</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-secondary">
          <h3 className="text-dark mb-4">Our Core Philosophy</h3>
          <p className="mb-4">
            At its core, Ghatkopar Welfare Association believes that <strong>organised communities create stronger societies</strong>. Through transparency, participation, and structured action, we strive to contribute to a more inclusive, aware, and empowered community.
          </p>
          <p>
            By creating opportunities for volunteering, partnerships, and civic engagement, GWA aims to strengthen community networks and encourage collective responsibility for social progress.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
