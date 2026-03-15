import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { Search, Phone, Mail, MapPin, ExternalLink, Hospital, Pill, Activity, GraduationCap, Users, Landmark, CreditCard, ShoppingBag, Utensils, Tool, Calendar, Truck } from 'lucide-react';
import './Directory.css';

const categories = [
  { id: 'hospitals', icon: <Hospital />, label: 'Hospitals & Clinics' },
  { id: 'pharmacies', icon: <Pill />, label: 'Pharmacies & Medical Stores' },
  { id: 'diagnostics', icon: <Activity />, label: 'Diagnostic Centres' },
  { id: 'education', icon: <GraduationCap />, label: 'Schools & Colleges' },
  { id: 'ngos', icon: <Users />, label: 'NGOs & Social Orgs' },
  { id: 'municipal', icon: <Landmark />, label: 'Municipal Services' },
  { id: 'banks', icon: <CreditCard />, label: 'Banks & Finance' },
  { id: 'grocery', icon: <ShoppingBag />, label: 'Grocery & Daily Needs' },
  { id: 'restaurants', icon: <Utensils />, label: 'Restaurants & Food' },
  { id: 'hardware', icon: <Tool />, label: 'Hardware & Plumbing' },
  { id: 'events', icon: <Calendar />, label: 'Events & Catering' },
  { id: 'logistics', icon: <Truck />, label: 'Courier & Logistics' },
];

