import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Instagram, ExternalLink, Camera } from 'lucide-react';

export default function Gallery() {
  const pastEvents = [
    {
      img: '/images/WhatsApp Image 2026-03-07 at 03.41.19.jpeg',
      title: 'Food Distribution Drive',
      date: 'March 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 03.41.20.jpeg',
      title: 'Community Health Camp',
      date: 'March 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 05.20.49.jpeg',
      title: 'Volunteer Meeting',
      date: 'March 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 05.20.50.jpeg',
      title: 'Ghatkopar Welfare Initiative',
      date: 'March 2024'
    }
  ];

  return (
    <PageLayout 
      title="Gallery & Past Events" 
      subtitle="A visual journey through our community initiatives and social impact."
    >
      <div className="gallery-page">
        {/* Intro */}
        <div className="text-center mb-12">
            <p className="text-secondary max-w-2xl mx-auto">
                We believe in capturing the moments that define our mission. From food distribution drives to healthcare camps, our gallery showcases the collective effort of our donors and volunteers.
            </p>
        </div>

        {/* Instagram Feed Section */}
        <div className="card-flat bg-sand p-12 text-center rounded-xl mb-12">
            <h2 className="mb-8">Our Instagram Feed</h2>
            
            <div className="instagram-widget-container" style={{ minHeight: '400px' }}>
                <script src="https://elfsightcdn.com/platform.js" async></script>
                <div className="elfsight-app-287c5ce5-772b-447a-9fd5-f54417312fa6" data-elfsight-app-lazy></div>
            </div>
        </div>

        {/* Manual Gallery */}
        <div>
            <div className="flex align-center justify-between mb-8">
                <h3 className="m-0">Recent Event Highlights</h3>
                <span className="badge badge-primary">Past Events</span>
            </div>
            <div className="grid-4 gap-small">
                {pastEvents.map((event, idx) => (
                    <div key={idx} className="group overflow-hidden rounded-xl bg-white shadow-sm hover-shadow transition">
                        <div className="aspect-square bg-sand relative overflow-hidden">
                            <img 
                                src={event.img} 
                                alt={event.title} 
                                className="w-full h-full object-cover transition-transform group-hover-scale-110"
                            />
                            <div className="absolute inset-0 bg-dark opacity-0 group-hover-opacity-20 transition"></div>
                        </div>
                        <div className="p-4">
                            <h4 className="m-0 text-sm">{event.title}</h4>
                            <p className="text-secondary text-xs m-0 mt-1">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* More Photos Placeholder */}
        <div className="mt-12 p-12 bg-dark text-white rounded-xl text-center">
            <Camera size={48} className="text-accent mb-4 mx-auto" />
            <h3 className="text-white">More Memories Coming Soon</h3>
            <p className="opacity-60 max-w-md mx-auto">
                We are constantly working on the ground. More photos and videos from our ongoing projects will be uploaded shortly.
            </p>
        </div>
      </div>
    </PageLayout>
  );
}
