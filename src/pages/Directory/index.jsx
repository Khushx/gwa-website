import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Search, Phone, Mail, MapPin, ExternalLink, Hospital, Pill, Activity, GraduationCap, Users, Landmark, CreditCard, ShoppingBag, Utensils, Wrench, Calendar, Truck } from 'lucide-react';
import './Directory.css';

const categories = [
  { id: 'hospitals', icon: <Hospital />, label: 'Hospitals & Clinics' },
  { id: 'pharmacies', icon: <Pill />, label: 'Pharmacies & Medical Stores' },
  { id: 'diagnostics', icon: <Activity />, label: 'Diagnostic Centres' },
  { id: 'education', icon: <Schools />, label: 'Schools & Colleges' },
  { id: 'ngos', icon: <Users />, label: 'NGOs & Social Orgs' },
  { id: 'municipal', icon: <Landmark />, label: 'Municipal Services' },
  { id: 'banks', icon: <CreditCard />, label: 'Banks & Finance' },
  { id: 'grocery', icon: <ShoppingBag />, label: 'Grocery & Daily Needs' },
  { id: 'restaurants', icon: <Utensils />, label: 'Restaurants & Food' },
  { id: 'hardware', icon: <Wrench />, label: 'Hardware & Plumbing' },
  { id: 'events', icon: <Calendar />, label: 'Events & Catering' },
  { id: 'logistics', icon: <Truck />, label: 'Courier & Logistics' },
];

