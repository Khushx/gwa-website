import React from 'react';

export default function PageLayout({ title, subtitle, children }) {
  return (
    <div className="page-layout-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="page-content-wrapper section-padding">
        <div className="container">
          <div className="page-card bg-white animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
