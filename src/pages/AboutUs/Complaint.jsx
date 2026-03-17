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

                            <div className="flex items-center gap-2 mb-2">
                                <ShieldAlert size={20} className="text-primary-brand" />
                                <h4 className="m-0">Confidentiality Guaranteed</h4>
                            </div>

                            <p className="text-sm text-secondary m-0 leading-relaxed">
                                All complaints are handled with strict privacy. Identities of whistleblowers and complainants are protected under our governance guidelines.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-sand p-10 rounded-2xl">

                        <h3 className="mb-6">Resolution Process</h3>

                        <div className="flex flex-col gap-6">

                            {steps.map((step, i) => (
                                <div key={i} className="flex items-start gap-3">

                                    {/* NUMBER */}
                                    <div className="min-w-[32px] h-8 rounded-full bg-white text-primary-brand flex items-center justify-center font-semibold shadow-sm">
                                        {i + 1}
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h4 className="m-0 text-sm">{step.title}</h4>
                                        <p className="text-xs text-secondary mt-1 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* CTA BUTTON */}
                        <div className="mt-8">
                            <a href="/contact" className="btn-primary">
                                Raise a Complaint
                            </a>
                        </div>

                    </div>

                </div>

                {/* ESCALATE SECTION */}
                <div className="card-flat bg-dark text-white p-12 text-center rounded-3xl">

                    <h3 className="text-white mb-4">Escalate or Report</h3>

                    <p className="opacity-70 mb-8 max-w-xl mx-auto leading-relaxed">
                        If you encounter any individual claiming affiliation with GWA without valid ID, or if you witness unethical activities under our name, please report immediately.
                    </p>

                    {/* CONTACT INFO */}
                    <div className="flex items-center justify-center gap-8">

                        <div className="flex items-center gap-2 justify-center">
                            <Mail className="text-accent" size={18} />
                            <span>info@ghatkoparassociation.org</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center">
                            <Phone className="text-accent" size={18} />
                            <span>+91 73737 30803</span>
                        </div>

                    </div>

                </div>

            </div>
        </PageLayout>
    );
}