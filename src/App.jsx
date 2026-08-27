import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import CorporatePage from './pages/CorporatePage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/CategoryPage';
import ColorsPage from './pages/ColorsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kurumsal" element={<CorporatePage />} />
        <Route path="urunler" element={<ProductsPage />} />
        <Route path="kategori/:slug" element={<CategoryPage />} />
        <Route path="renkler" element={<ColorsPage />} />
        <Route path="iletisim" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
