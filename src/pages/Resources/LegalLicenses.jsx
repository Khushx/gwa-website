import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Shield, FileText, Download, CheckCircle, ExternalLink, Scale, Building2, Award, Briefcase, FileCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Resources.css';

export default function LegalLicenses() {
  const legalDocs = [
    {
      title: "Certificate of Incorporation",
      category: "Legal Registration",
      desc: "Official recognition as a Section 8 Company under the Companies Act, 2013, Ministry of Corporate Affairs.",
      id: "GWA/MCA/REG/2024"
    },
    {
      title: "Organisation Bylaws",
      category: "Governance",
      desc: "The fundamental rules and principles guiding the internal governance and operational conduct of GWA.",
      id: "GWA/BYL/2024/01"
    },
    {
      title: "Privacy & Data Protection Policy",
      category: "Compliance",
      desc: "Guidelines on how we handle personal information of our members, donors, and volunteers.",
      id: "GWA/POL/PRIVACY/01"
    }
  ];

  return (
    <PageLayout 
      title="Legal & Licenses" 
      subtitle="Transparency and compliance are the foundations of our organisational governance."
    >
      <div className="legal-page">
        <div className="grid-2 align-center mb-huge">
            <div>
                <span className="badge badge-accent mb-4">Registration & Compliance</span>
                <h2 className="mb-4">Section 8 Non-Profit Organisation</h2>
                <p className="text-secondary mb-4 leading-relaxed">
                    Ghatkopar Welfare Association is formally established as a **Section 8 Non-Profit Organisation under the Companies Act, 2013**, ensuring that the organisation operates under a legally recognised and regulated framework by the Ministry of Corporate Affairs, Government of India.
                </p>
                <div className="bg-sand p-6 rounded-xl border-subtle">
                    <ul className="flex flex-col gap-small m-0 list-unstyled">
                        <li className="flex align-start gap-small text-sm">
                            <ShieldCheck className="text-primary-brand mt-1 flex-shrink-0" size={18} />
                            <span>Operates exclusively for charitable and social welfare purposes.</span>
                        </li>
                        <li className="flex align-start gap-small text-sm">
                            <ShieldCheck className="text-primary-brand mt-1 flex-shrink-0" size={18} />
                            <span>Income and resources used solely for community initiatives.</span>
                        </li>
                        <li className="flex align-start gap-small text-sm">
                            <ShieldCheck className="text-primary-brand mt-1 flex-shrink-0" size={18} />
                            <span>No profits or assets distributed to members or directors.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-flat bg-dark text-light p-12 rounded-2xl shadow-xl">
                <FileText className="text-accent mb-6" size={48} />
                <h3 className="text-light mb-4">Official Documentation</h3>
                <p className="text-white opacity-70 mb-8 leading-relaxed">
                    We maintain scanned copies of all our legal registrations and compliance certificates for public verification and transparency.
                </p>
                <button className="btn btn-accent w-full flex flex-center gap-small py-4">
                    <Download size={18} /> Download Compliance Kit
                </button>
            </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Regulatory Credentials</h2>
            <div className="grid-3">
                {legalDocs.map((doc, idx) => (
                    <div key={idx} className="card-flat bg-white p-10 border-subtle card-hover-up flex flex-col rounded-2xl">
                        <div className="text-xs font-bold text-primary-brand mb-4 uppercase tracking-widest">{doc.category}</div>
                        <h3 className="text-xl font-bold mb-4">{doc.title}</h3>
                        <p className="text-sm text-secondary mb-8 leading-relaxed flex-grow">{doc.desc}</p>
                        <div className="mt-auto pt-6 border-top flex justify-between align-center">
                            <span className="text-xs font-mono text-secondary">{doc.id}</span>
                            <button className="text-primary-brand hover:text-accent transition-colors bg-none border-none cursor-pointer"><Download size={20}/></button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-xl bg-primary-light rounded-3xl px-12 mb-huge overflow-hidden">
            <div className="grid-2 align-center">
                <div>
                    <h2 className="mb-4">Ethical Standards & Governance</h2>
                    <p className="text-secondary mb-8 leading-relaxed">Our work is guided by internal policies that ensure every programme is implemented with professional integrity and respect for the community members.</p>
                    <div className="grid-2 gap-normal">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-subtle">
                             <h4 className="mb-2">Member Policy</h4>
                             <p className="text-xs text-secondary m-0 leading-relaxed">Expected to follow governance standards and participate responsibly in all community initiatives.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-subtle">
                             <h4 className="mb-2">Zero Tolerance</h4>
                             <p className="text-xs text-secondary m-0 leading-relaxed">Absolute commitment to transparency and zero tolerance for unethical practices in resource management.</p>
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <img src="/images/awareness.jpeg" alt="Legal Compliance" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
                </div>
            </div>
        </section>

        <div className="card-flat bg-dark text-white p-16 text-center relative overflow-hidden rounded-3xl">
            <div className="relative z-10">
                <Shield className="text-accent mb-6 mx-auto" size={56} />
                <h2 className="text-white mb-4">Request Legal Verification</h2>
                <p className="opacity-70 max-w-2xl mx-auto mb-large text-lg">
                    For any statutory inquiries, RTI requests, or detailed compliance reports, please reach out to our legal coordination cell for structured information delivery.
                </p>
                <div className="flex flex-center gap-normal">
                    <Link to="/contact" className="btn btn-accent px-12">Contact Legal Cell</Link>
                </div>
            </div>
            {/* Decorative background effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-brand/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>
        </div>
      </div>
    </PageLayout>
  );
}
