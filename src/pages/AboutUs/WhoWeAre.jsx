import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Users, ShieldCheck, Globe, Zap } from 'lucide-react';
import './About.css';

export default function WhoWeAre() {
    return (
        <PageLayout title="Who We Are" subtitle="A movement of the people, by the people, for the people.">
            <div className="about-page">
                <div className="grid-2 gap-huge mb-12 align-center">
                    <div>
                        <h2 className="mb-6">More Than Just An <span className="text-primary-brand">NGO</span></h2>
                        <p className="text-secondary mb-6 leading-relaxed">
                            Ghatkopar Welfare Association (GWA) is a collective of residents, professionals, and visionaries united by a love for Ghatkopar. We aren't just an organization; we are your neighbors, friends, and colleagues working to ensure our community thrives.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex align-center gap-small">
                                <div className="bg-primary-bg p-2 rounded-lg"><Users size={18} className="text-primary-brand" /></div>
                                <span className="font-bold">100% Volunteer Driven</span>
                            </div>
                            <div className="flex align-center gap-small">
                                <div className="bg-primary-bg p-2 rounded-lg"><ShieldCheck size={18} className="text-primary-brand" /></div>
                                <span className="font-bold">Transparent Legal Framework</span>
                            </div>
                            <div className="flex align-center gap-small">
                                <div className="bg-primary-bg p-2 rounded-lg"><Globe size={18} className="text-primary-brand" /></div>
                                <span className="font-bold">Rooted in Mumbai's Heart</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-sand overflow-hidden shadow-xl" style={{ borderRadius: '20px' }}>
                            <img src="/images/woman-teaching-classroom.jpg" alt="Who We Are" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>

                <div className="card-flat bg-dark text-white p-12 text-center">
                    <h3 className="text-white mb-6">Our Identity</h3>
                    <div className="grid-3 gap-large">
                        <div className="p-4 border-subtle-white rounded-lg">
                            <h4 className="text-accent mb-2">Non-Political</h4>
                            <p className="text-sm opacity-70">We are strictly neutral and focused solely on community welfare regardless of political affiliations.</p>
                        </div>
                        <div className="p-4 border-subtle-white rounded-lg">
                            <h4 className="text-accent mb-2">Non-Religious</h4>
                            <p className="text-sm opacity-70">Our services are open to all human beings, serving humanity beyond caste, creed, or religion.</p>
                        </div>
                        <div className="p-4 border-subtle-white rounded-lg">
                            <h4 className="text-accent mb-2">Pro-Transparency</h4>
                            <p className="text-sm opacity-70">Every initiative, record, and financial transaction is open for public verification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
