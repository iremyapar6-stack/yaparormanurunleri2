import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { MessageCircle, Phone, ArrowLeft, CheckCircle2, Copy, Check, X, Sparkles } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { categories, products } = useProducts();
  const [copiedCode, setCopiedCode] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const phoneNumber = "+905336415837";
  const whatsappNumber = "905336415837";

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Find target category
  const categoryData = categories.find((c) => c.id === slug) || {
    id: slug,
    name: slug ? slug.toUpperCase() : 'Kategori',
    subName: 'Yapar Orman Ürün Grupları',
  };

  // Find main category product
  const mainProduct = products.find((p) => p.category === slug) || products[0];

  const akustikColors = [
    { code: 'Antrasit', hex: '#2E3338' },
    { code: 'Barok', hex: '#5C3D28' },
    { code: 'Kaya Gri', hex: '#787D82' },
    { code: 'Gri Meşe', hex: '#9E988D' },
    { code: 'Gold', hex: '#C5A059' },
    { code: 'Mikro Antrasit', hex: '#1F2428' },
    { code: 'Meşe Alabama', hex: '#B88A58' },
    { code: 'Vizyon Gri', hex: '#8A8580' },
    { code: 'Kum Gri', hex: '#BDB6AB' },
    { code: 'Teak', hex: '#82522C' },
  ];

  const suntaColors = [
    { code: 'Mat Beyaz', hex: '#F4F5F7' },
    { code: 'Parlak Beyaz', hex: '#FFFFFF' },
    { code: 'Koton Gri', hex: '#C5C7CB' },
    { code: 'Nil Ceviz', hex: '#6E472D' },
    { code: 'Hamilton', hex: '#A87948' },
  ];

  // Berceste Serisi kaldırıldı

  const handleWhatsAppInquiry = (varietyTitle) => {
    const text = `Merhaba Yapar Orman Ürünleri, ${categoryData.name} kategorinizdeki "${varietyTitle || categoryData.name}" hakkında bilgi ve fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="category-page-wrapper">
      {/* Category Hero Banner */}
      <section className="category-hero-banner">
        <img src={mainProduct.images[0]} alt={categoryData.name} className="cat-hero-bg" />
        <div className="cat-hero-overlay"></div>
        
        <div className="cat-hero-content">
          <button onClick={() => navigate('/')} className="cat-back-btn">
            <ArrowLeft size={18} />
            <span>Anasayfaya Dön</span>
          </button>

          <span className="cat-hero-badge">YAPAR ORMAN ÜRÜN VİTRİNİ</span>
          <h1 className="cat-hero-title">
            {slug === 'membran' ? 'Membran Kapaklar & Berceste Serisi' : categoryData.name}
          </h1>
          <p className="cat-hero-slogan">
            {slug === 'membran'
              ? '"Mutfak ve banyolarınızda zamansız zarafet: Kusursuz 3D vakum teknolojisi ve lake pürüzsüzlüğünde parmak izi tutmaz membran yüzeyler."'
              : '"Mekânlarınıza modern bir dokunuş yaparken dayanıklılıktan da ödün vermeyin. Kaliteli malzemelerden üretilen ve uzun ömürlü kullanım sunan panellerimiz, mekânlarınızın atmosferini anında değiştirir."'}
          </p>

          {/* Görsel Üzerindeki Kısa Bilgi Kartı */}
          {slug === 'sunta' ? (
            <div className="hero-quick-specs-options-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '860px', margin: '1.25rem auto 1.75rem auto' }}>
              {/* 1. Seçenek */}
              <div className="hero-quick-specs-floating" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
                  <span style={{ background: '#DC2626', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: '800', padding: '0.2rem 0.5rem', borderRadius: '4px', letterSpacing: '0.5px' }}>1. SEÇENEK</span>
                  <span style={{ color: '#EAB308', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.25rem' }}>YPR-SNT-101</span>
                </div>
                <div className="spec-item-chip">
                  <span className="spec-label">📏 BOY</span>
                  <strong className="spec-val">3.66 m (3660 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">📐 EN</span>
                  <strong className="spec-val">1.82 m (1820 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">🧱 KALINLIK</span>
                  <strong className="spec-val">18 mm</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">🏆 KALİTE</span>
                  <strong className="spec-val">E1 Standart</strong>
                </div>
              </div>

              {/* 2. Seçenek */}
              <div className="hero-quick-specs-floating" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
                  <span style={{ background: '#2563EB', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: '800', padding: '0.2rem 0.5rem', borderRadius: '4px', letterSpacing: '0.5px' }}>2. SEÇENEK</span>
                  <span style={{ color: '#EAB308', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.25rem' }}>YPR-SNT-102</span>
                </div>
                <div className="spec-item-chip">
                  <span className="spec-label">📏 BOY</span>
                  <strong className="spec-val">2.80 m (2800 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">📐 EN</span>
                  <strong className="spec-val">2.10 m (2100 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">🧱 KALINLIK</span>
                  <strong className="spec-val">18 mm</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">🏆 KALİTE</span>
                  <strong className="spec-val">E1 Standart</strong>
                </div>
              </div>
            </div>
          ) : slug === 'membran' ? (
            <div className="hero-quick-specs-floating">
              <div className="spec-item-chip">
                <span className="spec-label">✨ SERİ</span>
                <strong className="spec-val">Berceste Serisi</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">📐 MODELLER</span>
                <strong className="spec-val">B10 — B15</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">🛡️ YÜZEY</span>
                <strong className="spec-val">Parmak İzi Tutmaz</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">🏆 KAPLAMA</span>
                <strong className="spec-val">3D Vakum Pres</strong>
              </div>
            </div>
          ) : (
            <div className="hero-quick-specs-floating">
              <div className="spec-item-chip">
                <span className="spec-label">📏 BOY</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.boy || '2800 mm'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">📐 EN</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.en || '600 mm'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">🧱 KALINLIK</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.kalinlik || '18 mm'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">🏆 KALİTE</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.govde || '1. Sınıf Ahşap'}</strong>
              </div>
            </div>
          )}

          <div className="cat-hero-actions">
            <a href={`tel:${phoneNumber}`} className="btn-primary">
              <Phone size={18} />
              <span>Hemen Bizi Arayın</span>
            </a>
            <button onClick={() => handleWhatsAppInquiry()} className="btn-whatsapp">
              <MessageCircle size={18} />
              <span>WhatsApp Teklif Al</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Overview Card */}
      <section style={{ maxWidth: '1320px', margin: '2rem auto', padding: '0 1.5rem' }}>
        <div className="cat-overview-card">
          <div className="cat-overview-text">
            {slug === 'akustik' ? (
              <div>
                <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontWeight: '900', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  Sessizliğin Estetik Hali: Mekânlarınıza Akustik Dokunuş
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Gürültüyü geride bırakın, yaşam ve çalışma alanlarınızda kusursuz ses konforunu keşfedin. Akustik ahşap panellerimiz; yankıyı ve gürültüyü emen yüksek performanslı keçe tabanı, doğal ahşap dokusuyla buluşturarak iç mekânlara modern bir zarafet kazandırır.
                </p>

                <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Yüksek Ses Yalıtımı:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Yankıyı ve uğultuyu minimize ederek net, dinlendirici bir akustik ortam oluşturur.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Doğal ve Şık Tasarım:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ahşabın sıcaklığını çağdaş hatlarla birleştirir; ev, ofis ve stüdyolara estetik katar.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Kolay ve Hızlı Montaj:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Duvar ve tavanlara zahmetsizce uygulanabilir, mekânın havasını anında değiştirir.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Çevre Dostu ve Dayanıklı:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kaliteli keçe ve sürdürülebilir ahşap malzemelerle uzun ömürlü kullanım sunar.</span>
                  </div>
                </div>

                <p style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  "Yaşam alanlarınıza hem huzur hem de şıklık katmak için koleksiyonumuzu incelemeye başlayın."
                </p>
              </div>
            ) : slug === 'membran' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Sparkles size={20} color="var(--accent-gold)" />
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    ÖZEL KAPAK KOLEKSİYONU
                  </span>
                </div>
                <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', fontWeight: '900', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  Berceste Serisi Membran Kapak: Zamansız Şıklık & Kusursuz Yüzeyler
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Modern, country ve neo-klasik mutfak ve banyolar için özel olarak tasarlanan <strong>Berceste Serisi</strong>; yüksek yoğunluklu E1 kalite MDF üzerine 3D vakum pres teknolojisi ile kaplanan parmak izi tutmaz, ipeksi mat PVC membran yüzeylerden üretilmektedir. Eksiz kenar sarımı sayesinde suya, buhara ve neme karşı %100 sızdırmazlık sunar.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Eksiz 3D Vakum Sarım:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Kenar bandı olmadan tek parça kaplama ile neme ve suya tam dayanıklılık.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Parmak İzi Tutmaz Yüzey:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Soft Touch ipeksi mat doku ile kolay temizlenir, leke ve parmak izi bırakmaz.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>B10 - B15 Profil Çeşitleri:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Minimalist düz pahtan kademeli ve kasetli modellere zengin CNC profil seçenekleri.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Yüksek Yoğunluklu E1 MDF:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Frezeli desenlerde pürüzsüz derinlik ve uzun yıllar formunu koruyan gövde.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2>Bu Ürün Grubu Nedir?</h2>
                <p>{mainProduct.whatIsIt || mainProduct.fullDescription}</p>
              </div>
            )}

            {mainProduct.usageAreas && mainProduct.usageAreas.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: '800' }}>
                  Kullanım Alanları:
                </h3>
                <ul className="usage-chips-grid">
                  {mainProduct.usageAreas.map((area, idx) => (
                    <li key={idx} className="usage-chip">
                      <CheckCircle2 size={15} color="var(--brand-red)" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MEMBRAN YENİ İÇERİK ALANI */}
      {slug === 'membran' ? (
        <section style={{ maxWidth: '1320px', margin: '3rem auto 5rem auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
            <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
              MEMBRAN KAPAK KOLEKSİYONU
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.2rem',
              fontWeight: '900',
              color: 'var(--accent-gold)',
              margin: 0,
              letterSpacing: '-0.5px'
            }}>
              Mutfak Uygulamaları & Kapak Modelleri
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Yüksek kaliteli membran kapak modellerimiz ve özel mutfak tasarımları. Görsellere tıklayarak büyütebilir ve WhatsApp üzerinden hemen teklif alabilirsiniz.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {/* Görsel 1: Mutfak Tasarımı */}
            <div
              style={{
                background: 'var(--card-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-gold)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                onClick={() => setPreviewImage('/membran/new-mutfak-01.jpg')}
                style={{
                  position: 'relative',
                  height: '380px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: '#0F172A'
                }}
                className="gallery-card-hover"
              >
                <img
                  src="/membran/new-mutfak-01.jpg"
                  alt="Membran Mutfak Uygulaması"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.25rem'
                }}>
                  <div>
                    <span style={{ background: 'var(--brand-red)', color: '#FFF', fontSize: '0.75rem', fontWeight: '800', padding: '0.25rem 0.6rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.4rem' }}>
                      MEMBRAN KOLEKSİYONU
                    </span>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: '900', margin: 0 }}>
                      Mutfak Tasarımı ve Uygulaması
                    </h3>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF' }}>
                <div>
                  <h4 style={{ margin: 0, color: '#0F172A', fontSize: '1rem', fontWeight: '800' }}>Özel Tasarım Membran Mutfak</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#64748B', fontSize: '0.85rem' }}>İpeksi mat yüzey & neo-klasik kapak detayı</p>
                </div>
                <button
                  onClick={() => handleWhatsAppInquiry('Membran Mutfak Tasarımı')}
                  className="btn-whatsapp"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                >
                  <MessageCircle size={16} />
                  <span>Teklif Al</span>
                </button>
              </div>
            </div>

            {/* Görsel 2: Kapak Modeli */}
            <div
              style={{
                background: 'var(--card-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-gold)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                onClick={() => setPreviewImage('/membran/new-kapak-01.jpg')}
                style={{
                  position: 'relative',
                  height: '380px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #E2E8F0'
                }}
                className="gallery-card-hover"
              >
                <img
                  src="/membran/new-kapak-01.jpg"
                  alt="Membran Kapak Modeli"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  pointerEvents: 'none'
                }}>
                  <span style={{ background: '#0F172A', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '800', padding: '0.35rem 0.75rem', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                    Profil Modeli
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF' }}>
                <div>
                  <h4 style={{ margin: 0, color: '#0F172A', fontSize: '1rem', fontWeight: '800' }}>Kasetli Membran Kapak Modeli</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#64748B', fontSize: '0.85rem' }}>Eksiz kenar kaplama & E1 MDF kalitesi</p>
                </div>
                <button
                  onClick={() => handleWhatsAppInquiry('Membran Kapak Modeli')}
                  className="btn-whatsapp"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                >
                  <MessageCircle size={16} />
                  <span>Teklif Al</span>
                </button>
              </div>
            </div>

            {/* Görsel 3: Camlı Seri Kataloğu (C31, C32) */}
            <div
              style={{
                background: 'var(--card-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-gold)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                onClick={() => setPreviewImage('/membran/camli-seri-c31-c32.jpg')}
                style={{
                  position: 'relative',
                  height: '380px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #E2E8F0'
                }}
                className="gallery-card-hover"
              >
                <img
                  src="/membran/camli-seri-c31-c32.jpg"
                  alt="Camlı Seri Membran Kapaklar C31 C32"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  pointerEvents: 'none'
                }}>
                  <span style={{ background: '#0F172A', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '800', padding: '0.35rem 0.75rem', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                    Camlı Seri Kataloğu
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF' }}>
                <div>
                  <h4 style={{ margin: 0, color: '#0F172A', fontSize: '1rem', fontWeight: '800' }}>Camlı Seri (C31 - C32 Modelleri)</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#64748B', fontSize: '0.85rem' }}>C31 (Tek / 8 Göz), C32 (Tek / 8 Göz) Çıtalı Vitrin Kapakları</p>
                </div>
                <button
                  onClick={() => handleWhatsAppInquiry('Camlı Seri C31 C32 Kapak Modelleri')}
                  className="btn-whatsapp"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                >
                  <MessageCircle size={16} />
                  <span>Teklif Al</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* OTHER CATEGORIES: Color Swatches Grid */
        <section style={{ maxWidth: '1320px', margin: '3rem auto 5rem auto', padding: '0 1.5rem' }}>
          {/* Slatted Texture Banner / Sunta Banner above Color Palettes */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', border: '1px solid var(--border-gold)', height: '240px', background: slug === 'sunta' ? '#FFFFFF' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={slug === 'sunta' ? '/sunta-banner.png' : '/renk-paleti-banner.png'}
              alt={slug === 'sunta' ? 'Sunta Levha Görseli' : 'Çıtalı Panel Doku Banner'}
              style={{ width: '100%', height: '100%', objectFit: slug === 'sunta' ? 'contain' : 'cover', objectPosition: 'center center', padding: slug === 'sunta' ? '1rem' : '0' }}
            />
          </div>

          <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
            <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
              YAPAR ORMAN RENK KARTELASI
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.2rem',
              fontWeight: '900',
              color: 'var(--accent-gold)',
              margin: 0,
              letterSpacing: '-0.5px'
            }}>
              {slug === 'akustik' ? 'Akustik Panel Renk Kartelası' : slug === 'sunta' ? 'Stoklu Sunta & Suntalam Renk Kartelası' : 'Stoklu Renk Kartelası'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {(slug === 'sunta' ? suntaColors : akustikColors).map((color) => (
              <div
                key={color.code}
                onClick={() => handleWhatsAppInquiry(color.code)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  border: '1px solid var(--border-dark)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                className="color-swatch-box"
              >
                <div
                  style={{
                    height: '180px',
                    backgroundColor: color.hex,
                    borderBottom: '1px solid #E2E8F0',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    padding: '0.65rem',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(color.code);
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.88)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid #CBD5E1',
                      borderRadius: '4px',
                      padding: '0.35rem 0.55rem',
                      fontSize: '0.725rem',
                      fontWeight: '700',
                      color: '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      cursor: 'pointer',
                    }}
                  >
                    {copiedCode === color.code ? (
                      <>
                        <Check size={14} color="#16A34A" />
                        <span>Kopyalandı</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Kodu Kopyala</span>
                      </>
                    )}
                  </button>
                </div>

                <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#1E293B' }}>
                    {color.code}
                  </span>
                  <MessageCircle size={18} color="var(--brand-red)" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(5, 10, 20, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1200px',
              maxHeight: '90vh',
              background: '#0B132B',
              borderRadius: '16px',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Modal Header */}
            <div style={{
              width: '100%',
              padding: '1rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(15, 23, 42, 0.95)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.95rem' }}>
                  Berceste Serisi Yüksek Çözünürlüklü Katalog Görseli
                </span>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Box */}
            <div style={{
              width: '100%',
              padding: '1rem',
              maxHeight: 'calc(90vh - 140px)',
              overflow: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF'
            }}>
              <img
                src={previewImage}
                alt="Önizleme"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </div>

            {/* Modal Footer Actions */}
            <div style={{
              width: '100%',
              padding: '0.85rem 1.5rem',
              background: '#0F172A',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Yapar Orman Ürünleri • Mutfak & Banyo Membran Kapak Sistemleri
              </span>
              <button
                onClick={() => handleWhatsAppInquiry('Berceste Serisi Katalog Modeli')}
                className="btn-whatsapp"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                <MessageCircle size={16} />
                <span>Bu Model İçin Fiyat Al</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
