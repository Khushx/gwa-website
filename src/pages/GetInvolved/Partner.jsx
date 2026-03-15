import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { Briefcase, Hospital, GraduationCap, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partner() {
  const partnerTypes = [
    {
      title: 'Corporate Partnerships (CSR)',
      icon: <Briefcase size={40} />,
      desc: 'Collaborate with GWA on CSR projects focusing on food security, healthcare, and education support.',
      list: ['Transparent Reporting', 'Measurable Impact', 'CSR Compliance Support']
    },
    {
      title: 'Healthcare Collaborations',
      icon: <Hospital size={40} />,
      desc: 'Partner with us to organize free health check-up camps, medical awareness seminars and blood donation drives.',
      list: ['Equipment Support', 'Medical Expertise', 'Outreach Facilities']
    },
    {
      title: 'Educational Institutions',
      icon: <GraduationCap size={40} />,
      desc: 'Bridge the gap for underprivileged students through career counseling and skill development workshops.',
      list: ['Curriculum Support', 'Student Volunteering', 'Mentorship Programs']
    }
  ];

  return (
    <PageLayout 
      title="Partner With Us" 
      subtitle="Amplify the reach and effectiveness of community welfare programs through collaboration."
    >
      <div className="partner-page">
        <div className="grid-2 align-center mb-8">
            <div>
                <span className="badge badge-accent">Synergy</span>
                <h2>Social Welfare Synergy</h2>
                <p className="text-secondary" style={{fontSize: '1.1rem'}}>
                    Tackling complex social challenges requires unified efforts. Ghatkopar Welfare Association actively seeks partnerships with diverse organisations to create scalable impact.
                </p>
                <p className="text-secondary mt-2">
                    Through Social Welfare Synergy, we collaborate with institutions, corporations, and community groups to collectively work towards sustainable social development.
                </p>
            </div>
            <div className="card-flat bg-dark text-light" style={{borderRadius: 'var(--radius-md)', padding: '3rem'}}>
                <h3 className="text-light">For NGOs</h3>
                <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem'}}>We believe in collective growth. If your organisation shares our vision, let's collaborate on joint field initiatives.</p>
                <Link to="/contact" className="action-link text-accent">Propose Collaboration <ArrowRight size={16} /></Link>
            </div>
        </div>

        <div className="grid-3 mb-8">
          {partnerTypes.map((type, idx) => (
            <div key={idx} className="card-flat bg-sand" style={{borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column'}}>
              <div className="mb-2 text-primary-brand">{type.icon}</div>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>{type.title}</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>{type.desc}</p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, marginTop: 'auto'}}>
                {type.list.map((item, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem'}}>
                    <CheckCircle2 size={16} className="text-primary-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-padding bg-primary-light" style={{borderRadius: 'var(--radius-md)', padding: '4rem 3rem'}}>
            <div className="grid-2 align-center">
                <div>
                    <h2>Why Partner with GWA?</h2>
                    <p className="text-secondary">We ensure that every partnership is built on the foundations of trust, professionalism, and community benefit.</p>
                </div>
                <div className="grid-2 gap-small">
                    <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px'}}>
                        <h4 style={{fontSize: '1rem', marginBottom: '0.25rem'}}>Transparency</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>Detailed audit and program reports for all collaborative projects.</p>
                    </div>
                    <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px'}}>
                        <h4 style={{fontSize: '1rem', marginBottom: '0.25rem'}}>Local Reach</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>Direct access to grassroots communities in Ghatkopar and Mumbai.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 bg-dark text-light" style={{padding: '5rem 2rem', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
            <h2 className="text-light mb-2">Let's build a stronger community together</h2>
            <p className="mb-4" style={{maxWidth: '600px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.7)'}}>Reach out to our partnership team to discuss potential collaboration models and project sponsorships.</p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                <Link to="/contact" className="btn btn-primary" style={{backgroundColor: 'var(--secondary-accent)', color: 'var(--text-primary)'}}>Contact Partnership Team</Link>
                <Link to="/about/policies" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.2)', color: '#fff'}}>View Compliance & Policies</Link>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
