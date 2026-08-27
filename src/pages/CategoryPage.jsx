import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { MessageCircle, Phone, ArrowLeft, CheckCircle2, Copy, Check } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { categories, products } = useProducts();
  const [copiedCode, setCopiedCode] = useState(null);

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

  const superMatColors = [
    { code: '312 Sm Beyaz', hex: '#FFFFFF' },
    { code: '746 Sm Krem', hex: '#E8E2D5' },
    { code: '2277 Sm Açık Gri', hex: '#D8D9E3' },
    { code: '747 Sm Yeni Gri', hex: '#BDBCB4' },
    { code: '2272 Sm Pink', hex: '#C88A8E' },
    { code: '2271 Sm Oliva', hex: '#4A5D50' },
    { code: '748 Sm Kaya Gri', hex: '#7F8289' },
    { code: '749 Sm Fırtına Gri', hex: '#5F6166' },
  ];

  // Specific detailed varieties for each category
  const categoryVarieties = {
    membran: [
      {
        title: "Soft Touch Mat Antrasit Membran",
        code: "YPR-MBR-401",
        surface: "Parmak İzi Tutmaz Soft Touch Mat",
        boy: "100 m Rulo",
        en: "1400 mm",
        kalinlik: "0.35 mm",
        image: "/membran-kaplama.jpg",
        desc: "Lüks mutfak ve banyo dolap kapakları için ipeksi mat dokunuşlu 3D vakum membran folyo."
      },
      {
        title: "3D Kabartmalı Meşe Ahşap Membran",
        code: "YPR-MBR-402",
        surface: "3D Ahşap Doku Kabartmalı",
        boy: "100 m Rulo",
        en: "1400 mm",
        kalinlik: "0.40 mm",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
        desc: "Doğal meşe damar dokusunu vakum esnekliği ile buluşturan ahşap desenli folyo."
      },
      {
        title: "High Gloss Parlak Beyaz Membran",
        code: "YPR-MBR-403",
        surface: "Yüksek Parlaklıkta Akrilik Gloss",
        boy: "100 m Rulo",
        en: "1400 mm",
        kalinlik: "0.40 mm",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        desc: "Ayna parlaklığında çizilmeye dirençli mutfak dolabı membran kaplama folyosu."
      }
    ],
    akustik: [
      {
        title: "Doğal Meşe Çıtalı Akustik Duvar Paneli",
        code: "YPR-AKU-201",
        surface: "Doğal Meşe Ahşap Kaplama",
        boy: "2800 mm",
        en: "600 mm",
        kalinlik: "20 mm",
        image: "/akustik-duvar-paneli.png",
        desc: "Siyah keçe alt zemin üzerine doğal meşe çıtalar ile tasarlanmış üstün ses yalıtım paneli."
      },
      {
        title: "Derin Koyu Ceviz Akustik Panel",
        code: "YPR-AKU-202",
        surface: "Doğal Ceviz Vernikli Yüzey",
        boy: "2800 mm",
        en: "600 mm",
        kalinlik: "20 mm",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        desc: "Prestijli ofis ve konut mekanları için ses yankısını önleyen koyu ceviz çıtalı panel."
      }
    ],
    sunta: [
      {
        title: "E1 Kalite Ham Sunta (Yonga Levha)",
        code: "YPR-SNT-101",
        surface: "Zımparalanmış Düz Ham Yüzey",
        boy: "3660 mm",
        en: "1830 mm",
        kalinlik: "18 mm",
        image: "/sunta-levha.png",
        desc: "Vida tutma mukavemeti yüksek, mobilya gövdesi imalatında kullanılan kaliteli ham yonga levha."
      },
      {
        title: "Çift Yüz Melamin Kaplı Sunta-Lam",
        code: "YPR-SNT-102",
        surface: "Melamin Kaplı Dekoratif Doku",
        boy: "3660 mm",
        en: "1830 mm",
        kalinlik: "18 mm",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1200&q=80",
        desc: "Çizilmeye dayanıklı mobilya ve raf gövdeleri için dekoratif melamin kaplı yonga levha."
      }
    ],
    mdf: [
      {
        title: "Birinci Sınıf Ham MDF Levha",
        code: "YPR-MDF-301",
        surface: "Pürüzsüz Zımparalanmış Ham Lif",
        boy: "3660 mm",
        en: "1830 mm",
        kalinlik: "18 mm",
        image: "/mdf-levha.png",
        desc: "CNC freze oymacılık ve lake boya kapak imalatına uygun homojen yoğunluklu MDF."
      },
      {
        title: "Çift Yüz Melamin Kaplı MDF-Lam",
        code: "YPR-MDF-302",
        surface: "Dekoratif Melamin Kağıt Kaplama",
        boy: "3660 mm",
        en: "1830 mm",
        kalinlik: "18 mm",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        desc: "Dolap ve mobilya imalatında direkt kullanılan lüks yüzeyli MDF-Lam levha."
      }
    ],
    lambri: [
      {
        title: "Lüks LED Işıklı Ahşap Lambri & Profil",
        code: "YPR-LMB-101",
        surface: "Masif Ahşap Pürüzsüz Doku",
        boy: "3000 mm",
        en: "95 mm",
        kalinlik: "15 mm",
        image: "/lambri-kaplama.png",
        desc: "İç mekan duvar ve tavanlarında estetik geçmeli masif ahşap çıta ve profil kaplama."
      },
      {
        title: "İthal İskandinav Ladin Tavan Lambirisi",
        code: "YPR-LMB-102",
        surface: "Doğal Açık Renk Ekstra Ladin",
        boy: "4000 mm",
        en: "120 mm",
        kalinlik: "18 mm",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
        desc: "Sık lifli kuzey ladin kerestesinden imal edilen geniş ferah tavan lambirisi."
      }
    ],
    arkalik: [
      {
        title: "3 mm Renkli & Ahşap Desenli MDF Arkalık",
        code: "YPR-ARK-01",
        surface: "Tek Yüz Laklı Koruyucu Boya",
        boy: "2800 mm",
        en: "2100 mm",
        kalinlik: "3 mm",
        image: "/arkalik-levha.jpg",
        desc: "Gardırop, dolap ve çekmece tabanlarında rijit kapatıcılık sağlayan laklı ince MDF."
      }
    ],
    panel: [
      {
        title: "Lüks Mimari Ahşap & Mermer Desen Panel",
        code: "YPR-PNL-01",
        surface: "Dekoratif Ahşap & Mermer Doku",
        boy: "2800 mm",
        en: "600 mm",
        kalinlik: "18 mm",
        image: "/panel-levha.png",
        desc: "TV arkası ve salon vurgu duvarları için lüks dikey sergileme mimari panel sistemi."
      }
    ]
  };

  const currentVarieties = categoryVarieties[slug] || [
    {
      title: mainProduct.title,
      code: mainProduct.productCode,
      surface: mainProduct.quickSpecs?.yuzey || '1. Sınıf Ahşap Yüzey',
      boy: mainProduct.quickSpecs?.boy || '2800 mm',
      en: mainProduct.quickSpecs?.en || '600 mm',
      kalinlik: mainProduct.quickSpecs?.kalinlik || '18 mm',
      image: mainProduct.images[0],
      desc: mainProduct.shortDescription
    }
  ];

  const handleWhatsAppInquiry = (varietyTitle) => {
    const text = `Merhaba Yapar Orman Ürünleri, ${categoryData.name} kategorinizdeki "${varietyTitle || categoryData.name}" renk/model kodu hakkında bilgi almak istiyorum.`;
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
          <h1 className="cat-hero-title">{categoryData.name}</h1>
          <p className="cat-hero-slogan">
            "Mekânlarınıza modern bir dokunuş yaparken dayanıklılıktan da ödün vermeyin. Kaliteli malzemelerden üretilen ve uzun ömürlü kullanım sunan panellerimiz, mekânlarınızın atmosferini anında değiştirir."
          </p>

          {/* Görsel Üzerindeki Kısa Bilgi Kartı (Boy, En, Kalınlık, Kalite) */}
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



      {/* Color Swatches Grid (Super Mat & Kartela Colors) */}
      <section style={{ maxWidth: '1320px', margin: '3rem auto 5rem auto', padding: '0 1.5rem' }}>
        {/* Slatted Texture Banner above Color Palettes */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', border: '1px solid var(--border-gold)', height: '240px' }}>
          <img src="/renk-paleti-banner.png" alt="Çıtalı Panel Doku Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
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
            Stoklu Renk & Super Mat Renk Kodları
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {superMatColors.map((color) => (
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
                  justify: 'flex-end',
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
    </div>
  );
}
