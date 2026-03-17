import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { GitBranch, Users, Shield, Target, ArrowDown } from 'lucide-react';

export default function OrganisationFlow() {
  const steps = [
    {
      title: "Management Board",
      desc: "Strategic leadership, vision alignment, and overall governance of the Association.",
      icon: <Shield className="text-primary-brand" size={24} />
    },
    {
      title: "Executive Committee",
      desc: "Planning, decision-making, regulatory compliance, and programme oversight.",
      icon: <Target className="text-primary-brand" size={24} />
    },
    {
      title: "Programme Divisions",
      desc: "Dedicated teams managing specific welfare areas like Healthcare, Food Security, and Education.",
      icon: <GitBranch className="text-primary-brand" size={24} />
    },
    {
      title: "Volunteer Network",
      desc: "Community-level execution, outreach programmes, and grassroots implementation.",
      icon: <Users className="text-primary-brand" size={24} />
    }
  ];

  const divisions = [
    "Food & Welfare", "Healthcare & Awareness", "Education & Empowerment", "Civic & Community Growth"
  ];

  return (
    <PageLayout title="Organization Flow" subtitle="The structured framework of GWA governance.">
      <div className="about-page">
        <div className="card-flat bg-primary-bg p-8 mb-12 border-primary border-dashed">
          <h3 className="text-center mb-8">Governance Structure</h3>
          <div className="flow-container max-w-2xl mx-auto">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="card-flat bg-white p-6 shadow-sm border-subtle flex align-center gap-normal hover-shadow-lg transition-all">
                  <div className="bg-sand p-4 rounded-xl">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="m-0 text-primary-dark">{step.title}</h4>
                    <p className="m-0 text-xs text-secondary mt-1">{step.desc}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown size={24} className="text-primary-brand opacity-30" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid-2 gap-large align-center">
          <div>
            <h3 className="mb-4">Programme Divisions</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Our organisation operates through specialized divisions to ensure that every social initiative is managed with expert focus and dedicated resources.
            </p>
            <div className="flex flex-wrap gap-normal">
              {divisions.map((div, i) => (
                <div key={i} className="bg-white border-subtle px-4 py-2 rounded-lg font-bold text-sm text-primary-brand shadow-sm">
                  {div}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-sand p-8 rounded-2xl">
            <h4 className="mb-4">Operational Philosophy</h4>
            <p className="text-xs text-secondary italic mb-0">
              "We believe in a Decentralized Implementation model where the Management Board provides the vision, and Programme Divisions have the autonomy to execute community-specific solutions under professional oversight."
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
