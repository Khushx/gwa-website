import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, User, ShieldCheck, Calendar, Phone, MapPin, Briefcase } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import './Verification.css';
import PageLayout from '../../components/layout/PageLayout';

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
        <div className="text-center mb-8">
          <p className="text-secondary" style={{maxWidth: '600px', margin: '0 auto'}}>
            Only individuals listed in this system are officially registered as members, volunteers, or office bearers of the Association.
          </p>
        </div>

        <div className="verification-card-container">
          <div className="card-flat bg-sand" style={{borderRadius: 'var(--radius-md)', padding: '3rem'}}>
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
                <button type="submit" className="btn btn-primary" disabled={loading} style={{width: '100%', height: '56px'}}>
                {loading ? 'Searching Database...' : 'Verify Membership'}
                </button>
            </form>

            {error && (
                <div className="verification-result error mt-4" style={{backgroundColor: '#fff', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid #fee2e2'}}>
                <XCircle className="result-icon text-red" size={48} />
                <h3 style={{color: '#b91c1c'}}>Membership ID Not Found</h3>
                <p style={{fontSize: '0.95rem'}}>{error}</p>
                <p style={{fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-secondary)'}}>
                    Please check the ID and try again, or contact the association for verification support.
                </p>
                </div>
            )}

            {result && (
                <div className="verification-result success mt-4" style={{backgroundColor: '#fff', padding: '0', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #dcfce7', textAlign: 'left'}}>
                    <div style={{backgroundColor: '#16a34a', padding: '1rem 2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                        <ShieldCheck size={20} />
                        <span style={{fontWeight: 700}}>Verified Member of GWA</span>
                    </div>
                
                    <div className="member-profile-header" style={{padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                        <div className="bg-sand" style={{width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <User size={40} className="text-primary-brand" />
                        </div>
                        <div>
                            <h2 style={{fontSize: '1.5rem', marginBottom: '0.25rem'}}>{result.name}</h2>
                            <span style={{color: 'var(--primary-brand)', fontWeight: 700}}>{result.membership_id}</span>
                        </div>
                    </div>

                    <div className="member-details-grid" style={{padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                        <div className="detail-item">
                            <span className="detail-label">Designation</span>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem'}}>
                                <Briefcase size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.designation}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Status</span>
                            <div style={{marginTop: '0.25rem'}}>
                                <span className="status-badge" style={{backgroundColor: result.status === 'Active' ? '#16a34a' : '#2596be'}}>{result.status || 'Active Member'}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Joining / Issue Date</span>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem'}}>
                                <Calendar size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.issue_date || result.joining_date}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Expiry Date</span>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem'}}>
                                <Calendar size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.expiry_date || 'N/A'}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Phone Number</span>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem'}}>
                                <Phone size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.phone_number || result.phone}</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Nationality</span>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem'}}>
                                <MapPin size={16} className="text-primary-brand" />
                                <span className="detail-value">{result.nationality || 'Indian'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{padding: '1.5rem 2rem', backgroundColor: 'var(--sand-bg)', fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)'}}>
                        <p>This individual is officially registered with the organisation and authorised to participate in association activities according to the organisational guidelines.</p>
                    </div>
                </div>
            )}
          </div>
        </div>

        <div className="mt-8 card-flat bg-dark text-light" style={{borderRadius: 'var(--radius-md)', padding: '3rem'}}>
           <div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start'}}>
                <ShieldCheck size={40} className="text-accent" />
                <div>
                    <h3 className="text-light">Important Notice</h3>
                    <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem'}}>
                        The Member Verification System is maintained to ensure transparency and prevent misuse of the organisation’s identity. If you encounter anyone claiming affiliation without a valid membership ID, please report the matter to the organisation.
                    </p>
                </div>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
