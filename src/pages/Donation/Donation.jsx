import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Heart, Target, Users, ArrowRight, ShieldCheck, QrCode, Download, Phone } from 'lucide-react';
import './Donation.css';

const scannerImage = '/images/Scanner.jpeg';

export default function Donation() {
  const causes = [
    {
      title: 'Empower Vulnerable Youth Through Education',
      raised: 75000,
      goal: 100000,
      icon: <Target className="text-primary-brand" size={32} />,
      color: 'var(--primary-brand)'
    },
    {
      title: 'Support Local Families in Crisis Today',
      raised: 45000,
      goal: 100000,
      icon: <Users className="text-accent" size={32} />,
      color: 'var(--secondary-accent)'
    },
    {
      title: 'Provide Nutritious Meals to Hungry Children',
      raised: 63000,
      goal: 100000,
      icon: <Heart className="text-primary-brand" size={32} />,
      color: 'var(--primary-brand)'
    }
  ];

  return (
    <PageLayout 
      title="Support Our Mission" 
      subtitle="Small acts, when multiplied by millions of people, can transform the world. Partner with us to bring hope to Ghatkopar."
    >
      <div className="donation-page">
        {/* Causes Cards */}
        <section className="mb-huge">
          <div className="grid-3">
            {causes.map((cause, idx) => {
              const percentage = (cause.raised / cause.goal) * 100;
              return (
                <div key={idx} className="card-flat cause-card card-hover-up p-10 bg-white border-subtle flex flex-col rounded-3xl">
                  <div className="bg-sand w-16 h-16 rounded-2xl flex flex-center mb-8">
                    {cause.icon}
                  </div>
                  <h3 className="section-title text-2xl mb-large leading-tight flex-grow">{cause.title}</h3>
                  
                  <div className="progress-container mb-large">
                    <div className="progress-labels flex justify-between mb-2 text-sm font-bold">
                        <span className="text-secondary">Progress</span>
                        <span className="text-primary-brand">{Math.round(percentage)}%</span>
                    </div>
                    <div className="progress-bar-bg bg-sand h-3 rounded-full overflow-hidden mb-4">
                      <div className="progress-bar-fill h-full rounded-full transition-all duration-1000" style={{ width: `${percentage}%`, backgroundColor: cause.color }}></div>
                    </div>
                    <div className="progress-stats flex justify-between align-end">
                      <div>
                        <span className="block text-xs text-secondary uppercase font-bold tracking-wider mb-1">Raised</span>
                        <span className="text-xl font-bold">₹{cause.raised.toLocaleString()}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-xs text-secondary uppercase font-bold tracking-wider mb-1">Goal</span>
                        <span className="text-lg font-bold opacity-30">₹{cause.goal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary w-full flex flex-center gap-small py-4">
                    Contribute Now <ArrowRight size={18}/>
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Donation Scanner & Bank Info */}
        <section className="bg-dark text-white p-16 rounded-3xl mb-huge relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-huge">
                <span className="badge badge-accent mb-4">Secure Payments</span>
                <h2 className="text-white text-4xl mb-4">Immediate Impact Methods</h2>
                <p className="opacity-70 max-w-2xl mx-auto">We provide multiple secure ways for you to contribute to our community development projects.</p>
            </div>

            <div className="grid-2 gap-huge align-start">
                <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="flex align-center gap-normal mb-8">
                        <QrCode className="text-accent" size={40} />
                        <div>
                            <h3 className="text-white m-0">UPI Scan & Pay</h3>
                            <p className="text-white/60 m-0 text-sm">Instant donation via any UPI app</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col align-center bg-white p-6 rounded-2xl mb-8">
                        <img src={scannerImage} alt="GWA QR Scanner" className="w-full max-w-[250px] aspect-square object-contain mb-4" />
                        <span className="text-dark font-mono text-xs font-bold tracking-widest opacity-40">GHATKOPAR ASSOCIATION @ UPI</span>
                    </div>

                    <p className="text-sm opacity-60 text-center leading-relaxed m-0">
                        Scan the QR code using Google Pay, PhonePe, Paytm, or any BHIM UPI app for quick and secure transfers.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-3xl">
                    <h3 className="text-dark m-0 mb-8 border-bottom pb-4">Bank Transfer Details</h3>
                    <div className="flex flex-col gap-large font-medium">
                        <div className="flex justify-between border-bottom pb-3">
                            <span className="text-secondary text-sm uppercase tracking-wider">Account Name</span>
                            <span className="text-dark">Ghatkopar Welfare Association</span>
                        </div>
                        <div className="flex justify-between border-bottom pb-3">
                            <span className="text-secondary text-sm uppercase tracking-wider">Bank Name</span>
                            <span className="text-dark">HDFC Bank Limited</span>
                        </div>
                        <div className="flex justify-between border-bottom pb-3">
                            <span className="text-secondary text-sm uppercase tracking-wider">Account Number</span>
                            <span className="text-dark font-mono font-bold">50100456230803</span>
                        </div>
                        <div className="flex justify-between border-bottom pb-3">
                            <span className="text-secondary text-sm uppercase tracking-wider">IFSC Code</span>
                            <span className="text-dark font-mono font-bold">HDFC0001234</span>
                        </div>
                        <div className="flex justify-between border-bottom pb-3">
                            <span className="text-secondary text-sm uppercase tracking-wider">Branch</span>
                            <span className="text-dark">Ghatkopar West, Mumbai</span>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-sand rounded-xl flex align-center gap-small">
                        <ShieldCheck className="text-primary-brand flex-shrink-0" size={24} />
                        <span className="text-xs text-dark font-bold">Registered Section 8 NGO. Official receipts will be issued for all bank transfers.</span>
                    </div>
                </div>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-brand/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        </section>

        {/* Accountability Section */}
        <section className="bg-sand p-16 rounded-3xl text-center mb-large">
            <h2 className="mb-large">Transparency & Impact</h2>
            <div className="grid-3 mb-large">
                <div className="p-8">
                    <ShieldCheck className="text-primary-brand mx-auto mb-4" size={40} />
                    <h4 className="mb-2">100% Transparency</h4>
                    <p className="text-sm text-secondary leading-relaxed">Every rupee donated is tracked and utilized exclusively for on-ground community welfare projects.</p>
                </div>
                <div className="p-8">
                    <FileText className="text-primary-brand mx-auto mb-4" size={40} />
                    <h4 className="mb-2">80G Tax Benefit</h4>
                    <p className="text-sm text-secondary leading-relaxed">Donations are eligible for tax redemption under section 80G of the Income Tax Act, India.</p>
                </div>
                <div className="p-8">
                    <Users className="text-primary-brand mx-auto mb-4" size={40} />
                    <h4 className="mb-2">Direct Reporting</h4>
                    <p className="text-sm text-secondary leading-relaxed">Annual reports and impact summaries are made available to all our donors and stakeholders.</p>
                </div>
            </div>
            
            <div className="flex flex-center gap-normal">
                <button className="btn btn-outline border-primary px-10 flex align-center gap-small">
                    <Download size={18} /> Impact Report 2024
                </button>
                <div className="flex align-center gap-small text-secondary font-bold">
                    <Phone className="text-accent" size={20} />
                    <span>Helpline: +91 73737 30803</span>
                </div>
            </div>
        </section>
      </div>
    </PageLayout>
  );
}
