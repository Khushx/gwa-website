import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import './About.css';

export default function ChairmanPresident() {
  return (
    <PageLayout title="Chairman & Director" subtitle="Executive oversight and guidance for GWA initiatives.">
      <div className="about-page grid-2 gap-large">
        {/* Chairman */}
        <div className="card-flat p-8 flex flex-col gap-6">
          <div className="profile-img-container shadow-md">
            <img src="/images/Chairman.jpeg" alt="Chairman" className="profile-img" />
          </div>
          <div>
            <span className="badge mb-3">Chairman</span>
            <h3 className="mb-1">Salman Khan</h3>
            <p className="text-secondary mb-4 italic">"Strategic leadership for community welfare."</p>
            <div className="text-sm text-secondary">
              <p className="mb-4">
                <strong>Salman Khan</strong> serves as the Chairman of Ghatkopar Welfare Association (GWA) and plays an important role in providing strategic guidance and leadership to the organisation.
              </p>
              <p className="mb-4">
                As Chairman, he works closely with the board and executive team to ensure that the association operates effectively while staying aligned with its mission of community welfare and responsible social development.
              </p>
              <p className="mb-4">
                He supports the organisation in strengthening its governance structure, overseeing programme direction, and encouraging collaboration with community stakeholders, institutions, and volunteers.
              </p>
              <p>
                Salman Khan actively contributes to the organisation’s efforts in areas such as community outreach, social welfare initiatives, and civic engagement programmes, helping expand the reach and effectiveness of the association’s activities.
              </p>
            </div>
          </div>
        </div>

        {/* Director */}
        <div className="card-flat p-8 flex flex-col gap-6">
          <div className="profile-img-container shadow-md">
            <img src="/images/Director.jpeg" alt="Director" className="profile-img" />
          </div>
          <div>
            <span className="badge mb-3">Director</span>
            <h3 className="mb-1">Rizwan Khan</h3>
            <p className="text-secondary mb-4 italic">"Action-driven management for social impact."</p>
            <div className="text-sm text-secondary">
              <p className="mb-4">
                <strong>Rizwan Khan</strong> serves as the Director of Ghatkopar Welfare Association, contributing to the planning, development, and management of the organisation’s social initiatives and operational activities.
              </p>
              <p className="mb-4">
                As Director, he plays a key role in coordinating programmes, guiding volunteer teams, and supporting the implementation of projects across different divisions of the organisation.
              </p>
              <p className="mb-4">
                His work focuses on ensuring that community initiatives are organised, effective, and aligned with the association’s long-term objectives.
              </p>
              <p>
                He is actively involved in initiatives related to food distribution drives, community welfare programmes, awareness campaigns, and youth engagement activities, helping strengthen the organisation’s presence within the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
