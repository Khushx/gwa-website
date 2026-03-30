import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, HandHeart, ArrowRight, CheckCircle2, Star, Quote, Target } from 'lucide-react';
import './Home.css';

// Assets
const foodDistImage1 = '/images/main-home-banner.jpeg';
const foodDistImage2 = '/images/Managing Trustee.jpeg';
const foodDistImage3 = '/images/officer.jpeg';
const healthCampImage = '/images/awareness.jpeg';
const childLearningImage = '/images/smiling-children-different-ethnicities-learning-outdoors-generated-by-ai.jpg';
const volunteerImage = '/images/volunteer-helping-with-donation-box.jpg';
const scannerImage = '/images/Scanner.jpeg';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section - Split Layout */}
      <section className="hero-section bg-primary-light">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <span className="badge">Welcome to Ghatkopar Welfare Association</span>
            <h1 className="hero-title">
              Be the Change You <br />
              <span className="text-primary-brand italic">Want to See</span> in Ghatkopar<span className="text-accent">.</span>
            </h1>
            <p className="hero-description">
              Dedicated to uplifting lives through social welfare, civic responsibility, and sustainable development. Join 1000+ volunteers in Mumbai making a real impact every day.
            </p>
            <div className="hero-actions flex gap-small">
              <Link to="/donate" className="btn btn-primary">Make a Donation</Link>
              <Link to="/about/overview" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="hero-trust mt-4 flex align-center gap-small">
              <div className="trust-portraits">
                <div className="portrait-circle">200+</div>
              </div>
              <p className="m-0 text-secondary">Join over <span className="font-bold">200+</span> active members & supporters</p>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img src={foodDistImage1} alt="GWA Community Support" className="hero-main-img" />
              <div className="hero-accent-box bg-accent">
                <div className="impact-number font-bold">10k+</div>
                <div className="impact-text">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Areas Section */}
      <section className="action-cards-section">
        <div className="container">
          <div className="grid-4 overlap-grid">
            <div className="card-flat bg-dark text-light card-hover-up action-card">
              <Heart className="text-accent mb-2" size={32} />
              <h4>Need Support?</h4>
              <p style={{ opacity: 0.7 }}>Reach out to us for emergency assistance or community support.</p>
              <Link to="/contact" className="btn-text text-accent">Get Help <ArrowRight size={16} /></Link>
            </div>

            <div className="card-flat bg-accent card-hover-up action-card">
              <Users className="mb-2" size={32} />
              <h4>Join as Volunteer</h4>
              <p>Be a part of our field team and help us drive real change on the ground.</p>
              <Link to="/get-involved/volunteer" className="btn-text">Join Now <ArrowRight size={16} /></Link>
            </div>

            <div className="card-flat bg-white card-hover-up action-card">
              <HandHeart className="text-primary-brand mb-2" size={32} />
              <h4>Send a Gift</h4>
              <p>Every small donation helps provide essential resources to those in need.</p>
              <Link to="/donate" className="btn-text text-primary-brand">Donate <ArrowRight size={16} /></Link>
            </div>

            <div className="card-flat bg-sand card-hover-up action-card">
              <BookOpen className="mb-2" size={32} />
              <h4>Educate a Child</h4>
              <p>Support our youth skill development and educational scholarship programs.</p>
              <Link to="/work-areas/education" className="btn-text">Read More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Community Impact */}
      <section className="home-impact section-padding">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="impact-visuals">
              <div className="impact-img-primary">
                <img src={foodDistImage2} alt="Elderly Care" className="img-round-lg shadow-lg" />
              </div>
              <div className="impact-img-secondary">
                <img src={foodDistImage3} alt="Food Drive" className="img-round-lg shadow-lg" />
              </div>
              <div className="success-badge bg-primary-brand text-light">
                <Star size={24} className="text-accent" />
                <div>
                  <h3 className="m-0 text-light">7.5k</h3>
                  <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Families Helped</span>
                </div>
              </div>
            </div>

            <div className="impact-content">
              <span className="badge">Our Impact</span>
              <h2 className="mb-2">Community Participation Creates <span className="text-primary-brand">Real Change</span></h2>
              <p className="text-secondary mb-4">
                At Ghatkopar Welfare Association, we believe that lasting social progress is possible when community members actively participate in identifying problems and implementing solutions.
              </p>

              <div className="impact-check-grid mb-4">
                <div className="check-item flex align-center gap-small">
                  <CheckCircle2 className="text-primary-brand" size={20} />
                  <span className="font-bold">Strengthen Social Inclusion</span>
                </div>
                <div className="check-item flex align-center gap-small">
                  <CheckCircle2 className="text-primary-brand" size={20} />
                  <span className="font-bold">Promote Community Welfare</span>
                </div>
                <div className="check-item flex align-center gap-small">
                  <CheckCircle2 className="text-primary-brand" size={20} />
                  <span className="font-bold">Encourage Civic Responsibility</span>
                </div>
                <div className="check-item flex align-center gap-small">
                  <CheckCircle2 className="text-primary-brand" size={20} />
                  <span className="font-bold">Provide Food Security</span>
                </div>
              </div>

              <Link to="/media-events/gallery" className="btn btn-primary">Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section-padding bg-sand">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge">Philosophy</span>
            <h2>Empowering Lives Since <span className="text-primary-brand">2024</span></h2>
          </div>

          <div className="vision-grid-complex">
            <div className="vision-card card-flat card-hover-up">
              <div className="card-icon bg-accent"><Target size={30} /></div>
              <h3>Our Mission</h3>
              <p className="text-secondary">To implement structured social welfare initiatives that address key community needs while maintaining transparency, accountability, and responsible governance.</p>
              <Link to="/about/vision-mission" className="btn-text text-primary-brand">View Mission <ArrowRight size={16} /></Link>
            </div>

            <div className="vision-visual">
              <img src={childLearningImage} alt="GWA Impact" className="vision-main-img" />
            </div>

            <div className="vision-card card-flat card-hover-up">
              <div className="card-icon bg-primary-brand text-light"><Users size={30} /></div>
              <h3>Our Vision</h3>
              <p className="text-secondary">To build a strong, inclusive, and socially responsible community where individuals have access to opportunities, essential resources, and a supportive environment.</p>
              <Link to="/about/vision-mission" className="btn-text text-primary-brand">View Vision <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="testimonial-section section-padding text-center">
        <div className="container">
          <div className="quote-box">
            <Quote size={60} className="quote-icon text-primary-brand" />
            <h2 className="quote-text mb-4">
              "We believe that we can save more lives with you. Your time and participation can help bring meaningful change to the lives of many people in Ghatkopar."
            </h2>
            <div className="quote-author font-bold">Ghatkopar Welfare Association Team</div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Dark Banner */}
      <section className="stats-section bg-dark text-light section-padding">
        <div className="container">
          <div className="grid-4 text-center">
            <div className="stat-items">
              <h1 className="text-light m-0">2.5k</h1>
              <p className="text-accent mb-0">Donations Collected</p>
            </div>
            <div className="stat-items">
              <h1 className="text-light m-0">850</h1>
              <p className="text-accent mb-0">Total Campaigns</p>
            </div>
            <div className="stat-items">
              <h1 className="text-light m-0">12k</h1>
              <p className="text-accent mb-0">Satisfied Beneficiaries</p>
            </div>
            <div className="stat-items">
              <h1 className="text-light m-0">1.2k</h1>
              <p className="text-accent mb-0">Total Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Drives / Projects */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="flex justify-between align-center mb-4">
            <div>
              <span className="badge">Our Work</span>
              <h2>Recent Impact <span className="text-primary-brand">Stories</span></h2>
            </div>
            <Link to="/media-events/gallery" className="btn btn-outline">View Gallery</Link>
          </div>

          <div className="grid-3">
            <div className="project-card">
              <div className="project-img-wrapper">
                <img src={foodDistImage1} alt="Food Drive" className="project-img" />
                <div className="project-tag">Food Security</div>
              </div>
              <div className="project-details">
                <h4>Monthly Food Security Drive Success</h4>
                <p className="text-secondary">Providing nutritious kits to 200+ families regularly.</p>
                <Link to="/work-areas/food-security" className="btn-text">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src={healthCampImage} alt="Medical Camp" className="project-img" />
                <div className="project-tag">Awareness</div>
              </div>
              <div className="project-details">
                <h4>Free Awareness Camp Organised</h4>
                <p className="text-secondary">Focused on young generation good and bad awareness.</p>
                <Link to="/work-areas/education" className="btn-text">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src={volunteerImage} alt="Education" className="project-img" />
                <div className="project-tag">Volunteer</div>
              </div>
              <div className="project-details">
                <h4>Volunteer Orientation Session</h4>
                <p className="text-secondary">Welcoming 50+ new volunteers to the GWA family.</p>
                <Link to="/get-involved/volunteer" className="btn-text">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section section-padding bg-primary-light">
        <div className="container">
          <div className="subscription-box card-flat bg-dark text-light text-center">
            <h2 className="text-light mb-2">Be the Light That Brightens a Life</h2>
            <p className="mb-4" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Subscribe to our newsletter to receive updates on upcoming events, success stories, and how your contributions are making a difference.
            </p>
            <form className="subscription-form flex gap-small justify-center">
              <input type="email" placeholder="Your Email Address" className="sub-input" />
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'var(--secondary-accent)', color: 'var(--text-primary)' }}>Subscribe Now</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
