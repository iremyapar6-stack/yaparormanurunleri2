import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

export default function ProductsPage() {
  const navigate = useNavigate();
  const {
    categories,
    filteredProducts,
    selectedCategory,
  } = useProducts();

  const handleProductClick = (categorySlug) => {
    navigate(`/kategori/${categorySlug}`);
  };

  return (
    <div>
      <section className="page-header">
        <h1>Tüm Ürün Koleksiyonumuz</h1>
        <p>Membran, Akustik, Sunta, MDF, Lambri, Arkalık ve Panel Ürün Kataloğumuz</p>
      </section>

      <main className="catalog-container">
        <div className="catalog-header">
          <h2 className="catalog-title">
            {selectedCategory === 'all' ? 'Tüm Ürünler' : categories.find((c) => c.id === selectedCategory)?.name}
          </h2>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="arkopa-card"
              onClick={() => handleProductClick(product.category)}
            >
              <div className="card-media">
                <img src={product.images[0]} alt={product.title} />
                <span className="card-code-badge">{product.productCode}</span>
                <span className="card-cat-badge">{product.categoryName || product.category}</span>
              </div>

              <div className="card-content">
                <h3>{product.title}</h3>
                <p className="card-desc-short">{product.shortDescription}</p>

                <div className="card-footer-actions" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <button
                    className="btn-detail"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.category);
                    }}
                    style={{ width: '100%' }}
                  >
                    Kategori Lansman Vitrinini İncele
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
