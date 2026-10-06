import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Sparkles, MessageCircle, Phone } from 'lucide-react';

const slides = [
  {
    id: 1,
    tag: 'KEÇELİ AKUSTİK PANEL',
    title: 'Estetik Çıtalar ve Yüksek Akustik Performans',
    subtitle: 'Siyah keçe zemin üzerine doğal meşe, ceviz ve antrasit kaplamalı ahşap çıtalar ile yankısız, lüks iç mekanlar.',
    image: '/hero-slide-1.jpg',
    primaryBtnText: 'Akustik Panelleri İnceleyin',
    catId: 'akustik',
  },
  {
    id: 2,
    tag: 'AHŞAP LAMBRİ',
    title: 'Doğal Yerli Çam ve İskandinav Ladin Lambiri',
    subtitle: 'Çatlama ve dönme yapmayan birinci sınıf duvar ve tavan ahşap kaplamaları.',
    image: '/hero-slide-2.jpg',
    primaryBtnText: 'Lambiri Koleksiyonunu İnceleyin',
    catId: 'lambri',
  },
  {
    id: 3,
    tag: 'HAM & LAM MDF LEVHALAR',
    title: 'Yüksek Yoğunluklu MDF & Akustik Frezeli Levha',
    subtitle: 'E1 emisyon standartlarında, CNC işleme ve mobilya üretimine uygun homojen ham MDF ve melamin kaplı levhalar.',
    image: '/hero-slide-3.jpg',
    primaryBtnText: 'MDF Çözümlerini İnceleyin',
    catId: 'mdf',
  },
  {
    id: 4,
    tag: 'BERCESTE SERİSİ & PVC MEMBRAN',
    title: 'Berceste Serisi 3D Vakum Membran Kapaklar',
    subtitle: 'Mutfak ve banyolara özel parmak izi tutmaz mat lake dokulu, CNC işlemeli lüks profil membran kapak modelleri.',
    image: '/hero-slide-4.jpg',
    primaryBtnText: 'Membran Modellerini İnceleyin',
    catId: 'membran',
  },
];

export default function HeroSlider({ onSelectCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
      const el = document.getElementById('katalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-slider-container">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`slide-item ${idx === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="slide-bg-image" />
          <div className="slide-overlay"></div>

          <div className="slide-content-wrapper">
            <div className="slide-content">
              <span className="slide-tag">
                <Sparkles size={14} />
                <span>YAPAR ORMAN — {slide.tag}</span>
              </span>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleCategoryClick(slide.catId)}
                  className="btn-primary"
                >
                  <span>{slide.primaryBtnText}</span>
                </button>
                <a
                  href={`https://wa.me/905336415837?text=${encodeURIComponent(`Merhaba Yapar Orman Ürünleri, ${slide.tag} hakkında fiyat teklifi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle size={20} color="#16A34A" />
                  <span>WhatsApp Hızlı Teklif</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="slider-arrows">
        <button className="arrow-btn" onClick={prevSlide} aria-label="Önceki Slayt">
          <ChevronLeft size={24} />
        </button>
        <button className="arrow-btn" onClick={nextSlide} aria-label="Sonraki Slayt">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
