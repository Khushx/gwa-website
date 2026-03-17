import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { TrendingUp, Users, Target, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function CommunityGrowth() {
  const initiatives = [
    { 
        title: 'Networking Events', 
        desc: 'Bringing together local professionals, entrepreneurs, and activists to discuss community needs and collaborate.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Civic Awareness', 
        desc: 'Mass campaigns on cleanliness, traffic discipline, and responsible citizenship for a better living experience.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Capacity Building', 
        desc: 'Training local community leaders to identify problems and solve them at the grassroots level effectively.',
        image: '/images/officer.jpeg'
    },
    { 
        title: 'Neighbor Connect', 
        desc: 'Initiatives aimed at strengthening the social fabric of housing societies and community clusters in Ghatkopar.',
        image: '/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Community Growth" 
      subtitle="Fostering a sense of belonging, collective responsibility, and social harmony."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><TrendingUp size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 17: Partnerships</span>
            <h2 className="mb-2">Stronger Together</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                Our goal is to create a vibrant, aware, and proactive community. We transform residents from mere neighbors into active partners in the township's progress.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Growth Pillars</h2>
            <div className="grid-2">
            {initiatives.map((item, idx) => (
                <div key={idx} className="card-flat bg-white border-subtle overflow-hidden flex align-center p-0 card-hover-up">
                    <div className="w-1/3 h-full min-h-[200px]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-2/3 p-8">
                        <h3 className="mb-3 text-xl">{item.title}</h3>
                        <p className="text-secondary text-sm m-0 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </section>

        <div className="impact-box mb-huge bg-dark text-white p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10">
              <span className="badge badge-accent mb-4">Our Shared Progress</span>
              <h2 className="text-white text-4xl mb-huge">Strong Social Fabric</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">5,000+</span>
                  <span className="impact-label">Engaged Residents</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">100+</span>
                  <span className="impact-label">Community Events</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">1</span>
                  <span className="impact-label">Common Vision</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Become a GWA Member</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Official members get a direct voice in our strategic decision-making and join a network of dedicated change-makers.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/get-involved/member-registration" className="btn btn-primary px-10">Register Now <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/contact" className="btn btn-outline border-primary px-10">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
