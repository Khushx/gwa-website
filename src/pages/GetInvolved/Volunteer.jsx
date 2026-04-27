import React from 'react';
import { handleDownload } from '../../lib/downloadUtils';
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
                <div className="grid-2 align-center mb-8">
                    <div>
                        <span className="badge badge-accent">Collaborate</span>
                        <h2>Be the part of the change</h2>
                        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
                            Ghatkopar Welfare Association (GWA) believes that positive social change is possible when community members actively participate in identifying challenges and working together to implement solutions.
                        </p>
                        <p className="text-secondary mt-2">
                            We offer a structured membership model that allows individuals to contribute their time, skills, and expertise according to their capacity and professional experience.
                        </p>
                    </div>
                    <div className="card-flat bg-dark text-light" style={{ borderRadius: 'var(--radius-md)', padding: '3rem' }}>
                        <h3 className="text-light">Membership ID</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Every registered member and volunteer is issued an official GWA Membership ID for identification and verification.</p>
                        <Link to="/get-involved/verification" className="action-link text-accent">Verify ID Card <ArrowRight size={16} /></Link>
                    </div>
                </div>

                <h3 className="mb-4" style={{ marginTop: '40px' }}>Structured Membership Model</h3>
                <div className="grid-4 mb-8" style={{ marginBottom: '50px' }}>
                    {membershipTypes.map((type, idx) => (
                        <div key={idx} className="card-flat bg-sand" style={{ borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div className="mb-2" style={{ color: type.color }}>{type.icon}</div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{type.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{type.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="section-padding bg-primary-light" style={{ borderRadius: 'var(--radius-md)', padding: '4rem 2rem' }}>
                    <div className="text-center mb-8">
                        <h2>Why Volunteer With GWA?</h2>
                    </div>
                    <div className="grid-2">
                        <div className="bg-white" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 className="text-primary-brand" size={32} style={{ marginTop: '50px' }} />
                            <div>
                                <h4>Structured Participation</h4>
                                <p className="text-secondary">Work within a professional organisational framework with clear roles and accountability.</p>
                            </div>
                        </div>
                        <div className="bg-white" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 className="text-primary-brand" size={32} style={{ marginTop: '50px' }} />
                            <div>
                                <h4>Local Impact</h4>
                                <p className="text-secondary">Focus on grassroots initiatives that directly benefit residents of Ghatkopar and Mumbai.</p>
                            </div>
                        </div>
                        <div className="bg-white" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 className="text-primary-brand" size={32} style={{ marginTop: '50px' }} />
                            <div>
                                <h4>Networking & Learning</h4>
                                <p className="text-secondary">Connect with professionals and community leaders while gaining experience in social welfare.</p>
                            </div>
                        </div>
                        <div className="bg-white" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 className="text-primary-brand" size={32} style={{ marginTop: '50px' }} />
                            <div>
                                <h4>Official Recognition</h4>
                                <p className="text-secondary">Receive formal membership IDs and volunteer certificates based on your contribution.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center bg-accent" style={{ padding: '4rem 2rem', borderRadius: 'var(--radius-md)', marginTop: '50px' }}>
                    <h2 className="mb-2">Ready to contribute?</h2>
                    <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Register your interest today and our team will get back to you with the official membership application process.</p>
                    <div className="flex justify-center" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleDownload('/pdfs/legal-licenses/GWA-MEMBERSHIP.pdf', 'GWA_Registration_Form.pdf')}
                        >
                            Download Membership Form
                        </button>
                        <Link to="/contact" className="btn btn-outline">Enquire Online</Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
