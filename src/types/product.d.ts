export type CategoryId = "all" | "lambri" | "akustik-panel" | "membran" | "sunta";

export interface Category {
  id: CategoryId;
  name: string;
  description?: string;
  icon?: string;
}

export interface ProductSpecs {
  genislik?: string;
  yukseklik?: string;
  kalinlik?: string;
  uzunluk?: string;
  agacTuru?: string;
  kaliteSinfi?: string;
  nemOrani?: string;
  paketIcerigi?: string;
  citaGenisligi?: string;
  citaAraligi?: string;
  citaMalzemesi?: string;
  keceTabani?: string;
  yuzeyIslemi?: string;
  montaj?: string;
  ruloGenislik?: string;
  ruloUzunluk?: string;
  yuzeyTipi?: string;
  malzeme?: string;
  presSicakligi?: string;
  renk?: string;
  ebat?: string;
  yogunluk?: string;
  emisyonSinfi?: string;
  yuzeyZimpara?: string;
  kullanimAlani?: string;
  CizilmeDirenci?: string;
  renkSeçenekleri?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  slug: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpecs;
  pdfUrl?: string;
  featured: boolean;
}

export interface ProductContextType {
  products: Product[];
  categories: Category[];
  filteredProducts: Product[];
  featuredProducts: Product[];
  categoryCounts: Record<string, number>;
  selectedCategory: CategoryId;
  setSelectedCategory: (category: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  getProductBySlug: (slug: string) => Product | null;
}
