import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import './About.css';

export default function ChairmanPresident() {
  return (
    <PageLayout title="Chairman & President" subtitle="Executive oversight and guidance for GWA initiatives.">
      <div className="about-page grid-2 gap-large">
        {/* Chairman */}
        <div className="card-flat p-8 flex flex-col gap-6">
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img src="/images/Chairman.jpeg" alt="Chairman" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="badge mb-3">Chairman</span>
            <h3 className="mb-1">Shri. Faiyaz Ahmed Khan</h3>
            <p className="text-secondary mb-4 italic">"Transforming Ghatkopar one initiative at a time."</p>
            <p className="text-sm text-secondary">
              Oversees strategic planning and ensures that the association's mission aligns with community needs and national goals.
            </p>
          </div>
        </div>

        {/* President */}
        <div className="card-flat p-8 flex flex-col gap-6">
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img src="/images/President.jpeg" alt="President" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="badge mb-3">President</span>
            <h3 className="mb-1">Shri. Irfan Khan</h3>
            <p className="text-secondary mb-4 italic">"Collective action for community growth."</p>
            <p className="text-sm text-secondary">
              Directs the executive board and leads the implementation of GWA projects across healthcare and education sectors.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
