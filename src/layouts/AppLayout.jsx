import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function AppLayout() {
  const phoneNumber = "+905336415837";
  const whatsappNumber = "905336415837";

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Quick Action Contact Bar (Sticky Bottom Right) */}
      <div className="floating-contact-widget">
        <a
          href={`tel:${phoneNumber}`}
          className="floating-btn float-phone"
          title="Hemen Bizi Arayın"
        >
          <Phone size={22} />
          <span className="float-tooltip">Telefon İletişim</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba Yapar Orman Ürünleri, bilgi ve teklif almak istiyorum.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn float-whatsapp"
          title="WhatsApp İletişim Hattı"
        >
          <WhatsAppIcon size={26} color="#ffffff" />
          <span className="float-tooltip">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
