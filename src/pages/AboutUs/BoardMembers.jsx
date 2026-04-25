import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import './About.css';
import vicePresidentPhoto from '/src/assets/vice-president.jpeg';
import communityOfficerPhoto from '/src/assets/community-officer.png';

const coreCommittee = [
  {
    name: "Anil Ware",
    role: "Vice President",
    description: "Oversees organisational strategy and plays a key role in driving impactful community welfare initiatives.",
    photo: vicePresidentPhoto
  },
  {
    name: "Akheel Shaikh",
    role: "Community Officer",
    description: "Acts as a primary liaison between the community and the organisation to ensure our initiatives meet local needs.",
    photo: communityOfficerPhoto
  },
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

  // 🔹 Split members
  const membersWithPhotos = coreCommittee.filter(member => member.photo);
  const membersWithoutPhotos = coreCommittee.filter(member => !member.photo);

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

        {/* Core Committee */}
        <div className="mb-large">
          <h2 className="text-center" style={{ marginBottom: '5rem', marginTop: '3rem' }}>
            Core Committee Members
          </h2>
          <div className="photo-row">
            {membersWithPhotos.map((member, index) => (
              <div key={index} className="horizontal-card">

                <div className="image-box">
                  <img src={member.photo} alt={member.name} />
                </div>

                <div className="content-box">
                  <span className="badge">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </div>

              </div>
            ))}
          </div>

          {/* 🔹 Members WITHOUT photos */}
          <div className="grid-3 gap-large">
            {membersWithoutPhotos.map((member, index) => (
              <div
                key={index}
                className="card-flat p-8 flex flex-col h-full"
                style={{ borderTop: '4px solid var(--primary-brand)' }}
              >
                <span className="badge">
                  {member.role}
                </span>

                <h3 className="mb-4">{member.name}</h3>

                <p className="text-sm text-secondary flex-grow">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Members */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <h2 className="text-center" style={{ marginBottom: '4rem', marginTop: '5rem' }}>
            Committee Members
          </h2>

          <div className="grid-4 gap-medium">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className="card-flat p-6 text-center"
                style={{ backgroundColor: 'var(--sand-bg)' }}
              >
                <h4 className="mb-2">{member.name}</h4>
                <span className="text-xs font-bold text-primary-brand tracking-widest uppercase">
                  {member.role}
                </span>
              </div>
            ))}
          </div>

          <p className="text-secondary text-center mt-12 text-sm max-w-2xl mx-auto">
            Committee members actively participate in community initiatives, volunteer activities, and organisational programmes, contributing to the overall mission of promoting social welfare and community development.
          </p>
        </div>
      </div>

      {/* 🔹 Styles */}
      <style>{`
        .photo-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 40px;
        }

        .horizontal-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #e5e5e5;
          align-items: center;
          background: #fff;
        }

        .image-box {
          width: 120px;
          height: 120px;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .content-box h3 {
          margin: 10px 0;
        }

        .badge {
          display: inline-block;
          width: fit-content;
          max-width: 100%;
          background: #cfe0ea;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          white-space: nowrap;
          margin-bottom: 8px;
        }
        .grid - 3 {
          display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px; /* 🔥 THIS was missing */
      }

        .grid-4 {
          display: grid;
        grid-template-columns: repeat(4, 1fr);
            }

        .grid-2-centered {
          display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px; /* 🔥 ADD THIS */
        max-width: 650px;
        margin-left: auto;
        margin-right: auto;
  }

        @media (max-width: 992px) {
              .grid - 3 {grid - template - columns: repeat(2, 1fr); }
        .grid-4 {grid - template - columns: repeat(2, 1fr); }
        .grid-2-centered {grid - template - columns: repeat(2, 1fr); }
            }

        @media (max-width: 600px) {
              .grid - 3,
              .grid - 4,
              .grid - 2 - centered {
          grid - template - columns: 1fr;
        max-width: 100%;
              }
            }
        `}</style>
    </PageLayout>
  );
}