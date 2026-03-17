import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Laptop, Globe, ShieldCheck, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Digital() {
  const initiatives = [
    { 
        title: 'Digital Literacy', 
        desc: 'Providing basic computer training and smartphone usage skills to children and adults in underserved neighborhoods.',
        image: '/images/poster.jpeg'
    },
    { 
        title: 'Online Governance', 
        desc: 'Helping residents access government portals, apply for documentation, and utilize digital welfare schemes.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Cyber Security', 
        desc: 'Workshops for senior citizens and students on safe internet practices, mobile security, and digital finance safety.',
        image: '/images/together.jpg'
    },
    { 
        title: 'IT Skill Center', 
        desc: 'A dedicated lab for coding, software usage, and vocational tech training for aspiring youth.',
        image: '/images/woman-teaching-classroom.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Digital Empowerment" 
      subtitle="Bridging the digital divide in the heart of Ghatkopar through literacy and technological access."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><Laptop size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 9: Digital Inclusion</span>
            <h2 className="mb-2">Technology for All</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                We ensure that no citizen is left behind in the digital revolution. Our programs empower residents with the tools and knowledge needed for modern life and governance.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Digital Strategy</h2>
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
              <span className="badge badge-accent mb-4">Connecting Ghatkopar</span>
              <h2 className="text-white text-4xl mb-huge">Digital Milestone</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">1,500+</span>
                  <span className="impact-label">Digitally Literate</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">5+</span>
                  <span className="impact-label">Computer Labs</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">24/7</span>
                  <span className="impact-label">Support Access</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Donate a Laptop</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">If you have old but working laptops or digital devices, donate them to our community centers for student use.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/contact" className="btn btn-primary px-10">Donate Devices <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Teach Tech</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
