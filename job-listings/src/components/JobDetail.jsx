import React from 'react';
import '../styles/JobDetail.css';

function JobDetail({ job, onClose }) {
  const handleApply = () => {
    window.open(`https://kariyer.tubitak.gov.tr/#/login?id=${job.ilanDetayId}`, '_blank');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="job-detail-overlay">
      <div className="job-detail-container">
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="job-detail-content">
          <div className="job-detail-header">
            <div className="title-section">
              <h2 className="job-detail-title">{job.unvan}</h2>
              <span className="job-detail-id">İlan No: {job.ilanDetayId}</span>
            </div>
            <div className="header-actions">
              <button className="apply-button" onClick={handleApply}>
                Başvur
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="button-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="job-detail-meta">
            <div className="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="meta-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <span>{job.ilanBirimi}</span>
            </div>
            <div className="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="meta-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{job.gorevYeri}</span>
            </div>
            <div className="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="meta-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Son Başvuru: {formatDate(job.ilanBitisTarih)}</span>
            </div>
            <div className="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="meta-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
              <span>{job.tecrubeYili ? `${job.tecrubeYili} Yıl Tecrübe` : 'Tecrübe Şartı Yok'}</span>
            </div>
          </div>

          <div className="job-detail-section">
            <h3>Pozisyon Bilgileri</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Birim:</label>
                <span>{job.ilanBirimi}</span>
              </div>
              <div className="info-item">
                <label>Görev Yeri:</label>
                <span>{job.gorevYeri}</span>
              </div>
              <div className="info-item">
                <label>Tecrübe:</label>
                <span>{job.tecrubeYili ? `${job.tecrubeYili} Yıl` : 'Tecrübe Şartı Yok'}</span>
              </div>
              <div className="info-item">
                <label>Personel Sayısı:</label>
                <span>{job.personelSayisi || 1} Kişi</span>
              </div>
            </div>
          </div>

          <div className="job-detail-section">
            <h3>İş Tanımı</h3>
            <div className="detail-text" dangerouslySetInnerHTML={{ __html: job.isinTanimi }} />
          </div>

          {job.aranacakOzelKosul && (
            <div className="job-detail-section">
              <h3>Aranacak Özel Koşullar</h3>
              <div className="detail-text" dangerouslySetInnerHTML={{ __html: job.aranacakOzelKosul }} />
            </div>
          )}

          {job.departments && job.departments.length > 0 && (
            <div className="job-detail-section">
              <h3>İlgili Bölümler</h3>
              <div className="job-tags">
                {job.departments.map((department, index) => (
                  <span key={index} className="skill-tag">
                    {department}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobDetail; 