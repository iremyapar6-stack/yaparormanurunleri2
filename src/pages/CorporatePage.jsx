import React from 'react';
import { Target, Eye, ShieldCheck, Factory, Users, CheckCircle2, Award, Truck, TreePine } from 'lucide-react';

export default function CorporatePage() {
  return (
    <div>
      <section className="page-header">
        <h1>Kurumsal Profil & Misyon / Vizyon</h1>
        <p>Yapar Orman Ürünleri — Yılların ahşap tecrübesi, kereste kalitesi ve Arkopa güvencesiyle mekanlara değer katıyoruz.</p>
      </section>

      <section style={{ maxWidth: '1320px', margin: '4rem auto', padding: '0 1.5rem' }}>
        {/* Key Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ background: 'var(--bg-surface)', padding: '2.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-dark)' }}>
            <Award size={40} className="card-icon" style={{ color: '#b45309', marginBottom: '1.25rem' }} />
            <h3 className="card-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '0.6rem', fontSize: '1.3rem', fontWeight: '700' }}>Kalite & Standartlar</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65' }}>
              Ürün gruplarımızda yer alan keçeli akustik paneller, lambiriler, MDF ve PVC membran yüzeyler uluslararası E1 ve akustik izolasyon standartlarına %100 uyumludur.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface)', padding: '2.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-dark)' }}>
            <Factory size={40} className="card-icon" style={{ color: '#b45309', marginBottom: '1.25rem' }} />
            <h3 className="card-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '0.6rem', fontSize: '1.3rem', fontWeight: '700' }}>Stok & Güçlü Lojistik</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65' }}>
              Kayseri merkez depomuzda zengin renk, kaplama, en ve boy seçenekleriyle projelerinize kesintisiz stok ve zamanında hızlı teslimat garantisi veriyoruz.
            </p>
          </div>
        </div>

        {/* =========================================================================
           MİSYON VE VİZYON DETAYLI BÖLÜMÜ
           ========================================================================= */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          {/* MİSYON */}
          <div style={{ background: 'var(--bg-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(180, 83, 9, 0.1)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
                <Target size={32} className="card-icon" style={{ color: '#b45309' }} />
              </div>
              <div>
                <span className="badge-title" style={{ color: '#b45309', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.05em', display: 'block' }}>KURUMSAL DEĞERLER</span>
                <h2 className="card-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.75rem', fontWeight: '700', margin: 0 }}>MİSYONUMUZ</h2>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              Yapar Orman Ürünleri olarak misyonumuz; ahşap ve yapı malzemeleri sektöründe yüksek kalite standartlarına sahip Lambri, Keçeli Akustik Panel, Ham & Lam MDF ve PVC Membran ürün gruplarını en doğru fiyatlandırma, dürüst ticaret anlayışı ve kesintisiz stok desteği ile müşterilerimize sunmaktır.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: '1.8' }}>
              Üretim ve tedarik süreçlerimizde çevreye ve insan sağlığına saygılı sürdürülebilir ahşap kaynaklarını desteklemek, mimari projelerde teknik ve estetik mükemmelliğe katkı sağlamak ana varlık sebebimizdir.
            </p>
          </div>

          {/* VİZYON */}
          <div style={{ background: 'var(--bg-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-dark)', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(180, 83, 9, 0.1)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
                <Eye size={32} className="card-icon" style={{ color: '#b45309' }} />
              </div>
              <div>
                <span className="badge-title" style={{ color: '#b45309', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.05em', display: 'block' }}>GELECEK HEDEFİ</span>
                <h2 className="card-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.75rem', fontWeight: '700', margin: 0 }}>VİZYONUMUZ</h2>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              Vizyonumuz; Kayseri ve İç Anadolu Bölgesi'ndeki köklü liderliğimizi ulusal ve uluslararası platformlara taşıyarak iç mimari ahşap yüzeyler, ses emici akustik çözümler ve membran grubunda ilk tercih edilen marka olmaktır.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: '1.8' }}>
              Gelişen teknolojileri, çağdaş mimari akımları ve yeni nesil kaplama sistemlerini yakından izleyerek; estetik, fonksiyonellik ve dayanıklılığı bir arada sunan ürün portföyümüzü sürekli zenginleştirmektir.
            </p>
          </div>
        </div>

        {/* Corporate Profile Details */}
        <div style={{ background: 'var(--bg-surface)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-dark)', lineHeight: '1.8', boxShadow: 'var(--shadow-dark)' }}>
          <h2 className="card-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '2rem', fontWeight: '700' }}>
            Hakkımızda & Kalite Politikamız
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Yapar Orman Ürünleri A.Ş., ahşap işleme ve levha sektöründe yıllara dayanan deneyimi, dürüst ticaret ilkeleri ve müşteri memnuniyetini her zaman ön planda tutan kurumsal yapısı ile bölgesinde örnek bir kuruluştur.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            Tedarik portföyümüzde yer alan çam ve ladin lambiriler, yüksek yoğunluklu ses emici keçe zeminli akustik paneller, E1 emisyonlu ham MDF ve melamin kaplı levhalar ile 3D vakum membran kaplamalar yaşam alanlarınıza estetik ve akustik konfor kazandırmaktadır.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', borderTop: '1px dashed var(--border-dark)', paddingTop: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 className="card-icon" color="#b45309" size={22} />
              <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>%100 Masif Nem Kontrollü Ahşap</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 className="card-icon" color="#b45309" size={22} />
              <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>1500 g/m² Yoğun Akustik Keçe Taban</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 className="card-icon" color="#b45309" size={22} />
              <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Parmak İzi Tutmaz PVC Membran</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 className="card-icon" color="#b45309" size={22} />
              <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Zamanında Hızlı Lojistik Sevkiyat</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
