import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Send, MessageSquare } from 'lucide-react';
import './Footer.css';
import logoImage from '../assets/logo.png';

export const socialLinks = [
  { icon: <Facebook size={18} />, url: 'https://facebook.com/ghatkoparassociation', label: "Facebook" },
  { icon: <Instagram size={18} />, url: 'https://instagram.com/ghatkoparassociation', label: "Instagram" },
  { icon: <Youtube size={18} />, url: 'https://youtube.com/@ghatkoparassociation', label: "YouTube" },
  { icon: <Twitter size={18} />, url: 'https://x.com/ghatkoparsocial', label: "X (Twitter)" },
  { icon: <Linkedin size={18} />, url: 'https://linkedin.com/company/ghatkoparassociation', label: "LinkedIn" },
  { icon: <Send size={18} />, url: 'https://t.me/ghatkoparassociation', label: "Telegram" },
  { icon: <MessageSquare size={18} />, url: 'https://threads.net/@ghatkoparassociation', label: "Threads" }
];

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoImage} alt="GWA" className="footer-logo-img" />
          </Link>
          <p className="footer-description">
            Ghatkopar Welfare Association (GWA) is a community-focused non-profit organisation committed to promoting social welfare, civic responsibility, and sustainable development in Mumbai.
          </p>
          <div className="social-links">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><Link to="/about/overview">About Us</Link></li>
            <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
            <li><Link to="/get-involved/partner">Partner with Us</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Resources</h4>
          <ul>
            <li><Link to="/media-events/gallery">Past Events</Link></li>
            <li><Link to="/directory">Business Directory</Link></li>
            <li><Link to="/resources/local-info">Local Information</Link></li>
            <li><Link to="/resources/legal-licenses">Legal & Licences</Link></li>
            <li><Link to="/get-involved/verification">Member Verification</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Road No. 1, L.B.S. Marg, Ghatkopar West, Mumbai – 400086</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 73737 30803</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <div className="email-column">
                <span>ghatkoparassociation@gmail.com</span>
                <span>info@ghatkoparassociation.org</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} Ghatkopar Welfare Association. All rights reserved.</p>
          <div className="bottom-right">
            <p className="credit-text">Crafted with 🤍 by <a href="https://khushnuma.vercel.app/" target="_blank" rel="noreferrer" className="khush-link">Khush</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
