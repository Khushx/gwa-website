import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Instagram, ExternalLink, Camera } from 'lucide-react';

export default function Gallery() {
  const pastEvents = [
    {
      img: '/images/WhatsApp Image 2026-03-07 at 03.41.19.jpeg',
      title: 'Foundation Day 2024',
      date: 'Jan 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 03.41.20.jpeg',
      title: 'Community Outreach',
      date: 'Feb 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 05.20.49.jpeg',
      title: 'Core Committee Meeting',
      date: 'March 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 05.20.50.jpeg',
      title: 'Public Welfare Drive',
      date: 'March 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 05.20.49 (1).jpeg',
      title: 'Volunteer Distribution',
      date: 'April 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-10 at 01.28.01.jpeg',
      title: 'Medical Camp Setup',
      date: 'May 2024'
    },
    {
      img: '/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg',
      title: 'Education for All',
      date: 'June 2024'
    },
    {
      img: '/images/woman-teaching-classroom.jpg',
      title: 'Women Empowerment Session',
      date: 'July 2024'
    }
  ];

  return (
    <PageLayout 
      title="Gallery & Past Events" 
      subtitle="A visual journey through our community initiatives and social impact."
    >
      <div className="gallery-page py-12">
        {/* Intro */}
        <div className="text-center mb-16">
            <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                We believe in capturing the moments that define our mission. From food distribution drives to healthcare camps, our gallery showcases the collective effort of our donors and volunteers.
            </p>
        </div>

        {/* Manual Gallery */}
        <section className="mb-20">
            <div className="flex items-center justify-between mb-10 pb-4 border-b">
                <h2 className="m-0 text-3xl font-bold">Recent Event Highlights</h2>
                <span className="badge badge-primary px-6 py-2">Verified Impact</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pastEvents.map((event, idx) => (
                    <div key={idx} className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="aspect-[4/5] relative overflow-hidden">
                            <img 
                                src={event.img} 
                                alt={event.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">{event.date}</p>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="m-0 text-lg font-bold text-dark group-hover:text-primary-brand transition-colors">{event.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>

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

        {/* More Photos Placeholder */}
        <div className="p-12 bg-dark text-white rounded-3xl text-center relative overflow-hidden">
            <div className="relative z-10">
                <Camera size={48} className="text-secondary-accent mb-4 mx-auto" />
                <h3 className="text-white text-2xl font-bold">More Memories Coming Soon</h3>
                <p className="opacity-60 max-w-md mx-auto mb-8">
                    We are constantly working on the ground. More photos and videos from our ongoing projects will be uploaded shortly.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn btn-primary bg-secondary-accent text-dark border-none">Volunteer Log</button>
                    <button className="btn btn-outline border-white text-white hover:bg-white/10">Request Media Access</button>
                </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-brand/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </PageLayout>
  );
}
