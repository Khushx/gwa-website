import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { Bus, Train, Smartphone, Hospital, Search, Landmark, Shield, Flame, Heart, Mail, CreditCard, User, Briefcase, ArrowRight, Phone } from 'lucide-react';
import './Resources.css';

export default function LocalInformation() {
  const categories = [
    { title: 'Bus Routes & Timings', icon: <Bus size={24} />, desc: 'Ghatkopar BEST Depot and route information.' },
    { title: 'Local Train Timings', icon: <Train size={24} />, desc: 'Central Railway schedules for Ghatkopar Station.' },
    { title: 'Metro Timings (Line 1)', icon: <Smartphone size={24} />, desc: 'Metro services between Versova and Ghatkopar.' },
    { title: 'Hospitals & Clinics', icon: <Hospital size={24} />, desc: 'Private healthcare facilities in the area.' },
    { title: 'Diagnostic Centres & Medical Labs', icon: <Search size={24} />, desc: 'Pathology and imaging centres.' },
    { title: 'Municipal Corporation (BMC) Ward Office', icon: <Landmark size={24} />, desc: 'N-Ward office information and services.' },
    { title: 'Police Stations', icon: <Shield size={24} />, desc: 'Ghatkopar and Pant Nagar police station contacts.' },
    { title: 'Fire Brigade Station', icon: <Flame size={24} />, desc: 'Emergency contact for local fire department.' },
    { title: 'Government Hospitals & Health Centres', icon: <Heart size={24} />, desc: 'Rajawadi Hospital and other public clinics.' },
    { title: 'Post Office', icon: <Mail size={24} />, desc: 'Indian Post services and locations.' },
    { title: 'Ration Card / PDS Office', icon: <CreditCard size={24} />, desc: 'Public Distribution System office info.' },
    { title: 'Aadhaar & PAN Service Centres', icon: <User size={24} />, desc: 'Official centres for identity card services.' },
    { title: 'Passport Seva Kendra (Nearby)', icon: <Landmark size={24} />, desc: 'Passport application and verification centres.' },
    { title: 'Regional Transport Office (RTO – Nearby)', icon: <Smartphone size={24} />, desc: 'Vahan and Sarathi services for residents.' },
    { title: 'Electricity & Water Supply Office', icon: <Landmark size={24} />, desc: 'Adani, Tata, and BMC water department.' },
    { title: 'Labour & Employment Office', icon: <Briefcase size={24} />, desc: 'Employment exchanges and labour support.' },
    { title: 'Social Welfare Department Office', icon: <Heart size={24} />, desc: 'Government schemes and social assistance.' }
  ];

  return (
    <PageLayout 
      title="Local Information" 
      subtitle="Your guide to essential community services and resources in Ghatkopar."
    >
      <div className="resources-page">
        <p className="mb-8 text-secondary max-w-3xl">
          At Ghatkopar Welfare Association, we aim to keep residents informed about the essential public services and utilities available in our community. Below is a comprehensive list of resources to help you stay connected with local facilities.
        </p>

        <div className="grid-3 mb-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="card-flat bg-sand card-hover-up info-card">
              <div className="icon-box-white mb-6">
                {React.cloneElement(cat.icon, { className: 'text-primary-brand' })}
              </div>
              <h3 className="mb-2 text-lg">{cat.title}</h3>
              <p className="text-secondary text-sm mb-6">{cat.desc}</p>
              <button className="flex align-center gap-tiny text-primary-brand font-bold text-sm bg-none border-none p-0 cursor-pointer hover-accent">
                View Information <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="card-flat bg-dark text-white p-12 text-center rounded-xl">
          <h2 className="text-white mb-4">Need Direct Assistance?</h2>
          <p className="mb-8 opacity-70 max-w-2xl mx-auto">
            If you are looking for specific contact details or help navigating these local services, feel free to visit our office or reach out to our team.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex align-center gap-small">
              <Phone className="text-accent" />
              <span className="font-bold">+91 73737 30803</span>
            </div>
            <div className="flex align-center gap-small">
              <Mail className="text-accent" />
              <span className="font-bold">info@ghatkoparassociation.org</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
