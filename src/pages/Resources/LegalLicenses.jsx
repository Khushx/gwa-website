import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Shield, FileText, Download, CheckCircle, ExternalLink, Scale, Building2, Award, Briefcase, FileCheck } from 'lucide-react';
import './Resources.css';
import { handleDownload } from '../../lib/downloadUtils';

export default function LegalLicenses() {
  const licenses = [
    {
      title: "Section 8 Registration",
      authority: "Ministry of Corporate Affairs, Gov of India",
      id: "CIN: POMH2024NPL420643",
      desc: "Registered as a Non-Profit Company dedicated to social welfare and community development.",
      icon: <Building2 className="text-primary-brand" size={24} />
    },
    {
      title: "NGO Darpan",
      authority: "NITI Aayog, Government of India",
      id: "ID: MH/2024/0400286",
      desc: "Officially enlisted in the Government of India's central database for NGOs.",
      icon: <Shield className="text-primary-brand" size={24} />
    },
    {
      title: "Income Tax 12A",
      authority: "Income Tax Department, India",
      id: "Certified Charity Status",
      desc: "Permanently registered as a charitable entity under the Income Tax Act, 1961.",
      icon: <FileCheck className="text-primary-brand" size={24} />
    },
    {
      title: "80G Tax Exemption",
      authority: "Income Tax Department, India",
      id: "Exemption ID: 80G Certified",
      desc: "All donations to GWA are eligible for tax redemption under section 80G.",
      icon: <Award className="text-primary-brand" size={24} />
    },
    {
      title: "MSME Udyam",
      authority: "Ministry of MSME, India",
      id: "UDYAM-MH-18-0336023",
      desc: "Recognized as a service powerhouse for community-based micro-initiatives.",
      icon: <Briefcase className="text-primary-brand" size={24} />
    },
    {
      title: "ISO 9001:2015",
      authority: "QMS Certification",
      id: "Standardized Operations",
      desc: "Certified for maintaining top-tier quality management in NGO operations.",
      icon: <CheckCircle className="text-primary-brand" size={24} />
    }
  ];

  const documents = [
    { name: "10AC Certificate", size: "55 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-10AC.pdf", filename: "GWA_10AC_Certificate.pdf" },
    { name: "AALCG Certificate", size: "54 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-AALCG.pdf", filename: "GWA_AALCG_Certificate.pdf" },
    { name: "Articles of Association (AoA)", size: "255 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-e-AOA-INC-31.pdf", filename: "GWA_Articles_of_Association.pdf" },
    { name: "Memorandum of Association (MoA)", size: "224 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-e-MOA-INC-13.pdf", filename: "GWA_Memorandum_of_Association.pdf" },
    { name: "E-PAN Card", size: "765 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-E-Pan.pdf", filename: "GWA_E-PAN_Card.pdf" },
    { name: "Membership Certificate", size: "2.1 MB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-MEMBERSHIP.pdf", filename: "GWA_Membership_Certificate.pdf" },
    { name: "SPICE Approval", size: "71 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-SPICE-APPROVAL.pdf", filename: "GWA_SPICE_Approval.pdf" },
    { name: "SPICE License", size: "55 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-SPICE-LICENSE.pdf", filename: "GWA_SPICE_License.pdf" },
    { name: "UDYAM Registration Certificate", size: "221 KB", date: "Apr 2025", path: "/pdfs/legal-licenses/GWA-UDYAM.pdf", filename: "GWA_UDYAM_Registration.pdf" }
  ];

  return (
    <PageLayout
      title="Legal & Licenses"
      subtitle="Ensuring clinical transparency and total compliance with Indian Law."
    >
      <div className="resources-page py-12">
        {/* Intro Section */}
        <div className="card-flat mb-12 border-primary border-dashed">
          <div className="grid-2 gap-large align-center">
            <div>
              <span className="badge mb-4">Official Governance</span>
              <h2 className="mb-4">Committed to Ethical <span className="text-primary-brand">Integrity</span></h2>
              <p className="text-secondary mb-6 line-height-relaxed">
                Ghatkopar Welfare Association (GWA) is a legally registered Section 8 Non-Profit Organisation. We take immense pride in our transparent reporting and adherence to the legal frameworks established by the Ministry of Corporate Affairs and the Income Tax Department.
              </p>
              <div className="flex flex-wrap gap-normal">
                <div className="flex align-center gap-tiny text-primary-brand font-bold bg-primary-bg px-3 py-1 rounded-full text-xs" style={{ marginRight: '20px' }}>
                  <CheckCircle size={14} /> Registered NPO
                </div>
                <div className="flex align-center gap-tiny text-primary-brand font-bold bg-primary-bg px-3 py-1 rounded-full text-xs" style={{ marginRight: '20px' }}>
                  <CheckCircle size={14} /> 80G Certified
                </div>
                <div className="flex align-center gap-tiny text-primary-brand font-bold bg-primary-bg px-3 py-1 rounded-full text-xs">
                  <CheckCircle size={14} /> Audited Yearly
                </div>
              </div>
            </div>
            <div className="bg-sand p-8 rounded-xl shadow-sm border-subtle" style={{ paddingLeft: '20px', paddingBottom: '20px' }}>
              <h4 className="mb-3 text-accent flex align-center gap-tiny">
                <Scale size={20} /> Legal Advisor
              </h4>
              <p className="font-bold text-lg m-0 mb-1">Mr. Ayaan Kashyap</p>
              <p className="text-secondary font-medium text-sm mb-4">Legal Consultant & Advisory Lead</p>
              <div className="text-xs text-secondary-text mb-4 opacity-70">
                Opp. Hiranandani Gardens, Powai,<br />
                Mumbai – 400076, Maharashtra, India
              </div>
              <p className="text-xs font-bold text-primary-brand m-0">Verified Legal Counsel</p>
            </div>
          </div>
        </div>

        {/* Licenses Grid */}
        <div className="text-center mb-12">
          <h3 className="section-title">Government Registrations</h3>
          <p className="text-secondary max-w-2xl mx-auto">Providing a secure foundation for community impact through official certifications.</p>
        </div>

        <div className="grid-3 gap-normal mb-20">
          {licenses.map((item, idx) => (
            <div key={idx} className="card-flat card-hover-up border-subtle">
              <div className="bg-primary-bg w-14 h-14 rounded-xl flex align-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="mb-2">{item.title}</h4>
              <div className="font-mono text-primary-brand font-bold text-xs mb-1 bg-white inline-block px-2 py-1 rounded border-subtle">{item.id}</div>
              <p className="text-secondary text-xs font-bold mb-4 uppercase tracking-wider">{item.authority}</p>
              <p className="text-secondary-text text-sm m-0 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Documents Download */}
        <div className="grid-2 gap-large">
          <div className="document-section">
            <div className="flex align-center justify-between mb-8" style={{ marginTop: '100px' }}>
              <h3 className="m-0">Public Documents</h3>
              <span className="text-xs font-bold opacity-60">PDF FORMAT</span>
            </div>
            <div className="flex flex-col gap-small" style={{ marginTop: '30px' }}>
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  onClick={() => handleDownload(doc.path, doc.filename)}
                  onKeyDown={(e) => e.key === 'Enter' && handleDownload(doc.path, doc.filename)}
                  className="flex align-center justify-between p-5 bg-white rounded-xl border-subtle hover-shadow-lg transition-all cursor-pointer group focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-brand/30"
                  role="button"
                  tabIndex={0}
                  aria-label={`Download ${doc.name} - ${doc.size}`}
                >
                  <div className="flex align-center gap-normal">
                    <div className="bg-primary-bg p-3 rounded-lg group-hover:bg-primary-brand group-hover:text-white transition-colors">
                      <FileText size={20} />
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-primary-dark">{doc.name}</span>
                      <span className="text-xs text-secondary-text opacity-70 uppercase font-bold">{doc.size} • UPDATED {doc.date}</span>
                    </div>
                  </div>
                  <div className="btn-icon bg-sand text-accent border-none group-hover:bg-accent group-hover:text-white transition-all shadow-sm flex align-center justify-center" title="Download Document">
                    <Download size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="compliance-section" style={{ marginTop: '80px' }}>
            <h3 className="mb-8">Compliance Framework</h3>
            <div className="card-flat bg-dark text-white p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
              </div>
              <p className="text-sm opacity-60 mb-8 font-medium">
                Our organization maintains radical transparency through:
              </p>
              <ul className="list-unstyled flex flex-col gap-normal relative z-10">
                <li className="flex align-start gap-normal group">
                  <div className="bg-accent/20 p-1 rounded-full group-hover:bg-accent transition-colors">
                    <CheckCircle className="text-accent group-hover:text-white" size={18} style={{ marginRight: '10px' }} />
                  </div>
                  <span className="text-sm font-medium opacity-90">Regulatory compliance with MCA & NITI Aayog norms</span>
                </li>
                <li className="flex align-start gap-normal group">
                  <div className="bg-accent/20 p-1 rounded-full group-hover:bg-accent transition-colors">
                    <CheckCircle className="text-accent group-hover:text-white" size={18} style={{ marginRight: '10px' }} />
                  </div>
                  <span className="text-sm font-medium opacity-90">100% donation utilization exclusively for welfare projects</span>
                </li>
                <li className="flex align-start gap-normal group">
                  <div className="bg-accent/20 p-1 rounded-full group-hover:bg-accent transition-colors">
                    <CheckCircle className="text-accent group-hover:text-white" size={18} style={{ marginRight: '10px' }} />
                  </div>
                  <span className="text-sm font-medium opacity-90">Publicly available quarterly audit & impact summaries</span>
                </li>
                <li className="flex align-start gap-normal group">
                  <div className="bg-accent/20 p-1 rounded-full group-hover:bg-accent transition-colors">
                    <CheckCircle className="text-accent group-hover:text-white" size={18} style={{ marginRight: '10px' }} />
                  </div>
                  <span className="text-sm font-medium opacity-90">Digital tracking of volunteer activities and resource flow</span>
                </li>
              </ul>

              <div className="mt-12 pt-8 border-top border-white/10 flex align-center justify-between">
                <div>
                  <p className="text-xs font-bold opacity-30 m-0 uppercase tracking-tighter">Verified Compliance Status</p>
                  <p className="text-sm font-bold text-accent m-0">ACTIVE / VALID 2024-25</p>
                </div>
                <ExternalLink size={20} className="opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout >
  );
}
