import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { GitBranch, Users, ShieldCheck, UserCheck } from 'lucide-react';
import './About.css';

export default function OrganisationFlow() {
  const levels = [
    { title: 'Executive Oversight', icon: <ShieldCheck size={24} />, desc: 'Founder & Chairman leading the strategic vision and legal compliance.' },
    { title: 'Managing Board', icon: <UserCheck size={24} />, desc: 'Executive directors managing day-to-day operations and project approvals.' },
    { title: 'Project Divisions', icon: <GitBranch size={24} />, desc: 'Specialized teams for Food, Health, Education, and Civic issues.' },
    { title: 'Volunteer Force', icon: <Users size={24} />, desc: 'The backbone of GWA, executing field activities and community outreach.' }
  ];

  return (
    <PageLayout title="Organisation Flow" subtitle="Understanding our structured approach to social welfare.">
      <div className="about-page">
        <div className="text-center mb-12">
            <p className="text-secondary max-w-2xl mx-auto">
                Our organization operates through a decentralized yet accountable structure, ensuring that every initiative is executed with precision and impact.
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
            {levels.map((level, idx) => (
                <div key={idx} className="flex align-center gap-large mb-4">
                    <div className="hidden md:flex flex-col align-center">
                        <div className="w-12 h-12 rounded-full bg-primary-brand text-white flex align-center justify-center font-bold">
                            {idx + 1}
                        </div>
                        {idx !== levels.length - 1 && <div className="w-0.5 h-16 bg-primary-bg my-2"></div>}
                    </div>
                    <div className="card-flat flex-grow p-6 flex align-center gap-6 card-hover-up">
                        <div className="bg-sand p-4 rounded-xl text-primary-brand">
                            {level.icon}
                        </div>
                        <div>
                            <h4 className="mb-1">{level.title}</h4>
                            <p className="text-sm text-secondary m-0">{level.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 p-8 bg-sand border-dashed rounded-xl text-center">
            <p className="m-0 text-secondary font-medium">
                GWA follows a <span className="text-primary-brand font-bold">Bottom-Up approach</span> where feedback from volunteers and beneficiaries informs our top-level strategic decisions.
            </p>
        </div>
      </div>
    </PageLayout>
  );
}
