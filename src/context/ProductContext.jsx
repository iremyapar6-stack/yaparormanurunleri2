import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { products as rawProducts, categories } from "../data/products";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products] = useState(rawProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Theme Management (Dark / Light Mode)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("yapar_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("yapar_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.productCode.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        (product.quickSpecs?.renkKodu && product.quickSpecs.renkKodu.toLowerCase().includes(query)) ||
        (product.surfaceType && product.surfaceType.toLowerCase().includes(query)) ||
        (product.coreMaterial && product.coreMaterial.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const value = {
    products,
    categories,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    theme,
    toggleTheme,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts Hook'u ProductProvider içinde kullanılmalıdır!");
  }
  return context;
};
