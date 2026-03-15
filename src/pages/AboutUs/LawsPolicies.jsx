import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { Scale, FileText, ShieldCheck, Lock, Gavel } from 'lucide-react';
import './About.css';

export default function LawsPolicies() {
  const policies = [
    { title: 'Governance Policy', icon: <Gavel />, desc: 'Framework for decision-making and administrative oversight.' },
    { title: 'Privacy Policy', icon: <Lock />, desc: 'How we protect the data of our donors, members, and volunteers.' },
    { title: 'Financial Policy', icon: <Scale />, desc: 'Strict guidelines for donation handling and audited reporting.' },
    { title: 'Anti-Discrimination', icon: <ShieldCheck />, desc: 'Ensuring equal opportunity for all human beings.' }
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
                <div key={i} className="card-flat p-8 flex align-start gap-6 card-hover-up">
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

        <div className="bg-dark text-white rounded-2xl p-12 overflow-hidden relative">
            <div className="relative z-10">
                <span className="badge badge-accent mb-4">Legal Disclaimer</span>
                <h3 className="text-white mb-6">Terms of Use</h3>
                <div className="flex flex-col gap-4 text-sm opacity-70 max-w-3xl">
                    <p>1. All content on this website is the property of Ghatkopar Welfare Association.</p>
                    <p>2. Unauthorized use of our logo or name for independent fundraising is strictly prohibited and subject to legal action.</p>
                    <p>3. GWA is not responsible for any independent actions taken by third parties claiming affiliation without official documentation.</p>
                </div>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-10">
                <FileText size={200} />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
