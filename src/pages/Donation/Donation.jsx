import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Heart, Target, Users, ArrowRight, ShieldCheck, QrCode } from 'lucide-react';
import './Donation.css';
const scannerImage = '/images/Scanner.jpeg';

export default function Donation() {
  const causes = [
    {
      title: 'Empower Vulnerable Youth Through Education',
      raised: 75000,
      goal: 100000,
      icon: <Target className="cause-icon" size={32} />,
      color: '#A9E49E'
    },
    {
      title: 'Support Local Families in Crisis Today',
      raised: 45000,
      goal: 100000,
      icon: <Users className="cause-icon" size={32} />,
      color: '#2596BE'
    },
    {
      title: 'Provide Nutritious Meals to Hungry Children',
      raised: 63000,
      goal: 100000,
      icon: <Heart className="cause-icon" size={32} />,
      color: '#A9E49E'
    }
  ];

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <section className="donation-hero bg-primary-light section-padding">
        <div className="container text-center">
          <h1 className="animate-fade-in">Your Donation Means<br /><span className="text-primary-brand italic">Another Smile</span></h1>
          <p className="hero-subtitle mb-4">Small acts, when multiplied by millions of people, can transform the world. Partner with us to bring hope to Ghatkopar.</p>
        </div>
      </section>

      {/* Causes Cards */}
      <section className="donation-causes mb-8" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {causes.map((cause, idx) => {
              const percentage = (cause.raised / cause.goal) * 100;
              return (
                <div key={idx} className="card-flat cause-card card-hover-up">
                  <div className="cause-header" style={{ backgroundColor: cause.color + '20' }}>
                    {cause.icon}
                  </div>
                  <h3 className="cause-title">{cause.title}</h3>

                  <div className="progress-container">
                    <div className="progress-labels">
                      <span className="font-bold">Fund Raised</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${percentage}%`, backgroundColor: cause.color }}></div>
                    </div>
                    <div className="progress-stats">
                      <span className="raised">₹{cause.raised.toLocaleString()}</span>
                      <span className="goal">₹{cause.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="btn btn-outline w-full mt-2" onClick={() => {
                    document.getElementById('donate-section')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                  >Donate Now <ArrowRight size={18} /></button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Scanner & Bank Info */}
      <section id="donate-section"
        className="donation-methods section-padding bg-dark text-light">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="scanner-box">
              <div className="scanner-badge badge-accent">Scan & Donate</div>
              <h2 className="text-light">Instant Mobile Payment</h2>
              <p className="text-light mb-2" style={{ opacity: 0.8 }}>Use any UPI app (GPay, PhonePe, Paytm) to scan the official GWA QR code and contribute directly to our field programs.</p>

              <div className="scanner-img-container">
                <img src={scannerImage} alt="GWA QR Scanner" className="scanner-img" />
                <div className="scanner-overlay">
                  <QrCode size={40} />
                </div>
              </div>
            </div>

            <div className="bank-details-box card-flat">
              <h3 className="m-0 mb-2 font-bold text-dark">Direct Bank Transfer</h3>
              <p className="text-secondary mb-2">For large contributions or monthly pledges, you can use our official bank details below.</p>

              <div className="bank-info-grid">
                <div className="info-item">
                  <span className="label">Account Name</span>
                  <span className="value">GHATKOPAR WELFARE ASSOCIATION</span>
                </div>
                <div className="info-item">
                  <span className="label">Bank Name</span>
                  <span className="value">HDFC Bank</span>
                </div>
                <div className="info-item">
                  <span className="label">Account Number</span>
                  <span className="value">5020 0095 0966 70</span>
                </div>
                <div className="info-item">
                  <span className="label">IFSC Code</span>
                  <span className="value">HDFC0000406</span>
                </div>
                <div className="info-item">
                  <span className="label">Branch</span>
                  <span className="value">GHATKOPAR WEST - KAILAS ESPLANDE</span>
                </div>
              </div>

              <div className="security-note mt-2">
                <ShieldCheck className="text-primary-brand" size={24} />
                <span className="text-dark">All donations are secure and encrypted. GWA is a registered Section 8 non-profit.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="donation-footer section-padding text-center">
        <div className="container">
          <button className="btn btn-primary" style={{ padding: '1.2rem 4rem' }}>Download 80G Certificate Guide</button>
          <p className="mt-2 text-secondary">Need assistance? Call our donation helpline at <span className="font-bold">+91 73737 30803</span></p>
        </div>
      </section>
    </div>
  );
}
