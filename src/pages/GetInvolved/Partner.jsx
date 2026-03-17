import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
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
        <div className="grid-2 align-center mb-large">
            <div>
                <span className="badge badge-accent mb-4">Synergy</span>
                <h2 className="mb-4">Social Welfare Synergy</h2>
                <p className="text-secondary mb-4">
                    Tackling complex social challenges requires unified efforts. Ghatkopar Welfare Association actively seeks partnerships with diverse organisations to create scalable impact.
                </p>
                <p className="text-secondary">
                    Through Social Welfare Synergy, we collaborate with institutions, corporations, and community groups to collectively work towards sustainable social development.
                </p>
            </div>
            <div className="card-flat bg-dark text-light">
                <h3 className="text-light mb-2">For NGOs</h3>
                <p className="text-light opacity-70 mb-6">We believe in collective growth. If your organisation shares our vision, let's collaborate on joint field initiatives.</p>
                <Link to="/contact" className="btn btn-accent">Propose Collaboration <ArrowRight size={18} /></Link>
            </div>
        </div>

        <div className="grid-3 mb-huge">
          {partnerTypes.map((type, idx) => (
            <div key={idx} className="card-flat bg-sand p-8 flex flex-col card-hover-up border-subtle">
              <div className="mb-4 text-primary-brand">{type.icon}</div>
              <h3 className="mb-3">{type.title}</h3>
              <p className="text-sm text-secondary mb-6">{type.desc}</p>
              <ul className="mt-auto flex flex-col gap-tiny">
                {type.list.map((item, i) => (
                  <li key={i} className="flex align-center gap-tiny text-xs font-bold">
                    <CheckCircle2 size={16} className="text-primary-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-xl bg-primary-light rounded-xl px-12">
            <div className="grid-2 align-center">
                <div>
                    <h2 className="mb-2">Why Partner with GWA?</h2>
                    <p className="text-secondary m-0">We ensure that every partnership is built on the foundations of trust, professionalism, and community benefit.</p>
                </div>
                <div className="grid-2 gap-small">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="mb-1">Transparency</h4>
                        <p className="text-xs text-secondary m-0">Detailed audit and program reports for all collaborative projects.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="mb-1">Local Reach</h4>
                        <p className="text-xs text-secondary m-0">Direct access to grassroots communities in Ghatkopar and Mumbai.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-large bg-dark text-light py-xl px-8 rounded-xl text-center">
            <h2 className="text-light mb-2">Let's build a stronger community together</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-70">Reach out to our partnership team to discuss potential collaboration models and project sponsorships.</p>
            <div className="flex flex-center gap-normal">
                <Link to="/contact" className="btn btn-accent">Contact Partnership Team</Link>
                <Link to="/about/policies" className="btn btn-outline border-white text-white hover-bg-white hover-text-dark">View Compliance & Policies</Link>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
