import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Briefcase, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Livelihood() {
  const initiatives = [
    { 
        title: 'Vocational Training', 
        desc: 'Job-oriented courses in retail, basic accounting, and hospital management for local youth to ensure market readiness.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Micro-Finance Support', 
        desc: 'Assisting small entrepreneurs with credit access, financial planning, and linkage to government subsidy schemes.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Placement Assistance', 
        desc: 'Connecting trained candidates with local businesses, industries, and service sectors across Mumbai.',
        image: '/images/officer.jpeg'
    },
    { 
        title: 'Entrepreneurship Labs', 
        desc: 'Mentoring programs for those looking to start their own small-scale social ventures or micro-enterprises.',
        image: '/images/volunteer-helping-with-donation-box.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Livelihood & Employment" 
      subtitle="Creating pathways to financial independence and dignity through skill development and placement."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><Briefcase size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 8: Decent Work</span>
            <h2 className="mb-2">Empowering Economic Growth</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                We focus on bridging the gap between talent and opportunity by providing industry-relevant skills and connecting residents with meaningful employment.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Economic Initiatives</h2>
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
              <span className="badge badge-accent mb-4">Our Success Stories</span>
              <h2 className="text-white text-4xl mb-huge">Sustainable Livelihoods</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">800+</span>
                  <span className="impact-label">Jobs Secured</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">15+</span>
                  <span className="impact-label">Skill Centers</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">65%</span>
                  <span className="impact-label">Income Boost</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Hire from Our Pool</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">If you are a business owner looking for trained and motivated local staff, partner with GWA for talent acquisition.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/contact" className="btn btn-primary px-10">Recruit Talent <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/partner" className="btn btn-outline border-primary px-10">Corporate Partnership</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
