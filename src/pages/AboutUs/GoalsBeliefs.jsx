import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Target, Heart, CheckCircle, Shield, Sparkles } from 'lucide-react';
import './About.css';

export default function GoalsBeliefs() {
    const goals = [
        { title: 'Short-Term Goals', items: ['Expand Sunday Free Food drive to 2000+ meals', 'Launch 5 more mobile health clinics', 'Initiate local waste management campaigns'] },
        { title: 'Long-Term Goals', items: ['Establish a permanent GWA Community Hospital', 'Build a vocational training center for women', 'Create a 100% digital literacy rate in local slums'] }
    ];

    return (
        <PageLayout title="Goals & Beliefs" subtitle="Our guiding principles and the milestones we aim to achieve.">
            <div className="about-page">
                <div className="flex flex-col gap-huge mb-12">
                    <div className="card-flat p-8 bg-dark text-white card-hover-up mb-12">

                        {/* Top Icon */}
                        <div className="bg-accent/20 w-16 h-16 rounded-full flex align-center justify-center mb-6">
                            <Target size={32} className="text-accent" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-white mb-6">
                            Our Roadmap to <span className="text-accent">Impact</span>
                        </h2>

                        {/* Goals */}
                        <div className="goals-grid">
                            {goals.map((goal, idx) => (
                                <div key={idx} className="goal-card">

                                    {/* Sub heading */}
                                    <h4 className="mb-3 text-white">{goal.title}</h4>

                                    {/* Items */}
                                    <ul className="list-unstyled flex flex-col gap-4 opacity-90">
                                        {goal.items.map((item, i) => (
                                            <li key={i} className="flex align-start gap-small">

                                                {/* Replace dot with icon */}
                                                <Sparkles size={18} className="text-accent mt-1 flex-shrink-0" />

                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card-flat bg-primary-bg p-8 border-left-primary mb-12">
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

                <div className="p-12 bg-dark text-white rounded-xl text-center">
                    <Shield size={40} className="text-accent mx-auto" />
                    <h3 className="text-white mb-2">Our Promise</h3>
                    <p className="opacity-70 max-w-2xl mx-auto">
                        "We don't just set goals; we set standards. Standards of service, standards of integrity, and standards of compassion that define everything we do."
                    </p>
                </div>
            </div>
        </PageLayout >
    );
}
