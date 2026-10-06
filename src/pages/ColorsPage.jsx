import React, { useState, useMemo } from 'react';
import { Download, MessageCircle, Copy, Check, Search, Palette, Sparkles, Filter } from 'lucide-react';

const colorsData = [
  // Akustik Panel Çıta Renkleri
  { id: 1, name: 'Doğal Meşe', category: 'akustik', code: 'YPR-AKT-101', hex: '#B88A58', gradient: 'linear-gradient(135deg, #c69965 0%, #a37645 100%)', texture: 'Ahşap Doku', finish: 'Doğal Kaplama', isLight: false },
  { id: 2, name: 'Doğal Ceviz', category: 'akustik', code: 'YPR-AKT-102', hex: '#5C3D28', gradient: 'linear-gradient(135deg, #6e4931 0%, #4a2e1d 100%)', texture: 'Ahşap Doku', finish: 'Mat Vernik', isLight: false },
  { id: 3, name: 'Antrasit Siyah', category: 'akustik', code: 'YPR-AKT-103', hex: '#2E3338', gradient: 'linear-gradient(135deg, #3a4147 0%, #1f2326 100%)', texture: 'Mat Antrasit', finish: 'İpek Mat', isLight: false },
  { id: 4, name: 'Barok Ceviz', category: 'akustik', code: 'YPR-AKT-104', hex: '#4A2E1B', gradient: 'linear-gradient(135deg, #5c3b24 0%, #362011 100%)', texture: 'Koyu Ahşap', finish: 'Derin Dokulu', isLight: false },
  { id: 5, name: 'Kaya Gri', category: 'akustik', code: 'YPR-AKT-105', hex: '#787D82', gradient: 'linear-gradient(135deg, #888d92 0%, #64696e 100%)', texture: 'Taş & Beton Doku', finish: 'Mat', isLight: false },
  { id: 6, name: 'Gri Meşe', category: 'akustik', code: 'YPR-AKT-106', hex: '#9E988D', gradient: 'linear-gradient(135deg, #aba59a 0%, #8c867b 100%)', texture: 'Açık Ahşap Doku', finish: 'Saten Mat', isLight: false },
  { id: 7, name: 'Gold Pirinç', category: 'akustik', code: 'YPR-AKT-107', hex: '#C5A059', gradient: 'linear-gradient(135deg, #d4af66 0%, #ab8847 100%)', texture: 'Metalik Doku', finish: 'Işıltılı Gold', isLight: false },
  { id: 8, name: 'Mikro Antrasit', category: 'akustik', code: 'YPR-AKT-108', hex: '#1F2428', gradient: 'linear-gradient(135deg, #2b3036 0%, #13171a 100%)', texture: 'Derin Siyah', finish: 'Ultra Mat', isLight: false },
  { id: 9, name: 'Meşe Alabama', category: 'akustik', code: 'YPR-AKT-109', hex: '#A67C4E', gradient: 'linear-gradient(135deg, #b88d5e 0%, #91683d 100%)', texture: 'Sıcak Ahşap', finish: 'Doğal Yağlı', isLight: false },
  { id: 10, name: 'Teak Ağacı', category: 'akustik', code: 'YPR-AKT-110', hex: '#82522C', gradient: 'linear-gradient(135deg, #945f36 0%, #6e4320 100%)', texture: 'Tropik Ahşap', finish: 'Mat', isLight: false },

  // Membran Kapak Renkleri
  { id: 11, name: 'Mat İpek Beyaz', category: 'membran', code: 'YPR-MBR-201', hex: '#F9FAFB', gradient: 'linear-gradient(135deg, #ffffff 0%, #eef1f6 100%)', texture: 'Düz Yüzey', finish: 'İpek Mat PVC', isLight: true },
  { id: 12, name: 'Mat Siyah', category: 'membran', code: 'YPR-MBR-202', hex: '#111827', gradient: 'linear-gradient(135deg, #1f2937 0%, #030712 100%)', texture: 'Parmak İzi Tutmaz', finish: 'Soft Touch', isLight: false },
  { id: 13, name: 'Kaşmir Bej', category: 'membran', code: 'YPR-MBR-203', hex: '#E5DFD3', gradient: 'linear-gradient(135deg, #f0eae0 0%, #d4ccbe 100%)', texture: 'Sıcak Bej Doku', finish: 'Saten Mat', isLight: true },
  { id: 14, name: 'Vizon Gri', category: 'membran', code: 'YPR-MBR-204', hex: '#8A8580', gradient: 'linear-gradient(135deg, #99948e 0%, #78736e 100%)', texture: 'Nötr Doku', finish: 'Mat', isLight: false },
  { id: 15, name: 'Antik Ceviz', category: 'membran', code: 'YPR-MBR-205', hex: '#543825', gradient: 'linear-gradient(135deg, #664630 0%, #402818 100%)', texture: '3D Ahşap Kabartma', finish: 'Vakum Membran', isLight: false },

  // Ahşap & MDF Dokular (Sadece Beyaz)
  { id: 16, name: 'Beyaz (Mat / Parlak)', category: 'mdf', code: 'YPR-MDF-101', hex: '#FFFFFF', gradient: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)', texture: 'Pürüzsüz Yüzey', finish: 'Mat / Parlak E1 MDF', isLight: true }
];

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState(null);

  const filteredColors = useMemo(() => {
    return colorsData.filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.texture.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchTerm]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleWhatsAppColor = (item) => {
    const text = `Merhaba Yapar Orman Ürünleri, "${item.name}" (${item.code}) renk kodu ve ürün numunesi hakkında bilgi ve fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/905336415837?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ background: 'var(--bg-page)', color: 'var(--text-primary)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Luxury Header Banner */}
      <section className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span style={{ color: '#F59E0B', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Sparkles size={18} color="#F59E0B" />
            STOKLU RENK KODLARI KARTELASI
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', fontFamily: 'var(--font-heading)', margin: '0.2rem 0 0.8rem 0' }}>
            Renk & Dekor Koleksiyonu
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.7' }}>
            Akustik panel çıtaları, PVC membran kapaklar, ham & lam MDF levhalar için özenle küratörlüğü yapılmış zengin renk kartelamız.
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1320px', margin: '3rem auto 0 auto', padding: '0 1.5rem' }}>
        {/* Banner Graphic Showcase */}
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3.5rem', boxShadow: 'var(--shadow-dark)', border: '1.5px solid var(--border-gold)', position: 'relative', height: '280px' }}>
          <img
            src={activeTab === 'mdf' ? '/mdf-banner.jpg' : '/renk-paleti-banner.png'}
            alt="Doku Banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11, 17, 32, 0.2) 0%, rgba(11, 17, 32, 0.85) 100%)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
            <div>
              <span style={{ background: '#b45309', color: '#FFFFFF', padding: '0.35rem 0.85rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>
                ZENGİN AHŞAP DOKULARI
              </span>
              <h2 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '900', marginTop: '0.5rem' }}>
                Mekânlarınıza Doğal ve Modern Renk İmzası
              </h2>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem', background: 'var(--bg-surface)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)' }}>
          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'Tüm Renkler' },
              { id: 'akustik', label: 'Akustik Panel Çıtaları' },
              { id: 'membran', label: 'Membran Yüzeyler' },
              { id: 'mdf', label: 'Ahşap & MDF Dokular' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '800',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeTab === tab.id ? '1.5px solid #b45309' : '1px solid var(--border-dark)',
                  background: activeTab === tab.id ? '#b45309' : 'var(--card-bg)',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-primary)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Renk adı veya kod yazın..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem 1rem 0.7rem 2.6rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-dark)',
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: '600',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Color Swatches Grid */}
        {filteredColors.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-dark)' }}>
            <Palette size={48} color="#b45309" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)' }}>Aramanıza Uygun Renk Bulunamadı</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Lütfen arama kelimenizi veya filtreyi değiştirip tekrar deneyin.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
            {filteredColors.map((color) => (
              <div
                key={color.id}
                onClick={() => handleWhatsAppColor(color)}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-dark)',
                  border: '1.5px solid var(--border-dark)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                className="color-swatch-box"
              >
                {/* Visual Texture Swatch Box */}
                <div
                  style={{
                    height: '210px',
                    background: color.gradient,
                    position: 'relative',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifySpace: 'space-between',
                    borderBottom: '1px solid var(--border-dark)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      background: color.isLight ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                      color: color.isLight ? '#FFFFFF' : '#0F172A',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      letterSpacing: '0.5px'
                    }}>
                      {color.code}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(color.code);
                      }}
                      style={{
                        background: 'rgba(11, 17, 32, 0.85)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(245, 158, 11, 0.5)',
                        borderRadius: '6px',
                        padding: '0.35rem 0.7rem',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        cursor: 'pointer',
                      }}
                    >
                      {copiedCode === color.code ? (
                        <>
                          <Check size={14} color="#22C55E" />
                          <span style={{ color: '#22C55E' }}>Kopyalandı</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} color="#F59E0B" />
                          <span>Kodu Kopyala</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div style={{ background: 'rgba(0, 0, 0, 0.45)', backdropFilter: 'blur(4px)', padding: '0.4rem 0.75rem', borderRadius: '4px', display: 'inline-block', width: 'fit-content' }}>
                    <span style={{ color: '#FFFFFF', fontSize: '0.775rem', fontWeight: '700' }}>
                      {color.texture} • {color.finish}
                    </span>
                  </div>
                </div>

                {/* Color Swatch Footer Info */}
                <div style={{ padding: '1.15rem 1.25rem', background: 'var(--bg-surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontWeight: '900', fontSize: '1.1rem', color: 'var(--text-primary)', display: 'block' }}>
                      {color.name}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      {color.code}
                    </span>
                  </div>

                  <div style={{ background: 'rgba(37, 211, 102, 0.12)', padding: '0.6rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={20} color="#25D366" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
