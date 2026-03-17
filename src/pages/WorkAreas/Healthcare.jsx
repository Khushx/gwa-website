import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { HeartPulse, Stethoscope, Activity, ShieldCheck, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Healthcare() {
  const initiatives = [
    {
      title: 'Mobile Health Clinics',
      desc: 'Bringing primary healthcare services directly to underserved areas through our fleet of equipped medical vans and temporary clinics.',
      image: '/images/awareness.jpeg'
    },
    {
      title: 'Specialty Camps',
      desc: 'Regular camps focusing on vision care, dental health, and diabetes screening with consultation from expert doctors and specialists.',
      image: '/images/together.jpg'
    },
    {
      title: 'First Aid Training',
      desc: 'Empowering community members with life-saving skills through certified basic medical response workshops and emergency preparedness.',
      image: '/images/officer.jpeg'
    },
    {
      title: 'Elderly Home Care',
      desc: 'Providing dedicated healthcare support and monitoring for senior citizens who live alone in our community through regular home visits.',
      image: '/images/volunteer-helping-with-donation-box.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Healthcare Initiatives" 
      subtitle="Promoting health, well-being, and medical awareness across Ghatkopar through accessible services."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><HeartPulse size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 3: Good Health</span>
            <h2 className="mb-2">Accessible Healthcare for All</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                We believe that quality medical care is a right, not a privilege. Our programs bridge the gap between residents and essential health services through mobile clinics and specialized medical camps.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Key Initiatives</h2>
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
              <span className="badge badge-accent mb-4">Our Track Record</span>
              <h2 className="text-white text-4xl mb-huge">Impactful Medical Care</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">5,000+</span>
                  <span className="impact-label">Checkups Done</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">25+</span>
                  <span className="impact-label">Partner Doctors</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">12</span>
                  <span className="impact-label">Health Camps / Yr</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-brand/10 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Are You a Health Professional?</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">We are always looking for medical experts, doctors, and nurses to volunteer their skills at our camps and outreach programs.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/contact" className="btn btn-primary px-10">Partner with Us <UserPlus size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Join as Volunteer</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
