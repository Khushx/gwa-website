import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
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
    { title: 'Government Hospitals & Health Centres', icon: <Hospital size={24} />, desc: 'Rajawadi Hospital and other public clinics.' },
    { title: 'Post Office', icon: <Mail size={24} />, desc: 'Indian Post services and locations.' },
    { title: 'Ration Card / PDS Office', icon: <CreditCard size={24} />, desc: 'Public Distribution System office info.' },
    { title: 'Aadhaar & PAN Service Centres', icon: <User size={24} />, desc: 'Official centres for identity card services.' },
    { title: 'Passport Seva Kendra (Nearby)', icon: <Landmark size={24} />, desc: 'Passport application and verification centres.' },
    { title: 'Regional Transport Office (RTO – Nearby)', icon: <Smartphone size={24} />, desc: 'Vahan and Sarathi services for residents.' }
  ];

  return (
    <PageLayout 
      title="Local Information" 
      subtitle="Your guide to essential community services and resources in Ghatkopar."
    >
      <div className="resources-page">
        <div className="text-center mb-large">
            <p className="text-secondary max-w-3xl mx-auto">
                At Ghatkopar Welfare Association, we aim to keep residents informed about the essential public services and utilities available in our community. Below is a comprehensive list of resources to help you stay connected with local facilities.
            </p>
        </div>

        <div className="grid-3 mb-huge">
          {categories.map((cat, idx) => (
            <div key={idx} className="card-flat bg-sand card-hover-up info-card p-8 flex flex-col align-center text-center">
              <div className="icon-box-white mb-6">
                {React.cloneElement(cat.icon, { className: 'text-primary-brand' })}
              </div>
              <h3 className="mb-2 text-lg font-bold">{cat.title}</h3>
              <p className="text-secondary text-sm mb-6 flex-grow">{cat.desc}</p>
              <button className="flex align-center gap-tiny text-primary-brand font-bold text-sm bg-none border-none p-0 cursor-pointer hover-accent transition-all group">
                View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
          <div className="flex flex-center flex-wrap gap-large">
            <div className="flex align-center gap-small">
              <div className="bg-white/10 p-3 rounded-full">
                <Phone className="text-accent" size={20} />
              </div>
              <span className="font-bold text-lg">+91 73737 30803</span>
            </div>
            <div className="flex align-center gap-small">
              <div className="bg-white/10 p-3 rounded-full">
                <Mail className="text-accent" size={20} />
              </div>
              <span className="font-bold text-lg">info@ghatkoparassociation.org</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
