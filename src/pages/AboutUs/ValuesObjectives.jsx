import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { Award, ShieldCheck, Heart, Users, CheckSquare, Zap, Target, BookOpen } from 'lucide-react';
import './About.css';

export default function ValuesObjectives() {
  const values = [
    { title: 'Integrity', icon: <ShieldCheck className="text-primary-brand" />, desc: 'Doing the right thing, even when no one is watching.' },
    { title: 'Compassion', icon: <Heart className="text-primary-brand" />, desc: 'Empathy at the heart of every food drive and health camp.' },
    { title: 'Transparency', icon: <Zap className="text-primary-brand" />, desc: 'Open records, open communication, and open trust.' },
    { title: 'Excellence', icon: <Award className="text-primary-brand" />, desc: 'Striving for the highest quality in local community service.' }
  ];

  const objectives = [
    'Establish consistent food security for low-income residents.',
    'Increase awareness of fundamental rights and government schemes.',
    'Foster environmental responsibility through massive tree plantation.',
    'Build a robust network of verified local community volunteers.'
  ];

  return (
    <PageLayout title="Values & Objectives" subtitle="The ethical compass that guides our every decision.">
      <div className="about-page">
        <h2 className="section-title mb-8">Our Core Values</h2>
        <div className="grid-4 mb-12">
            {values.map((v, i) => (
                <div key={i} className="card-flat p-6 text-center card-hover-up">
                    <div className="bg-primary-bg w-12 h-12 rounded-full flex align-center justify-center mx-auto mb-4">
                        {v.icon}
                    </div>
                    <h4 className="mb-2">{v.title}</h4>
                    <p className="text-xs text-secondary m-0">{v.desc}</p>
                </div>
            ))}
        </div>

        <div className="grid-2 gap-huge align-center">
            <div className="aspect-square bg-sand rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg" alt="Objectives" className="w-full h-full object-cover" />
            </div>
            <div>
                <span className="badge badge-accent mb-4">Strategic Goals</span>
                <h2 className="mb-6">Key <span className="text-primary-brand">Objectives</span></h2>
                <div className="flex flex-col gap-6">
                    {objectives.map((obj, i) => (
                        <div key={i} className="flex align-start gap-small">
                            <div className="mt-1"><CheckSquare size={18} className="text-accent" /></div>
                            <span className="text-secondary font-medium">{obj}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-8 border-top">
                    <div className="flex align-center gap-small text-primary-brand">
                        <BookOpen size={20} />
                        <span className="font-bold">Aligned with UN Sustainable Development Goals</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
