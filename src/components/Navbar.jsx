import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useProducts();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header-wrapper">
      {/* Sticky Navigation Bar */}
      <nav className="header">
        <div className="header-container">
          {/* Logo on Left */}
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <img src="/tree-emblem.png" alt="Yapar Orman Ürünleri" className="brand-tree-img" />
            <div className="brand-text-custom">
              <span className="brand-yapar-red">YAPAR</span>
              <div className="brand-orman-white">
                <span>ORMAN</span>
                <span>ÜRÜNLERİ</span>
              </div>
            </div>
          </Link>

          {/* Navigation Links in Center/Right */}
          <div className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
              onClick={closeMenu}
            >
              Anasayfa
            </NavLink>
            <NavLink
              to="/kurumsal"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Kurumsal & Vizyon
            </NavLink>
            <NavLink
              to="/urunler"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Ürün Koleksiyonu
            </NavLink>
            <NavLink
              to="/renkler"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Renk & Dekor
            </NavLink>
            <NavLink
              to="/iletisim"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              İletişim & Harita
            </NavLink>
          </div>

          {/* Far Right Action Buttons (Theme Toggle & Mobile Menu Toggle) */}
          <div className="nav-right-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Aydınlık Moduna Geç' : 'Karanlık Moduna Geç'}
              aria-label="Tema Değiştir"
            >
              {theme === 'dark' ? <Sun size={20} color="#FBBF24" /> : <Moon size={20} color="#E52E2E" />}
            </button>

            <button
              className="mobile-toggle"
              onClick={toggleMenu}
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
