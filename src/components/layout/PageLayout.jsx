import React from 'react';

export default function PageLayout({ title, subtitle, children }) {
  return (
    <div className="page-layout section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="page-content bg-white p-8 rounded-lg shadow-soft">
          {children}
        </div>
      </div>
    </div>
  );
}
