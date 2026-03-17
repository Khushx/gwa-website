import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Utensils, Heart, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function FoodSecurity() {
  const initiatives = [
    {
      title: 'Weekly Free Food Drives',
      desc: 'Our volunteer teams organise regular free food distribution drives, particularly on weekends, ensuring that vulnerable populations receive freshly cooked, nutritious meals.',
      image: '/images/food-drive.jpeg'
    },
    {
      title: 'Emergency Food Assistance',
      desc: 'During crises or community emergencies, we mobilise resources to provide immediate food relief, dry ration kits, and essential supplies to affected families.',
      image: '/images/food-side.jpeg'
    },
    {
      title: 'Nutrition Awareness',
      desc: 'We conduct awareness programmes to educate families about the importance of a balanced diet, proper nutrition for children, and healthy eating practices.',
      image: '/images/awareness.jpeg'
    },
    {
      title: 'Grassroots Outreach',
      desc: 'Dedicated outreach to the most neglected urban clusters in Ghatkopar, bringing hot meals directly to those who cannot reach our distribution centers.',
      image: '/images/food-drive-1.jpeg'
    }
  ];

  return (
    <PageLayout 
      title="Food Security & Nutrition" 
      subtitle="Ensuring no one in Ghatkopar goes to sleep hungry through organised distribution and awareness."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><Utensils size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 2: Zero Hunger</span>
            <h2 className="mb-2">Our Core Mission: Zero Hunger</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                Access to adequate nutrition is a basic human necessity. GWA is committed to addressing hunger through organised distribution, emergency relief, and community nutrition awareness.
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
              <h2 className="text-white text-4xl mb-huge">Feeding Thousands Weekly</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">10,000+</span>
                  <span className="impact-label">Meals Served</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">500+</span>
                  <span className="impact-label">Weekly Volunteers</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">24/7</span>
                  <span className="impact-label">Emergency Support</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-brand/10 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Support Our Sunday Food Drive</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Every Sunday, we serve freshly prepared food to those in need. Your contribution can help us reach more people and scale our operations.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/donate" className="btn btn-primary px-10">Contribute Now <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Join as Volunteer</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
