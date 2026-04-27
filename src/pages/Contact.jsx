import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import Accordion from '/src/components/ui/Accordion.jsx';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  const faqItems = [
    {
      title: "How can I join as a volunteer?",
      content: "You can join by clicking on the 'Join Us' button in the Get Involved section or visiting our office during working hours. We welcome volunteers for food distribution, medical camps, and digital initiatives."
    },
    {
      title: "Does GWA provide financial assistance?",
      content: "GWA primarily focuses on resource-based support like food, healthcare services, and education. For specific emergency cases, our board reviews applications for financial aid."
    },
    {
      title: "Are donations to GWA tax-exempt?",
      content: "Yes, as a registered Section 8 NGO, we provide tax benefit certificates for donations under applicable sections of the Income Tax Act."
    },
    {
      title: "How can I report a civic issue in my area?",
      content: "You can use the 'File a Complaint' section on our website or visit our office. We work closely with municipal authorities to address local infrastructure and safety concerns."
    }
  ];

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Have questions or want to collaborate? We'd love to hear from you."
    >
      <div className="contact-page">
        {/* Contact info cards centered grid */}
        <div className="grid-3 mb-12">
          <div className="card-flat contact-info-card card-hover-up text-center">
            <div className="info-icon-box mx-auto mb-4 bg-primary-bg">
              <MapPin className="text-primary-brand" size={28} />
            </div>
            <h4>Visit Us</h4>
            <p className="text-sm text-secondary">
              Road No. 1, L.B.S. Marg, Ghatkopar West, Mumbai – 400086
            </p>
          </div>

          <div className="card-flat contact-info-card card-hover-up text-center">
            <div className="info-icon-box mx-auto mb-4 bg-primary-bg">
              <Phone className="text-primary-brand" size={28} />
            </div>
            <h4>Call Us</h4>
            <p className="text-sm text-secondary">+91 73737 30803</p>
          </div>

          <div className="card-flat contact-info-card card-hover-up text-center">
            <div className="info-icon-box mx-auto mb-4 bg-primary-bg">
              <Mail className="text-primary-brand" size={28} />
            </div>
            <h4>Email Us</h4>
            <p className="text-sm text-secondary">ghatkoparassociation@gmail.com info@ghatkoparassociation.org</p>
          </div>
        </div>

        {/* Centered Contact Form Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="contact-form-card card-flat shadow-lg">
            <div className="text-center mb-8">
              <span className="badge mb-3">Get in Touch</span>
              <h2>Send us a <span className="text-primary-brand">Message</span></h2>
              <p className="text-secondary">Our team typically responds within 24-48 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="grid-2 gap-small mb-4">
                <div className="form-group">
                  <label className="font-bold mb-2 block">Full Name</label>
                  <input type="text" className="form-control" placeholder="Ariful Khan" required />
                </div>
                <div className="form-group">
                  <label className="font-bold mb-2 block">Email Address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" required />
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="font-bold mb-2 block">Subject</label>
                <select className="form-control" required>
                  <option value="">Select a subject</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="support">Request Support</option>
                  <option value="feedback">General Feedback</option>
                </select>
              </div>

              <div className="form-group mb-6">
                <label className="font-bold mb-2 block">Message</label>
                <textarea className="form-control" rows="5" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section mb-16">
          <div className="text-center mb-8">
            <h2 className="mb-2">Frequently Asked <span className="text-primary-brand">Questions</span></h2>
            <p className="text-secondary">Quick answers to common inquiries about our organization.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="section-header text-center mb-8">
            <h2>Find us on <span className="text-primary-brand">Map</span></h2>
            <p className="text-secondary">Visit our headquarters at Ghatkopar West.</p>
          </div>
          <div className="card-flat overflow-hidden p-0 rounded-xl shadow-md" style={{ height: '500px' }}>
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
