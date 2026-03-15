import React, { useState } from 'react';
import PageLayout from '../layout/PageLayout';
import { Shield, FileText, Download, CheckCircle, ExternalLink, Scale, Building2, Award } from 'lucide-react';
import './Resources.css';

export default function LegalLicenses() {
  const licenses = [
    {
      title: "Section 8 Registration",
      authority: "Ministry of Corporate Affairs, Gov of India",
      id: "CIN: POMH2024NPL420643",
      desc: "Registered under Section 8 of the Companies Act, 2013 as a Non-Profit Organization.",
      icon: <Building2 className="text-primary-brand" size={24} />
    },
    {
      title: "NGO Darpan",
      authority: "NITI Aayog, Government of India",
      id: "ID: MH/2024/0400286",
      desc: "Verified registration with the Government of India portal for NGOs.",
      icon: <Shield className="text-primary-brand" size={24} />
    },
    {
      title: "Income Tax 12A",
      authority: "Income Tax Act, 1961",
      id: "Section 12A Registration",
      desc: "Registered as a charitable organization eligible for tax-exempt status.",
      icon: <FileText className="text-primary-brand" size={24} />
    },
    {
      title: "80G Certification",
      authority: "Income Tax Act, 1961",
      id: "Approved under 80G (5)(vi)",
      desc: "Donations to GWA are eligible for tax deductions for donors.",
      icon: <CheckCircle className="text-primary-brand" size={24} />
    },
    {
      title: "MSME / Udyam",
      authority: "Ministry of MSME, Gov of India",
      id: "UDYAM-MH-18-0336023",
      desc: "Registered as a micro-enterprise focused on social welfare activities.",
      icon: <Award className="text-primary-brand" size={24} />
    },
    {
      title: "ISO 9001:2015",
      authority: "Quality Management System",
      id: "Certified NGO",
      desc: "International certification for transparent and structured social initiatives.",
      icon: <CheckCircle className="text-primary-brand" size={24} />
    }
  ];

  const documents = [
    "Certificate of Incorporation",
    "Section 8 License Copy",
    "12A Registration Certificate",
    "80G Approval Document",
    "NGO Darpan Certificate",
    "ISO 9001 Certification Copy",
    "MSME Registration Certificate"
  ];

  return (
    <PageLayout 
      title="Legal & Licenses" 
      subtitle="Ensuring transparency and compliance with Government of India regulations."
    >
      <div className="resources-page">
        {/* Intro */}
        <div className="card-flat mb-8">
          <div className="grid-2 gap-large align-center">
            <div>
              <span className="badge">GWA Legal Status</span>
              <h2 className="mb-4">Committed to Ethical <span className="text-primary-brand">Governance</span></h2>
              <p className="text-secondary mb-4">
                Ghatkopar Welfare Association (GWA) is a registered non-governmental organization dedicated to community welfare. We operate in full compliance with the laws of India, maintaining the highest standards of financial documentation and transparency.
              </p>
              <div className="flex flex-wrap gap-small">
                <div className="flex align-center gap-tiny text-primary-brand font-bold">
                  <CheckCircle size={18} /> Transparent Operations
                </div>
                <div className="flex align-center gap-tiny text-primary-brand font-bold">
                  <CheckCircle size={18} /> Tax Benefits (80G)
                </div>
                <div className="flex align-center gap-tiny text-primary-brand font-bold">
                  <CheckCircle size={18} /> Audited Accounts
                </div>
              </div>
            </div>
            <div className="bg-sand p-8 rounded-lg">
              <h4 className="mb-2">Legal Advisor</h4>
              <p className="font-bold m-0">Mr. Ayaan Kashyap</p>
              <p className="text-secondary m-0">Legal Consultant & Advisor</p>
              <p className="text-secondary mb-4">Powai, Mumbai – 400076</p>
              <div className="flex align-center gap-small text-accent font-bold">
                <Scale size={20} /> Verified Legal Counsel
              </div>
            </div>
          </div>
        </div>

        {/* Licenses Grid */}
        <h3 className="section-title mb-8">Official Registrations</h3>
        <div className="grid-3 mb-12">
          {licenses.map((item, idx) => (
            <div key={idx} className="card-flat card-hover-up">
              <div className="bg-primary-bg w-12 h-12 rounded-full flex align-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="mb-1">{item.title}</h4>
              <p className="text-primary-brand font-bold text-sm m-0">{item.id}</p>
              <p className="text-secondary text-xs mb-3">{item.authority}</p>
              <p className="text-secondary text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Documents Download */}
        <div className="grid-2 gap-large">
          <div className="document-section">
            <h3 className="mb-6">Public Documents</h3>
            <div className="flex flex-col gap-small">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex align-center justify-between p-4 bg-white rounded-lg border-subtle hover-shadow transition">
                  <div className="flex align-center gap-small">
                    <FileText className="text-primary-brand" size={20} />
                    <span className="font-medium text-sm">{doc}</span>
                  </div>
                  <button className="btn-icon btn-primary-outline" title="Download PDF">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="compliance-section">
            <h3 className="mb-6">Compliance & Transparency</h3>
            <div className="card-flat bg-dark text-white p-8">
              <p className="text-sm opacity-80 mb-6">
                Ghatkopar Welfare Association follows ethical governance practices including:
              </p>
              <ul className="list-unstyled flex flex-col gap-small">
                <li className="flex align-start gap-small">
                  <CheckCircle className="text-accent mt-1" size={16} />
                  <span className="text-sm">Compliance with applicable legal frameworks under Companies Act 2013</span>
                </li>
                <li className="flex align-start gap-small">
                  <CheckCircle className="text-accent mt-1" size={16} />
                  <span className="text-sm">Responsible utilization of all donations and grants</span>
                </li>
                <li className="flex align-start gap-small">
                  <CheckCircle className="text-accent mt-1" size={16} />
                  <span className="text-sm">Regular monitoring and evaluation of all social projects</span>
                </li>
                <li className="flex align-start gap-small">
                  <CheckCircle className="text-accent mt-1" size={16} />
                  <span className="text-sm">Full accountability to donors, volunteers, and beneficiaries</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-top border-white opacity-20 flex align-center justify-between">
                <span className="text-xs">GWA / Compliance / 2024</span>
                <ExternalLink size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
