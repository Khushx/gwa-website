import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import './About.css';

export default function BoardMembers() {
  const leadership = [
    { name: 'Shabaaz Shaikh', role: 'Founder & President', img: '/images/President.jpeg' },
    { name: 'Salman Khan', role: 'Chairman', img: '/images/Chairman.jpeg' },
    { name: 'Rizwan Khan', role: 'Director', img: '/images/Director.jpeg' },
    { name: 'Shri. Shakeel Ahmed Shaikh', role: 'Managing Trustee', img: '/images/Managing Trustee.jpeg' },
  ];

  const coreCommittee = [
    { name: 'Ghulam Mustafa Khan', role: 'Joint Treasurer', desc: 'Financial oversight, documentation, and coordination.', icon: '💰' },
    { name: 'Ayyub Shaikh', role: 'Joint Secretary', desc: 'Administration, internal communication, and programme support.', icon: '📝' },
    { name: 'Danish Khan', role: 'Field Executive', desc: 'Field activities, coordination, and programme implementation.', icon: '🏃' }
  ];

  const members = [
    { name: 'Rameez Shaikh', role: 'Member' },
    { name: 'Arbaz Sayyed', role: 'Member' },
    { name: 'Abbas Attar', role: 'Member' },
    { name: 'Atif Ansari', role: 'Member' }
  ];

  return (
    <PageLayout title="Board & Committee" subtitle="The dedicated team governing Ghatkopar Welfare Association.">
      <div className="about-page">
        <div className="text-center mb-12">
          <p className="text-secondary max-w-2xl mx-auto">
            Our board and committee consist of dedicated community leaders who share a common goal of uplifting the lives of residents in Ghatkopar through structured social welfare.
          </p>
        </div>

        {/* Leadership Section */}
        <h3 className="section-title text-center mb-8">Executive Leadership</h3>
        <div className="leadership-grid mb-20">
          {leadership.map((member, idx) => (
            <div key={idx} className="leader-card">
              <div className="profile-img-container">
                <img src={member.img} alt={member.name} className="profile-img" />
              </div>
              <div className="leader-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Committee Section */}
        <h3 className="section-title text-center mb-8">Core Committee</h3>
        <div className="grid-3 gap-normal mb-20">
          {coreCommittee.map((member, idx) => (
            <div key={idx} className="card-flat p-6 text-center card-hover-up">
              <div className="bg-sand w-16 h-16 rounded-full flex align-center justify-center mx-auto mb-4 text-2xl">
                {member.icon}
              </div>
              <h4 className="mb-1">{member.name}</h4>
              <p className="text-primary-brand font-bold text-sm mb-3">{member.role}</p>
              <p className="text-xs text-secondary leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Members Section */}
        <h3 className="section-title text-center mb-8">Committee Members</h3>
        <div className="grid-4 gap-small">
          {members.map((member, idx) => (
            <div key={idx} className="card-flat p-4 text-center border-subtle">
              <div className="w-10 h-10 bg-primary-bg rounded-full flex align-center justify-center mx-auto mb-3">
                <span className="text-primary-brand">👤</span>
              </div>
              <h5 className="m-0 text-sm font-bold">{member.name}</h5>
              <p className="m-0 text-xs text-secondary mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
