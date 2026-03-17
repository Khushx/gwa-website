import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { ShieldAlert, Zap, Truck, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function DisasterRelief() {
  const initiatives = [
    { 
        title: 'Emergency Response', 
        desc: 'Mobilising volunteer teams for immediate rescue, first aid, and support during floods or fires.',
        image: '/images/food-drive.jpeg'
    },
    { 
        title: 'Relief Distribution', 
        desc: 'Providing dry ration, medication, blankets, and essential kits to families displaced by seasonal calamities.',
        image: '/images/food-side.jpeg'
    },
    { 
        title: 'Rehabilitation Support', 
        desc: 'Long-term assistance for rebuilding livelihoods and housing after the immediate crisis has passed.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Resource Logistics', 
        desc: 'Partnering with logistics providers for rapid movement of aid and essential supplies across affected zones.',
        image: '/images/officer.jpeg'
    }
  ];

  return (
    <PageLayout 
      title="Disaster Relief & Response" 
      subtitle="Standing with the community as the first line of defense during their toughest hours."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><ShieldAlert size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 11: Resilient Communities</span>
            <h2 className="mb-2">Rapid Response for Crises</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                When disaster strikes, GWA is on the frontlines. We mobilise resources and volunteers instantly to ensure that life-saving help reaches the most vulnerable residents without delay.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Relief Strategy</h2>
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
              <span className="badge badge-accent mb-4">Our Crisis Impact</span>
              <h2 className="text-white text-4xl mb-huge">Standing Strong Together</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">2,500+</span>
                  <span className="impact-label">Families Helped</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">48 hrs</span>
                  <span className="impact-label">Response Time</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">10+</span>
                  <span className="impact-label">Townships Covered</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-brand/10 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Contribute to Relief Fund</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">We maintain a reserve emergency fund to ensure we can act instantly during seasonal calamities, fires, or unforeseen accidents.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/donate" className="btn btn-primary px-10">Donate to Relief <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Join Rescue Team</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
