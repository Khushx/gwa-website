import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { AlertCircle, MessageSquare, ShieldAlert, CheckCircle, Mail, Phone } from 'lucide-react';
import './About.css';

export default function Complaint() {
  const steps = [
    { title: 'Submit Grievance', desc: 'Fill out the form or email us with "Complaint" in the subject line.' },
    { title: 'Verification', desc: 'Our compliance team reviews the matter confidentially within 48 hours.' },
    { title: 'Resolution', desc: 'A dedicated officer will reach out with findings and potential actions.' }
  ];

  return (
    <PageLayout title="Complaint & Grievances" subtitle="Ensuring accountability through a robust feedback mechanism.">
      <div className="about-page">
        <div className="grid-2 gap-huge mb-12">
            <div>
                <h2 className="mb-6">Our Commitment to <span className="text-primary-brand">Accountability</span></h2>
                <p className="text-secondary mb-6 leading-relaxed">
                    Ghatkopar Welfare Association maintains a zero-tolerance policy towards misconduct, financial irregularities, and unethical behavior. We invite community members to voice their concerns through our formal grievance channel.
                </p>
                <div className="card-flat bg-primary-bg p-6 rounded-xl border-left-primary">
                    <div className="flex align-center gap-small mb-4">
                        <ShieldAlert size={24} className="text-primary-brand" />
                        <h4 className="m-0">Confidentiality Guaranteed</h4>
                    </div>
                    <p className="text-sm text-secondary m-0">
                        All complaints are handled with strict privacy. Identities of whistleblowers and complainants are protected under our governance guidelines.
                    </p>
                </div>
            </div>

            <div className="bg-sand p-8 rounded-2xl">
                <h3 className="mb-6">Resolution Process</h3>
                <div className="flex flex-col gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="flex align-start gap-small">
                            <div className="w-8 h-8 rounded-full bg-white text-primary-brand flex align-center justify-center font-bold shadow-sm">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="m-0 text-sm">{step.title}</h4>
                                <p className="text-xs text-secondary mt-1">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="card-flat bg-dark text-white p-12 text-center">
            <h3 className="text-white mb-4">Escalate or Report</h3>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
                If you encounter any individual claiming affiliation with GWA without valid ID, or if you witness unethical activities under our name, please report immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex align-center gap-small">
                    <Mail className="text-accent" />
                    <span>complaints@ghatkoparassociation.org</span>
                </div>
                <div className="flex align-center gap-small">
                    <Phone className="text-accent" />
                    <span>+91 73737 30803</span>
                </div>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
