import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { BookOpen, GraduationCap, Laptop, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkArea.css';

export default function Education() {
  const initiatives = [
    { 
        title: 'School Support', 
        desc: 'Providing books, uniforms, and stationery to students from low-income families to ensure no child stays out of school.',
        image: '/images/woman-teaching-classroom.jpg'
    },
    { 
        title: 'Digital Literacy', 
        desc: 'Setting up computer labs and offering basic IT training for local youth to bridge the digital divide.',
        image: '/images/poster.jpeg'
    },
    { 
        title: 'Scholarship Programs', 
        desc: 'Financial assistance for meritorious students to pursue higher education and professional courses.',
        image: '/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg'
    },
    { 
        title: 'After-School Tutoring', 
        desc: 'Free coaching for municipal school students to improve academic performance and prevent dropouts.',
        image: '/images/together.jpg'
    }
  ];

  return (
    <PageLayout 
      title="Education & Literacy" 
      subtitle="Empowering the next generation through knowledge, digital skills, and academic support."
    >
      <div className="work-area-page">
        <div className="work-header mb-huge">
          <div className="work-icon-ring"><GraduationCap size={40} className="text-primary-brand" /></div>
          <div>
            <span className="badge badge-accent mb-2">Sustainable Development Goal 4: Quality Education</span>
            <h2 className="mb-2">Education is the Foundation</h2>
            <p className="text-secondary max-w-3xl m-0 leading-relaxed text-lg">
                We believe in creating equal educational opportunities for all children. Our initiatives range from providing basic school supplies to advanced digital training and merit-based scholarships.
            </p>
          </div>
        </div>

        <section className="mb-huge">
            <h2 className="section-title text-center mb-large">Educational Programs</h2>
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
              <span className="badge badge-accent mb-4">Our Achievements</span>
              <h2 className="text-white text-4xl mb-huge">Empowering Students</h2>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">2,000+</span>
                  <span className="impact-label">Students Assisted</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">10+</span>
                  <span className="impact-label">School Partners</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">85%</span>
                  <span className="impact-label">Result Improvement</span>
                </div>
              </div>
          </div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="work-cta bg-sand p-16 rounded-3xl border-subtle">
          <div className="grid-2 align-center gap-large">
            <div>
              <h2 className="text-3xl mb-4">Support a Student Today</h2>
              <p className="text-secondary text-lg leading-relaxed m-0">Your contribution covers books, uniforms, and school fees for one child for an entire academic year.</p>
            </div>
            <div className="flex flex-center gap-normal justify-end">
              <Link to="/donate" className="btn btn-primary px-10">Sponsor Education <ArrowRight size={18} className="ml-2" /></Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline border-primary px-10">Become a Mentor</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
