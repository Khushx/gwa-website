import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import './About.css';

export default function Founder() {
  return (
    <PageLayout
      title="Founder & President"
      subtitle="The visionary leadership behind Ghatkopar Welfare Association."
    >
      <div className="about-page">
        <div className="profile-card">
          <div className="profile-img-wrapper shadow-lg">
            <img
              src="/images/Director.png"
              alt="Rizwan Khan - Founder & President"
            />
          </div>
          <div className="profile-details">
            <span className="badge badge-primary mb-4">Founder & President</span>
            <h2 className="mb-2">Rizwan Khan</h2>
            <p className="text-primary-brand font-bold mb-6">Ghatkopar Welfare Association</p>

            <div className="text-secondary">
              <p className="mb-4">
                <strong>Rizwan Khan</strong> is the Founder and President of Ghatkopar Welfare Association (GWA) and the driving force behind the organisation’s vision of structured community development and social responsibility in Ghatkopar and surrounding areas of Mumbai.
              </p>
              <p className="mb-4">
                With a strong commitment to community welfare, he established the organisation to create a transparent and organised platform for social initiatives that address local challenges such as food security, healthcare awareness, education support, and civic engagement.
              </p>
              <p className="mb-4">
                Under his leadership, Ghatkopar Welfare Association was established as a registered Section 8 non-profit organisation under the Companies Act, 2013, ensuring that the organisation operates with proper governance, accountability, and compliance with regulatory standards.
              </p>
              <p className="mb-4">
                As President, he oversees the strategic direction and overall functioning of the organisation, guiding its programmes, community outreach initiatives, and partnerships. His focus is on creating sustainable social impact through organised planning, responsible management, and active community participation.
              </p>
              <p className="mb-4">
                Rizwan has been actively involved in initiating key programmes including free food distribution drives, awareness campaigns, community welfare initiatives, and volunteer engagement programmes. Through his efforts, the organisation continues to expand its network of volunteers, partners, and community supporters.
              </p>
              <p>
                He believes that collective efforts and responsible leadership can bring meaningful and lasting change to society, and continues to work towards building a stronger, more supportive, and socially responsible community.
              </p>
            </div>

            <div className="mt-8 pt-8 border-top flex gap-normal">
              <div>
                <h4 className="m-0">Founder &</h4>
                <p className="text-xs text-secondary mt-1">GWA NGO -</p>
              </div>
              <div>
                <div style={{ marginLeft: '2px' }}>
                  <h4 className="m-0">President</h4>
                  <p className="text-xs text-secondary mt-1">Strategic Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
