import React from 'react';
import { Mail, Search, Hourglass, CheckCircle, MessageCircle } from 'lucide-react';
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
              <CheckCircle className="portrait-icon" size={40} color="#ffffff" />
            </div>
          </div>

          <div className="cta-entry">
            <div className="cta-card">
              <div className="cta-title">Entra ahora a la Frecuencia del Reencuentro</div>
              <div className="cta-desc">Activa tu energía y continúa tu proceso guiado.</div>
              <div className="cta-actions">
                <a
                  className="cta-btn"
                  href="https://frecuenciareencuentro-gzon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar ahora a la Frecuencia del Reencuentro"
                >Entrar ahora</a>
              </div>
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
            <div className="support-text">Escríbenos al soporte:</div>
            <div className="support-links">
              <a className="support-link" href="mailto:correofdr@outlook.com" aria-label="Soporte por email">
                <Mail size={18} color="#fff" /> correofdr@outlook.com
              </a>
              <a
                className="support-link"
                href="https://wa.me/5511961093355?text=comprei%20a%20frecuencia%20del%20reencuentro%20e%20preciso%20de%20ajuda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soporte por WhatsApp"
              >
                <MessageCircle size={18} color="#fff" /> WhatsApp: +55 11 96109-3355
              </a>
            </div>
          </div>

          <div className="inspire">
            <div className="inspire-quote">💖 Hoy comienza tu nueva historia emocional. Estoy orgullosa de ti.</div>
            <div className="signature">Sofía</div>
          </div>
        </div>
      </div>
      <div className="mobile-frame" />
    </div>
  );
};

export default ThankYouPage;
