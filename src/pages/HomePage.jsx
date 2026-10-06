import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import HeroSlider from '../components/HeroSlider';
import { Phone, MapPin, ShieldCheck, Truck, Award, Sparkles, Layers, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function HomePage() {
  const navigate = useNavigate();
  const {
    products,
    categories,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
  } = useProducts();

  const phoneNumber = "+905336415837";
  const whatsappNumber = "905336415837";

  const handleCardClick = (categorySlug) => {
    navigate(`/kategori/${categorySlug}`);
  };

  return (
    <div className="home-page-wrapper">
      {/* Luxury Hero Slider */}
      <HeroSlider onSelectCategory={(catId) => navigate(`/kategori/${catId}`)} />

      {/* =========================================================================
         NEDEN YAPAR ORMAN? (LÜKS SİMGE VE ÖZELLİKLER BÖLÜMÜ)
         ========================================================================= */}
      <section style={{ maxWidth: '1320px', margin: '3.5rem auto 2rem auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <Award size={32} color="#b45309" />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem', fontWeight: '900', color: 'var(--text-primary)' }}>%100 Masif & E1 Standart</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Uluslararası Kalite Belgesi</span>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <Layers size={32} color="#b45309" />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem', fontWeight: '900', color: 'var(--text-primary)' }}>Yoğun Akustik Keçe</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Yüksek Ses Yalıtım Değeri</span>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <Truck size={32} color="#b45309" />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem', fontWeight: '900', color: 'var(--text-primary)' }}>Stoktan Hızlı Sevkiyat</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Kayseri Depo Teslimat</span>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ background: 'rgba(180, 83, 9, 0.12)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <Sparkles size={32} color="#b45309" />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem', fontWeight: '900', color: 'var(--text-primary)' }}>50+ Renk & Kaplama</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Geniş Ürün Kartelası</span>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
         DİKİNE LÜKS GALERİ KARTLARI GRID'İ
         ========================================================================= */}
      <main className="catalog-container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="gallery-cards-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="portrait-gallery-card"
              onClick={() => handleCardClick(product.category)}
            >
              <img src={product.images[0]} alt={product.title} className="portrait-card-bg" />
              <div className="portrait-card-overlay"></div>

              {/* Sağ Alt Koyu Transparan Etiket Kutusu */}
              <div className="portrait-card-tag-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{product.title}</span>
                <ArrowRight size={18} color="#F59E0B" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* =========================================================================
         MİSYON VE VİZYON KISMI
         ========================================================================= */}
      <section style={{ maxWidth: '1320px', margin: '4rem auto', padding: '0 1.5rem' }}>
        <div className="mission-vision-home-container">
          <div className="mv-card" style={{ background: 'var(--bg-surface)', border: '1.5px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-dark)' }}>
            <div className="mv-icon-title" style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#b45309', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px', display: 'block', marginBottom: '0.2rem' }}>KURUMSAL DEĞERLER</span>
              <h3 className="card-title" style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-primary)' }}>MİSYONUMUZ</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.025rem' }}>
              Yapar Orman Ürünleri olarak misyonumuz; ahşap ve yapı malzemeleri sektöründe yüksek kalite standartlarına sahip Membran, Akustik, Sunta, MDF, Lambri ve Panel ürünlerini en doğru fiyatlandırma, dürüst ticaret anlayışı ve kesintisiz stok desteği ile müşterilerimize sunmaktır.
            </p>
          </div>

          <div className="mv-card" style={{ background: 'var(--bg-surface)', border: '1.5px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-dark)' }}>
            <div className="mv-icon-title" style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#b45309', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px', display: 'block', marginBottom: '0.2rem' }}>GELECEK HEDEFİ</span>
              <h3 className="card-title" style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-primary)' }}>VİZYONUMUZ</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.025rem' }}>
              Vizyonumuz; Kayseri ve İç Anadolu Bölgesi'ndeki köklü liderliğimizi ulusal ve uluslararası platformlara taşıyarak iç mimari ahşap yüzeyler, akustik duvar panelleri ve membran grubunda yenilikçi tasarımların ve güvenilir tedariğin ilk adresi olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
         İLETİŞİM HATTI VE HARİTADA KONUM BÖLÜMÜ
         ========================================================================= */}
      <section className="home-contact-map-section" style={{ maxWidth: '1320px', margin: '0 auto 4rem auto', padding: '0 1.5rem' }}>
        <div className="home-contact-map-inner">
          <div className="home-contact-info-col">
            <span className="section-badge section-subtitle-gold" style={{ display: 'block', color: '#b45309', fontWeight: '800', letterSpacing: '1px', marginBottom: '0.4rem' }}>KESİNTİSİZ İLETİŞİM HATLARI</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '1rem' }}>Bizimle İletişime Geçin</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1rem' }}>
              Metraj bazlı fiyat teklifleri, numune gönderimi ve lojistik detaylar için bize telefon ya da WhatsApp hattımızdan anında ulaşın.
            </p>

            <div className="contact-buttons-box">
              <a href={`tel:${phoneNumber}`} className="home-contact-btn phone-style">
                <div className="contact-icon-box phone-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-btn-text">
                  <small>Telefon İletişim Hattı</small>
                  <strong>+90 (533) 641 58 37</strong>
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba Yapar Orman Ürünleri, ürünleriniz hakkında WhatsApp üzerinden bilgi ve teklif almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-btn whatsapp-style"
              >
                <div className="contact-icon-box whatsapp-icon">
                  <WhatsAppIcon size={26} color="#ffffff" />
                </div>
                <div className="contact-btn-text">
                  <small>WhatsApp İletişim Hattı</small>
                  <strong>+90 (533) 641 58 37</strong>
                </div>
              </a>
            </div>

            <div className="address-card" style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div className="icon-box">
                  <MapPin size={24} color="#b45309" />
                </div>
                <div>
                  <strong className="card-subtitle" style={{ display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Fabrika & Ana Depo Adresi:
                  </strong>
                  <span className="card-text" style={{ fontSize: '0.925rem' }}>
                    Camikebir Mah. 5062. Cd. 1. Blok No: 3, Kocasinan / Kayseri
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Location Map */}
          <div className="home-map-col">
            <div className="map-frame-box">
              <iframe
                title="Yapar Orman Ürünleri Harita Konumu"
                src="https://maps.google.com/maps?q=Camikebir+Mah.+5062.+Cd.+1.+Blok+No:+3,+Kocasinan+/+Kayseri&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-overlay-badge" style={{ border: '1.5px solid #b45309', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={22} color="#DC2626" fill="#DC2626" />
                <span style={{ fontWeight: '800', color: '#FFFFFF' }}>Camikebir Mah. 5062. Cd. No: 3, Kocasinan / Kayseri</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
