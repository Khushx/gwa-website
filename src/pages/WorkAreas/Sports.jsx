import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Trophy, Users, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Sports() {
  const initiatives = [
    { 
        title: 'Youth Sports Camps', 
        desc: 'Organizing cricket, football, and athletics training for neighborhood children to build health and discipline.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Fitness Awareness', 
        desc: 'Promoting Yoga, physical fitness routines, and outdoor activities for all age groups in local parks.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Talent Scouting', 
        desc: 'Identifying promising young athletes and providing them with coaching support and tournament opportunities.',
        image: '/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg'
    },
    { 
        title: 'Sports Grounds Advocacy', 
        desc: 'Advocating for better maintenance and public access to local sports grounds and recreational spaces.',
        image: '/images/officer.jpeg'
    }
  ];

  return (
    <PageLayout 
      title="Sports & Fitness" 
      subtitle="Promoting physical well-being, team spirit, and competitive excellence through local sports."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><Trophy size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 3: Good Health & Well-being</span>
            <h2 className="mb-2">Champions of the Future</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                Sports build character, discipline, and community bonds. We aim to revive the playground culture in Ghatkopar and provide a platform for young talent to shine.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Our Sports Focus</h2>
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
              <span className="badge badge-accent mb-4">Active Lifestyle Impact</span>
              <h2 className="text-white text-4xl mb-huge">Growth on the Field</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">1,000+</span>
                  <span className="impact-label">Young Athletes</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">50+</span>
                  <span className="impact-label">Tournaments Held</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">5+</span>
                  <span className="impact-label">Sports Clubs</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Sponsor a Tournament</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Help us organize local inter-slum cricket and football matches. Your donation provides kits, trophies, and quality coaching.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/donate" className="btn btn-primary px-10">Support Sports <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Coach a Team</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