const directoryData = {
  hospitals: [
    { name: 'Parakh Hospital', category: 'Multispeciality', address: 'Khokhani Lane, Opp. Ghatkopar Railway Station, Ghatkopar East', phone: '+91-22-6782-7000', email: 'info@parakhhospital.com' },
    { name: 'Zynova Shalby Hospital', category: 'Multispeciality', address: 'LBS Marg, Gandhi Nagar, Ghatkopar West', phone: '022-68900000', email: 'info@zynovashalbyhospital.com' },
    { name: "Bakul Parekh Children's Hospital", category: 'Pediatric', address: '4th Floor, Jayant Arcade, Rajawadi Signal, Ghatkopar East', phone: '+91-8591374894', email: 'info@bakulparekh.com' },
  ],
  pharmacies: [
    { name: 'Zeno Health Pharmacy', category: 'Pharmacy', address: 'Jaikishan Building, Near Neelkanth Regent, Ghatkopar East', phone: '+91-93219-84263', email: 'support@zeno.health' },
    { name: 'Apollo Pharmacy', category: 'Pharmacy', address: 'Tilak Rd, Opp. Bhatia Wadi, Ghatkopar East', phone: '+91-79474-79448', email: 'info@apollopharmacy.in' },
    { name: 'Noble Medicals', category: 'Pharmacy', address: 'Hingwala Lane, Saibaba Nagar, Ghatkopar East', phone: '+91-99671-21551', email: 'noblemedicals@example.com' },
  ],
  diagnostics: [
    { name: 'Ghatkopar Diagnostic Services', category: 'Labs', address: 'Ghatkopar East, Mumbai', phone: '+91-98190-xxxxx', email: 'lab.ghatkopar@example.com' },
    { name: 'Garodia Diagnostic Centre', category: 'Labs', address: 'Garodia Nagar, Ghatkopar East', phone: '+91-98203-xxxxx', email: 'contact@garodiadiagnostic.in' },
  ],
  education: [
    { name: 'Smt. Sulochanadevi Singhania School', category: 'School', address: 'Veer Savarkar Rd, Near Ghatkopar Station, Ghatkopar West', phone: '+91-22-xxxx-xxxx', email: 'info@sssss.edu.in' },
    { name: 'KJ Somaiya College of Science', category: 'College', address: 'Vidyavihar East, Mumbai', phone: '+91-22-xxxx-xxxx', email: 'somaiya@kjis.edu.in' },
    { name: 'FIITJEE Ghatkopar West', category: 'Coaching', address: 'Ghatkopar West, Mumbai', phone: '+91-22-xxxx-xxxx', email: 'ghatkopar@fiitjee.com' },
    { name: 'TIME Institute', category: 'Coaching', address: 'Ghatkopar East, Mumbai', phone: '+91-22-xxxx-xxxx', email: 'ghatkopar@time4education.com' },
  ],
  ngos: [
    { name: 'Ghatkopar Welfare Association', category: 'NGO', address: 'Ghatkopar, Mumbai', phone: '+91-7373730803', email: 'ghatkoparassociation@gmail.com' },
    { name: 'Mumbra Welfare Association', category: 'NGO', address: 'Mumbra, Thane', phone: '+91-xxxxx-xxxxx', email: 'mumbrawelfare@example.org' },
  ],
  municipal: [
    { name: 'N-Ward BMC Office', category: 'Municipal', address: 'Ghatkopar East – 400077', phone: '+91-22-2501-xxxx', email: 'nward.bmc@gmail.com' },
    { name: 'BMC Water & Sewage Office', category: 'Utility', address: 'Ghatkopar West – 400086', phone: '+91-22-2501-xxxx', email: 'utility.ghatkopar@bmc.gov.in' },
  ],
  banks: [
    { name: 'SBI Ghatkopar Branch', category: 'Bank', address: 'Ghatkopar East, Mumbai', phone: '+91-22-2504-xxxx', email: 'sbi.ghatkopar@sbi.co.in' },
    { name: 'HDFC Bank Ghatkopar West', category: 'Bank', address: 'Ghatkopar West, Mumbai', phone: '+91-22-2505-xxxx', email: 'hdfc.ghatkopar@hdfcbank.com' },
  ],
  grocery: [
    { name: 'Big Bazaar', category: 'Retail', address: 'R City Mall, LBS Marg, Ghatkopar East', phone: '+91-22-xxxxx-xxxx', email: 'info@bigbazaar.com' },
    { name: 'D Mart', category: 'Retail', address: 'Ghatkopar West – 400086', phone: '+91-22-xxxxx-xxxx', email: 'customerservice@dmart.in' },
  ],
  restaurants: [
    { name: 'Punjab Grill', category: 'Fine Dining', address: 'Ghatkopar West – 400086', phone: '+91-22-xxxx-xxxx', email: 'info@punjabgrill.com' },
    { name: 'Barbeque Nation', category: 'Buffet', address: 'Ghatkopar East – 400077', phone: '+91-22-xxxx-xxxx', email: 'enquiry@barbequenation.com' },
  ],
  hardware: [
    { name: 'Ghatkopar Hardware & Tools', category: 'Hardware', address: 'Ghatkopar East – 400077', phone: '+91-22-xxxx-xxxx', email: 'ghatkoparhardware@example.com' },
    { name: 'Electrical & Plumbing Solutions', category: 'Electrical', address: 'Ghatkopar West – 400086', phone: '+91-22-xxxx-xxxx', email: 'support@epsolutions.in' },
  ],
  events: [
    { name: 'Shree Sai Event Planner', category: 'Event Planner', address: 'Patel Chowk, Ghatkopar East', phone: '+91 97680 42060', email: 'shreesai.events@example.com' },
    { name: 'Sai Decoration Events', category: 'Decoration', address: 'Saibaba Nagar, Ghatkopar East', phone: '+91 83569 14278', email: 'saidecoration.events@example.com' },
    { name: 'Malhar Events', category: 'Event Planner', address: 'Ghatkopar East – 400077', phone: '+91 96643 43510', email: 'malharevents@example.com' },
    { name: 'Seasons Hospitality', category: 'Catering', address: 'Satyam Shopping Centre, M.G. Rd, Ghatkopar East', phone: '+91 83690 32002', email: 'seasonshospitality.co.in' },
  ],
  logistics: [
    { name: 'The Professional Couriers', category: 'Courier', address: 'RB Mehta Marg, Ghatkopar East', phone: '+91 97029 92220', email: 'contact@tpcindia.com' },
    { name: 'Vichare Express & Logistics', category: 'Logistics', address: 'Sai Infotech, RB Mehta Marg, Ghatkopar East', phone: '+91 99202 89220', email: 'info@vicharelogistics.com' },
    { name: 'DTDC Courier', category: 'Courier', address: 'R City Mall, Ghatkopar', phone: '+91-xxxxxxx23', email: 'info@dtdc.in' },
  ],
};

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState('hospitals');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = directoryData[activeCategory].filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout 
      title="Business Directory" 
      subtitle="The ultimate local guide to businesses and services across Ghatkopar East & West."
    >
      <div className="directory-header bg-primary-light">
        <div className="search-bar-container">
          <Search className="search-icon" size={24} />
          <input 
            type="text" 
            placeholder="Search for hospitals, schools, restaurants..." 
            className="directory-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="directory-layout">
        <aside className="directory-sidebar">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery('');
              }}
            >
              <span className="sidebar-icon">{cat.icon}</span>
              <span className="sidebar-label">{cat.label}</span>
            </button>
          ))}
        </aside>

        <main className="directory-content">
          <div className="content-header">
            <h2>{categories.find(c => c.id === activeCategory).label}</h2>
            <p className="item-count">{filteredItems.length} verified listings found</p>
          </div>

          <div className="directory-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <div key={idx} className="card-flat directory-card card-hover-up animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="card-top">
                    <span className="item-category-badge">{item.category}</span>
                  </div>
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-info">
                    <div className="info-line">
                      <MapPin size={16} className="text-primary-brand" />
                      <span>{item.address}</span>
                    </div>
                    <div className="info-line">
                      <Phone size={16} className="text-primary-brand" />
                      <span>{item.phone}</span>
                    </div>
                    <div className="info-line">
                      <Mail size={16} className="text-primary-brand" />
                      <span className="text-truncate">{item.email}</span>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-sm">Contact Now</button>
                    <button className="btn btn-outline btn-sm">Direction</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results text-center section-padding">
                <Search size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <p>No listings found matching your search.</p>
              </div>
            )}
          </div>
          
          <div className="listing-cta bg-sand">
            <h4>Is your business missing?</h4>
            <p>Join Ghatkopar's most trusted community directory and reach thousands of local customers.</p>
            <Link to="/contact" className="btn btn-primary">List Your Business</Link>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
