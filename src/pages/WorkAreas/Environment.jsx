import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Leaf, Droplets, Trash2, Wind, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Environment() {
  const initiatives = [
    { 
        title: 'Tree Plantation', 
        desc: 'Massive plantation drives to increase the green cover in Ghatkopar and surrounding urban areas, focusing on native species.',
        image: '/images/food-side.jpeg'
    },
    { 
        title: 'Waste Management', 
        desc: 'Conducting awareness sessions on waste segregation, composting at source, and reducing single-use plastics.',
        image: '/images/awareness.jpeg'
    },
    { 
        title: 'Water Conservation', 
        desc: 'Promoting rainwater harvesting and water-saving techniques in housing societies to manage urban water stress.',
        image: '/images/together.jpg'
    },
    { 
        title: 'Cleanliness Drives', 
        desc: 'Regular community cleaning initiatives in public parks, streets, and station areas to maintain civic hygiene.',
        image: '/images/volunteer-helping-with-donation-box.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Environment & Sustainability" 
      subtitle="Building a greener, cleaner, and healthier Ghatkopar through community-led environmental action."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><Leaf size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 13: Climate Action</span>
            <h2 className="mb-2">Protecting Our Local Ecosystem</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                A sustainable environment is essential for the holistic well-being of our community. GWA drives initiatives for green cover, waste reduction, and water conservation.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Ecological Initiatives</h2>
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
              <span className="badge badge-accent mb-4">Our Green Footprint</span>
              <h2 className="text-white text-4xl mb-huge">Conservation & Cleaning</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">5,000+</span>
                  <span className="impact-label">Trees Planted</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">50+</span>
                  <span className="impact-label">Clean-up Drives</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">20+</span>
                  <span className="impact-label">Eco-Society Partners</span>
                </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Make Your Society Green</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Join our environmental workshops to learn about composting, waste segregation, and water conservation for your building.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/contact" className="btn btn-primary px-10">Contact Eco-Team <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Join a Drive</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
