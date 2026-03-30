import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import './About.css';

const coreCommittee = [
  {
    name: "Ghulam Mustafa Khan",
    role: "Joint Treasurer",
    description: "Supports financial oversight, documentation, and coordination related to organisational activities."
  },
  {
    name: "Ayyub Shaikh",
    role: "Joint Secretary",
    description: "Assists in organisational administration, coordination of internal communication, and programme support."
  },
  {
    name: "Danish Khan",
    role: "Field Executive",
    description: "Responsible for supporting on-ground activities, coordinating field initiatives, and assisting with programme implementation."
  }
];

const committeeMembers = [
  { name: "Rameez Shaikh", role: "Member" },
  { name: "Arbaz Sayyed", role: "Member" },
  { name: "Abbas Attar", role: "Member" },
  { name: "Atif Ansari", role: "Member" }
];

export default function BoardMembers() {
  return (
    <PageLayout
      title="Board & Committee"
      subtitle="The dedicated team supporting the operations and initiatives of Ghatkopar Welfare Association."
    >
      <div className="about-page">
        {/* Intro */}
        <div className="mb-large text-center">
          <p className="text-secondary">
            The Board Members and Core Committee of Ghatkopar Welfare Association play an important role in supporting the organisation’s operations, programme implementation, and community engagement initiatives.
            These members contribute their time, skills, and dedication to ensure that the organisation’s activities are carried out in a structured and responsible manner while maintaining transparency and accountability in all initiatives.
          </p>
        </div>

        {/* Section 1 - Core Committee */}
        <div className="mb-large">
          <h2 className="text-center" style={{ marginBottom: '5rem', marginTop: '3rem' }}>Core Committee Members</h2>
          <div className="grid-3 gap-large">
            {coreCommittee.map((member, index) => (
              <div key={index} className="card-flat p-8 flex flex-col h-full" style={{ borderTop: '4px solid var(--primary-brand)' }}>
                <span className="badge badge-primary mb-3 w-fit" style={{ width: 'fit-content' }}>{member.role}</span>
                <h3 className="mb-4">{member.name}</h3>
                <p className="text-sm text-secondary flex-grow">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 - Committee Members */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <h2 className="text-center" style={{ marginBottom: '4rem', marginTop: '5rem' }}>Committee Members</h2>
          <div className="grid-4 gap-medium">
            {committeeMembers.map((member, index) => (
              <div key={index} className="card-flat p-6 text-center" style={{ backgroundColor: 'var(--sand-bg)' }}>
                <h4 className="mb-2">{member.name}</h4>
                <span className="text-xs font-bold text-primary-brand tracking-widest uppercase">{member.role}</span>
              </div>
            ))}
          </div>
          <p className="text-secondary text-center mt-12 text-sm max-w-2xl mx-auto">
            Committee members actively participate in community initiatives, volunteer activities, and organisational programmes, contributing to the overall mission of promoting social welfare and community development.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 992px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr; }
        }
      `}} />
    </PageLayout>
  );
}
