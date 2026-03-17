import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { UserCheck, Zap, Heart, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function WomenEmpowerment() {
  const initiatives = [
    { 
        title: 'Skill Development', 
        desc: 'Training programs in tailoring, computer literacy, and beauty services to foster financial independence among local women.',
        image: '/images/woman-teaching-classroom.jpg'
    },
    { 
        title: 'Legal Awareness', 
        desc: 'Workshops on fundamental rights, domestic safety, and government schemes for women to ensure social security.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Self-Help Groups', 
        desc: 'Facilitating the formation and management of SHGs for micro-savings, mutual support, and micro-entrepreneurship.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Health & Hygiene', 
        desc: 'Awareness sessions on menstrual health, nutrition, and maternal care for underserved women through community outreach.',
        image: '/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Women Empowerment" 
      subtitle="Empowering women to lead, earn, and live with dignity through skills and awareness."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><UserCheck size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 5: Gender Equality</span>
            <h2 className="mb-2">Strong Women, Strong Community</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                We believe that when women are empowered, entire families and societies progress. GWA provides the tools, training, and support systems for social and economic independence.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Empowerment Initiatives</h2>
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
              <span className="badge badge-accent mb-4">Impact on Lives</span>
              <h2 className="text-white text-4xl mb-huge">Leading the Change</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">1,200+</span>
                  <span className="impact-label">Women Trained</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">15+</span>
                  <span className="impact-label">Active SHGs</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">500+</span>
                  <span className="impact-label">Livelihoods Created</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Support Women Entrepreneurs</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Help us sponsor industrial sewing machines or vocational training kits for our women's community centers.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/donate" className="btn btn-primary px-10">Support Women <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Mentor a Program</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
