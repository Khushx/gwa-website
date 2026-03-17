import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Gavel, Megaphone, Users, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function CivicIssues() {
  const initiatives = [
    { 
        title: 'Public Infrastructure', 
        desc: 'Reporting and following up on road repairs, drainage issues, and public lighting in Ghatkopar with municipal authorities.',
        image: '/images/officer.jpeg'
    },
    { 
        title: 'Governance Monitoring', 
        desc: 'Promoting transparency by attending ward meetings, tracking budget utilization, and advocating for local needs.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Rights Awareness', 
        desc: 'Educating residents on how to file RTIs, access welfare schemes, and use municipal portals effectively.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Urban Safety', 
        desc: 'Collaborating with local police to improve neighbourhood safety, traffic management, and emergency reporting.',
        image: '/images/volunteer-helping-with-donation-box.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Civic Issues & Governance" 
      subtitle="Empowering citizens to demand and build better public services through advocacy and awareness."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><Gavel size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 16: Peace & Justice</span>
            <h2 className="mb-2">Your Voice, Our Mission</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                We bridge the gap between residents and government authorities. GWA ensures that Ghatkopar remains a livable, safe, and governed township for every resident.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Civic Initiatives</h2>
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
              <span className="badge badge-accent mb-4">Active Citizenship</span>
              <h2 className="text-white text-4xl mb-huge">Measurable Civic Change</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">500+</span>
                  <span className="impact-label">Grievances Solved</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">50+</span>
                  <span className="impact-label">Ward Meetings</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">100%</span>
                  <span className="impact-label">Lawful Advocacy</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Report a Civic Concern</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Does your street have a pothole or a broken light? Let us know, and we'll help you escalate it through proper municipal channels.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/contact" className="btn btn-primary px-10">Report Issue <Megaphone size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Join Civic Team</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
