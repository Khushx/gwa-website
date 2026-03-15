import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Have questions or want to collaborate? We'd love to hear from you."
    >
      <div className="contact-page">
        {/* Contact Info Cards */}
        <div className="grid-3 mb-8">
          <div className="card-flat contact-info-card card-hover-up">
            <div className="info-icon-box bg-primary-bg">
              <MapPin className="text-primary-brand" size={24} />
            </div>
            <h3>Our Office</h3>
            <p className="text-secondary">
              Road No. 1, L.B.S. Marg, Ghatkopar West, Mumbai – 400086, Maharashtra
            </p>
          </div>

          <div className="card-flat contact-info-card card-hover-up">
            <div className="info-icon-box bg-accent-light">
              <Phone className="text-primary-brand" size={24} />
            </div>
            <h3>Call / WhatsApp</h3>
            <p className="text-secondary">+91 72087 44871</p>
            <p className="text-secondary">+91 73737 30803</p>
          </div>

          <div className="card-flat contact-info-card card-hover-up">
            <div className="info-icon-box bg-sand">
              <Mail className="text-primary-brand" size={24} />
            </div>
            <h3>Email Us</h3>
            <p className="text-secondary">ghatkoparassociation@gmail.com</p>
            <p className="text-secondary">info@ghatkoparassociation.org</p>
          </div>
        </div>

        <div className="grid-2 gap-huge align-start">
          {/* Contact Form */}
          <div className="contact-form-container card-flat shadow-lg">
            <h2 className="mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row grid-2 gap-small mb-4">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="What is this about?" required />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full flex justify-center align-center gap-small">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Connect Section */}
          <div className="connect-section">
            <span className="badge">Get in Touch</span>
            <h2 className="mb-4">Let's Build a Stronger <span className="text-primary-brand">Community</span> Together</h2>
            <p className="text-secondary mb-4">
              Whether you're looking to volunteer, need assistance, or want to discuss a civic issue, our team is ready to listen and act. Visit us during office hours or reach out digitally.
            </p>

            <div className="hours-box card-flat bg-sand mb-8">
              <div className="flex align-center gap-small mb-2">
                <Clock className="text-primary-brand" size={20} />
                <h4 className="m-0">Office Hours</h4>
              </div>
              <p className="m-0 text-secondary">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              <p className="m-0 text-secondary">Sunday: Closed (Available for emergencies)</p>
            </div>

            <div className="social-connect">
              <h4 className="mb-2">Follow Us</h4>
              <div className="social-icons flex gap-small">
                <a href="https://facebook.com/ghatkoparassociation" className="social-icon-btn"><Facebook size={20}/></a>
                <a href="https://instagram.com/ghatkoparassociation" className="social-icon-btn"><Instagram size={20}/></a>
                <a href="https://x.com/ghatkoparsocial" className="social-icon-btn"><Twitter size={20}/></a>
                <a href="https://linkedin.com/company/ghatkoparassociation" className="social-icon-btn"><Linkedin size={20}/></a>
                <a href="https://t.me/ghatkoparassociation" className="social-icon-btn"><MessageCircle size={20}/></a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section mt-8">
          <div className="card-flat overflow-hidden" style={{ height: '450px', padding: 0 }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.662095650125!2d72.90695031490135!3d19.083437987084534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630aa925dbd%3A0xe67868516ee7!2sGhatkopar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647432000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
