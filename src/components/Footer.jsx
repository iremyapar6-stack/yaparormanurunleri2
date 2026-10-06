import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Phone, Mail, MapPin, Clock, ChevronRight, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const phoneNumber = "+905336415837";
  const whatsappNumber = "905336415837";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand Bio */}
        <div className="footer-brand">
          <div className="footer-brand-title" style={{ marginBottom: '1.2rem' }}>
            <Link to="/" style={{ textDecoration: 'none' }} className="brand-logo">
              <img src="/tree-emblem.png" alt="Yapar Orman Ürünleri" className="brand-tree-img" />
              <div className="brand-text-custom">
                <span className="brand-yapar-red">YAPAR</span>
                <div className="brand-orman-white logo-subtitle">
                  <span>ORMAN</span>
                  <span>ÜRÜNLERİ</span>
                </div>
              </div>
            </Link>
          </div>
          <p>
            Yapar Orman Ürünleri A.Ş., Akustik konfor sağlayan keçeli paneller, kusursuz işlenmiş lambiriler, dayanıklı ham MDF seçenekleri ve modern  membran yüzeylerle, projelerinize estetik, dayanıklılık ve fonksiyonelliği bir arada kazandırıyoruz.
          </p>
          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              background: 'rgba(217, 119, 6, 0.15)',
              color: '#FBBF24',
              padding: '0.35rem 0.8rem',
              borderRadius: '4px',
              border: '1px solid rgba(217, 119, 6, 0.3)',
              fontWeight: '700'
            }}>
              <ShieldCheck size={14} />
              <h4>Ahşap & Akustik</h4>
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">HIZLI MENÜ</h4>
          <ul className="footer-links">
            <li><Link to="/"><ChevronRight size={14} color="#f59e0b" /> Anasayfa</Link></li>
            <li><Link to="/kurumsal"><ChevronRight size={14} color="#f59e0b" /> Kurumsal & Misyon Vizyon</Link></li>
            <li><Link to="/urunler"><ChevronRight size={14} color="#f59e0b" /> Ürün Koleksiyonumuz</Link></li>
            <li><Link to="/renkler"><ChevronRight size={14} color="#f59e0b" /> Renkler & Renk Kodları</Link></li>
            <li><Link to="/iletisim"><ChevronRight size={14} color="#f59e0b" /> İletişim & Harita Konumu</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4 className="footer-title">ÜRÜN GRUPLARIMIZ</h4>
          <ul className="footer-links">
            <li><Link to="/urunler?category=lambri"><ChevronRight size={14} color="#f59e0b" /> Duvar Lambirileri</Link></li>
            <li><Link to="/urunler?category=akustik"><ChevronRight size={14} color="#f59e0b" /> Keçeli Akustik Paneller</Link></li>
            <li><Link to="/urunler?category=mdf"><ChevronRight size={14} color="#f59e0b" /> MDF</Link></li>
            <li><Link to="/urunler?category=membran"><ChevronRight size={14} color="#f59e0b" /> Membran Kapaklar </Link></li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div className="footer-col">
          <h4 className="footer-title">İLETİŞİM HATLARI</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={16} color="var(--accent-gold)" />
              <span>Camikebir Mah. 5062. Cd. 1. Blok No: 3, Kocasinan / Kayseri</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} color="var(--accent-gold)" />
              <a href={`tel:${phoneNumber}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                Telefon: +90 (533) 641 58 37
              </a>
            </div>
            <div className="footer-contact-item">
              <WhatsAppIcon size={16} color="#22C55E" />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#22C55E', textDecoration: 'none', fontWeight: '700' }}
              >
                WhatsApp: +90 (533) 641 58 37
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} color="var(--accent-gold)" />
              <a href="mailto:hasan.yapar@yaparorman.com" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                hasan.yapar@yaparorman.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 YAPAR ORMAN ÜRÜNLERİ A.Ş. Tüm hakları saklıdır.</p>
        <p style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span>Lambri • Akustik • MDF • Membran</span>
          <span>•</span>
          <span>Kocasinan / Kayseri</span>
        </p>
      </div>
    </footer>
  );
}
