import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import HeroSlider from '../components/HeroSlider';
import { MessageCircle, Phone, MapPin, Search as SearchIcon } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const {
    products,
    categories,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
  } = useProducts();

  const phoneNumber = "+905336415837";
  const whatsappNumber = "905336415837";

  const handleCardClick = (categorySlug) => {
    navigate(`/kategori/${categorySlug}`);
  };

  const handleTabClick = (catId) => {
    setSelectedCategory(catId);
    if (catId !== 'all') {
      navigate(`/kategori/${catId}`);
    }
  };

  return (
    <div>
      {/* Luxury Hero Slider */}
      <HeroSlider onSelectCategory={(catId) => navigate(`/kategori/${catId}`)} />

      {/* =========================================================================
         FİLTRELEME VE KATEGORİ TABLARI
         ========================================================================= */}
      <section id="katalog" className="filter-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="section-subtitle-gold">
            YAPAR ORMAN ÜRÜN GRUPLARI
          </span>
          <h2 className="section-title-large">
            Ürün Koleksiyonumuz
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '780px', margin: '0.8rem auto 0 auto', fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic' }}>
            "Mekânlarınıza modern bir dokunuş yaparken dayanıklılıktan da ödün vermeyin. Kaliteli malzemelerden üretilen ve uzun ömürlü kullanım sunan panellerimiz, mekânlarınızın atmosferini anında değiştirir."
          </p>
        </div>

        <div className="filter-box">
          <div className="search-input-wrapper">
            <SearchIcon className="search-icon-inside" size={20} />
            <input
              type="text"
              placeholder="Membran, Akustik, Sunta, MDF, Lambri, Arkalık veya Panel arayın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  className={`tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabClick(cat.id)}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         DİKİNE LÜKS GALERİ KARTLARI GRID'İ (TIRKLANINCA KATEGORİ LANSMAN SAYFASI AÇILIR)
         ========================================================================= */}
      <main className="catalog-container">
        <div className="catalog-header">
          <h2 className="catalog-title">
            {selectedCategory === 'all' ? 'Tüm Ürün Grupları' : `${categories.find((c) => c.id === selectedCategory)?.name} Kategorisi`}
          </h2>
        </div>

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
              <div className="portrait-card-tag-box">
                <span>{product.title}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* =========================================================================
         MİSYON VE VİZYON KISMI
         ========================================================================= */}
      <section style={{ maxWidth: '1320px', margin: '3rem auto 4rem auto', padding: '0 1.5rem' }}>
        <div className="mission-vision-home-container">
          <div className="mv-card">
            <div className="mv-icon-title">
              <h3>MİSYONUMUZ</h3>
            </div>
            <p>
              Yapar Orman Ürünleri olarak misyonumuz; ahşap ve yapı malzemeleri sektöründe yüksek kalite standartlarına sahip Membran, Akustik, Sunta, MDF, Lambri, Arkalık ve Panel ürünlerini en doğru fiyatlandırma, dürüst ticaret anlayışı ve kesintisiz stok desteği ile müşterilerimize sunmaktır.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon-title">
              <h3>VİZYONUMUZ</h3>
            </div>
            <p>
              Vizyonumuz; bölgesel liderliğimizi ulusal düzeye taşıyarak iç mimari ahşap yüzeyler, akustik duvar panelleri ve PVC membran grubunda yenilikçi tasarımların ve güvenilir tedariğin ilk adresi olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
         İLETİŞİM HATTI VE HARİTADA KONUM BÖLÜMÜ
         ========================================================================= */}
      <section className="home-contact-map-section">
        <div className="home-contact-map-inner">
          <div className="home-contact-info-col">
            <span className="section-subtitle-gold">KESİNTİSİZ İLETİŞİM HATLARI</span>
            <h2>Bizimle İletişime Geçin</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
              İç mimari projeleriniz, metraj bazlı fiyat teklifleriniz, numune talepleriniz ve lojistik sevkiyat detayları için doğrudan telefon veya WhatsApp hattımızdan bize ulaşabilirsiniz.
            </p>

            <div className="contact-buttons-box">
              <a href={`tel:${phoneNumber}`} className="home-contact-btn phone-style">
                <Phone size={22} />
                <div>
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
                <MessageCircle size={22} />
                <div>
                  <small>WhatsApp Canlı Destek & Teklif</small>
                  <strong>+90 (533) 641 58 37</strong>
                </div>
              </a>
            </div>

            <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin color="var(--accent-gold)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Fabrika & Ana Depo Adresi:
                  </strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
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
              <div className="map-overlay-badge" style={{ border: '1.5px solid var(--brand-red)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
