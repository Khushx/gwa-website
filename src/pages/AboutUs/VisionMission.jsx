import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Eye, Target, Sparkles } from 'lucide-react';
import './About.css';

export default function VisionMission() {
  return (
    <PageLayout title="Vision & Mission" subtitle="Defining our purpose and the path to a better community.">
      <div className="about-page">
        <div className="grid-2 gap-large mb-12">
          {/* Vision */}
          <div className="card-flat p-12 bg-primary-brand text-white card-hover-up">
            <div className="bg-white/20 w-16 h-16 rounded-full flex align-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h2 className="text-white mb-4">Our Vision</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              To build an inclusive, empowered, and self-reliant Ghatkopar where every citizen has access to essential resources, opportunities for growth, and a dignified life, driven by the spirit of collective responsibility.
            </p>
          </div>

          {/* Mission */}
          <div className="card-flat p-12 bg-dark text-white card-hover-up">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex align-center justify-center mb-6">
              <Target size={32} className="text-accent" />
            </div>
            <h2 className="text-white mb-4">Our Mission</h2>
            <ul className="list-unstyled flex flex-col gap-4 opacity-90">
              <li className="flex align-start gap-small">
                <Sparkles size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>To eliminate hunger through structured and consistent food security programmes.</span>
              </li>
              <li className="flex align-start gap-small">
                <Sparkles size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>To provide affordable and specialty healthcare access to underprivileged families.</span>
              </li>
              <li className="flex align-start gap-small">
                <Sparkles size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>To empower the youth and women through skill development and educational support.</span>
              </li>
              <li className="flex align-start gap-small">
                <Sparkles size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>To foster a green, clean, and sustainable local environment.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-flat p-8 bg-sand border-left-accent">
          <p className="m-0 italic text-secondary text-center">
            "Our vision is the destination, our mission is the journey. Every volunteer, donor, and member is a fellow traveler in this pursuit of social justice."
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
