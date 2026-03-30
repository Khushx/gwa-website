import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import './About.css';

export default function ChairmanPresident() {
  return (
    <PageLayout
      title="Chairman & Director"
      subtitle="Executive oversight and guidance for GWA initiatives."
    >
      <div className="about-page">
        {/* Chairman - Salman Khan */}
        <div className="profile-card mb-large">
          <div className="profile-img-wrapper shadow-lg">
            <img
              src="/images/Chairman.png"
              alt="Salman Khan - Chairman"
            />
          </div>
          <div className="profile-details">
            <span className="badge badge-primary mb-4">Chairman</span>
            <h2 className="mb-2">Salman Khan</h2>
            <p className="text-primary-brand font-bold mb-6">Ghatkopar Welfare Association</p>

            <div className="text-secondary">
              <p className="mb-4">
                <strong>Salman Khan</strong> serves as the Chairman of Ghatkopar Welfare Association (GWA) and plays an important role in providing strategic guidance and leadership to the organisation. As Chairman, he works closely with the board and executive team to ensure that the association operates effectively while staying aligned with its mission of community welfare and responsible social development.
              </p>
              <p className="mb-4">
                He supports the organisation in strengthening its governance structure, overseeing programme direction, and encouraging collaboration with community stakeholders, institutions, and volunteers. His leadership helps ensure that initiatives are implemented with transparency, accountability, and long-term impact.
              </p>
              <p className="mb-4">
                Salman Khan actively contributes to the organisation’s efforts in areas such as community outreach, social welfare initiatives, and civic engagement programmes, helping expand the reach and effectiveness of the association’s activities.
              </p>
              <p>
                Through his role, he remains committed to supporting initiatives that promote community participation, social responsibility, and sustainable development within Ghatkopar and surrounding regions.
              </p>
            </div>
          </div>
        </div>

        {/* Director - Rizwan Khan */}
        <div className="profile-card">
          <div className="profile-img-wrapper shadow-lg">
            <img
              src="/images/Director.png"
              alt="Rizwan Khan - Director"
            />
          </div>
          <div className="profile-details">
            <span className="badge badge-primary mb-4">Director</span>
            <h2 className="mb-2">Rizwan Khan</h2>
            <p className="text-primary-brand font-bold mb-6">Ghatkopar Welfare Association</p>

            <div className="text-secondary">
              <p className="mb-4">
                <strong>Rizwan Khan</strong> serves as the Director of Ghatkopar Welfare Association, contributing to the planning, development, and management of the organisation’s social initiatives and operational activities.
              </p>
              <p className="mb-4">
                As Director, he plays a key role in coordinating programmes, guiding volunteer teams, and supporting the implementation of projects across different divisions of the organisation. His work focuses on ensuring that community initiatives are organised, effective, and aligned with the association’s long-term objectives.
              </p>
              <p className="mb-4">
                He is actively involved in initiatives related to food distribution drives, community welfare programmes, awareness campaigns, and youth engagement activities, helping strengthen the organisation’s presence within the community.
              </p>
              <p>
                Through his involvement in programme development and operational coordination, Rizwan Khan supports the association’s mission to create positive social impact through structured and community-driven initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
