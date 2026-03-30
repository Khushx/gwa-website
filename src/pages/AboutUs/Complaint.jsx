import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { ShieldAlert, Mail, Phone } from 'lucide-react';
import './About.css';

export default function Complaint() {

    const steps = [
        { title: 'Submit Grievance', desc: 'Fill out the contact form or email us with "Complaint" in the subject line.' },
        { title: 'Verification', desc: 'Our compliance team reviews the matter confidentially within 48 hours.' },
        { title: 'Resolution', desc: 'A dedicated officer will reach out with findings and potential actions.' }
    ];

    return (
        <PageLayout
            title="Complaint & Grievances"
            subtitle="Ensuring accountability through a robust feedback mechanism."
        >
            <div className="about-page">

                {/* TOP GRID */}
                <div className="grid-2 gap-huge mb-12">

                    {/* LEFT */}
                    <div>
                        <h2 className="mb-4">
                            Our Commitment to <span className="text-primary-brand">Accountability</span>
                        </h2>

                        <p className="text-secondary mb-4 leading-relaxed">
                            Ghatkopar Welfare Association maintains a zero-tolerance policy towards misconduct, financial irregularities, and unethical behavior. We invite community members to voice their concerns through our formal grievance channel.
                        </p>

                        {/* CONFIDENTIALITY CARD */}
                        <div className="card-flat bg-primary-bg p-6 rounded-xl border-left-primary">

                            <div className="flex items-start gap-3 mb-2">
                                <ShieldAlert size={20} className="text-primary-brand flex-shrink-0 mt-1" style={{ marginRight: '10px' }} />
                                <h4 className="m-0">Confidentiality Guaranteed</h4>
                            </div>

                            <p className="text-sm text-secondary m-0 leading-relaxed">
                                All complaints are handled with strict privacy. Identities of whistleblowers and complainants are protected under our governance guidelines.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-sand p-10 rounded-2xl" style={{ borderRadius: '20px' }}>

                        <h3 className="mb-6" style={{ marginLeft: '30px' }}>Resolution Process</h3>

                        <div className="flex flex-col gap-10">

                            {steps.map((step, i) => (
                                <div key={i} className="flex items-start gap-6">

                                    {/* NUMBER */}
                                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white text-primary-brand flex items-center justify-center font-black shadow-md text-lg" style={{ marginLeft: '20px' }}>
                                        {i + 1}
                                    </div>

                                    {/* TEXT */}
                                    <div className="pt-1.5 flex flex-col justify-start" style={{ marginLeft: '10px' }}>
                                        <h4 className="m-0 text-base font-bold">{step.title}</h4>
                                        <p className="text-sm text-secondary leading-relaxed" style={{ marginBottom: '30px', marginTop: '10px' }}>
                                            {step.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* CTA BUTTON */}
                        <div className="mt-10">
                            <a href="/contact" className="pill-btn" style={{ marginLeft: '30px' }}>
                                Raise a Complaint
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>

                {/* ESCALATE SECTION */}
                <div className="card-flat bg-dark text-white p-12 flex flex-col items-center justify-center text-center rounded-3xl mt-12 w-full mx-auto relative overflow-hidden">

                    <h3 className="text-white mb-4 relative z-10">Escalate or Report</h3>

                    <p className="opacity-70 mb-10 max-w-xl text-center mx-auto leading-relaxed relative z-10">
                        If you encounter any individual claiming affiliation with GWA without valid ID, or if you witness unethical activities under our name, please report immediately.
                    </p>

                    {/* CONTACT INFO */}
                    <div className="contact-row">

                        <div className="contact-item">
                            <Mail className="text-accent" size={20} />
                            <span className="font-semibold">info@ghatkoparassociation.org</span>
                        </div>

                        <div className="contact-item">
                            <Phone className="text-accent" size={20} />
                            <span className="font-semibold">+91 73737 30803</span>
                        </div>


                    </div>

                    {/* Decorative Background Globs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                </div>

            </div>
        </PageLayout>
    );
}