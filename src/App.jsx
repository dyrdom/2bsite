import React from 'react';
import './index.css';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Separator from './components/Separator';

export default function App() {
  return (
    <div className="app">
      {/* Fullscreen Hero without header */}
      <section className="hero">
        <a href="/download/2bvpn-installer.exe" className="btn-download">
          Скачать
        </a>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-content container">
          <Features />
        </div>
        <Separator flip />
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="section-content container">
          <Pricing />
        </div>
        <Separator />
      </section>

      {/* Download Section */}
      <section className="download">
        <div className="section-content container">
          <Download />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <p>&copy; 2025 2bVPN. Все права защищены.</p>
          <p>
            <a href="#">Политика конфиденциальности</a> |
            <a href="#">Условия использования</a> |
            <a href="mailto:support@2bvpn.com">support@2bvpn.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}