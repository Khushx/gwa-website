import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, User, ShieldCheck, Calendar, Phone, MapPin, Briefcase } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import './Verification.css';
import PageLayout from '/src/components/layout/PageLayout.jsx';

export default function MemberVerification() {
  const [memberId, setMemberId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!memberId.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const { data, error: sbError } = await supabase
        .from('members')
        .select('*')
        .eq('membership_id', memberId.trim().toUpperCase())
        .single();

      if (sbError || !data) {
        setError('The entered membership ID does not match any registered member in our records.');
      } else {
        setResult(data);
      }
    } catch (err) {
      setError('An error occurred during verification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout 
        title="Member Verification" 
        subtitle="Verify the authenticity of individuals associated with Ghatkopar Welfare Association."
    >
      <div className="verification-page">
        <div className="text-center mb-large">
          <p className="text-secondary max-w-2xl mx-auto">
            Only individuals listed in this system are officially registered as members, volunteers, or office bearers of the Association.
          </p>
        </div>

        <div className="verification-card-container">
          <div className="card-flat bg-sand p-12">
            <form className="verification-form" onSubmit={handleVerify}>
                <div className="search-wrapper">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Enter Membership ID (e.g., GWA/CM/001)"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    className="search-input"
                    required
                />
                </div>
                <button type="submit" className="btn btn-primary w-full py-4 text-lg" disabled={loading}>
                {loading ? 'Searching Database...' : 'Verify Membership'}
                </button>
            </form>

            {error && (
                <div className="verification-result error mt-large bg-white p-8 rounded-xl border-red shadow-sm text-center">
                    <XCircle className="text-red mb-4 mx-auto" size={48} />
                    <h3 className="text-red mb-2">Membership ID Not Found</h3>
                    <p className="text-sm m-0">{error}</p>
                    <p className="text-xs text-secondary mt-4">
                        Please check the ID and try again, or contact the association for verification support.
                    </p>
                </div>
            )}

            {result && (
                <div className="verification-result success mt-large bg-white rounded-xl overflow-hidden border-green shadow-md text-left">
                    <div className="bg-green-600 px-8 py-3 text-white flex align-center gap-tiny font-bold text-sm" style={{backgroundColor: '#16a34a'}}>
                        <ShieldCheck size={18} />
                        <span>Verified Member of GWA</span>
                    </div>
                
                    <div className="member-profile-header p-8 border-bottom flex align-center gap-normal">
                        <div className="bg-sand w-20 h-20 rounded-full flex flex-center">
                            <User size={36} className="text-primary-brand" />
                        </div>
                        <div>
                            <h2 className="m-0 text-2xl">{result.name}</h2>
                            <span className="text-primary-brand font-bold text-lg">{result.membership_id}</span>
                        </div>
                    </div>

                    <div className="member-details-grid p-8 grid-2 gap-normal">
                        <div className="detail-item">
                            <span className="detail-label">Designation</span>
                            <div className="flex align-center gap-tiny mt-1">
                                <Briefcase size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.designation}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Status</span>
                            <div className="mt-1">
                                <span className="status-badge" style={{backgroundColor: result.status === 'Active' ? '#16a34a' : '#2596be'}}>{result.status || 'Active Member'}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Joining / Issue Date</span>
                            <div className="flex align-center gap-tiny mt-1">
                                <Calendar size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.issue_date || result.joining_date}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Expiry Date</span>
                            <div className="flex align-center gap-tiny mt-1">
                                <Calendar size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.expiry_date || 'N/A'}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Phone Number</span>
                            <div className="flex align-center gap-tiny mt-1">
                                <Phone size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.phone_number || result.phone}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Nationality</span>
                            <div className="flex align-center gap-tiny mt-1">
                                <MapPin size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.nationality || 'Indian'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-8 bg-sand-bg text-xs text-secondary border-top">
                        <p className="m-0">This individual is officially registered with the organisation and authorised to participate in association activities according to the organisational guidelines.</p>
                    </div>
                </div>
            )}
          </div>
        </div>

        <div className="mt-large card-flat bg-dark text-light p-12">
           <div className="flex gap-large align-start">
                <ShieldCheck size={48} className="text-accent flex-shrink-0" />
                <div>
                    <h3 className="text-light mb-2">Important Notice</h3>
                    <p className="text-white opacity-70 text-sm leading-relaxed m-0">
                        The Member Verification System is maintained to ensure transparency and prevent misuse of the organisation’s identity. If you encounter anyone claiming affiliation without a valid membership ID, please report the matter to the organisation.
                    </p>
                </div>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
