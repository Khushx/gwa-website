import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { UserCheck, Shield, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Volunteer() {
  const membershipTypes = [
    {
      title: 'Core Members',
      icon: <Shield size={32} />,
      desc: 'Individuals responsible for overall governance, strategic planning, and administrative oversight of the organisation.',
      color: 'var(--primary-brand)'
    },
    {
      title: 'Advisory Members',
      icon: <UserCheck size={32} />,
      desc: 'Legal experts, professionals, and community leaders who provide expert guidance on specific programmes and compliance.',
      color: 'var(--secondary-accent)'
    },
    {
      title: 'Active Members',
      icon: <Users size={32} />,
      desc: 'Committed members who actively lead specific programme divisions and manage on-ground community welfare activities.',
      color: 'var(--primary-brand)'
    },
    {
        title: 'Volunteers',
        icon: <Award size={32} />,
        desc: 'The backbone of our on-ground efforts, supporting food drives, health camps, and social awareness campaigns.',
        color: 'var(--secondary-accent)'
      }
  ];

  return (
    <PageLayout 
      title="Volunteer / Member Join Us" 
      subtitle="Join a structured platform for citizen participation and community impact."
    >
      <div className="volunteer-page">
        <div className="grid-2 align-center mb-large">
            <div>
                <span className="badge badge-accent mb-4">Collaborate</span>
                <h2 className="mb-4">Be the part of the change</h2>
                <p className="text-secondary mb-4">
                    Ghatkopar Welfare Association (GWA) believes that positive social change is possible when community members actively participate in identifying challenges and working together to implement solutions.
                </p>
                <p className="text-secondary">
                    We offer a structured membership model that allows individuals to contribute their time, skills, and expertise according to their capacity and professional experience.
                </p>
            </div>
            <div className="card-flat bg-dark text-light">
                <h3 className="text-light mb-2">Membership ID</h3>
                <p className="text-light opacity-70 mb-6">Every registered member and volunteer is issued an official GWA Membership ID for identification and verification.</p>
                <Link to="/get-involved/verification" className="btn btn-accent">Verify ID Card <ArrowRight size={18} /></Link>
            </div>
        </div>

        <h3 className="section-title text-center mb-large">Structured Membership Model</h3>
        <div className="grid-4 mb-huge">
            {membershipTypes.map((type, idx) => (
                <div key={idx} className="card-flat bg-sand p-8 text-center border-subtle card-hover-up">
                    <div className="mb-4 flex justify-center" style={{color: type.color}}>{type.icon}</div>
                    <h4 className="mb-3">{type.title}</h4>
                    <p className="text-sm text-secondary m-0">{type.desc}</p>
                </div>
            ))}
        </div>

        <div className="py-xl bg-primary-light rounded-xl px-8">
            <div className="text-center mb-large">
                <h2 className="mb-2">Why Volunteer With GWA?</h2>
                <p className="text-secondary max-w-2xl mx-auto">Joining our mission means being part of a professional team dedicated to upliftment.</p>
            </div>
            <div className="grid-2">
                <div className="bg-white p-8 rounded-xl flex gap-normal align-start shadow-sm hover-shadow-lg transition-all">
                    <CheckCircle2 className="text-primary-brand" size={32} />
                    <div>
                        <h4 className="mb-2">Structured Participation</h4>
                        <p className="text-sm text-secondary m-0">Work within a professional organisational framework with clear roles and accountability.</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl flex gap-normal align-start shadow-sm hover-shadow-lg transition-all">
                    <CheckCircle2 className="text-primary-brand" size={32} />
                    <div>
                        <h4 className="mb-2">Local Impact</h4>
                        <p className="text-sm text-secondary m-0">Focus on grassroots initiatives that directly benefit residents of Ghatkopar and Mumbai.</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl flex gap-normal align-start shadow-sm hover-shadow-lg transition-all">
                    <CheckCircle2 className="text-primary-brand" size={32} />
                    <div>
                        <h4 className="mb-2">Networking & Learning</h4>
                        <p className="text-sm text-secondary m-0">Connect with professionals and community leaders while gaining experience in social welfare.</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl flex gap-normal align-start shadow-sm hover-shadow-lg transition-all">
                    <CheckCircle2 className="text-primary-brand" size={32} />
                    <div>
                        <h4 className="mb-2">Official Recognition</h4>
                        <p className="text-sm text-secondary m-0">Receive formal membership IDs and volunteer certificates based on your contribution.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-large text-center bg-accent py-xl px-8 rounded-xl">
            <h2 className="mb-4">Ready to contribute?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">Register your interest today and our team will get back to you with the official membership application process.</p>
            <div className="flex flex-center gap-normal">
                <button className="btn btn-primary">Download Registration Form</button>
                <Link to="/contact" className="btn btn-outline">Enquire Online</Link>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
