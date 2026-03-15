import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import './Header.css';
import logoImage from '../assets/logo.png';

export const socialLinks = [
  { icon: <Facebook size={18} />, url: 'https://facebook.com/ghatkoparassociation', label: "Facebook" },
  { icon: <Instagram size={18} />, url: 'https://instagram.com/ghatkoparassociation', label: "Instagram" },
  { icon: <Twitter size={18} />, url: 'https://x.com/ghatkoparsocial', label: "X (Twitter)" },
  { icon: <Linkedin size={18} />, url: 'https://linkedin.com/company/ghatkoparassociation', label: "LinkedIn" },
  { icon: <Youtube size={18} />, url: 'https://youtube.com/@ghatkoparassociation', label: "YouTube" }
];

const navItems = [
  { title: 'Home', path: '/' },
  {
    title: 'About Us',
    path: '#',
    mega: false,
    dropdown: [
      { title: 'Overview', path: '/about/overview' },
      { title: 'Vision & Mission', path: '/about/vision-mission' },
      { title: 'Goals & Key Beliefs', path: '/about/goals' },
      { title: 'Who We Are', path: '/about/who-we-are' },
      { title: 'History', path: '/about/history' },
      { title: 'Founder & Director', path: '/about/founder-director' },
      { title: 'Chairman & President', path: '/about/chairman-president' },
      { title: 'Board & Committee', path: '/about/board' },
      { title: 'Organisation Flow', path: '/about/organisation-flow' },
      { title: 'Values & Objectives', path: '/about/values' },
      { title: 'Complaint Section', path: '/about/complaint' },
      { title: 'Laws & Policies', path: '/about/policies' },
    ]
  },
  {
    title: 'Our Work Areas',
    path: '#',
    mega: true,
    dropdown: [
      { title: 'Food Security & Nutrition', path: '/work-areas/food-security' },
      { title: 'Healthcare & Wellness', path: '/work-areas/healthcare' },
      { title: 'Education & Training', path: '/work-areas/education' },
      { title: 'Livelihood & Empowerment', path: '/work-areas/livelihood' },
      { title: 'Women Empowerment', path: '/work-areas/women-empowerment' },
      { title: 'Environment Protection', path: '/work-areas/environment' },
      { title: 'Digital Transformation', path: '/work-areas/digital' },
      { title: 'Sports & Youth', path: '/work-areas/sports' },
      { title: 'Disaster Relief', path: '/work-areas/disaster-relief' },
      { title: 'Civic Issues', path: '/work-areas/civic-issues' },
      { title: 'Community Growth', path: '/work-areas/community-growth' },
    ]
  },
  {
    title: 'Get Involved',
    path: '#',
    mega: false,
    dropdown: [
      { title: 'Volunteer / Join Us', path: '/get-involved/volunteer' },
      { title: 'Partner With Us', path: '/get-involved/partner' },
      { title: 'Member Verification', path: '/get-involved/verification' },
    ]
  },
  {
    title: 'Media & Events',
    path: '#',
    mega: false,
    dropdown: [
      { title: 'Gallery / Past Events', path: '/media-events/gallery' },
      { title: 'Events & Campaigns', path: '/media-events/events' },
    ]
  },
  {
    title: 'Directory',
    path: '/directory',
    mega: false,
  },
  {
    title: 'Resources',
    path: '#',
    mega: false,
    dropdown: [
      { title: 'Local Information', path: '/resources/local-info' },
      { title: 'Legal & Licenses', path: '/resources/legal-licenses' },
    ]
  },
  { title: 'Contact', path: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>

      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <img src={logoImage} alt="Ghatkopar Welfare Association" className="logo-img" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.title} className="nav-item">
                  {item.dropdown ? (
                    <div className="dropdown-container">
                      <button 
                        className="nav-link dropdown-toggle"
                        onClick={() => toggleDropdown(item.title)}
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.title} <ChevronDown size={14} />
                      </button>
                      {activeDropdown === item.title && (
                        <div 
                          className={`dropdown-menu ${item.mega ? 'mega-menu' : ''}`}
                          onMouseEnter={() => setActiveDropdown(item.title)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className={item.mega ? 'mega-menu-grid' : 'dropdown-grid'}>
                            {item.dropdown.map((subItem) => (
                              <Link 
                                key={subItem.title} 
                                to={subItem.path} 
                                className="dropdown-item"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={item.path} className="nav-link">{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/donate" className="btn btn-primary donate-btn">Donate Now</Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.title} className="mobile-nav-item">
                  {item.dropdown ? (
                    <>
                      <button 
                        className="mobile-nav-link"
                        onClick={() => toggleDropdown(item.title)}
                      >
                        {item.title} <ChevronDown size={16} style={{ transform: activeDropdown === item.title ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                      {activeDropdown === item.title && (
                        <ul className="mobile-dropdown-menu">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.title}>
                              <Link 
                                to={subItem.path} 
                                className="mobile-dropdown-item"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="mobile-nav-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
