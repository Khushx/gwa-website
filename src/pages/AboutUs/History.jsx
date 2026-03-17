import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { History as HistoryIcon, Milestone, Flag } from 'lucide-react';
import './About.css';

export default function History() {
  const milestones = [
    { year: '2024 (March)', title: 'The Inception', desc: 'Ghatkopar Welfare Association was founded by Shabaaz Shaikh along with Chairman Salman Khan, Director Rizwan Khan, and a dedicated team of 10 volunteers.' },

    { year: '2024 (April)', title: 'Official Registration', desc: 'Registered as a Section 8 Non-Profit Organisation under the Ministry of Corporate Affairs.' },

    { year: '2024 (April)', title: 'First Mega Food Drive', desc: 'Successfully launched the first large-scale food distribution initiative, marking the beginning of regular community support programmes.' },

    { year: '2024 (May)', title: 'Sunday Food Initiative', desc: 'Initiated structured weekly food distribution drives supporting daily wage workers and underprivileged individuals.' },

    { year: '2024 (December)', title: 'School Awareness Program', desc: 'Conducted a Health & Safety Awareness session on Good Touch & Bad Touch at Guru Nanak English High School, promoting child safety education.' },

    { year: '2025 (January)', title: 'Mumbai Police Collaboration', desc: 'Organised an awareness programme in collaboration with Mumbai Police at Little Flower English High School, focusing on safety and community awareness.' },

    { year: '2025 (January)', title: 'Student Safety Initiative', desc: 'Conducted a Good Touch & Bad Touch awareness session with Mumbai Police at KVK School to educate students on personal safety.' },

    { year: '2025 (June)', title: 'Anti-Drug Awareness Session', desc: 'Organised a drugs awareness session to educate youth about the harmful effects of substance abuse and promote a healthy lifestyle.' },

    { year: '2025 (November)', title: 'Honouring Public Service', desc: 'Recognised and honoured the bravery and service of the Mumbai Fire Brigade at Vikhroli Fire Station.' },

    { year: '2026 (January)', title: 'Weekly Food Drive Expansion', desc: 'Strengthened the initiative by formalising the Every Sunday Free Food Drive to serve the community consistently.' },

    { year: '2026 (March)', title: 'Mental Health Initiative', desc: 'Conducted a Stress Management & Psychological Resilience session for police personnel in Ghatkopar, supporting mental well-being.' },

    { year: 'Present', title: 'Ongoing Community Impact', desc: 'Continuing the Every Sunday Free Food Drive along with expanding initiatives in healthcare, education, and community development.' }
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
