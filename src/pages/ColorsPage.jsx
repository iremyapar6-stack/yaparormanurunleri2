import React, { useState } from 'react';
import { Download, MessageCircle, Copy, Check } from 'lucide-react';

export default function ColorsPage() {
  const [copiedCode, setCopiedCode] = useState(null);

  const superMatColors = [
    { code: '312 Sm Beyaz', hex: '#FFFFFF', isLight: true },
    { code: '746 Sm Krem', hex: '#E8E2D5', isLight: true },
    { code: '2277 Sm Açık Gri', hex: '#D8D9E3', isLight: true },
    { code: '747 Sm Yeni Gri', hex: '#BDBCB4', isLight: false },
    { code: '2272 Sm Pink', hex: '#C88A8E', isLight: false },
    { code: '2271 Sm Oliva', hex: '#4A5D50', isLight: false },
    { code: '748 Sm Kaya Gri', hex: '#7F8289', isLight: false },
    { code: '749 Sm Fırtına Gri', hex: '#5F6166', isLight: false },
    { code: '2270 Sm Antrasit', hex: '#33373B', isLight: false },
    { code: '300 Sm Siyah', hex: '#0D0D0D', isLight: false },
    { code: '2274 Sm Somon', hex: '#E89086', isLight: false },
    { code: '2275 Sm Soft Gri', hex: '#B2B6BA', isLight: false },
  ];

  const ahsapRenkler = [
    { code: '401 Ahşap Meşe', hex: '#A87A51', isLight: false },
    { code: '402 Koyu Ceviz', hex: '#3B2417', isLight: false },
    { code: '403 İskandinav Çam', hex: '#D6AA7A', isLight: false },
    { code: '404 Masif Ladin', hex: '#E3C099', isLight: true },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleWhatsAppColor = (code) => {
    const text = `Merhaba Yapar Orman Ürünleri, "${code}" renk kodu ve ürün kartelası hakkında fiyat ve numune bilgisi almak istiyorum.`;
    window.open(`https://wa.me/905000000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ background: '#FAF9F6', color: '#111827', minHeight: '100vh', paddingBottom: '5rem' }}>
      <section className="page-header" style={{ background: '#1E293B', color: '#FFFFFF' }}>
        <h1>Renkler & Renk Kodları Kartelası</h1>
        <p>Membran, Akustik Panel, MDF, Lambri, Arkalık ve Panel Ürün Renk Kataloğumuz</p>
      </section>

      <div style={{ maxWidth: '1320px', margin: '3rem auto 0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              STOKLU RENK KODLARI KARTELASI
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', marginTop: '0.2rem', fontSize: '2.2rem', fontWeight: '900' }}>
              Super Mat & Ahşap Doku Renkleri
            </h2>
          </div>
        </div>

        {/* Top Slatted Texture Banner above Color Swatches */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', border: '1px solid #CBD5E1', height: '260px' }}>
          <img src="/renk-paleti-banner.png" alt="Çıtalı Panel Doku Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
        </div>

        {/* Super Mat Renkler Section (Matching Reference Layout) */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ borderBottom: '3px solid #EAB308', paddingBottom: '0.6rem', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', color: '#0F172A' }}>
              Super Mat Renkler
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {superMatColors.map((color) => (
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

                {/* Color Name & Code Footer (Matching Image Style) */}
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

        {/* Ahşap & Doğal Dokular Section */}
        <section>
          <div style={{ borderBottom: '3px solid #EAB308', paddingBottom: '0.6rem', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', color: '#0F172A' }}>
              Ahşap & Doğal Dokulu Renkler
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {ahsapRenkler.map((color) => (
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
