import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Overview from './pages/AboutUs/Overview';
import VisionMission from './pages/AboutUs/VisionMission';
import Founder from './pages/AboutUs/Founder';
import ChairmanPresident from './pages/AboutUs/ChairmanPresident';
import BoardMembers from './pages/AboutUs/BoardMembers';
import History from './pages/AboutUs/History';
import WhoWeAre from './pages/AboutUs/WhoWeAre';
import GoalsBeliefs from './pages/AboutUs/GoalsBeliefs';
import OrganisationFlow from './pages/AboutUs/OrganisationFlow';
import Complaint from './pages/AboutUs/Complaint';
import LawsPolicies from './pages/AboutUs/LawsPolicies';
import ValuesObjectives from './pages/AboutUs/ValuesObjectives';

// Work Areas
import {
  FoodSecurity,
  Healthcare,
  Education,
  Livelihood,
  WomenEmpowerment,
  Environment,
  Digital,
  Sports,
  DisasterRelief,
  CivicIssues,
  CommunityGrowth
} from './pages/WorkAreas';

// Get Involved
import Volunteer from './pages/GetInvolved/Volunteer';
import Partner from './pages/GetInvolved/Partner';
import MemberVerification from './pages/GetInvolved/MemberVerification';

// Media & Events
import Gallery from './pages/MediaEvents/Gallery';
import Media from './pages/MediaEvents/Media';
import Donation from './pages/Donation/Donation';

// Resources & Directory
import Directory from './pages/Directory';
import LegalLicenses from './pages/Resources/LegalLicenses';
import LocalInformation from './pages/Resources/LocalInformation';
import EventsCampaigns from './pages/MediaEvents/EventsCampaigns';

function App() {
  console.log('App: Rendering Routes');
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* About Us Routes */}
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/goals" element={<GoalsBeliefs />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/founder-president" element={<Founder />} />
            <Route path="/about/chairman-director" element={<ChairmanPresident />} />
            <Route path="/about/board" element={<BoardMembers />} />
            <Route path="/about/organisation-flow" element={<OrganisationFlow />} />
            <Route path="/about/values" element={<ValuesObjectives />} />
            <Route path="/about/complaint" element={<Complaint />} />
            <Route path="/about/policies" element={<LawsPolicies />} />

            {/* Work Areas Routes */}
            <Route path="/work-areas/food-security" element={<FoodSecurity />} />
            <Route path="/work-areas/healthcare" element={<Healthcare />} />
            <Route path="/work-areas/education" element={<Education />} />
            <Route path="/work-areas/livelihood" element={<Livelihood />} />
            <Route path="/work-areas/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/work-areas/environment" element={<Environment />} />
            <Route path="/work-areas/digital" element={<Digital />} />
            <Route path="/work-areas/sports" element={<Sports />} />
            <Route path="/work-areas/disaster-relief" element={<DisasterRelief />} />
            <Route path="/work-areas/civic-issues" element={<CivicIssues />} />
            <Route path="/work-areas/community-growth" element={<CommunityGrowth />} />

            <Route path="/get-involved/volunteer" element={<Volunteer />} />
            <Route path="/get-involved/partner" element={<Partner />} />
            <Route path="/get-involved/verification" element={<MemberVerification />} />
            
            <Route path="/media-events/gallery" element={<Gallery />} />
            <Route path="/media-events/events" element={<EventsCampaigns />} />
            <Route path="/media-events/media" element={<Media />} />

            {/* Resources and Directory Routes */}
            <Route path="/directory" element={<Directory />} />
            <Route path="/resources/legal-licenses" element={<LegalLicenses />} />
            <Route path="/resources/local-info" element={<LocalInformation />} />

            {/* Donation Route */}
            <Route path="/donate" element={<Donation />} />

            {/* Additional routes will be added here */}
            <Route path="*" element={<div className="container section-padding text-center"><h2>Page Not Found</h2></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
