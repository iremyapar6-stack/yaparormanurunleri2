import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const phoneNumber = "+905336415837";
  const phoneDisplay = "+90 (533) 641 58 37";
  const whatsappNumber = "905336415837";
  const whatsappDisplay = "+90 (533) 641 58 37";

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [productGroup, setProductGroup] = useState('Lambri (Duvar & Tavan Ahşap)');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Merhaba Yapar Orman Ürünleri,\nFiyat Bilgisi Almak İstiyorum.\n\n👤 Ad Soyad / Firma: ${fullName}\n📞 Telefon: ${phone}\n📦 Ürün Grubu: ${productGroup}\n📝 Metraj & Notlar: ${notes}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div>
      <section className="page-header">
        <h1>İletişim Hattı & Harita Konumu</h1>
        <p>Lambri, Akustik Panel, MDF ve Membran siparişleriniz, teklif talepleriniz için bize ulaşın</p>
      </section>

      <section style={{ maxWidth: '1320px', margin: '4rem auto', padding: '0 1.5rem' }}>
        {/* Quick Hotline Bar */}
        <div className="contact-hotline-banner">
          <div className="hotline-item">
            <Phone size={28} color="#b45309" />
            <div>
              <span className="hotline-label">TELEFON İLETİŞİM HATTI</span>
              <a href={`tel:${phoneNumber}`} className="hotline-val">{phoneDisplay}</a>
            </div>
          </div>

          <div className="hotline-divider"></div>

          <div className="hotline-item">
            <MessageCircle size={28} color="#25D366" />
            <div>
              <span className="hotline-label" style={{ color: '#16A34A' }}>WHATSAPP İLETİŞİM HATTI</span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba Yapar Orman Ürünleri, fiyat teklifi ve katalog rica ediyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hotline-val green"
              >
                {whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          {/* Contact Info */}
          <div style={{ background: 'var(--bg-surface)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)' }}>
            <span style={{ color: '#b45309', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              KURUMSAL İLETİŞİM
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginTop: '0.3rem', marginBottom: '1.5rem', fontSize: '2.2rem', fontWeight: '900' }}>
              Bize Ulaşın
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: '1.75', fontWeight: '500' }}>
              Yapar Orman Ürünleri uzman ekibimiz lambri, akustik keçe panel, MDF ve membran ihtiyaçlarınızda sizlere en hızlı çözümü ve fiyat teklifini sunmaktadır.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
                  <MapPin color="#b45309" size={26} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '900', fontSize: '1.1rem' }}>Dükkan Adresi</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem', fontWeight: '600' }}>
                    Camikebir Mah. 5062. Cd. 1. Blok No: 3, Kocasinan / Kayseri
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
                  <Phone color="#b45309" size={26} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '900', fontSize: '1.1rem' }}>Telefon / WhatsApp İletişim</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem', fontWeight: '600' }}>
                    Sabit Hat: <a href={`tel:${phoneNumber}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '900' }}>{phoneDisplay}</a>
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600', marginTop: '0.2rem' }}>
                    WhatsApp Hat: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" style={{ color: '#16A34A', textDecoration: 'none', fontWeight: '900' }}>{whatsappDisplay}</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
                  <Mail color="#b45309" size={26} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '900', fontSize: '1.1rem' }}>E-Posta</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem', fontWeight: '600' }}>
                    <a href="mailto:hasan.yapar@yaparorman.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '800' }}>
                      hasan.yapar@yaparorman.com
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
                  <Clock color="#b45309" size={26} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '900', fontSize: '1.1rem' }}>Mesai Saatleri</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem', fontWeight: '600' }}>Hafta İçi : 08:00 - 18:00</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>Cumartesi : 08:00 - 15:00</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--bg-surface)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.6rem', fontWeight: '900' }}>
              Teklif & Metraj Bilgi Formu
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
              Projeniz için ihtiyacınız olan ürün grubu, renk kodu ve metrajı iletin; ekibimiz size özel teklif hazırlasın.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Adınız Soyadınız / Firma Unvanı
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Örn: Ahmet Yılmaz - Yılmaz Mimarlık"
                  style={{ width: '100%', padding: '0.9rem', border: '1.5px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', background: 'var(--card-bg)', color: 'var(--text-primary)', fontWeight: '600' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XX XXX XX XX"
                  style={{ width: '100%', padding: '0.9rem', border: '1.5px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', background: 'var(--card-bg)', color: 'var(--text-primary)', fontWeight: '600' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Ürün Grubu Seçimi
                </label>
                <select
                  value={productGroup}
                  onChange={(e) => setProductGroup(e.target.value)}
                  style={{ width: '100%', padding: '0.9rem', border: '1.5px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', background: 'var(--card-bg)', color: 'var(--text-primary)', fontWeight: '700' }}
                >
                  <option value="Lambri">Lambri</option>
                  <option value="Akustik">Akustik Panel</option>
                  <option value="MDF">MDF Levha</option>
                  <option value="Membran">Membran Kapak</option>
                  <option value="Sunta">Sunta</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Metraj & Proje Notlarınız
                </label>
                <textarea
                  rows="4"
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Örn: 150 m² Doğal Meşe Akustik Panel ve 80 m² Çam Lambiri için fiyat bilgisi almak istiyorum..."
                  style={{ width: '100%', padding: '0.9rem', border: '1.5px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', background: 'var(--card-bg)', color: 'var(--text-primary)', fontWeight: '600' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', padding: '1rem', fontSize: '1.05rem', fontWeight: '800', background: '#16A34A', color: '#FFFFFF', border: 'none', borderRadius: 'var(--radius-sm)', boxShadow: '0 6px 18px rgba(22, 163, 74, 0.35)' }}
              >
                <MessageCircle size={22} />
                <span>WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* =========================================================================
           HARİTADA KONUM (GOOGLE MAPS EMBED)
           ========================================================================= */}
        <div style={{ marginTop: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '1.8rem', fontWeight: '900', margin: 0, letterSpacing: '1px' }}>
                HARİTADA KONUMUMUZ
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://share.google/89iWdsJPahcpni2Al"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ background: '#EA4335', color: '#FFFFFF', borderColor: '#EA4335', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700' }}
              >
                <Navigation size={18} />
                <span>Google Maps Yol Tarifi</span>
              </a>

              <a
                href="https://yandex.com.tr/harita/?text=Camikebir+Mah.+5062.+Cd.+1.+Blok+No:+3,+Kocasinan+/+Kayseri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ background: '#FFCC00', color: '#000000', borderColor: '#FFCC00', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '800' }}
              >
                <Navigation size={18} color="#E60000" />
                <span>Yandex Haritalar Yol Tarifi</span>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)' }}>
            <iframe
              title="Yapar Orman Haritada Konum"
              src="https://maps.google.com/maps?q=Camikebir+Mah.+5062.+Cd.+1.+Blok+No:+3,+Kocasinan+/+Kayseri&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              background: 'rgba(11, 17, 32, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '0.85rem 1.25rem',
              borderRadius: '10px',
              border: '2px solid var(--brand-red)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
            }}>
              <MapPin size={32} color="#DC2626" fill="#DC2626" />
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '1rem', fontWeight: '900' }}>YAPAR ORMAN ÜRÜNLERİ</strong>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700' }}>Camikebir Mah. 5062. Cd. 1. Blok No: 3, Kocasinan / Kayseri</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
