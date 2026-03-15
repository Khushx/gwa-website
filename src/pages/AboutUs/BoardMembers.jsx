import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import './About.css';

export default function BoardMembers() {
  const members = [
    { name: 'Shri. Faiyaz Ahmed Khan', role: 'Chairman', img: '/images/Chairman.jpeg' },
    { name: 'Shri. Irfan Khan', role: 'President', img: '/images/President.jpeg' },
    { name: 'Shri. Ariful Haque Khan', role: 'Director', img: '/images/Director.jpeg' },
    { name: 'Shri. Shakeel Ahmed Shaikh', role: 'Managing Trustee', img: '/images/Managing Trustee.jpeg' },
    { name: 'Shri. Abdul Aziz Khan', role: 'Member', icon: '👤' },
    { name: 'Shri. Mohammad Salim Ganiwala', role: 'Member', icon: '👤' },
    { name: 'Shri. Imtiyaz Ahmed Shaikh', role: 'Member', icon: '👤' },
    { name: 'Shri. Shoeb Ahmed Shaikh', role: 'Member', icon: '👤' }
  ];

  return (
    <PageLayout title="Board Members" subtitle="The dedicated team governing Ghatkopar Welfare Association.">
      <div className="about-page">
        <div className="text-center mb-12">
          <p className="text-secondary max-w-2xl mx-auto">
            Our board consists of experienced social workers, entrepreneurs, and community leaders who share a common goal of uplifting the lives of residents in Ghatkopar.
          </p>
        </div>

        <div className="leadership-grid">
          {members.map((member, idx) => (
            <div key={idx} className="leader-card">
              {member.img ? (
                <img src={member.img} alt={member.name} className="leader-img" />
              ) : (
                <div className="leader-img bg-sand flex align-center justify-center text-5xl">
                  {member.icon}
                </div>
              )}
              <div className="leader-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