function Schools() { return <GraduationCap />; }

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
    { name: 'Ghatkopar Diagnostic Services', category: 'Pathology Lab', address: 'Ghatkopar East, Mumbai', phone: '+91-98190-xxxxx', email: 'lab.ghatkopar@example.com' },
    { name: 'Garodia Diagnostic Centre', category: 'Diagnostic Lab', address: 'Garodia Nagar, Ghatkopar East', phone: '+91-98203-xxxxx', email: 'contact@garodiadiagnostic.in' },
  ],
  education: [
    { name: 'Smt. Sulochanadevi Singhania School', category: 'School', address: 'Veer Savarkar Rd, Near Ghatkopar Station, Ghatkopar West', phone: '+91-22-xxxx-xxxx', email: 'info@sssss.edu.in' },
    { name: 'KJ Somaiya College of Science', category: 'College', address: 'Vidyavihar East, Mumbai', phone: '+91-22-xxxx-xxxx', email: 'somaiya@kjis.edu.in' },
    { name: 'FIITJEE Ghatkopar West', category: 'IIT-JEE Coaching', address: 'Ghatkopar West, Mumbai', phone: '+91-22-xxxx-xxxx', email: 'ghatkopar@fiitjee.com' },
    { name: 'TIME Institute', category: 'Entrance Coaching', address: 'Ghatkopar East, Mumbai', phone: '+91-22-xxxx-xxxx', email: 'ghatkopar@time4education.com' },
  ],
  ngos: [
    { name: 'Ghatkopar Welfare Association', category: 'NGO & Social Services', address: 'Ghatkopar, Mumbai', phone: '+91-7373730803', email: 'ghatkoparassociation@gmail.com' },
    { name: 'Mumbra Welfare Association', category: 'NGO', address: 'Mumbra, Thane', phone: '+91-xxxxx-xxxxx', email: 'mumbrawelfare@example.org' },
  ],
  municipal: [
    { name: 'N-Ward BMC Office', category: 'Municipal Office', address: 'N-Ward Office, Ghatkopar East – 400077', phone: '+91-22-2501-xxxx', email: 'nward.bmc@gmail.com' },
    { name: 'BMC Water & Sewage Office', category: 'Utility Services', address: 'Ghatkopar West – 400086', phone: '+91-22-2501-xxxx', email: 'utility.ghatkopar@bmc.gov.in' },
  ],
  banks: [
    { name: 'SBI Ghatkopar Branch', category: 'Bank & ATM', address: 'Ghatkopar East, Mumbai – 400077', phone: '+91-22-2504-xxxx', email: 'sbi.ghatkopar@sbi.co.in' },
    { name: 'HDFC Bank Ghatkopar West', category: 'Bank & ATM', address: 'Ghatkopar West, Mumbai – 400086', phone: '+91-22-2505-xxxx', email: 'hdfc.ghatkopar@hdfcbank.com' },
  ],
  grocery: [
    { name: 'Big Bazaar (R City)', category: 'Grocery & Retail', address: 'R City Mall, LBS Marg, Ghatkopar East', phone: '+91-22-xxxxx-xxxx', email: 'info@bigbazaar.com' },
    { name: 'D Mart', category: 'Grocery & Retail', address: 'Ghatkopar West – 400086', phone: '+91-22-xxxxx-xxxx', email: 'customerservice@dmart.in' },
  ],
  restaurants: [
    { name: 'Punjab Grill', category: 'Fine Dining', address: 'Ghatkopar West – 400086', phone: '+91-22-xxxx-xxxx', email: 'info@punjabgrill.com' },
    { name: 'Barbeque Nation', category: 'Buffet & Grill', address: 'Ghatkopar East – 400077', phone: '+91-22-xxxx-xxxx', email: 'enquiry@barbequenation.com' },
  ],
  hardware: [
    { name: 'Ghatkopar Hardware & Tools', category: 'Hardware Store', address: 'Ghatkopar East – 400077', phone: '+91-22-xxxx-xxxx', email: 'ghatkoparhardware@example.com' },
    { name: 'Electrical & Plumbing Solutions', category: 'Electrical & Plumbing', address: 'Ghatkopar West – 400086', phone: '+91-22-xxxx-xxxx', email: 'support@epsolutions.in' },
  ],
  events: [
    { name: 'Shree Sai Event Planner', category: 'Event Planner', address: 'Patel Chowk, Ghatkopar East', phone: '+91 97680 42060', email: 'shreesai.events@example.com' },
    { name: 'Sai Decoration Events', category: 'Event Decorator', address: 'Saibaba Nagar, Ghatkopar East', phone: '+91 83569 14278', email: 'saidecoration.events@example.com' },
    { name: 'Malhar Events', category: 'Party Planner', address: 'Vasant Rao Naik Marg, Ghatkopar East', phone: '+91 96643 43510', email: 'malharevents@example.com' },
    { name: 'Swaraj Events', category: 'Event Management', address: 'Kamraj Nagar Rd, Ghatkopar East', phone: '+91 83560 21778', email: 'info@swarajevents.com' },
    { name: 'Seasons Hospitality', category: 'Catering Services', address: 'Satyam Shopping Centre, M.G. Rd, Ghatkopar East', phone: '+91 83690 32002', email: 'seasonshospitality@example.com' },
    { name: 'Rohit Catering Services', category: 'Caterer', address: 'Nalanda Nagar, Ghatkopar East', phone: '+91 98195 30134', email: 'rohitcatering@example.com' },
    { name: 'Sai Caterers', category: 'Catering Services', address: 'Jagdusha Nagar, Ghatkopar West', phone: '+91 86555 60648', email: 'saicaterers@example.com' },
  ],
  logistics: [
    { name: 'The Professional Couriers', category: 'Domestic & Intl Courier', address: 'RB Mehta Marg, Ghatkopar East', phone: '+91 97029 92220', email: 'contact@tpcindia.com' },
    { name: 'Vichare Express & Logistics', category: 'Courier & Logistics', address: 'Sai Infotech, RB Mehta Marg, Ghatkopar East', phone: '+91 99202 89220', email: 'info@vicharelogistics.com' },
    { name: 'Shree Tirupati Courier', category: 'Courier Services', address: 'MG Road, Ghatkopar East', phone: '+91 93239 63737', email: 'contact@shreetirupaticourier.net' },
    { name: 'Ace Pro Deliveries', category: 'Delivery Services', address: 'LBS Marg, Ghatkopar West', phone: '+91 72082 23333', email: 'aceprodeliveries@example.com' },
    { name: 'DTDC Courier', category: 'Courier Services', address: 'R City Mall, Ghatkopar West', phone: '+91 91234 56789', email: 'info@dtdc.in' },
    { name: 'Mahavir Logistics', category: 'Logistics Services', address: '90 Feet Rd, Pant Nagar, Ghatkopar East', phone: '+91 99202 89220', email: 'support@mahavirlogistics.com' },
    { name: 'Blackbite Events', category: 'Logistics Support', address: 'Jagdusha Nagar, Ghatkopar West', phone: '+91 90041 29486', email: 'blackbiteevents@example.com' },
  ],
};

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState('hospitals');

  const filteredItems = directoryData[activeCategory] || [];

  const handleCall = (phone) => {
    window.location.href = `tel:${phone.replace(/[^0-9+]/g, '')}`;
  };

  const handleDirection = (name, address) => {
    const query = encodeURIComponent(`${name} ${address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <PageLayout 
      title="Business Directory" 
      subtitle="The ultimate local guide to businesses and services across Ghatkopar East & West."
    >
      <div className="directory-layout py-12">
        <aside className="directory-sidebar">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="sidebar-icon">{cat.icon}</span>
              <span className="sidebar-label">{cat.label}</span>
            </button>
          ))}
        </aside>

        <main className="directory-content">
          <div className="content-header mb-8">
            <h2 className="mb-2">{categories.find(c => c.id === activeCategory)?.label}</h2>
            <p className="item-count text-secondary">{filteredItems.length} verified listings found in this category</p>
          </div>

          <div className="directory-grid">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="card-flat directory-card card-hover-up animate-fade-in">
                <div className="card-top mb-4">
                  <span className="item-category-badge">{item.category}</span>
                </div>
                <h3 className="item-name mb-4">{item.name}</h3>
                <div className="item-info mb-6">
                  <div className="info-line mb-3">
                    <MapPin size={16} className="text-primary-brand shrink-0" />
                    <span className="text-sm">{item.address}</span>
                  </div>
                  <div className="info-line mb-3">
                    <Phone size={16} className="text-primary-brand shrink-0" />
                    <span className="text-sm font-bold">{item.phone}</span>
                  </div>
                  <div className="info-line">
                    <Mail size={16} className="text-primary-brand shrink-0" />
                    <span className="text-sm text-truncate">{item.email}</span>
                  </div>
                </div>
                <div className="card-actions flex gap-small">
                  <button 
                    className="btn btn-primary btn-sm flex-1"
                    onClick={() => handleCall(item.phone)}
                  >
                    Contact Now
                  </button>
                  <button 
                    className="btn btn-outline btn-sm flex-1"
                    onClick={() => handleDirection(item.name, item.address)}
                  >
                    Direction
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="listing-cta bg-sand p-8 rounded-xl mt-12 border-subtle">
            <h4 className="mb-2">Is your business missing?</h4>
            <p className="text-secondary mb-4">Join Ghatkopar's most trusted community directory and reach thousands of local customers.</p>
            <Link to="/contact" className="btn btn-primary">List Your Business</Link>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
