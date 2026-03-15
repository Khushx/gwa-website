import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { Target, Heart, CheckCircle, Shield } from 'lucide-react';
import './About.css';

export default function GoalsBeliefs() {
  const goals = [
    { title: 'Short-Term Goals', items: ['Expand Sunday Free Food drive to 2000+ meals', 'Launch 5 more mobile health clinics', 'Initiate local waste management campaigns'] },
    { title: 'Long-Term Goals', items: ['Establish a permanent GWA Community Hospital', 'Build a vocational training center for women', 'Create a 100% digital literacy rate in local slums'] }
  ];

  return (
    <PageLayout title="Goals & Beliefs" subtitle="Our guiding principles and the milestones we aim to achieve.">
      <div className="about-page">
        <div className="grid-2 gap-huge mb-12">
            <div className="card-flat bg-primary-bg p-8 border-left-primary">
                <div className="flex align-center gap-small mb-4">
                    <Heart size={24} className="text-primary-brand" />
                    <h2 className="m-0">What We Believe</h2>
                </div>
                <ul className="list-unstyled flex flex-col gap-4 text-secondary">
                    <li className="flex align-start gap-small">
                        <CheckCircle size={16} className="text-primary-brand mt-1" />
                        <span>We believe that no one should ever have to worry about their next meal.</span>
                    </li>
                    <li className="flex align-start gap-small">
                        <CheckCircle size={16} className="text-primary-brand mt-1" />
                        <span>We believe that community participation is the only way to achieve sustainable growth.</span>
                    </li>
                    <li className="flex align-start gap-small">
                        <CheckCircle size={16} className="text-primary-brand mt-1" />
                        <span>We believe in complete financial transparency as the root of public trust.</span>
                    </li>
                    <li className="flex align-start gap-small">
                        <CheckCircle size={16} className="text-primary-brand mt-1" />
                        <span>We believe that empowered women and youth are the blueprint for a better future.</span>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="mb-6">Our Roadmap to <span className="text-primary-brand">Impact</span></h2>
                {goals.map((goal, idx) => (
                    <div key={idx} className="mb-8">
                        <div className="flex align-center gap-small mb-3">
                            <Target size={20} className="text-accent" />
                            <h4 className="m-0">{goal.title}</h4>
                        </div>
                        <ul className="flex flex-col gap-2 list-unstyled">
                            {goal.items.map((item, i) => (
                                <li key={i} className="text-secondary flex align-center gap-small">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="p-12 bg-dark text-white rounded-xl text-center">
            <Shield size={40} className="text-accent mb-4 mx-auto" />
            <h3 className="text-white mb-2">Our Promise</h3>
            <p className="opacity-70 max-w-2xl mx-auto">
                "We don't just set goals; we set standards. Standards of service, standards of integrity, and standards of compassion that define everything we do."
            </p>
        </div>
      </div>
    </PageLayout>
  );
}
