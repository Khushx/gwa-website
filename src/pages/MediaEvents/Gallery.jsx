import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Instagram, ExternalLink, Camera } from 'lucide-react';

export default function Gallery() {
  const pastEvents = [
    {
      img: '/images/food-drive.jpeg',
      title: 'Mega Food Drive 2024',
      date: 'Feb 2024'
    },
    {
      img: '/images/food-drive-1.jpeg',
      title: 'Community Kitchen Initiative',
      date: 'Jan 2024'
    },
    {
      img: '/images/food-side.jpeg',
      title: 'Grassroots Outreach',
      date: 'March 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 03.41.19.jpeg',
      title: 'Foundation Day 2024',
      date: 'Jan 2024'
    },
    {
      img: '/images/WhatsApp Image 2026-03-07 at 05.20.50.jpeg',
      title: 'Public Welfare Drive',
      date: 'March 2024'
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
      <div className="gallery-page">
        {/* Intro */}
        <div className="text-center mb-large">
            <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                We believe in capturing the moments that define our mission. From food distribution drives to healthcare camps, our gallery showcases the collective effort of our donors and volunteers.
            </p>
        </div>

        {/* Manual Gallery */}
        <section className="mb-huge">
            <div className="flex align-center justify-between mb-large pb-4 border-bottom">
                <h2 className="m-0 text-3xl font-bold">Recent Event Highlights</h2>
                <span className="badge badge-accent px-6 py-2">Verified Impact</span>
            </div>
            <div className="grid-4">
                {pastEvents.map((event, idx) => (
                    <div key={idx} className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 border-subtle">
                        <div className="aspect-[4/5] relative overflow-hidden">
                            <img 
                                src={event.img} 
                                alt={event.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                                <div>
                                    <span className="badge badge-accent py-1 px-3 text-[10px] mb-2">{event.date}</span>
                                    <p className="text-white text-sm font-medium m-0">{event.title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 text-center bg-white">
                            <h4 className="m-0 text-sm font-bold text-dark group-hover:text-primary-brand transition-colors">{event.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="bg-sand p-12 text-center rounded-3xl mb-huge border-subtle">
            <div className="mb-large">
                <Instagram size={48} className="mx-auto mb-4 text-primary-brand" />
                <h2 className="mb-2">Follow Our Real-time Journey</h2>
                <p className="text-secondary max-w-xl mx-auto">Stay connected with our daily activities and live updates via Instagram.</p>
            </div>
            
            <div className="instagram-widget-container bg-white p-6 rounded-2xl shadow-sm min-h-[500px]">
                <div className="elfsight-app-287c5ce5-772b-447a-9fd5-f54417312fa6" data-elfsight-app-lazy></div>
            </div>
        </section>

        {/* More Photos Placeholder */}
        <div className="p-16 bg-dark text-white rounded-3xl text-center relative overflow-hidden">
            <div className="relative z-10">
                <Camera size={56} className="text-accent mb-6 mx-auto" />
                <h2 className="text-white mb-4">More Memories Coming Soon</h2>
                <p className="opacity-70 max-w-xl mx-auto mb-huge">
                    We are constantly working on the ground. More photos and videos from our ongoing projects will be uploaded shortly as we expand our digital archive.
                </p>
                <div className="flex flex-center gap-normal">
                    <Link to="/contact" className="btn btn-accent px-10">Volunteer Now</Link>
                    <Link to="/about/overview" className="btn btn-outline border-white text-white hover:bg-white/10 px-10">About Our Work</Link>
                </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-brand/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-accent/5 rounded-full -ml-40 -mb-40 blur-3xl"></div>
        </div>
      </div>
    </PageLayout>
  );
}
