import React, { useState } from 'react';
import logo from '../assets/2b.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-container">
        <img src={logo} alt="2bVPN" className="logo" loading="lazy" />
        <nav className={open ? 'open' : ''}>
          <a href="#features">Преимущества</a>
          <a href="#pricing">Тарифы</a>
          <a href="#download">Скачать</a>
          <a href="#contact">Контакты</a>
        </nav>
        <div className="burger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}