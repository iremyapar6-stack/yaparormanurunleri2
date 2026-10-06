export const categories = [
  { id: "all", name: "Tüm Ürünler", icon: "Grid" },
  { id: "membran", name: "Membran", subName: "PVC Membran Kaplama", icon: "Award" },
  { id: "akustik", name: "Akustik", subName: "Akustik Ses Panelleri", icon: "Volume2" },
  { id: "sunta", name: "Sunta", subName: "Sunta & Yonga Levhalar", icon: "Layers" },
  { id: "mdf", name: "MDF", subName: "MDF Levha & Melamin", icon: "Box" },
  { id: "lambri", name: "Lambri", subName: "Duvar & Tavan Lambirileri", icon: "Layers" },
  { id: "arkalik", name: "Arkalık", subName: "MDF Arkalık Levhaları", icon: "LayoutGrid" },
  { id: "panel", name: "Panel", subName: "Dekoratif Ahşap & Duvar Panelleri", icon: "LayoutGrid" },
];

export const products = [
  // ==========================================
  // 1. MEMBRAN
  // ==========================================
  {
    id: "mem-01",
    productCode: "YPR-MEMBRAN",
    title: "Membran",
    category: "membran",
    categoryName: "Membran",
    slug: "pvc-membran-kaplama",
    images: [
      "/membran/berceste-ana-mutfak.png",
      "/membran/berceste-detay-kolaj.png",
      "/membran/berceste-b10-b11.png",
      "/membran/berceste-b12-b13.png",
      "/membran/berceste-b14-b15.png"
    ],
    shortDescription: "Mobilya kapaklarında mükemmel vakum tutunması ve parmak izi bırakmayan mat/parlak PVC membran kaplama.",
    fullDescription: "3D vakum pres makinelerinde yüksek esneklik ve kusursuz kenar sarma performansı sunan PVC membran folyodur.",
    whatIsIt: "MDF kapaklar üzerine 3D vakum ısı presi ile uygulanan, su ve nem geçirmeyen, ipeksi mat dokunuşa sahip parmak izi tutmaz termoplastik membran kaplamadır.",
    usageAreas: [
      "Modern mutfak dolabı kapakları",
      "Banyo dolabı vakum kapakları",
      "Portmanto ve gardırop kapakları",
      "TV ünitesi ve konsol kapakları"
    ],
    quickSpecs: {
      boy: "100 m Rulo",
      en: "1400 mm",
      renk: "Mat Antrasit / Soft Touch",
      renkKodu: "YPR-MBR401",
      kalinlik: "0.35 mm",
      yuzey: "Soft Touch Mat (Parmak İzi Tutmaz)",
      govde: "1. Kalite Termoplastik PVC Folyo"
    },
    specs: {
      "Boy (Rulo Uzunluğu)": "100 m Rulo",
      "En (Rulo Genişliği)": "1400 mm",
      "Renk": "Mat Antrasit",
      "Renk Kodu": "YPR-MBR401",
      "Kalınlık": "0.35 mm"
    },
    pdfUrl: "/pdfs/membran-katalog.pdf",
    featured: true
  },

  // ==========================================
  // 2. AKUSTİK
  // ==========================================
  {
    id: "aku-01",
    productCode: "YPR-AKUSTİK",
    title: "Akustik",
    category: "akustik",
    categoryName: "Akustik",
    slug: "akustik-ses-panelleri",
    images: [
      "/akustik-duvar-paneli.png"
    ],
    shortDescription: "Sürdürülebilir ahşabın sıcaklığını modern tasarımla buluşturan çevre dostu ve dayanıklı panellerimiz, pratik montaj avantajıyla mekânlarınızın atmosferini zahmetsizce yeniler.",
    fullDescription: "Sürdürülebilir ahşabın sıcaklığını modern tasarımla buluşturan çevre dostu ve dayanıklı panellerimiz, pratik montaj avantajıyla mekânlarınızın atmosferini zahmetsizce yeniler.",
    whatIsIt: "Sürdürülebilir ahşabın sıcaklığını modern tasarımla buluşturan çevre dostu ve dayanıklı panellerimiz, pratik montaj avantajıyla mekânlarınızın atmosferini zahmetsizce yeniler.",
    usageAreas: [
      "Toplantı salonları ve ofisler",
      "Restoran ve otel lobileri",
      "Konut salon TV arkası panelleri",
      "Müzik stüdyoları ve amfiler"
    ],
    quickSpecs: {
      boy: "2800 mm",
      en: "600 mm",
      renk: "Doğal Meşe Ahşap",
      renkKodu: "YPR-AKU201",
      kalinlik: "20 mm",
      yuzey: "Mat Vernikli Ahşap Kaplama",
      govde: "Akustik MDF Lamel Profil"
    },
    specs: {
      "Boy (Uzunluk)": "2800 mm",
      "En (Genişlik)": "600 mm",
      "Renk": "Doğal Meşe",
      "Renk Kodu": "YPR-AKU201",
      "Toplam Kalınlık": "20 mm"
    },
    pdfUrl: "/pdfs/akustik-katalog.pdf",
    featured: true
  },

  // ==========================================
  // 3. SUNTA
  // ==========================================
  {
    id: "snt-01",
    productCode: "YPR-SUNTA",
    title: "Sunta",
    category: "sunta",
    categoryName: "Sunta",
    slug: "sunta-yonga-levhalar",
    images: [
      "/sunta-levha.png"
    ],
    shortDescription: "Yüksek vida tutma mukavemetine sahip E1 emisyon standartlı ham ve melamin kaplı yonga levha.",
    fullDescription: "Mobilya imalatında ve inşaat kalıplamasında kullanılan E1 emisyon standartlarına uygun yüksek kaliteli yonga levha.",
    whatIsIt: "Odun yongalarının sentetik reçine tutkalları ile yüksek ısı ve basınç altında preslenmesiyle imal edilen standart mobilya levhasıdır.",
    usageAreas: [
      "Mobilya gövde imalatları",
      "İç mekan bölme duvarlar",
      "Paketleme ve ambalaj sektörü",
      "Raf ve gardırop modülleri"
    ],
    quickSpecs: {
      boy: "3660 mm (3.66 m)",
      en: "1820 mm (1.82 m)",
      renk: "Ham Yonga Ahşap",
      renkKodu: "YPR-SNT101",
      kalinlik: "18 mm",
      yuzey: "Zımparalanmış Düz Yüzey",
      govde: "E1 Standart Yonga Levha"
    },
    specs: {
      "Boy (Uzunluk)": "3660 mm (3.66 m) / 2800 mm (2.80 m)",
      "En (Genişlik)": "1820 mm (1.82 m) / 2100 mm (2.10 m)",
      "Renk": "Ham Yonga",
      "Renk Kodu": "YPR-SNT101",
      "Kalınlık": "18 mm"
    },
    pdfUrl: "/pdfs/sunta-katalog.pdf",
    featured: true
  },

  // ==========================================
  // 4. MDF
  // ==========================================
  {
    id: "mdf-01",
    productCode: "YPR-MDF",
    title: "MDF",
    category: "mdf",
    categoryName: "MDF",
    slug: "mdf-levha-ve-melamin",
    images: [
      "/mdf-levha.png"
    ],
    shortDescription: "CNC işleme ve lake boyaya uygun homojen iç dokulu birinci sınıf ham ve melamin MDF levha.",
    fullDescription: "Mobilya imalatında, lake boyalı kapaklarda ve CNC freze bıçak işlemlerinde mükemmel kenar mukavemeti sağlayan standart ham MDF.",
    whatIsIt: "Odun liflerinin yüksek basınç ve sıcaklıkta sentetik reçineler ile birleştirilmesi sonucu oluşan yüksek yoğunluklu ahşap levhadır.",
    usageAreas: [
      "CNC freze oymacılık ve kapak imalatı",
      "Lake boyalı mutfak ve banyo kapakları",
      "İç mekan mobilya gövdeleri ve raflar",
      "Mimar tasarım özel üniteler"
    ],
    quickSpecs: {
      boy: "3660 mm",
      en: "1830 mm",
      renk: "Ham MDF / Melamin",
      renkKodu: "YPR-MDF301",
      kalinlik: "18 mm",
      yuzey: "Zımparalanmış Pürüzsüz Ham Yüzey",
      govde: "Homojen Odun Lifi"
    },
    specs: {
      "Boy (Uzunluk)": "3660 mm",
      "En (Genişlik)": "1830 mm",
      "Renk": "Ham MDF",
      "Renk Kodu": "YPR-MDF301",
      "Kalınlık": "18 mm"
    },
    pdfUrl: "/pdfs/mdf-katalog.pdf",
    featured: true
  },

  // ==========================================
  // 5. LAMBRİ
  // ==========================================
  {
    id: "lmb-01",
    productCode: "YPR-LAMBRİ",
    title: "Lambri",
    category: "lambri",
    categoryName: "Lambri",
    slug: "duvar-ve-tavan-lambirileri",
    images: [
      "/lambri-kaplama.png"
    ],
    shortDescription: "Yerli çam ve İskandinav ladin ağacından imal edilen masif tavan ve duvar lambirisi.",
    fullDescription: "Nem oranı dengelenmiş çam lambirilerimiz, çatlama ve dönme yapmadan uzun ömürlü kullanım sunar.",
    whatIsIt: "Doğal çam ağacının zımparalanıp geçmeli profil olarak işlenmesiyle elde edilen %100 masif ahşap kaplama malzemesidir.",
    usageAreas: [
      "İç mekan duvar kaplamaları",
      "Tavan ve sundurma altı kaplamaları",
      "Dağ evi ve otel mimarisi",
      "Veranda ve teras tavanları"
    ],
    quickSpecs: {
      boy: "3000 mm",
      en: "95 mm",
      renk: "Doğal Çam",
      renkKodu: "YPR-LMB101",
      kalinlik: "15 mm",
      yuzey: "Masif Ahşap Pürüzsüz Yüzey",
      govde: "Çam Kereste"
    },
    specs: {
      "Boy (Uzunluk)": "3000 mm",
      "En (Genişlik)": "95 mm",
      "Renk": "Doğal Çam",
      "Renk Kodu": "YPR-LMB101",
      "Kalınlık": "15 mm"
    },
    pdfUrl: "/pdfs/lambri-katalog.pdf",
    featured: true
  },

  // ==========================================
  // 6. ARKALIK
  // ==========================================
  {
    id: "ark-01",
    productCode: "YPR-ARKALIK",
    title: "Arkalık",
    category: "arkalik",
    categoryName: "Arkalık",
    slug: "mdf-arkalik-levhalari",
    images: [
      "/arkalik-levha.jpg"
    ],
    shortDescription: "Gardırop, kütüphane ve mobilya arkalıklarında kullanılan ince laklı/boyalı MDF levha.",
    fullDescription: "Mobilya arkalarında rijitlik ve estetik kapatıcılık sağlayan 3 mm ve 4 mm kalınlığında dayanıklı MDF arkalık.",
    whatIsIt: "İnce MDF levhanın tek yüzünün koruyucu ve dekoratif lak boya ile kaplanmasıyla üretilen dayanıklı kapatıcı arkalıktır.",
    usageAreas: [
      "Gardırop ve dolap arkalık kapatmaları",
      "Çekmece alt tabanları",
      "Kütüphane arka panelleri",
      "Kiler ve vestiyer gövdeleri"
    ],
    quickSpecs: {
      boy: "2800 mm",
      en: "2100 mm",
      renk: "İpek Beyaz Laklı",
      renkKodu: "YPR-ARK01",
      kalinlik: "3 mm",
      yuzey: "Tek Yüz Laklı Boyalı Yüzey",
      govde: "İnce Yüksek Yoğunluklu MDF"
    },
    specs: {
      "Boy (Uzunluk)": "2800 mm",
      "En (Genişlik)": "2100 mm",
      "Renk": "İpek Beyaz Laklı",
      "Renk Kodu": "YPR-ARK01",
      "Kalınlık": "3 mm"
    },
    pdfUrl: "/pdfs/arkalik-katalog.pdf",
    featured: true
  },

  // ==========================================
  // 7. PANEL
  // ==========================================
  {
    id: "pnl-01",
    productCode: "YPR-PANEL",
    title: "Panel",
    category: "panel",
    categoryName: "Paneller",
    slug: "dekoratif-ahsap-duvar-panelleri",
    images: [
      "/panel-levha.png"
    ],
    shortDescription: "İç mekan mimarisinde estetik ve lüks görünüm sağlayan dekoratif ahşap duvar ve mobilya panelleri.",
    fullDescription: "Çeşitli yüzey dokularına ve renklere sahip, kolay monte edilebilir mimari ahşap panel çözümleri.",
    whatIsIt: "İç mekanlarda duvar ve mobilya kaplaması olarak kullanılan yüksek dayanımlı ve estetik dekoratif panel sistemleridir.",
    usageAreas: [
      "TV arkası vurgu duvar kaplamaları",
      "Ofis ve resepsiyon arka planları",
      "Otel lobileri ve restoran konseptleri",
      "Konut salon ve yatak odası dekorasyonu"
    ],
    quickSpecs: {
      boy: "2800 mm",
      en: "600 mm",
      renk: "Doğal Meşe / Antrasit",
      renkKodu: "YPR-PNL01",
      kalinlik: "18 mm",
      yuzey: "Dekoratif Ahşap Dokulu Yüzey",
      govde: "MDF & Ahşap Kompozit Panel"
    },
    specs: {
      "Boy (Uzunluk)": "2800 mm",
      "En (Genişlik)": "600 mm",
      "Renk": "Doğal Meşe",
      "Renk Kodu": "YPR-PNL01",
      "Toplam Kalınlık": "18 mm"
    },
    pdfUrl: "/pdfs/paneller-katalog.pdf",
    featured: true
  }
];
