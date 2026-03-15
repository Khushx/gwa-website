import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { BookOpen, GraduationCap, Laptop, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Education() {
  const initiatives = [
    { title: 'School Support', desc: 'Providing books, uniforms, and stationery to students from low-income families.' },
    { title: 'Digital Literacy', desc: 'Setting up computer labs and offering basic IT training for local youth.' },
    { title: 'Scholarships', desc: 'Financial assistance for meritorious students to pursue higher education.' },
    { title: 'After-School Tutoring', desc: 'Free coaching for municipal school students to improve academic performance.' }
  ];

  return (
    <PageLayout title="Education & Literacy" subtitle="Empowering the next generation through knowledge.">
      <div className="work-area-page">
        <div className="work-header">
          <div className="work-icon-ring"><GraduationCap size={40} className="text-primary-brand" /></div>
          <div>
            <h2 className="mb-2">Education is the Foundation</h2>
            <p className="text-secondary m-0">We believe in creating equal educational opportunities for all children, regardless of their financial background.</p>
          </div>
        </div>

        <h3 className="mb-8">Our Educational Focus</h3>
        <div className="initiative-grid">
          {initiatives.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-box bg-dark">
          <h2 className="text-white">Knowledge for All</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number">2,000+</span>
              <span className="impact-label">Students Assisted</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">10+</span>
              <span className="impact-label">Local Schools Partnered</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">85%</span>
              <span className="impact-label">Result Improvement</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2>Support a Student Today</h2>
              <p className="text-secondary">Your contribution covers books, uniforms, and school fees for one child for an entire year.</p>
            </div>
            <div className="flex gap-small justify-end">
              <Link to="/donate" className="btn btn-primary">Sponsor Education <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
