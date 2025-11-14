import React from 'react';
import { Mail, Search, Hourglass } from 'lucide-react';
import './ThankYouPage.css';

const ThankYouPage: React.FC = () => {
  return (
    <div className="thankyou-page">
      <div className="ty-wrapper">
        <svg className="wave-top" viewBox="0 0 1600 140" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff2ea0" />
              <stop offset="100%" stopColor="#F2C98C" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M0,80 C300,10 700,150 1000,40 C1300,-20 1500,120 1600,80" stroke="url(#waveGradient)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
        </svg>

        <div className="ty-container">
          <div className="ty-header">
            <div>
              <h1 className="ty-title">🎉 ¡Tu acceso fue liberado con éxito!</h1>
              <p className="ty-subtitle">Revisa tu correo: ya enviamos tus datos de acceso.</p>
            </div>
            <div className="portrait">
              <img src="https://i.imgur.com/Lr0RtSU.png" alt="Dra. Sofía" />
            </div>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <div className="icon-wrap"><Mail color="#fff" size={22} /></div>
              <div className="info-text">Tu acceso llegó a tu email (Hotmart)</div>
            </div>
            <div className="info-item">
              <div className="icon-wrap"><Search color="#fff" size={22} /></div>
              <div className="info-text">Busca en la bandeja principal, promociones o spam</div>
            </div>
            <div className="info-item">
              <div className="icon-wrap"><Hourglass color="#fff" size={22} /></div>
              <div className="info-text">El mensaje puede tardar de 1 a 5 minutos</div>
            </div>
          </div>

          <div className="divider" />

          <div className="support-box">
            <div className="support-title">¿No recibiste tu acceso?</div>
            <div className="support-text">Escríbenos al soporte: [e-mail]</div>
          </div>

          <div className="inspire">
            <div className="inspire-quote">💖 Hoy comienza tu nueva historia emocional. Estoy orgullosa de ti.</div>
            <div className="signature">Dra. Sofía</div>
          </div>
        </div>
      </div>
      <div className="mobile-frame" />
    </div>
  );
};

export default ThankYouPage;