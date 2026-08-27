import React from 'react';
import { X, MessageCircle, Phone, Download, CheckCircle2, ShieldCheck, Ruler, Palette, Tag, Layers, HelpCircle, LayoutGrid } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const phoneNumber = "+905336415837";
  const whatsappNumber = "905336415837";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const text = `Merhaba Yapar Orman Ürünleri,\n${product.productCode} - "${product.title}" ürünü hakkında bilgi ve detaylı fiyat teklifi almak istiyorum.\n\nEbat Specs: Boy: ${product.quickSpecs?.boy || 'N/A'}, En: ${product.quickSpecs?.en || 'N/A'}, Renk Kodu: ${product.quickSpecs?.renkKodu || 'N/A'}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-content-large" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Kapat">
          <X size={22} />
        </button>

        <div className="modal-body-wrapper">
          {/* Product Media Column */}
          <div className="modal-image-col">
            <div className="modal-image-box">
              <img src={product.images[0]} alt={product.title} />
              <span className="modal-badge-cat">{product.categoryName || product.category}</span>
            </div>

            {/* Quick Contact Box inside modal */}
            <div className="modal-contact-card">
              <h4>
                <ShieldCheck color="var(--accent-gold)" size={18} />
                <span>İLETİŞİM & SİPARİŞ HATTI</span>
              </h4>
              <p>Müteahhit, iç mimar ve usta projelerine özel fiyat teklifi alın.</p>

              <div className="modal-contact-actions">
                <button onClick={handlePhoneCall} className="btn-phone-call">
                  <Phone size={17} />
                  <span>Hemen Ara: (0266) 000 00 00</span>
                </button>
                <button onClick={handleWhatsApp} className="btn-whatsapp-direct">
                  <MessageCircle size={17} />
                  <span>WhatsApp Teklif Al</span>
                </button>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="modal-details-col">
            <div className="modal-header-info">
              <span className="modal-code-tag">{product.productCode}</span>
              <h2>{product.title}</h2>
              <p className="modal-sub-desc">{product.shortDescription}</p>
            </div>

            {/* 1. Ne Olduğu (What it is) */}
            <div className="modal-section-box">
              <h3 className="section-title">
                <HelpCircle size={18} color="var(--accent-gold)" />
                <span>Bu Ürün Nedir? (Ne Olduğu)</span>
              </h3>
              <p className="section-text">{product.whatIsIt || product.fullDescription}</p>
            </div>

            {/* 2. Nerelerde Kullanılabilir (Usage Areas) */}
            {product.usageAreas && product.usageAreas.length > 0 && (
              <div className="modal-section-box">
                <h3 className="section-title">
                  <LayoutGrid size={18} color="var(--accent-gold)" />
                  <span>Nerelerde Kullanılabilir? (Kullanım Alanları)</span>
                </h3>
                <ul className="usage-chips-grid">
                  {product.usageAreas.map((area, idx) => (
                    <li key={idx} className="usage-chip">
                      <CheckCircle2 size={15} color="var(--accent-gold)" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Kısa Bilgi Kartları (Quick Info Cards) */}
            <div className="modal-section-box">
              <h3 className="section-title">
                <Ruler size={18} color="var(--accent-gold)" />
                <span>Kısa Bilgi & Ölçü Kartları</span>
              </h3>

              <div className="info-cards-grid">
                {product.quickSpecs?.boy && (
                  <div className="info-card-item">
                    <span className="info-card-label">📏 Boy (Uzunluk)</span>
                    <span className="info-card-value">{product.quickSpecs.boy}</span>
                  </div>
                )}

                {product.quickSpecs?.en && (
                  <div className="info-card-item">
                    <span className="info-card-label">📐 En (Genişlik)</span>
                    <span className="info-card-value">{product.quickSpecs.en}</span>
                  </div>
                )}

                {product.quickSpecs?.renk && (
                  <div className="info-card-item">
                    <span className="info-card-label">🎨 Renk</span>
                    <span className="info-card-value">{product.quickSpecs.renk}</span>
                  </div>
                )}

                {product.quickSpecs?.renkKodu && (
                  <div className="info-card-item highlight">
                    <span className="info-card-label">🏷️ Renk Kodu</span>
                    <span className="info-card-value">{product.quickSpecs.renkKodu}</span>
                  </div>
                )}

                {product.quickSpecs?.kalinlik && (
                  <div className="info-card-item">
                    <span className="info-card-label">🧱 Kalınlık</span>
                    <span className="info-card-value">{product.quickSpecs.kalinlik}</span>
                  </div>
                )}

                {product.quickSpecs?.yuzey && (
                  <div className="info-card-item">
                    <span className="info-card-label">✨ Yüzey Tipi</span>
                    <span className="info-card-value">{product.quickSpecs.yuzey}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Full Specs Table */}
            <div className="modal-specs-table-wrapper">
              <h4>TÜM TEKNİK DETAYLAR</h4>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <td>Ürün Kategori</td>
                    <td style={{ textTransform: 'capitalize', fontWeight: '700', color: 'var(--accent-gold)' }}>
                      {product.categoryName || product.category}
                    </td>
                  </tr>
                  <tr>
                    <td>Taşıyıcı Gövde</td>
                    <td>{product.quickSpecs?.govde || product.coreMaterial || 'Yüksek Kalite Ahşap'}</td>
                  </tr>
                  {Object.entries(product.specs || {}).map(([key, val]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Bar */}
            <div className="modal-footer-actions">
              <button onClick={handlePhoneCall} className="btn-call-action">
                <Phone size={18} />
                <span>Telefon Hattı</span>
              </button>

              <button onClick={handleWhatsApp} className="btn-whatsapp-action">
                <MessageCircle size={18} />
                <span>WhatsApp Teklif Al</span>
              </button>

              {product.pdfUrl && (
                <a
                  href={product.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pdf-action"
                >
                  <Download size={17} />
                  <span>PDF Kataloğu</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
