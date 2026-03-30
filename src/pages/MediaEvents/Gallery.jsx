import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Instagram, ExternalLink, Camera } from 'lucide-react';

export default function Gallery() {


  return (
    <PageLayout
      title="Gallery & Past Events"
      subtitle="A visual journey through our community initiatives and social impact."
    >
      <div className="gallery-page py-12">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed" style={{ marginBottom: '50px' }}>
            We believe in capturing the moments that define our mission. From food distribution drives to healthcare camps, our gallery showcases the collective effort of our donors and volunteers.
          </p>
        </div>


        {/* Instagram Feed Section */}
        <section className="bg-sand p-12 text-center rounded-3xl mb-12 border border-subtle">
          <div className="mb-10">
            <Instagram size={40} className="mx-auto mb-4 text-primary-brand" />
            <h2 className="text-3xl font-bold mb-2">Follow Our Real-time Journey</h2>
            <p className="text-secondary">Stay connected with our daily activities and live updates via Instagram.</p>
          </div>

          <div className="instagram-widget-container bg-white p-6 rounded-2xl shadow-sm" style={{ minHeight: '500px' }}>
            <div className="elfsight-app-287c5ce5-772b-447a-9fd5-f54417312fa6" data-elfsight-app-lazy></div>
          </div>
        </section>


      </div>
    </PageLayout>
  );
}
