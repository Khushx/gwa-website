import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
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
        <div className="card-flat bg-dark text-light mb-8" style={{ borderRadius: 'var(--radius-md)', padding: '4rem 3rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
                <span className="badge badge-accent">Join our Mission</span>
                <h2 className="text-light mb-2">Be part of our next community event!</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Ghatkopar Welfare Association organizes regular events and campaigns to address grassroots challenges and empower the community.
                </p>
                <button className="btn btn-primary" style={{ backgroundColor: 'var(--secondary-accent)', color: 'var(--text-primary)' }}>Register for Updates</button>
            </div>
            <div className="grid-2 gap-small">
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
                    <Bell className="text-secondary-accent mb-1" style={{color: 'var(--secondary-accent)'}} />
                    <span style={{display: 'block', fontSize: '1.2rem', fontWeight: 700}}>12+</span>
                    <span style={{fontSize: '0.8rem'}}>Events/Year</span>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
                    <Calendar className="text-secondary-accent mb-1" style={{color: 'var(--secondary-accent)'}} />
                    <span style={{display: 'block', fontSize: '1.2rem', fontWeight: 700}}>Monthly</span>
                    <span style={{fontSize: '0.8rem'}}>Campaigns</span>
                </div>
            </div>
        </div>

        {/* Upcomming Events */}
        <div className="mb-8">
            <h3 className="mb-4">Upcoming Programmes</h3>
            <div className="grid-2">
                {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="card-flat bg-sand" style={{ borderRadius: 'var(--radius-md)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ backgroundColor: 'var(--primary-brand)', padding: '1rem 2rem', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 600 }}>{event.category}</span>
                            <Tag size={18} />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{event.title}</h4>
                            <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                <Calendar size={16} className="text-primary-brand" />
                                <span>{event.date} • {event.time}</span>
                            </div>
                            <div className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                <MapPin size={16} className="text-primary-brand" />
                                <span>{event.location}</span>
                            </div>
                            <p style={{ marginBottom: '1.5rem' }}>{event.desc}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Link to="/contact" className="btn btn-outline" style={{ borderRadius: '50px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Join Now</Link>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><Share2 size={18}/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Campaign Categories */}
        <div className="section-padding bg-primary-light" style={{ borderRadius: 'var(--radius-md)', padding: '4rem 2rem' }}>
            <div className="text-center mb-8">
                <h2>Our Campaign Focus</h2>
                <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>We organize targeted campaigns throughout the year to create measurable social impact.</p>
            </div>
            <div className="grid-2">
                {categories.map((cat, idx) => (
                    <div key={idx} className="bg-white" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div className="bg-sand" style={{ padding: '1rem', borderRadius: '12px' }}>
                            <Bell className="text-primary-brand" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '0.5rem' }}>{cat.name}</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{cat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center bg-accent" style={{ padding: '4rem 2rem', borderRadius: 'var(--radius-md)' }}>
            <h2 className="mb-2">Get Updates on Future Campaigns</h2>
            <p className="mb-4" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>Subscribe to our newsletter to receive timely announcements about new initiatives and event recaps.</p>
            <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
                <input type="email" placeholder="Your Email Address" style={{ padding: '1rem 1.5rem', borderRadius: '50px', border: '1px solid rgba(0,0,0,0.1)', flexGrow: 1 }} />
                <button type="button" className="btn btn-primary">Subscribe</button>
            </form>
        </div>
      </div>
    </PageLayout>
  );
}
