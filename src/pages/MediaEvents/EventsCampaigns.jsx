import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Calendar, MapPin, ArrowRight, Share2, Tag, Bell } from 'lucide-react';

export default function EventsCampaigns() {
  const upcomingEvents = [
    {
      title: 'Monthly Food Security Drive',
      date: 'Every Sunday',
      time: '10:00 AM - 1:00 PM',
      location: 'Road No. 1, L.B.S. Marg, Ghatkopar West',
      category: 'Community Support',
      desc: 'Free food distribution drive for vulnerable individuals and families in the community.'
    },
    {
      title: 'Healthcare Awareness Camp',
      date: 'Last Saturday of Month',
      time: '9:00 AM - 4:00 PM',
      location: 'Ghatkopar East Community Centre',
      category: 'Medical Awareness',
      desc: 'Health check-ups, awareness sessions on preventive care, and medical outreach.'
    },
    {
        title: 'Environmental Cleanliness Drive',
        date: 'First Saturday of Quarter',
        time: '7:00 AM - 11:00 AM',
        location: 'Local Neighbourhood Zones',
        category: 'Sustainability',
        desc: 'Community-led cleanliness campaigns and environmental awareness drives.'
    }
  ];

  const categories = [
    { name: 'Environmental Campaigns', desc: 'Tree plantation drives, cleanliness campaigns, and sustainability awareness initiatives.' },
    { name: 'Public Awareness Campaigns', desc: 'Educational sessions on health, civic rights, and social welfare schemes.' },
    { name: 'Women Empowerment Workshops', desc: 'Vocational training, financial literacy, and self-defence sessions.' },
    { name: 'Monthly Campaigns', desc: 'Recurring programs focused on food security and healthcare outreach.' }
  ];

  return (
    <PageLayout 
      title="Events & Campaigns" 
      subtitle="Stay informed about our upcoming programs and community drives."
    >
      <div className="events-page">
        {/* Banner Section */}
        <div className="card-flat bg-dark text-light mb-large grid-2 align-center">
            <div>
                <span className="badge badge-accent mb-4">Join our Mission</span>
                <h2 className="text-light mb-4">Be part of our next community event!</h2>
                <p className="text-white opacity-70 mb-huge">
                    Ghatkopar Welfare Association organizes regular events and campaigns to address grassroots challenges and empower the community.
                </p>
                <Link to="/contact" className="btn btn-accent">Register for Updates</Link>
            </div>
            <div className="grid-2 gap-small">
                <div className="bg-white/5 p-8 rounded-xl text-center backdrop-blur-sm">
                    <Bell className="text-accent mb-2 mx-auto" />
                    <span className="block text-2xl font-bold">12+</span>
                    <span className="text-xs opacity-70">Events/Year</span>
                </div>
                <div className="bg-white/5 p-8 rounded-xl text-center backdrop-blur-sm">
                    <Calendar className="text-accent mb-2 mx-auto" />
                    <span className="block text-2xl font-bold">Monthly</span>
                    <span className="text-xs opacity-70">Campaigns</span>
                </div>
            </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-large">
            <h3 className="section-title mb-6">Upcoming Programmes</h3>
            <div className="grid-2 gap-normal">
                {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="card-flat bg-sand p-0 overflow-hidden flex flex-col border-subtle card-hover-up">
                        <div className="bg-primary-brand p-4 px-8 text-white flex justify-between align-center">
                            <span className="font-bold text-sm uppercase tracking-wider">{event.category}</span>
                            <Tag size={18} />
                        </div>
                        <div className="p-8">
                            <h4 className="mb-4">{event.title}</h4>
                            <div className="flex align-center gap-small text-sm text-secondary mb-2">
                                <Calendar size={16} className="text-primary-brand" />
                                <span>{event.date} • {event.time}</span>
                            </div>
                            <div className="flex align-center gap-small text-sm text-secondary mb-6">
                                <MapPin size={16} className="text-primary-brand" />
                                <span>{event.location}</span>
                            </div>
                            <p className="text-sm text-secondary mb-8 leading-relaxed">{event.desc}</p>
                            <div className="flex justify-between align-center mt-auto pt-6 border-top">
                                <Link to="/contact" className="btn btn-outline py-2 px-6 text-sm">Join Now</Link>
                                <button className="btn-icon text-secondary hover-text-primary-brand transition-colors"><Share2 size={18}/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Campaign Categories */}
        <div className="py-xl bg-primary-light rounded-xl px-12 mb-large">
            <div className="text-center mb-large">
                <h2 className="mb-2">Our Campaign Focus</h2>
                <p className="text-secondary max-w-2xl mx-auto">We organize targeted campaigns throughout the year to create measurable social impact.</p>
            </div>
            <div className="grid-2 gap-normal">
                {categories.map((cat, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl flex gap-normal align-start shadow-sm hover-shadow-lg transition-all border-subtle">
                        <div className="bg-sand p-4 rounded-xl">
                            <Bell className="text-primary-brand" />
                        </div>
                        <div>
                            <h4 className="mb-2">{cat.name}</h4>
                            <p className="text-sm text-secondary m-0 leading-relaxed">{cat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Past Events & Social Media Highlights */}
        <div className="py-xl rounded-xl">
            <div className="text-center mb-large">
                <span className="badge mb-4">Social Feed</span>
                <h2 className="mb-2">Past Events & <span className="text-primary-brand">Highlights</span></h2>
                <p className="text-secondary max-w-2xl mx-auto">Follow our journey and stay updated with our latest activities through our Instagram feed.</p>
            </div>
            
            <div className="instagram-feed-container card-flat bg-white p-8 border-subtle min-h-96">
                <div className="elfsight-app-287c5ce5-772b-447a-9fd5-f54417312fa6" data-elfsight-app-lazy></div>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-large text-center bg-accent py-xl px-8 rounded-xl">
            <h2 className="mb-4">Get Updates on Future Campaigns</h2>
            <p className="mb-8 max-w-lg mx-auto opacity-90">Subscribe to our newsletter to receive timely announcements about new initiatives and event recaps.</p>
            <form className="flex flex-center gap-small max-w-lg mx-auto">
                <input type="email" placeholder="Your Email Address" className="flex-grow py-3 px-6 rounded-full border-subtle outline-none focus:border-primary-brand transition-all" />
                <button type="button" className="btn btn-primary">Subscribe</button>
            </form>
        </div>
      </div>
    </PageLayout>
  );
}
