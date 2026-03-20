import directorImg from '../../assets/Director.jpeg';

export default function Founder() {
  return (
    <PageLayout title="Founder & Director" subtitle="The visionary leadership behind Ghatkopar Welfare Association.">
      <div className="about-page">
        <div className="profile-card">
          <div className="profile-img-wrapper shadow-lg">
            <img
              src="/images/Director.jpeg"
              alt="Founder & Director"
            />
          </div>
          <div className="profile-details">
            <span className="badge badge-primary mb-4">Founder & Director</span>
            <h2 className="mb-2">Shri. Ariful Haque Khan</h2>
            <p className="text-primary-brand font-bold mb-6">Visionary Leader & Social Entrepreneur</p>

            <div className="text-secondary">
              <p className="mb-4">
                <strong>Shri. Ariful Haque Khan</strong> founded the Ghatkopar Welfare Association with a clear mission: to create a platform where community members could work together to solve local challenges.
              </p>
              <p className="mb-4">
                Under his leadership, the association has grown from a small group of volunteers to a registered Section 8 NGO serving thousands of residents across Mumbai. His focus remains on food security and ensuring that no resident of Ghatkopar goes hungry.
              </p>
              <p>
                His commitment to transparency and structured social work has inspired a generation of volunteers to join the GWA mission of building a better society through collective action.
              </p>
            </div>

            <div className="mt-8 pt-8 border-top flex gap-large">
              <div>
                <h4 className="m-0">10+ Years</h4>
                <p className="text-xs text-secondary mt-1">Social Service</p>
              </div>
              <div>
                <h4 className="m-0">500+</h4>
                <p className="text-xs text-secondary mt-1">Project Managed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
