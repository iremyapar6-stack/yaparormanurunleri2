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
  const [activeMembranSeries, setActiveMembranSeries] = useState(null);

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
    subName: 'Yapar Orman Srün Grupları',
  };

  // Find main category product
  const mainProduct = products.find((p) => p.category === slug) || products[0];

  const akustikColors = [
    { code: 'Antrasit', hex: '#2E3338' },
    { code: 'Barok', hex: '#5C3D28' },
    { code: 'Kaya Gri', hex: '#787D82' },
    { code: 'Gri Mexe', hex: '#9E988D' },
    { code: 'Gold', hex: '#C5A059' },
    { code: 'Mikro Antrasit', hex: '#1F2428' },
    { code: 'Mexe Alabama', hex: '#B88A58' },
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

  const mdfColors = [
    { code: 'Beyaz (Mat / Parlak)', hex: '#FFFFFF' },
  ];

  const [selectedPanelGroup, setSelectedPanelGroup] = useState('all');

  const arkalikColors = [
    { code: 'Tek Yüz İpek Beyaz (Laklı)', hex: '#FFFFFF' },
    { code: 'Ham MDF Arkalık (3mm / 4mm)', hex: '#D2B48C' },
  ];

  const panelColorGroups = [
    {
      id: 'hgahsap',
      title: 'HG Ahxap Renkler',
      description: 'Doxal ahxap dokulu yüksek parlaklıkta kaplama renkleri',
      colors: [
        { code: '1959 Hg Ozigo', hex: '#A89B84' },
        { code: '1958 Hg Modena', hex: '#968984' },
        { code: '155 Hg Ladin', hex: '#ECE9D8' },
        { code: '1884 Hg Beyaz Akçaaxaç', hex: '#EAE1D0' },
        { code: '1003 Hg Alman Mexe', hex: '#8B715C' },
        { code: '1005 Hg Budak Mexe', hex: '#795A3E' },
        { code: '605 Hg Bambu', hex: '#9E6C35' },
        { code: '160 Hg Milas', hex: '#995526' },
        { code: '623 Hg Milano', hex: '#6E4C33' },
        { code: '1555 Hg Lara', hex: '#7C7B79' },
        { code: '1163 Hg Oregon Ceviz', hex: '#2B1E19' },
        { code: '158 Hg Metalik Karaaxaç', hex: '#36343A' },
      ],
    },
    {
      id: 'hghologram',
      title: 'HG Hologram & Mermer Renkler',
      description: 'Cement, Pietra, Venato, Onyx ve Metalik Galaxy serisi',
      colors: [
        { code: '2355 Hg Bej Cement', hex: '#B0B1AF' },
        { code: '2260 Hg Gri Cement', hex: '#7A7D7E' },
        { code: '2261 Vizyon Cement', hex: '#8B8E8D' },
        { code: '2262 Hg Antrasit Cement', hex: '#4A4D4E' },
        { code: '2789 Mat Pietra', hex: '#555A5D' },
        { code: '2845 Hg Pietra', hex: '#4D5255' },
        { code: '2268 Hg Onyx', hex: '#E6E9E8' },
        { code: '2269 Mat Onyx', hex: '#E1E4E4' },
        { code: '2263 Hg Beyaz Venato', hex: '#EAEAEA' },
        { code: '2264 Mat Beyaz Venato', hex: '#E8E8E8' },
        { code: '2265 Hg Siyah Venato', hex: '#121214' },
        { code: '2266 Mat Siyah Venato', hex: '#151517' },
        { code: '1991 Hg Metalik Altın', hex: '#D4B565' },
        { code: '1992 Hg Bronz', hex: '#3A3332' },
        { code: '67 Ank. Metalik', hex: '#6C7074' },
        { code: '1583 Hg Ayna', hex: '#DCDCDC' },
        { code: '1289 Hg Beyaz Galaxy', hex: '#FAFAFA' },
        { code: '618 Hg Krem Ekru', hex: '#F5F3ED' },
        { code: '1756 Hg Krem Galaxy', hex: '#EFECE5' },
        { code: '846 Hg Bal Sedef', hex: '#CCA393' },
        { code: '1655 Hg Dore Galaxy', hex: '#86716E' },
        { code: '1432 Hg Kahve Galaxy', hex: '#2D211C' },
        { code: '1431 Hg Antrasit Galaxy', hex: '#3E4249' },
        { code: '1290 Hg Siyah Galaxy', hex: '#141517' },
        { code: '1294 Hg Kahve Terra', hex: '#382B24' },
        { code: '1296 İnci Matrix', hex: '#DDDCD9' },
        { code: '1295 Hg Gül Matrix', hex: '#9E244D' },
        { code: '2788 Hg Metalik Bronz', hex: '#2C2B2D' },
        { code: '685 Hg Kahve Tax', hex: '#362820' },
        { code: '1164 Hg Açık Keten', hex: '#DED8CB' },
        { code: '1165 Hg Koyu Keten', hex: '#504337' },
        { code: '1637 Hg Kahve Quatro', hex: '#8C7B77' },
        { code: '619 Hg Beyaz İnci', hex: '#E6E3D8' },
        { code: '773 Hg Siyah İnci', hex: '#222B38' },
        { code: '3080 Hg Rose', hex: '#CFA5A5' },
      ],
    },
    {
      id: 'hgfantazi',
      title: 'HG Fantazi Renkler',
      description: 'zel desenli ve motifli dekoratif paneller',
      colors: [
        { code: '142 Hg Beyaz !içek', hex: '#EFEFEF' },
      ],
    },
    {
      id: 'deri',
      title: 'Deri Dokulu Renkler',
      description: 'Lüks ve estetik deri dokulu yüzey seçenekleri',
      colors: [
        { code: '4527 Zümrüt Deri', hex: '#5C5844' },
        { code: '4528 Bronz Deri', hex: '#8C6E56' },
        { code: '4529 Altın Deri', hex: '#9E947A' },
        { code: '4530 İnci Deri', hex: '#C4C5BD' },
      ],
    },
    {
      id: 'cizilmez',
      title: '!izilmez Akrilik Renkler',
      description: 'Yüksek çizilme dirençli ve parlak akrilik paneller',
      colors: [
        { code: '2321 Hg Beyaz Sns', hex: '#FFFFFF' },
        { code: '2323 Hg Krem Akrilik Sns', hex: '#FAF9EE' },
        { code: '2325 Hg Kaxmir Sns', hex: '#BEB9AF' },
        { code: '2324 Hg Yexil Sns', hex: '#87A2A6' },
        { code: '2326 Hg Siyah Sns', hex: '#1F1F1F' },
        { code: '2327 Hg Metalik Gri Sns', hex: '#8A8E91' },
      ],
    },
    {
      id: 'endustriyel',
      title: 'Endüstriyel Akrilik Renkler',
      description: 'Modern mimari projeler için endüstriyel akrilik serisi',
      colors: [
        { code: '1643 Hg Proje Beyaz', hex: '#FFFFFF' },
        { code: '2141 Sm Proje Beyaz', hex: '#FBFBF8' },
        { code: '1526 Hg Beyaz', hex: '#FFFFFF' },
        { code: '2692 Hg Metalik Beyaz', hex: '#F5F5F5' },
        { code: '1532 Hg Krem', hex: '#FAF8EA' },
        { code: '1712 Hg Açık Gri', hex: '#C0C3C4' },
        { code: '1713 Mat Açık Gri', hex: '#B9BCBD' },
        { code: '1537 Hg Kaxmir', hex: '#BEBBB0' },
        { code: '1531 Hg Cappuccino', hex: '#B2A294' },
        { code: '1334 Hg Metalik Gri', hex: '#909395' },
        { code: '1565 Hg Antrasit', hex: '#64686C' },
        { code: '1256 Hg Siyah', hex: '#25282B' },
      ],
    },
    {
      id: 'hgduz',
      title: 'HG Düz & Canlı Renkler',
      description: 'Yüksek parlaklıkta zengin renk alternatifleri',
      colors: [
        { code: '539 Hg Proje Beyaz', hex: '#FFFFFF' },
        { code: '141 Hg Beyaz', hex: '#FFFFFF' },
        { code: '1150 Hg Porselen Beyaz', hex: '#ECECEC' },
        { code: '845 Hg Bianco', hex: '#F5F5F5' },
        { code: '154 Hg Krem', hex: '#F1EDEA' },
        { code: '148 Hg Cappuccino', hex: '#B9A697' },
        { code: '1167 Hg Açık Gri', hex: '#CDD2D6' },
        { code: '1168 Hg Tax Gri', hex: '#9C9593' },
        { code: '138 Hg Antrasit', hex: '#3D4044' },
        { code: '168 Hg Siyah', hex: '#080808' },
        { code: '146 Hg Bordo', hex: '#4C0E13' },
        { code: '149 Hg Kahve', hex: '#231518' },
        { code: '680 Hg Fuxya', hex: '#A32977' },
        { code: '166 Hg P. Yexil', hex: '#9ABA52' },
        { code: '715 Hg Parliament Mavi', hex: '#26459B' },
        { code: '2273 Shiny', hex: '#F5F5F5' },
        { code: '3081 Duman Gri', hex: '#535556' },
        { code: '3735 Koyu Gri', hex: '#7A7E82' },
        { code: '3733 Bej', hex: '#E3E0DB' },
        { code: '3654 Mono Gri', hex: '#83868A' },
        { code: '3736 Berlin Gri', hex: '#82919A' },
      ],
    },
  ];

  // Berceste Serisi kaldırıldı

  const handleWhatsAppInquiry = (varietyTitle) => {
    const text = `Merhaba Yapar Orman Ürünleri, ${categoryData.name} kategorinizdeki "${varietyTitle || categoryData.name}" hakkında bilgi ve fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSeriesSelect = (seriesId) => {
    setActiveMembranSeries(seriesId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (activeMembranSeries) {
    const isBerceste = activeMembranSeries === 'berceste';
    const isDilruba = activeMembranSeries === 'dilruba';
    const isMubrem = activeMembranSeries === 'mubrem';
    const isZevahir = activeMembranSeries === 'zevahir';
    const isLavinia = activeMembranSeries === 'lavinia';
    const isEltaf = activeMembranSeries === 'eltaf';
    const isCamli = activeMembranSeries === 'camli';
    const isDiger = activeMembranSeries === 'diger';

    const seriesTitle = isBerceste ? '1. Berceste Serisi' : isDilruba ? '2. Dilruba Serisi' : isMubrem ? '3. Mübrem Serisi' : isZevahir ? '4. Zevahir Serisi' : isLavinia ? '5. Lavinia Serisi' : isEltaf ? '6. Eltaf Serisi' : isCamli ? '7. Camlı Seri' : '8. Diğer Modeller & Davlumbazlar';
    const seriesBadge = isBerceste ? '1. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : isDilruba ? '2. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : isMubrem ? '3. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : isZevahir ? '4. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : isLavinia ? '5. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : isEltaf ? '6. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : isCamli ? '7. SERİ ⬢ MEMBRAN KAPAK KATALOĞU' : '8. SERİ ⬢ DAVLUMBAZ & DİĞER KAPAKLAR';
    const coverBg = isBerceste ? "/membran/berceste/berceste-01-cover.jpg" : isDilruba ? "/membran/dilruba/dilruba-02-mutfak.jpg" : isMubrem ? "/membran/mubrem/mubrem-01-cover.jpg" : isZevahir ? "/membran/zevahir/zevahir-01-cover.jpg" : isLavinia ? "/membran/lavinia/lavinia-01-cover.jpg" : isEltaf ? "/membran/eltaf/eltaf-01-cover.jpg" : isCamli ? "/membran/camli/camli-01-cover.jpg" : "/membran/diger/diger-01-cover.jpg";

    return (
      <div className="category-page-wrapper">
        {/* Dedicated Series Hero Banner */}
        <section className="category-hero-banner" style={{ minHeight: '420px' }}>
          <img
            src={coverBg}
            alt={seriesTitle}
            className="cat-hero-bg"
          />
          <div className="cat-hero-overlay"></div>

          <div className="cat-hero-content">
            <button
              onClick={() => handleSeriesSelect(null)}
              className="cat-back-btn"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
            >
              <ArrowLeft size={18} />
              <span>Tüm Membran Serilerine Dön</span>
            </button>

            <span className="cat-hero-badge">{seriesBadge}</span>
            <h1 className="cat-hero-title">{seriesTitle}</h1>
            <p className="cat-hero-slogan">
              {isBerceste
                ? '"Mutfak ve banyolarınızda zamansız zarafet: B10-B26 profiller, kusursuz 3D vakum teknolojisi ve parmak izi tutmaz membran yüzeyler."'
                : isDilruba
                ? '"Zarif CNC paht detayları, neo-klasik hatlar, banyo & mutfak konseptleri ve yüksek dayanımlı ipeksi yüzeyli membran kapak modelleri."'
                : isMubrem
                ? '"Modern mimari projeler için dikey oluklu, derzli ahşap dokulu ve 3D vakum kaplamalı lüks membran panel tasarımları."'
                : isZevahir
                ? '"Siyah mat yüzeyler, zengin ahşap dokuları, ada mutfak vitrinleri ve neo-klasik membran kapak konseptleri."'
                : isLavinia
                ? '"Kemerli kahve köşesi vitrinleri, zeytin yeşili antik tonlar, camlı büfe dolapları ve lüks kaset kapak tasarımları."'
                : isEltaf
                ? '"Pembe ve krem tonlarında çocuk & genç odası kavisli kemer kapaklar, çalışma masası detayları ve lüks gardırop tasarımları."'
                : isCamli
                ? '"Vitrinler, portmantolar ve özel mutfak modülleri için füme ve şeffaf cam çıtalı, 2-12 gözlü lüks CNC membran çerçeve kapak tasarımları."'
                : '"Panjur kapaklı giyinme odaları, lüks gardıroplar, şifonyerler ve B10-M24 serisi özel CNC membran davlumbaz kapak tasarımları."'}
            </p>

            <div className="hero-quick-specs-floating">
              <div className="spec-item-chip">
                <span className="spec-label">✨ SERİ</span>
                <strong className="spec-val">{isBerceste ? 'Berceste Serisi' : isDilruba ? 'Dilruba Serisi' : isMubrem ? 'Mübrem Serisi' : isZevahir ? 'Zevahir Serisi' : isLavinia ? 'Lavinia Serisi' : isEltaf ? 'Eltaf Serisi' : isCamli ? 'Camlı Seri' : 'Diğer Modeller'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x MODELLER</span>
                <strong className="spec-val">{isBerceste ? 'B10  B26' : isDilruba ? 'D10  D17' : isMubrem ? 'M10  M29' : isZevahir ? 'Z10  Z37' : isLavinia ? 'L10  L44' : isEltaf ? 'Sayfa 60  63' : isCamli ? 'C10  C33 (2-12 Göz)' : 'Sayfa 78  83 (Davlumbaz & Panjur)'}</strong>

              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x:️ YSZEY</span>
                <strong className="spec-val">Parmak İzi Tutmaz</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x  KAPLAMA</span>
                <strong className="spec-val">3D Vakum Pres</strong>
              </div>
            </div>

            <div className="cat-hero-actions">
              <a href={`tel:${phoneNumber}`} className="btn-primary">
                <Phone size={18} />
                <span>Hemen Bizi Arayın</span>
              </a>
              <button onClick={() => handleWhatsAppInquiry(seriesTitle)} className="btn-whatsapp">
                <MessageCircle size={18} />
                <span>WhatsApp'tan Teklif Al</span>
              </button>
            </div>
          </div>
        </section>

        {/* Dedicated Series Page Content */}
        <section style={{ maxWidth: '1320px', margin: '3rem auto 5rem auto', padding: '0 1.5rem' }}>
          {isBerceste ? (
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  KATALOG VİTRİNİ & DETAY GRSELLERİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Berceste Serisi Tüm Sayfalar ve Kapak Modelleri (B10  B26)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Axaxıdaki katalog sayfalarına ve modellere tıklayarak yüksek çözünürlükte büyütebilir, WhatsApp üzerinden kolayca teklif isteyebilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Berceste Mutfak Uygulaması', desc: 'İpeksi mat yüzey & neo-klasik kapak detayı', img: '/membran/berceste/berceste-01-cover.jpg', tag: 'Sayfa 2 ⬢ Uygulama' },
                  { title: 'Mutfak Detayları & Camlı Vitrin', desc: 'Camlı vitrin kapakları ve kasetli çekmece hatları', img: '/membran/berceste/berceste-02-details.jpg', tag: 'Sayfa 3 ⬢ Detaylar' },
                  { title: 'B10 & B11 Profil Kapak Kataloxu', desc: 'Düz pahtlı ve kasetli CNC kapak serisi', img: '/membran/berceste/berceste-03-b10-b11.jpg', tag: 'Sayfa 4 ⬢ Modeller' },
                  { title: 'B12 & B13 Profil Kapak Kataloxu', desc: '!ift pahtlı ve kademeli profil kapak modelleri', img: '/membran/berceste/berceste-04-b12-b13.jpg', tag: 'Sayfa 5 ⬢ Modeller' },
                  { title: 'B14 & B15 Profil Kapak Kataloxu', desc: 'zel frezeli ve kasetli membran kapak tasarımları', img: '/membran/berceste/berceste-05-b14-b15.jpg', tag: 'Sayfa 6 ⬢ Modeller' },
                  { title: 'B16 & B17 Profil Kapak Kataloxu', desc: 'İki panelli kasetli ve çerçeveli membran tasarımlar', img: '/membran/berceste/berceste-06-b16-b17.jpg', tag: 'Sayfa 7 ⬢ Modeller' },
                  { title: 'B18 & B19 Profil Kapak Kataloxu', desc: 'İç pahtlı ve yumuxak hatlı kaset kapak serisi', img: '/membran/berceste/berceste-07-b18-b19.jpg', tag: 'Sayfa 8 ⬢ Modeller' },
                  { title: 'B20 & B21 Profil Kapak Kataloxu', desc: 'Kademeli derin pahtlı ve minimalist profil modelleri', img: '/membran/berceste/berceste-08-b20-b21.jpg', tag: 'Sayfa 9 ⬢ Modeller' },
                  { title: 'B22 & B23 Profil Kapak Kataloxu', desc: 'Geometrik baklava motifli ve kasetli kapaklar', img: '/membran/berceste/berceste-09-b22-b23.jpg', tag: 'Sayfa 10 ⬢ Modeller' },
                  { title: 'B25 & B26 Profil Kapak Kataloxu', desc: '!apraz X motifli ve kavisli kemerli kapak modelleri', img: '/membran/berceste/berceste-10-b25-b26.jpg', tag: 'Sayfa 11 ⬢ Modeller' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isDilruba ? (
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  KATALOG VİTRİNİ & DETAY GRSELLERİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Dilruba Serisi Tüm Sayfalar ve Kapak Modelleri (D10  D17)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Axaxıdaki banyo, mutfak uygulamaları ve D10 - D17 kapak modellerine tıklayarak yüksek çözünürlükte büyütebilir, WhatsApp üzerinden teklif alabilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Dilruba Banyo Mobilyası & !ekmece Tasarımı', desc: 'Bordo ve gri renk uyumlu özel banyo konsepti', img: '/membran/dilruba/dilruba-01-banyo.jpg', tag: 'Sayfa 13 ⬢ Banyo' },
                  { title: 'Dilruba Mutfak Uygulaması', desc: 'İpeksi mat gri yüzey & genix mutfak tezgahı', img: '/membran/dilruba/dilruba-02-mutfak.jpg', tag: 'Sayfa 14 ⬢ Mutfak' },
                  { title: 'Mutfak Detayları & Camlı Vitrin Kapaklar', desc: '!ıtalı cam vitrin ve çekmece detay hatları', img: '/membran/dilruba/dilruba-03-detaylar.jpg', tag: 'Sayfa 15 ⬢ Detaylar' },
                  { title: 'D10 & D11 Profil Kapak Kataloxu', desc: 'Zarif minimalist düz pahtlı profil kapak modelleri', img: '/membran/dilruba/dilruba-04-d10-d11.jpg', tag: 'Sayfa 16 ⬢ Modeller' },
                  { title: 'D12 & D13 Profil Kapak Kataloxu', desc: 'İç pahtlı ve kademeli kaset kapak tasarımları', img: '/membran/dilruba/dilruba-05-d12-d13.jpg', tag: 'Sayfa 17 ⬢ Modeller' },
                  { title: 'D15 & D16 Profil Kapak Kataloxu', desc: '!ift panelli ve düz çerçeveli membran kapak modelleri', img: '/membran/dilruba/dilruba-06-d15-d16.jpg', tag: 'Sayfa 18 ⬢ Modeller' },
                  { title: 'D17 Profil Kapak & Füme Mutfak Kataloxu', desc: 'Füme vitrinli ve ada mutfak konsept uygulaması', img: '/membran/dilruba/dilruba-07-d17.jpg', tag: 'Sayfa 19 ⬢ Modeller' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isMubrem ? (
            /* 3. MSBREM SERİSİ KATALOĞU */
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  3. SERİ ⬢ KATALOG VİTRİNİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Mübrem Serisi Tüm Sayfalar ve Kapak Modelleri (M10  M29)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Axaxıdaki dikey oluklu ve derzli M10 - M29 kapak modellerine ve mutfak uygulamalarına tıklayarak yüksek çözünürlükte büyütebilir, WhatsApp üzerinden teklif alabilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Mübrem Serisi Oluklu Mutfak Tasarımı', desc: 'Yexil mat dikey oluklu membran mutfak dolapları ve ahxap dokulu üst modüller', img: '/membran/mubrem/mubrem-01-cover.jpg', tag: 'Sayfa 20 ⬢ Mutfak' },
                  { title: 'Mübrem Serisi Mutfak Detayları & !ekmeceleri', desc: 'Dikey çıtalı ada mutfak, boy dolaplar ve entegre kulp hatları', img: '/membran/mubrem/mubrem-02-details.jpg', tag: 'Sayfa 21 ⬢ Detaylar' },
                  { title: 'M10 & M11 Oluklu Kapak Kataloxu', desc: 'İnce dikey oluklu ve kasetli oluklu membran kapak modelleri', img: '/membran/mubrem/mubrem-03-m10-m11.jpg', tag: 'Sayfa 22 ⬢ Modeller' },
                  { title: 'M12 & M13 Oluklu Kapak Kataloxu', desc: 'Derin derzli ve genix aralıklı oluklu kapak modelleri', img: '/membran/mubrem/mubrem-04-m12-m13.jpg', tag: 'Sayfa 23 ⬢ Modeller' },
                  { title: 'M14 & M15 Oluklu Kapak Kataloxu', desc: 'zel dikey oluklu çıtalı membran kapak modelleri', img: '/membran/mubrem/mubrem-05-m14-m15.jpg', tag: 'Sayfa 24 ⬢ Modeller' },
                  { title: 'M16 & M17 Oluklu Kapak Kataloxu', desc: 'Sık dikey derzli ve kasetli membran kapak tasarımları', img: '/membran/mubrem/mubrem-06-m16-m17.jpg', tag: 'Sayfa 25 ⬢ Modeller' },
                  { title: 'M18 & M19 Oluklu Kapak Kataloxu', desc: 'Genix oluklu panel ve modern kapak modelleri', img: '/membran/mubrem/mubrem-07-m18-m19.jpg', tag: 'Sayfa 26 ⬢ Modeller' },
                  { title: 'M20 & M21 Oluklu Kapak Kataloxu', desc: 'İki bölmeli derzli ve dikey oluklu membran tasarımlar', img: '/membran/mubrem/mubrem-08-m20-m21.jpg', tag: 'Sayfa 27 ⬢ Modeller' },
                  { title: 'M24 & M25 Oluklu Kapak Kataloxu', desc: 'Yatay çizgili derzli oluklu kapak tasarımları', img: '/membran/mubrem/mubrem-09-m24-m25.jpg', tag: 'Sayfa 29 ⬢ Modeller' },
                  { title: 'M26 & M27 Kemerli & Oluklu Kapak Kataloxu', desc: 'Yatay derzli ve kavisli kemerli oluklu kapak modelleri', img: '/membran/mubrem/mubrem-10-m26-m27.jpg', tag: 'Sayfa 30 ⬢ Modeller' },
                  { title: 'M28 & M29 Kavisli Kemer Oluklu Kapak Kataloxu', desc: 'Tek taraflı kavisli ve dikey derzli membran kapaklar', img: '/membran/mubrem/mubrem-11-m28-m29.jpg', tag: 'Sayfa 31 ⬢ Modeller' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isZevahir ? (
            /* 4. ZEVAHİR SERİSİ KATALOĞU */
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  4. SERİ ⬢ KATALOG VİTRİNİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Zevahir Serisi Tüm Sayfalar ve Kapak Modelleri (Z10  Z29)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Siyah mat yüzeyler, lüks ahxap dokuları, krem vitrinler ve Z10 - Z29 klasik & neo-klasik membran kapak modellerine tıklayarak büyütebilir, WhatsApp üzerinden kolayca teklif alabilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Zevahir Serisi Siyah & Ahxap Mutfak Konsepti', desc: 'Siyah mat membran alt ve ada dolaplar ile doxal ahxap kaplama üst modüller', img: '/membran/zevahir/zevahir-01-cover.jpg', tag: 'Sayfa 32 ⬢ Mutfak' },
                  { title: 'Zevahir Serisi Mutfak Detayları & Krem Vitrin Kapaklar', desc: 'Krem renkli neo-klasik mutfak, cam vitrinler ve kasetli çekmece hatları', img: '/membran/zevahir/zevahir-02-details.jpg', tag: 'Sayfa 33 ⬢ Detaylar' },
                  { title: 'Z10 & Z11 Profil Kapak Kataloxu', desc: 'Klasik pahtlı ve kemerli kaset profil membran kapak modelleri', img: '/membran/zevahir/zevahir-03-z10-z11.jpg', tag: 'Sayfa 34 ⬢ Modeller' },
                  { title: 'Z12 & Z13 Profil Kapak Kataloxu', desc: 'zel köxe oymalı ve kavisli kemerli kaset membran kapaklar', img: '/membran/zevahir/zevahir-04-z12-z13.jpg', tag: 'Sayfa 35 ⬢ Modeller' },
                  { title: 'Z14 & Z15 Profil Kapak Kataloxu', desc: 'Düz pahtlı ve kasetli zarif neo-klasik membran kapak modelleri', img: '/membran/zevahir/zevahir-05-z14-z15.jpg', tag: 'Sayfa 36 ⬢ Modeller' },
                  { title: 'Z16 & Z17 Profil Kapak Kataloxu', desc: 'Dikey oluklu panel ve oymalı köxe kaset membran kapaklar', img: '/membran/zevahir/zevahir-06-z16-z17.jpg', tag: 'Sayfa 37 ⬢ Modeller' },
                  { title: 'Z18 & Z19 Profil Kapak Kataloxu', desc: '!ift kademeli derin pahtlı ve kasetli profil kapak serisi', img: '/membran/zevahir/zevahir-07-z18-z19.jpg', tag: 'Sayfa 38 ⬢ Modeller' },
                  { title: 'Z20 & Z21 Profil Kapak Kataloxu', desc: 'İki panelli kasetli ve dikey oluklu membran kapak tasarımları', img: '/membran/zevahir/zevahir-08-z20-z21.jpg', tag: 'Sayfa 39 ⬢ Modeller' },
                  { title: 'Z22 & Z23 Profil Kapak Kataloxu', desc: 'Dikey oluklu kasetli ve X motifli çapraz membran kapak modelleri', img: '/membran/zevahir/zevahir-09-z22-z23.jpg', tag: 'Sayfa 40 ⬢ Modeller' },
                  { title: 'Z24 & Z25 Profil Kapak Kataloxu', desc: 'Dikey çıtalı ve kasetli minimalist membran kapak tasarımları', img: '/membran/zevahir/zevahir-10-z24-z25.jpg', tag: 'Sayfa 41 ⬢ Modeller' },
                  { title: 'Z26 & Z27 Profil Kapak Kataloxu', desc: 'Oymalı köxe kasetli ve düz çerçeveli membran kapak serisi', img: '/membran/zevahir/zevahir-11-z26-z27.jpg', tag: 'Sayfa 42 ⬢ Modeller' },
                  { title: 'Z28 & Z29 Profil Kapak Kataloxu', desc: 'İç pahtlı ve çift kademeli neo-klasik kapak tasarımları', img: '/membran/zevahir/zevahir-12-z28-z29.jpg', tag: 'Sayfa 43 ⬢ Modeller' },
                  { title: 'Z30 & Z31 Profil Kapak Kataloxu', desc: 'Klasik kasetli ve düz çerçeveli membran kapak tasarımları', img: '/membran/zevahir/zevahir-13-z30-z31.jpg', tag: 'Sayfa 44 ⬢ Modeller' },
                  { title: 'Z32 & Z33 Profil Kapak Kataloxu', desc: 'Zarif pahtlı ve iki panelli membran profil kapaklar', img: '/membran/zevahir/zevahir-14-z32-z33.jpg', tag: 'Sayfa 45 ⬢ Modeller' },
                  { title: 'Z34 & Z35 Profil Kapak Kataloxu', desc: 'Küp motif derzli ve dikey oluklu membran kapak tasarımları', img: '/membran/zevahir/zevahir-15-z34-z35.jpg', tag: 'Sayfa 46 ⬢ Modeller' },
                  { title: 'Z36 & Z37 Profil Kapak Kataloxu', desc: 'Kemerli kaset ve neo-klasik pahtlı membran kapaklar', img: '/membran/zevahir/zevahir-16-z36-z37.jpg', tag: 'Sayfa 47 ⬢ Modeller' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isLavinia ? (
            /* 5. LAVİNİA SERİSİ KATALOĞU */
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  5. SERİ ⬢ KATALOG VİTRİNİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Lavinia Serisi Tüm Sayfalar ve Kapak Modelleri (L10  L44)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Zeytin yexili antik tonlar, kemerli vitrinler ve L10 - L44 geometrik, prizmatik & oymalı kaset kapak modellerine tıklayarak büyütebilir, WhatsApp üzerinden kolayca teklif alabilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Lavinia Serisi Kemerli Kahve Köxesi Vitrini', desc: 'Zeytin yexili kasetli kapaklar, büyük kemerli füme cam vitrin ve kahve barı konsepti', img: '/membran/lavinia/lavinia-01-cover.jpg', tag: 'Sayfa 48 ⬢ Kahve Barı Vitrini' },
                  { title: 'Lavinia Serisi Mutfak Detayları & Yexil/Siyah Konsept', desc: 'Kahve köxesi detayları, entegre ankastre boy dolaplar ve adalı siyah mutfak uygulaması', img: '/membran/lavinia/lavinia-02-details.jpg', tag: 'Sayfa 49 ⬢ Detaylar' },
                  { title: 'L10 & L13 Profil Kapak Kataloxu', desc: 'Prizmatik desenli, dikey derzli ve çapraz çizgili kaset membran kapak modelleri', img: '/membran/lavinia/lavinia-03-l10-l13.jpg', tag: 'Sayfa 50 ⬢ Modeller' },
                  { title: 'L14 & L17 Profil Kapak Kataloxu', desc: 'Entegre gizli kulplu dikey oluklu ve geometrik çizgili kaset membran kapaklar', img: '/membran/lavinia/lavinia-04-l14-l17.jpg', tag: 'Sayfa 51 ⬢ Modeller' },
                  { title: 'L18 & L21 Profil Kapak Kataloxu', desc: 'Elips halkalı, oymalı köxe kasetli ve kavisli kemerli membran kapak modelleri', img: '/membran/lavinia/lavinia-05-l18-l21.jpg', tag: 'Sayfa 52 ⬢ Modeller' },
                  { title: 'L22 & L25 Profil Kapak Kataloxu', desc: 'Yatay derzli, dalga pahtlı, papatya motifli ve geometrik desenli membran kapaklar', img: '/membran/lavinia/lavinia-06-l22-l25.jpg', tag: 'Sayfa 53 ⬢ Modeller' },
                  { title: 'L26 & L29 Profil Kapak Kataloxu', desc: 'Köxe oymalı kaset, kavisli kemer derzli ve yatay çizgili membran kapak modelleri', img: '/membran/lavinia/lavinia-07-l26-l29.jpg', tag: 'Sayfa 54 ⬢ Modeller' },
                  { title: 'L30 & L33 Profil Kapak Kataloxu', desc: 'Baklava motifli, damla kabartmalı, kasetli ve dikey çizgili membran kapak tasarımları', img: '/membran/lavinia/lavinia-08-l30-l33.jpg', tag: 'Sayfa 55 ⬢ Modeller' },
                  { title: 'L34 & L37 Profil Kapak Kataloxu', desc: 'Sarmal motifli, köxe çiçek oymalı, geometrik halkalı ve dikey çıtalı kapaklar', img: '/membran/lavinia/lavinia-09-l34-l37.jpg', tag: 'Sayfa 56 ⬢ Modeller' },
                  { title: 'L38 & L41 Profil Kapak Kataloxu', desc: 'Baklava kafesli, çapraz derzli, yan oymalı ve geometrik kaset membran kapaklar', img: '/membran/lavinia/lavinia-10-l38-l41.jpg', tag: 'Sayfa 57 ⬢ Modeller' },
                  { title: 'L42 & L44 Profil Kapak Kataloxu & Mutfak Boy Dolabı', desc: 'Prizmatik kasetli kapaklar ve ankastre fırınlı lüks bej mutfak boy dolabı tasarımı', img: '/membran/lavinia/lavinia-11-l42-l44.jpg', tag: 'Sayfa 58 ⬢ Modeller & Mutfak' },
                  { title: 'Lavinia Serisi Mutfak Uygulaması', desc: 'Mavi ve bej çift renk kasetli dolaplar, tezgah arası mermer ve ada mutfak', img: '/membran/lavinia/lavinia-12-mutfak.jpg', tag: 'Sayfa 59 ⬢ Mutfak' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isEltaf ? (
            /* 6. ELTAF SERİSİ KATALOĞU */
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  6. SERİ ⬢ KATALOG VİTRİNİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Eltaf Serisi Membran Kapak Kataloxu (Sayfa 60  63)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Pembe ve krem tonlarında kavisli kemer kapaklar, çocuk & genç odası gardırop konseptleri, çalıxma masası ve kaset membran kapak modelleri.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Eltaf Serisi Pembe & Krem Genç Odası Gardırobu', desc: 'Dikey oluklu kavisli kemerli pembe kapaklar, beyaz kasetli üst dolaplar ve entegre kitaplık', img: '/membran/eltaf/eltaf-01-cover.jpg', tag: 'Sayfa 60 ⬢ Gardırop & Oda' },
                  { title: 'Eltaf Serisi !alıxma Masası & !ekmece Detayları', desc: 'Yarım kavisli dikey oluklu çekmece önleri, pembe kitaplık ve bronz kulp hatları', img: '/membran/eltaf/eltaf-02-details.jpg', tag: 'Sayfa 61 ⬢ Detaylar' },
                  { title: 'Eltaf Serisi Profil Kapak Kataloxu (Şablon 1)', desc: 'zel CNC derzli, oymalı pahtlı ve minimalist profil membran kapak tasarımları', img: '/membran/eltaf/eltaf-03-modeller.jpg', tag: 'Sayfa 62 ⬢ Modeller' },
                  { title: 'Eltaf Serisi Profil Kapak Kataloxu (Şablon 2)', desc: 'Genix kasetli, kavisli kemerli ve geometrik desenli membran kapak modelleri', img: '/membran/eltaf/eltaf-04-modeller.jpg', tag: 'Sayfa 63 ⬢ Modeller' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isCamli ? (
            /* 7. CAMLI SERİ KATALOĞU */
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  7. SERİ ⬢ KATALOG VİTRİNİ
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Camlı Seri Membran !erçeve Kapaklar (Sayfa 64  76)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Füme ve xeffaf camlı portmanto, vitrin, C10 - C33 (2-12 gözlü) CNC çıtalı membran kapak modellerine tıklayarak büyütebilir, WhatsApp üzerinden kolayca teklif alabilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Camlı Modeller Antre & Portmanto Konsepti', desc: 'Oval füme camlı lüks vestiyer kapakları ve siyah dikey oluklu antre kapısı tasarımı', img: '/membran/camli/camli-01-cover.jpg', tag: 'Sayfa 64 ⬢ Portmanto & Antre' },
                  { title: 'Camlı Modeller Portmanto & Puf Detayları', desc: 'Genix füme camlı dolap kapakları, puf oturma alanı ve oymalı kavis detay hatları', img: '/membran/camli/camli-02-details.jpg', tag: 'Sayfa 65 ⬢ Detaylar' },
                  { title: 'C10 & C10 V30 Camlı Kapak Kataloxu', desc: '4 gözlü ve 8 gözlü CNC çıtalı cam çerçeve membran kapak modelleri', img: '/membran/camli/camli-03-c10.jpg', tag: 'Sayfa 66 ⬢ 4 & 8 Gözlü' },
                  { title: 'C11 & C12 Camlı Kapak Kataloxu', desc: '4 gözlü, 8 gözlü ve özel dikdörtgen geçmeli CNC çıtalı membran cam kapaklar', img: '/membran/camli/camli-04-c11-c12.jpg', tag: 'Sayfa 67 ⬢ Modeller' },
                  { title: 'C13 & C14 Camlı Kapak Kataloxu', desc: 'X motifli 12 gözlü ve dalga pahtlı 6 gözlü lüks CNC membran cam kapak tasarımları', img: '/membran/camli/camli-05-c13-c14.jpg', tag: 'Sayfa 68 ⬢ Modeller' },
                  { title: 'C15 & C16 Camlı Kapak Kataloxu', desc: 'Baklava motifli 12 gözlü ve geometrik çaprazlı 10 gözlü CNC cam kapak modelleri', img: '/membran/camli/camli-06-c15-c16.jpg', tag: 'Sayfa 69 ⬢ Modeller' },
                  { title: 'C17 & C18 Camlı Kapak Kataloxu', desc: 'Dikdörtgen kasetli 3 gözlü ve yonca motifli 4-8 gözlü CNC cam kapak tasarımları', img: '/membran/camli/camli-07-c17-c18.jpg', tag: 'Sayfa 70 ⬢ Modeller' },
                  { title: 'C19 & C20 Camlı Kapak Kataloxu', desc: 'Baklava motifli 4 gözlü ve kavisli baklava desenli 6 gözlü CNC cam kapaklar', img: '/membran/camli/camli-08-c19-c20.jpg', tag: 'Sayfa 71 ⬢ Modeller' },
                  { title: 'C22 & C23 Camlı Kapak Kataloxu', desc: 'Düz çerçeveli 8 gözlü ve X motifli 12 gözlü CNC cam kapak modelleri', img: '/membran/camli/camli-09-c22-c23.jpg', tag: 'Sayfa 72 ⬢ Modeller' },
                  { title: 'C26 & C27 Camlı Kapak Kataloxu', desc: 'Oval geometrik 12 gözlü ve paht kavisli 8 gözlü CNC cam membran kapaklar', img: '/membran/camli/camli-10-c26-c27.jpg', tag: 'Sayfa 73 ⬢ Modeller' },
                  { title: 'C28 & C29 Camlı Kapak Kataloxu', desc: 'Kaset çerçeveli 5 gözlü ve dikey dikme çıtalı 6 gözlü CNC cam membran kapaklar', img: '/membran/camli/camli-11-c28-c29.jpg', tag: 'Sayfa 74 ⬢ Modeller' },
                  { title: 'C31 & C32 Camlı Kapak Kataloxu', desc: 'Kavis kemerli 8 gözlü ve geometrik kasetli 8 gözlü CNC cam membran kapaklar', img: '/membran/camli/camli-12-c31-c32.jpg', tag: 'Sayfa 75 ⬢ Modeller' },
                  { title: 'C33, C21 & C30 Camlı Kapak Kataloxu', desc: 'Oval baklava geçmeli 2 gözlü ve özel kasetli CNC membran cam kapak xablonları', img: '/membran/camli/camli-13-c33-c21-c30.jpg', tag: 'Sayfa 76 ⬢ Modeller' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* 8. SERİ: DİĞER MODELLER & DAVLUMBAZLAR */
            <div>
              <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  8. SERİ ⬢ MEMBRAN KAPAK KATALOĞU
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Diğer Modeller, Panjur Gardıroplar, Davlumbazlar & Rozetler (Sayfa 78 – 87)
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Giyinme odası panjur kapakları, lüks gardırop kombinasyonları, B10 – Z32 özel davlumbaz kapaklar ve R10 – R19 dekoratif rozet koleksiyonuna tıklayarak büyütebilir, WhatsApp üzerinden teklif alabilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'Diğer Modeller - Panjur Giyinme Odası Vitrini', desc: 'Lüks giyinme odası panjur dolap kapakları, makyaj masası ve şeffaf camlı dolap konsepti', img: '/membran/diger/diger-01-cover.jpg', tag: 'Sayfa 78 ⬢ Giyinme Odası' },
                  { title: 'Panjur Gardırop & Çekmece Kombinasyonu', desc: 'Köşe giyinme odası, panjur havalandırmalı dolap kapakları ve çekmece detayları', img: '/membran/diger/diger-02-panjur-gardirob.jpg', tag: 'Sayfa 79 ⬢ Gardırop & Çekmece' },
                  { title: 'Davlumbaz Kapaklar (B10 — B18 Modelleri)', desc: 'Kavisli kemerli ve pahtlı B10, B11, B12, B13, B14, B15, B16, B17, B18 membran davlumbaz kapaklar', img: '/membran/diger/diger-03-davlumbaz-b10-b18.jpg', tag: 'Sayfa 80 ⬢ B10 - B18 Davlumbazlar' },
                  { title: 'Davlumbaz Kapaklar (B19 — B27 Modelleri)', desc: 'Çift panelli, kasetli ve oymalı B19, B20, B21, B22, B23, B25, B26, B27 membran davlumbazlar', img: '/membran/diger/diger-04-davlumbaz-b19-b27.jpg', tag: 'Sayfa 81 ⬢ B19 - B27 Davlumbazlar' },
                  { title: 'Davlumbaz Kapaklar (D11 — M15 Modelleri)', desc: 'Dilruba ve Mübrem serilerine özel CNC işlemeli D11 - M15 membran davlumbaz kapaklar', img: '/membran/diger/diger-05-davlumbaz-d11-m15.jpg', tag: 'Sayfa 82 ⬢ D11 - M15 Davlumbazlar' },
                  { title: 'Davlumbaz Kapaklar (M16 — M24 Modelleri)', desc: 'Mübrem ve Zevahir serilerine uyumlu özel CNC oymalı M16 - M24 membran davlumbaz kapaklar', img: '/membran/diger/diger-06-davlumbaz-m16-m24.jpg', tag: 'Sayfa 83 ⬢ M16 - M24 Davlumbazlar' },
                  { title: 'Davlumbaz Kapaklar (M25 — Z16 Modelleri)', desc: 'Mübrem ve Zevahir serilerine özel kasetli ve oymalı M25 - Z16 membran davlumbaz kapaklar', img: '/membran/diger/diger-07-davlumbaz-m25-z16.jpg', tag: 'Sayfa 84 ⬢ M25 - Z16 Davlumbazlar' },
                  { title: 'Davlumbaz Kapaklar (Z17 — Z25 Modelleri)', desc: 'Zevahir serisine uyumlu oymalı, çıtalı ve kavisli Z17 - Z25 membran davlumbaz kapaklar', img: '/membran/diger/diger-08-davlumbaz-z17-z25.jpg', tag: 'Sayfa 85 ⬢ Z17 - Z25 Davlumbazlar' },
                  { title: 'Davlumbaz Kapaklar (Z26 — Z32 Modelleri)', desc: 'Zevahir ve özel kaset serilerine uyumlu kavisli Z26 - Z32 membran davlumbaz kapaklar', img: '/membran/diger/diger-09-davlumbaz-z26-z32.jpg', tag: 'Sayfa 86 ⬢ Z26 - Z32 Davlumbazlar' },
                  { title: 'Rozetler & Dekoratif Dikmeler (R10 — R19 Modelleri)', desc: 'Mutfak, banyo ve mobilya kapak yanları için özel desenli CNC oymalı R10 - R19 rozet ve dikme profilleri', img: '/membran/diger/diger-10-rozetler-r10-r19.jpg', tag: 'Sayfa 87 ⬢ Rozetler R10 - R19' }
                ].map((model, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--card-bg)',
                      borderRadius: '14px',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      onClick={() => setPreviewImage(model.img)}
                      style={{ position: 'relative', height: '320px', cursor: 'pointer', overflow: 'hidden', background: 'var(--bg-dark)' }}
                    >
                      <img src={model.img} alt={model.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '800' }}>{model.title}</h4>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Prominent Store Visit Disclaimer Banner */}
          <div
            style={{
              marginTop: '3.5rem',
              padding: '1.75rem 2rem',
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(220, 38, 38, 0.12) 100%)',
              border: '2px dashed var(--accent-gold)',
              borderRadius: '12px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
            }}
          >
            <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '900', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
              Daha Fazla Renk Seçenexi ve Canlı Numuneler İçin Maxazamıza Uxrayınız
            </h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.975rem', maxWidth: '850px', lineHeight: '1.6' }}>
              Ekranınızda ton ve doku farklılıkları olabilir. !ok daha fazla renk çexidini görmek, dokuları birebir hissetmek ve fiili kartela üzerinden siparixinizi oluxturmak için sizi <strong>Yapar Orman Ürünleri</strong> maxazamıza bekliyoruz.
            </p>
          </div>
        </section>

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
              <div style={{
                width: '100%',
                padding: '1rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(15, 23, 42, 0.95)'
              }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.95rem' }}>
                  {seriesTitle} Yüksek !özünürlüklü Katalog Görseli
                </span>
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
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{
                width: '100%',
                padding: '1rem',
                maxHeight: 'calc(90vh - 140px)',
                overflow: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--card-bg)'
              }}>
                <img
                  src={previewImage}
                  alt="nizleme"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '75vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </div>

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
                  Yapar Orman Ürünleri ⬢ Mutfak & Banyo Membran Kapak Sistemleri
                </span>
                <button
                  onClick={() => handleWhatsAppInquiry(`${seriesTitle} Katalog Modeli`)}
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

          <span className="cat-hero-badge">YAPAR ORMAN SRSN VİTRİNİ</span>
          <h1 className="cat-hero-title">
            {slug === 'membran' ? 'Membran Kapaklar & Berceste Serisi' : categoryData.name}
          </h1>
          <p className="cat-hero-slogan">
            {slug === 'membran'
              ? '"Mutfak ve banyolarınızda zamansız zarafet: Kusursuz 3D vakum teknolojisi ve lake pürüzsüzlüxünde parmak izi tutmaz membran yüzeyler."'
              : '"Mekânlarınıza modern bir dokunux yaparken dayanıklılıktan da ödün vermeyin. Kaliteli malzemelerden üretilen ve uzun ömürlü kullanım sunan panellerimiz, mekânlarınızın atmosferini anında dexixtirir."'}
          </p>

          {/* Görsel Szerindeki Kısa Bilgi Kartı */}
          {slug === 'sunta' ? (
            <div className="hero-quick-specs-options-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '860px', margin: '1.25rem auto 1.75rem auto' }}>
              {/* 1. Seçenek */}
              <div className="hero-quick-specs-floating" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
                  <span style={{ background: '#DC2626', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: '800', padding: '0.2rem 0.5rem', borderRadius: '4px', letterSpacing: '0.5px' }}>1. SE!ENEK</span>
                  <span style={{ color: '#EAB308', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.25rem' }}>YPR-SNT-101</span>
                </div>
                <div className="spec-item-chip">
                  <span className="spec-label">x BOY</span>
                  <strong className="spec-val">3.66 m (3660 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">x EN</span>
                  <strong className="spec-val">1.82 m (1820 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">x KALINLIK</span>
                  <strong className="spec-val">18 mm</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">x  KALİTE</span>
                  <strong className="spec-val">E1 Standart</strong>
                </div>
              </div>

              {/* 2. Seçenek */}
              <div className="hero-quick-specs-floating" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
                  <span style={{ background: '#2563EB', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: '800', padding: '0.2rem 0.5rem', borderRadius: '4px', letterSpacing: '0.5px' }}>2. SE!ENEK</span>
                  <span style={{ color: '#EAB308', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.25rem' }}>YPR-SNT-102</span>
                </div>
                <div className="spec-item-chip">
                  <span className="spec-label">x BOY</span>
                  <strong className="spec-val">2.80 m (2800 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">x EN</span>
                  <strong className="spec-val">2.10 m (2100 mm)</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">x KALINLIK</span>
                  <strong className="spec-val">18 mm</strong>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-item-chip">
                  <span className="spec-label">x  KALİTE</span>
                  <strong className="spec-val">E1 Standart</strong>
                </div>
              </div>
            </div>
          ) : slug === 'membran' ? (
            <div className="hero-quick-specs-floating">
              <div className="spec-item-chip">
                <span className="spec-label">S SERİ</span>
                <strong className="spec-val">Berceste Serisi</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x MODELLER</span>
                <strong className="spec-val">B10  B15</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x:️ YSZEY</span>
                <strong className="spec-val">Parmak İzi Tutmaz</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x  KAPLAMA</span>
                <strong className="spec-val">3D Vakum Pres</strong>
              </div>
            </div>
          ) : slug === 'mdf' ? (
            <div className="hero-quick-specs-floating">
              <div className="spec-item-chip">
                <span className="spec-label">x BOY</span>
                <strong className="spec-val">2.80 m (2800 mm)</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x EN</span>
                <strong className="spec-val">2.10 m (2100 mm)</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x KALINLIK</span>
                <strong className="spec-val">8 mm  25 mm</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x  KALİTE</span>
                <strong className="spec-val">E1 Ham & Lam MDF</strong>
              </div>
            </div>
          ) : (
            <div className="hero-quick-specs-floating">
              <div className="spec-item-chip">
                <span className="spec-label">x BOY</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.boy || '2800 mm'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x EN</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.en || '600 mm'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x KALINLIK</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.kalinlik || '18 mm'}</strong>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item-chip">
                <span className="spec-label">x  KALİTE</span>
                <strong className="spec-val">{mainProduct.quickSpecs?.govde || '1. Sınıf Ahxap'}</strong>
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
              <span>WhatsApp</span>
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
                  Sessizlixin Estetik Hali: Mekânlarınıza Akustik Dokunux
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Gürültüyü geride bırakın, yaxam ve çalıxma alanlarınızda kusursuz ses konforunu kexfedin. Akustik ahxap panellerimiz; yankıyı ve gürültüyü emen yüksek performanslı keçe tabanı, doxal ahxap dokusuyla buluxturarak iç mekânlara modern bir zarafet kazandırır.
                </p>

                <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Yüksek Ses Yalıtımı:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Yankıyı ve uxultuyu minimize ederek net, dinlendirici bir akustik ortam oluxturur.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Doxal ve Şık Tasarım:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ahxabın sıcaklıxını çaxdax hatlarla birlextirir; ev, ofis ve stüdyolara estetik katar.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>Kolay ve Hızlı Montaj:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Duvar ve tavanlara zahmetsizce uygulanabilir, mekânın havasını anında dexixtirir.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'inline-block', marginRight: '0.5rem', fontSize: '0.95rem' }}>!evre Dostu ve Dayanıklı:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kaliteli keçe ve sürdürülebilir ahxap malzemelerle uzun ömürlü kullanım sunar.</span>
                  </div>
                </div>

                <p style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  "Yaxam alanlarınıza hem huzur hem de xıklık katmak için koleksiyonumuzu incelemeye baxlayın."
                </p>
              </div>
            ) : slug === 'mdf' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Sparkles size={20} color="var(--accent-gold)" />
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    YSKSEK YOĞUNLUKLU LEVHA TEKNOLOJİSİ
                  </span>
                </div>
                <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', fontWeight: '900', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  Ham & Lam MDF Levhalar: Dayanıklılık & Homojen Gövde Yapısı
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  İç mimari, mobilya üretimi, CNC oyma ve frezeli panel üretimi için özel olarak üretilen <strong>Ham & Lam MDF levhalarımız</strong>; yüksek lif yoxunluxu, pürüzsüz yüzey kalitesi ve uluslararası E1 insan saxlıxı standartları ile projelerinize güç katar.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Homojen Lif Yoxunluxu:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>CNC ve freze ixlemlerinde kenar kırılması yapmayan saxlam iç yapı.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Pürüzsüz Yüzey Kalitesi:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Zımparalanmıx yüzeyi ile lake boya, membran kaplama ve melamin pres için ideal altyapı.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Genix Kalınlık Gamı:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>8 mm, 12 mm, 16 mm, 18 mm ve 25 mm ebat seçenekleri.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>E1 Emisyon Sertifikası:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Düxük formaldehit salınımı ile ev ve ofis kullanımına %100 uygun.</span>
                  </div>
                </div>
              </div>
            ) : slug === 'membran' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Sparkles size={20} color="var(--accent-gold)" />
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    ZEL KAPAK KOLEKSİYONU
                  </span>
                </div>
                <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', fontWeight: '900', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  Berceste Serisi Membran Kapak: Zamansız Şıklık & Kusursuz Yüzeyler
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Modern, country ve neo-klasik mutfak ve banyolar için özel olarak tasarlanan <strong>Berceste Serisi</strong>; yüksek yoxunluklu E1 kalite MDF üzerine 3D vakum pres teknolojisi ile kaplanan parmak izi tutmaz, ipeksi mat PVC membran yüzeylerden üretilmektedir. Eksiz kenar sarımı sayesinde suya, buhara ve neme karxı %100 sızdırmazlık sunar.
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
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>B10 - B15 Profil !exitleri:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Minimalist düz pahtan kademeli ve kasetli modellere zengin CNC profil seçenekleri.</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Yüksek Yoxunluklu E1 MDF:</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Frezeli desenlerde pürüzsüz derinlik ve uzun yıllar formunu koruyan gövde.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2>Bu Srün Grubu Nedir?</h2>
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

      {/* MEMBRAN SERİLERİ İ!ERİK ALANI */}
      {slug === 'membran' ? (
        <section style={{ maxWidth: '1320px', margin: '3rem auto 5rem auto', padding: '0 1.5rem' }}>
          {/* MEMBRAN SERİLERİ GENEL LİSTESİ */}
          <div>
            <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--brand-red)', paddingLeft: '1.25rem' }}>
                <span style={{ color: 'var(--brand-red)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  MEMBRAN KAPAK KOLEKSİYONLARI
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: 'var(--accent-gold)',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Membran Kapak Serileri & Mutfak Vitrinleri
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Seri vitrinlerine tıklayarak kapak modellerini, renk çexitlerini ve detaylı mutfak uygulamalarını inceleyebilirsiniz.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
                {/* 1. SERİ: BERCESTE SERİSİ */}
                <div
                  onClick={() => handleSeriesSelect('berceste')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/berceste/berceste-01-cover.jpg"
                      alt="1. Berceste Serisi Mutfak Uygulaması"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        1. Berceste Serisi
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Mobilya kapaklarında mükemmel vakum tutunması ve parmak izi bırakmayan mat/parlak PVC membran kaplama.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('berceste');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. SERİ: DİLRUBA SERİSİ */}
                <div
                  onClick={() => handleSeriesSelect('dilruba')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/dilruba/dilruba-02-mutfak.jpg"
                      alt="2. Dilruba Serisi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        2. Dilruba Serisi
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Zarif CNC paht detayları, neo-klasik hatlar ve yüksek dayanımlı ipeksi yüzeyli membran kapak modelleri.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('dilruba');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. SERİ: MSBREM SERİSİ */}
                <div
                  onClick={() => handleSeriesSelect('mubrem')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/mubrem/mubrem-01-cover.jpg"
                      alt="3. Mübrem Serisi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        3. Mübrem Serisi
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Modern mimarinin tercihi dikey derzli ve oluklu çıta desenli membran mutfak dolapları ve panel çözümleri.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('mubrem');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. SERİ: ZEVAHİR SERİSİ */}
                <div
                  onClick={() => handleSeriesSelect('zevahir')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/zevahir/zevahir-01-cover.jpg"
                      alt="4. Zevahir Serisi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        4. Zevahir Serisi
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Siyah mat yüzeyler, zengin ahxap dokuları, Z10 - Z37 neo-klasik kaset kapaklar ve ada mutfak konseptleri.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('zevahir');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 5. SERİ: LAVİNİA SERİSİ */}
                <div
                  onClick={() => handleSeriesSelect('lavinia')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/lavinia/lavinia-01-cover.jpg"
                      alt="5. Lavinia Serisi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        5. Lavinia Serisi
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Zeytin yexili antik tonlar, büyük kemerli füme cam vitrinler, kahve barı konsepti ve lüks kaset dolaplar.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('lavinia');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 6. SERİ: ELTAF SERİSİ */}
                <div
                  onClick={() => handleSeriesSelect('eltaf')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/eltaf/eltaf-01-cover.jpg"
                      alt="6. Eltaf Serisi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        6. Eltaf Serisi
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Pembe ve krem tonlarında kavisli kemerli çocuk & genç odası dolapları, çalıxma masası ve kaset membran modelleri.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('eltaf');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 7. SERİ: CAMLI SERİ */}
                <div
                  onClick={() => handleSeriesSelect('camli')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/camli/camli-01-cover.jpg"
                      alt="7. Camlı Seri"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        7. Camlı Seri
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Vitrinler, portmantolar ve özel mutfak modülleri için füme ve xeffaf cam çıtalı, 4-8-12 gözlü CNC membran çerçeve kapak modelleri.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('camli');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>

                {/* 8. SERİ: DİĞER MODELLER & DAVLUMBAZLAR */}
                <div
                  onClick={() => handleSeriesSelect('diger')}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="series-card-item"
                >
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src="/membran/diger/diger-01-cover.jpg"
                      alt="8. Diğer Modeller & Davlumbazlar"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#0F172A',
                      color: '#EAB308',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      YPR-MEMBRAN
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#1E293B',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.5px'
                    }}>
                      MEMBRAN
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.65rem 0', fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                        8. Diğer Modeller & Davlumbazlar
                      </h3>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.975rem', lineHeight: '1.6' }}>
                        Panjur kapaklı lüks giyinme odası gardıropları ve B10 – B27 özel tasarım vakum press membran davlumbaz kapaklar.
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSeriesSelect('diger');
                        }}
                        style={{
                          padding: '0.55rem 1.1rem',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          color: '#334155',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '6px',
                          background: 'var(--card-bg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Kategori Lansman Vitrinini İncele
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      ) : (
        /* OTHER CATEGORIES: Color Swatches Grid */
        <section style={{ maxWidth: '1320px', margin: '3rem auto 5rem auto', padding: '0 1.5rem' }}>
          {/* Slatted Texture Banner / Sunta Banner / MDF Banner / Lambri Banner above Color Palettes */}
          {slug === 'lambri' ? (
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
              border: '1.5px solid var(--border-gold)',
              height: '480px',
              position: 'relative',
              background: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Blurred Ambient Background */}
              <img
                src="/lambri-banner.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'blur(25px) brightness(0.4)',
                  transform: 'scale(1.1)',
                  pointerEvents: 'none'
                }}
              />
              {/* High-Clarity Full-Fit Foreground Image */}
              <img
                src="/lambri-banner.png"
                alt="Ahxap Lambri Stok Görseli"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '0.75rem',
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.7))'
                }}
              />
            </div>
          ) : slug === 'arkalik' ? (
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
              border: '1.5px solid var(--border-gold)',
              height: '450px',
              background: 'var(--card-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}>
              <img
                src="/arkalik-banner.png"
                alt="MDF Arkalık Levhaları Görseli"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
              />
            </div>
          ) : slug === 'panel' ? (
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
              border: '1.5px solid var(--border-gold)',
              height: '420px',
              position: 'relative',
              background: '#0A0E1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Ambient Blurred Backdrop */}
              <img
                src="/panel-banner.jpg"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'blur(30px) brightness(0.4)',
                  transform: 'scale(1.1)',
                  pointerEvents: 'none'
                }}
              />
              {/* Full-Fit Sharp Foreground Image */}
              <img
                src="/panel-banner.jpg"
                alt="Dekoratif Ahxap Duvar Panelleri Görseli"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '0.75rem',
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.8))'
                }}
              />
            </div>
          ) : (
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', border: '1.5px solid var(--border-gold)', height: slug === 'mdf' ? '320px' : '240px', background: slug === 'sunta' ? '#FFFFFF' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={slug === 'sunta' ? '/sunta-banner.png' : slug === 'mdf' ? '/mdf-banner.jpg' : '/renk-paleti-banner.png'}
                alt={slug === 'sunta' ? 'Sunta Levha Görseli' : slug === 'mdf' ? 'Ham & Lam MDF Levha Görseli' : '!ıtalı Panel Doku Banner'}
                style={{ width: '100%', height: '100%', objectFit: slug === 'sunta' ? 'contain' : 'cover', objectPosition: 'center center', padding: slug === 'sunta' ? '1rem' : '0' }}
              />
            </div>
          )}

          {slug === 'panel' ? (
            <div>
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
                  Dekoratif Panel Renk Seçenekleri
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Koleksiyon kutucuklarına tıklayarak renk grupları arasında geçix yapabilirsiniz. Siparixlerinizi oluxtururken fiili kartela üzerinden dexerlendirme yapabilirsiniz.
                </p>
              </div>

              {/* Tıklamalı Kategori Kutucukları / Filtre Butonları */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <button
                  onClick={() => setSelectedPanelGroup('all')}
                  style={{
                    padding: '0.75rem 1.4rem',
                    borderRadius: '8px',
                    border: selectedPanelGroup === 'all' ? '2px solid var(--accent-gold)' : '1px solid var(--border-dark)',
                    background: selectedPanelGroup === 'all' ? 'var(--accent-gold)' : 'var(--card-bg)',
                    color: selectedPanelGroup === 'all' ? '#0F172A' : 'var(--text-primary)',
                    fontWeight: '800',
                    fontSize: '0.925rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: selectedPanelGroup === 'all' ? '0 4px 15px rgba(234, 179, 8, 0.3)' : 'none'
                  }}
                >
                  Tüm Paneller ({panelColorGroups.reduce((acc, g) => acc + g.colors.length, 0)})
                </button>
                {panelColorGroups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setSelectedPanelGroup(group.id)}
                    style={{
                      padding: '0.75rem 1.4rem',
                      borderRadius: '8px',
                      border: selectedPanelGroup === group.id ? '2px solid var(--accent-gold)' : '1px solid var(--border-dark)',
                      background: selectedPanelGroup === group.id ? 'var(--accent-gold)' : 'var(--card-bg)',
                      color: selectedPanelGroup === group.id ? '#0F172A' : 'var(--text-primary)',
                      fontWeight: '800',
                      fontSize: '0.925rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxShadow: selectedPanelGroup === group.id ? '0 4px 15px rgba(234, 179, 8, 0.3)' : 'none'
                    }}
                  >
                    {group.title} ({group.colors.length})
                  </button>
                ))}
              </div>

              {/* Renk Grupları ve Kartelalar */}
              {panelColorGroups
                .filter((group) => selectedPanelGroup === 'all' || selectedPanelGroup === group.id)
                .map((group) => (
                  <div key={group.id} style={{ marginBottom: '3.5rem' }}>
                    {/* Grup Baxlıxı (Sarı Alt !izgili) */}
                    <div style={{ marginBottom: '1.75rem', borderBottom: '3px solid #EAB308', paddingBottom: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                          {group.title}
                        </h3>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'block', marginTop: '0.2rem' }}>
                          {group.description}
                        </span>
                      </div>
                      <span style={{ background: 'rgba(234, 179, 8, 0.15)', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.775rem', fontWeight: '800' }}>
                        {group.colors.length} RENK SE!ENEĞİ
                      </span>
                    </div>

                    {/* Renk Kartelası Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
                        gap: '1.5rem',
                      }}
                    >
                      {group.colors.map((color) => (
                        <div
                          key={color.code}
                          onClick={() => handleWhatsAppInquiry(`${group.title} - ${color.code}`)}
                          style={{
                            background: 'var(--card-bg)',
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
                                color: 'var(--text-primary)',
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

                          <div style={{ padding: '0.75rem 1rem', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: '800', fontSize: '0.925rem', color: '#1E293B' }}>
                              {color.code}
                            </span>
                            <MessageCircle size={18} color="var(--brand-red)" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <>
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
                  {slug === 'akustik' ? 'Akustik Panel Renk Kartelası' : slug === 'sunta' ? 'Stoklu Sunta & Suntalam Renk Kartelası' : slug === 'mdf' ? 'Stoklu MDF Renk Kartelası (Sadece Beyaz)' : slug === 'arkalik' ? 'Stoklu Arkalık Levha !exitleri' : 'Stoklu Renk Kartelası'}
                </h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {(slug === 'sunta' ? suntaColors : slug === 'mdf' ? mdfColors : slug === 'arkalik' ? arkalikColors : akustikColors).map((color) => (
                  <div
                    key={color.code}
                    onClick={() => handleWhatsAppInquiry(color.code)}
                    style={{
                      background: 'var(--card-bg)',
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
                          color: 'var(--text-primary)',
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

                    <div style={{ padding: '0.75rem 1rem', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#1E293B' }}>
                        {color.code}
                      </span>
                      <MessageCircle size={18} color="var(--brand-red)" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Prominent Store Visit Disclaimer Banner */}
          <div
            style={{
              marginTop: '3.5rem',
              padding: '1.75rem 2rem',
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(220, 38, 38, 0.12) 100%)',
              border: '2px dashed var(--accent-gold)',
              borderRadius: '12px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '900', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
                Daha Fazla Renk Seçenexi ve Canlı Numuneler İçin Maxazamıza Uxrayınız
              </h4>
            </div>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.975rem', maxWidth: '850px', lineHeight: '1.6' }}>
              Ekranınızda ton ve doku farklılıkları olabilir. !ok daha fazla renk çexidini görmek, dokuları birebir hissetmek ve fiili kartela üzerinden siparixinizi oluxturmak için sizi <strong>Yapar Orman Ürünleri</strong> maxazamıza bekliyoruz.
            </p>
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
                  Berceste Serisi Yüksek !özünürlüklü Katalog Görseli
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
              background: 'var(--card-bg)'
            }}>
              <img
                src={previewImage}
                alt="nizleme"
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
                Yapar Orman Ürünleri ⬢ Mutfak & Banyo Membran Kapak Sistemleri
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
