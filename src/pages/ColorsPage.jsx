import React, { useState } from 'react';
import { Download, MessageCircle, Copy, Check } from 'lucide-react';

export default function ColorsPage() {
  const [copiedCode, setCopiedCode] = useState(null);

  const akustikRenkler = [
    { code: 'Antrasit', hex: '#2E3338', isLight: false },
    { code: 'Barok', hex: '#5C3D28', isLight: false },
    { code: 'Kaya Gri', hex: '#787D82', isLight: false },
    { code: 'Gri Meşe', hex: '#9E988D', isLight: false },
    { code: 'Gold', hex: '#C5A059', isLight: false },
    { code: 'Mikro Antrasit', hex: '#1F2428', isLight: false },
    { code: 'Meşe Alabama', hex: '#B88A58', isLight: false },
    { code: 'Vizyon Gri', hex: '#8A8580', isLight: false },
    { code: 'Kum Gri', hex: '#BDB6AB', isLight: true },
    { code: 'Teak', hex: '#82522C', isLight: false },
  ];

  const suntaRenkler = [
    { code: 'Mat Beyaz', hex: '#F4F5F7', isLight: true },
    { code: 'Parlak Beyaz', hex: '#FFFFFF', isLight: true },
    { code: 'Koton Gri', hex: '#C5C7CB', isLight: true },
    { code: 'Nil Ceviz', hex: '#6E472D', isLight: false },
    { code: 'Hamilton', hex: '#A87948', isLight: false },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleWhatsAppColor = (code) => {
    const text = `Merhaba Yapar Orman Ürünleri, "${code}" renk kodu ve ürün kartelası hakkında fiyat ve numune bilgisi almak istiyorum.`;
    window.open(`https://wa.me/905336415837?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ background: '#FAF9F6', color: '#111827', minHeight: '100vh', paddingBottom: '5rem' }}>
      <section className="page-header" style={{ background: '#1E293B', color: '#FFFFFF' }}>
        <h1>Renkler & Renk Kodları Kartelası</h1>
        <p>Akustik Panel, Sunta, MDF, Lambri ve Ahşap Yapı Ürünleri Renk Kataloğumuz</p>
      </section>

      <div style={{ maxWidth: '1320px', margin: '3rem auto 0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              STOKLU RENK KODLARI KARTELASI
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', marginTop: '0.2rem', fontSize: '2.2rem', fontWeight: '900' }}>
              Akustik Panel & Ahşap Doku Renkleri
            </h2>
          </div>
        </div>

        {/* Top Slatted Texture Banner above Color Swatches */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', border: '1px solid #CBD5E1', height: '260px' }}>
          <img src="/renk-paleti-banner.png" alt="Çıtalı Panel Doku Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
        </div>

        {/* Akustik Panel Renkleri Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ borderBottom: '3px solid #EAB308', paddingBottom: '0.6rem', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', color: '#0F172A' }}>
              Akustik Panel Renk Kartelası
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {akustikRenkler.map((color) => (
              <div
                key={color.code}
                onClick={() => handleWhatsAppColor(color.code)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                className="color-swatch-box"
              >
                {/* Square Color Swatch Header */}
                <div
                  style={{
                    height: '180px',
                    backgroundColor: color.hex,
                    borderBottom: '1px solid #E2E8F0',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justify: 'flex-end',
                    padding: '0.75rem',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(color.code);
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid #CBD5E1',
                      borderRadius: '4px',
                      padding: '0.35rem 0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
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

                {/* Color Name & Code Footer */}
                <div style={{ padding: '0.85rem 1rem', background: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '800', fontSize: '1rem', color: '#1E293B' }}>
                    {color.code}
                  </span>
                  <MessageCircle size={18} color="var(--brand-red)" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sunta & Suntalam Renk Kartelası Section */}
        <section style={{ marginTop: '4rem' }}>
          <div style={{ borderBottom: '3px solid #DC2626', paddingBottom: '0.6rem', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', color: '#0F172A' }}>
              Sunta & Suntalam Renk Kartelası
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {suntaRenkler.map((color) => (
              <div
                key={color.code}
                onClick={() => handleWhatsAppColor(color.code)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                className="color-swatch-box"
              >
                <div
                  style={{
                    height: '200px',
                    backgroundColor: color.hex,
                    borderBottom: '1px solid #E2E8F0',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justify: 'flex-end',
                    padding: '0.75rem',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(color.code);
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid #CBD5E1',
                      borderRadius: '4px',
                      padding: '0.35rem 0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
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

                <div style={{ padding: '0.85rem 1rem', background: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '800', fontSize: '1rem', color: '#1E293B' }}>
                    {color.code}
                  </span>
                  <MessageCircle size={18} color="var(--brand-red)" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
