import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { History as HistoryIcon, Milestone, Flag } from 'lucide-react';
import './About.css';

export default function History() {
  const milestones = [
    { year: '2024 (March)', title: 'The Inception', desc: 'Ghatkopar Welfare Association was founded by Shri Ariful Haque Khan with a small team of 10 volunteers.' },
    { year: '2024 (April)', title: 'Official Registration', desc: 'Registered as a Section 8 Non-Profit Organisation under the Ministry of Corporate Affairs.' },
    { year: '2024 (May)', title: 'First Mega Food Drive', desc: 'Launched the Sunday Free Food programme, feeding 500+ daily wage workers in its first week.' },
    { year: '2024 (Present)', title: 'Growing Impact', desc: 'Expanded into healthcare, education, and environment, now supported by a network of 1000+ donors.' }
  ];

  return (
    <PageLayout title="History" subtitle="How a small initiative became a community movement.">
      <div className="about-page max-w-4xl mx-auto">
        <div className="flex align-center gap-small mb-8">
            <HistoryIcon size={32} className="text-primary-brand" />
            <h2 className="m-0">Our Journey</h2>
        </div>
        
        <div className="relative pl-8 border-left border-primary-bg ml-4 mt-8">
            {milestones.map((item, idx) => (
                <div key={idx} className="mb-12 relative">
                    <div className="absolute -left-11 w-6 h-6 rounded-full bg-primary-brand border-4 border-white shadow-sm flex align-center justify-center">
                        <Milestone size={12} className="text-white" />
                    </div>
                    <div className="card-flat p-6 card-hover-up">
                        <span className="text-primary-brand font-bold text-sm">{item.year}</span>
                        <h3 className="mt-1 mb-2">{item.title}</h3>
                        <p className="text-secondary m-0">{item.desc}</p>
                    </div>
                </div>
            ))}
            <div className="absolute -left-11 -bottom-4 bg-accent w-6 h-6 rounded-full flex align-center justify-center">
                <Flag size={12} className="text-white" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
