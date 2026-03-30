import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Scale, FileText, ShieldCheck, Lock, Gavel } from 'lucide-react';
import './About.css';

export default function LawsPolicies() {
    const policies = [
        { title: 'Governance Policy', icon: <Gavel size={22} />, desc: 'Framework for decision-making and administrative oversight.' },
        { title: 'Privacy Policy', icon: <Lock size={22} />, desc: 'How we protect the data of our donors, members, and volunteers.' },
        { title: 'Financial Policy', icon: <Scale size={22} />, desc: 'Strict guidelines for donation handling and audited reporting.' },
        { title: 'Anti-Discrimination', icon: <ShieldCheck size={22} />, desc: 'Ensuring equal opportunity for all human beings.' }
    ];

    return (
        <PageLayout title="Laws & Policies" subtitle="The legal and ethical framework governing our operations.">
            <div className="about-page">
                <div className="text-center mb-12">
                    <p className="text-secondary max-w-2xl mx-auto">
                        Ghatkopar Welfare Association operates under the strict legal guidelines provided by the Government of India and the Ministry of Corporate Affairs for Section 8 Non-Profit Organisations.
                    </p>
                </div>

                <div className="grid-2 gap-large mb-12">
                    {policies.map((p, i) => (
                        <div key={i} className="card-flat p-8 card-hover-up">
                            <div className="bg-primary-bg p-4 rounded-xl text-primary-brand">
                                {p.icon}
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg">{p.title}</h3>
                                <p className="text-sm text-secondary m-0">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-dark text-white p-12 flex flex-col items-center justify-center text-center rounded-3xl mt-12 w-full mx-auto relative overflow-hidden">
                    <div className="relative z-10 w-full flex flex-col items-center justify-center">
                        <span className="legal-pill mb-6">Legal Disclaimer</span>
                        <h3 className="text-white mb-8 text-2xl font-bold">Terms of Use</h3>
                        <div className="flex flex-col items-center justify-center gap-4 text-sm text-center mx-auto w-full max-w-3xl" style={{ opacity: 0.85 }}>
                            <p className="leading-relaxed">1. All content on this website is the property of Ghatkopar Welfare Association.</p>
                            <p className="leading-relaxed">2. Unauthorized use of our logo or name for independent fundraising is strictly prohibited and subject to legal action.</p>
                            <p className="leading-relaxed">3. GWA is not responsible for any independent actions taken by third parties claiming affiliation without official documentation.</p>
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
