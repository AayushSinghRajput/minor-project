const dryProducts = [
  {
    id: 1,
    name: "CeraVe Hydrating Cleanser",
    category: "Cleanser",
    ingredients: ["Ceramides", "Hyaluronic Acid"],
    benefits: "Hydrates and cleanses without stripping skin",
    skinType: "Dry",
    price: 14,
    rating: 4.8,
    potentialAllergens: [],
    image:
      "https://www.epharmacy.com.np/content/images/thumbs/65e021054a13c8d6e93955ed_cerave-hydrating-facial-cleanser-237ml.jpeg",
  },
  {
    id: 2,
    name: "Neutrogena Hydro Boost Gel Cream",
    category: "Moisturizer",
    ingredients: ["Hyaluronic Acid", "Glycerin"],
    benefits: "Intense hydration, locks in moisture",
    skinType: "Dry",
    price: 20,
    rating: 4.7,
    potentialAllergens: ["Fragrance"],
    image:
      "https://img.drz.lazcdn.com/static/np/p/da34224d15071d71331047b16277bacc.jpg_960x960q80.jpg_.webp",
  },
  {
    id: 3,
    name: "Eucerin Advanced Repair Cream",
    category: "Moisturizer",
    ingredients: ["Urea", "Ceramides"],
    benefits: "Repairs and soothes dry skin",
    skinType: "Dry",
    price: 12,
    rating: 4.6,
    potentialAllergens: ["Urea"],
    image:
      "https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/media-center-items/f/d/7/b0e8760562c94a8eb9b2bd23e317ea64-screen.jpg",
  },
  {
    id: 4,
    name: "Aveeno Skin Relief Moisturizing Lotion",
    category: "Moisturizer",
    ingredients: ["Colloidal Oatmeal", "Glycerin"],
    benefits: "Soothes and moisturizes sensitive dry skin",
    skinType: "Dry",
    price: 10,
    rating: 4.5,
    potentialAllergens: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl8ah--5X6LV9KsI5wfP-GvPxCYxIaQ9yuQ&s",
  },
  {
    id: 5,
    name: "Kiehl's Ultra Facial Cream",
    category: "Moisturizer",
    ingredients: ["Squalane", "Glycerin"],
    benefits: "Provides long-lasting hydration",
    skinType: "Dry",
    price: 35,
    rating: 4.9,
    potentialAllergens: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Yn6IFuumCK6D4d1pAQrQGU1jaKlXVMEAOA&s",
  },
  {
    id: 6,
    name: "The Ordinary Hyaluronic Acid 2% + B5",
    category: "Serum",
    ingredients: ["Hyaluronic Acid", "Vitamin B5"],
    benefits: "Enhances hydration, smoothens skin",
    skinType: "Dry",
    price: 8,
    rating: 4.8,
    potentialAllergens: [],
    image:
      "https://www.epharmacy.com.np/content/images/thumbs/67568f23a05123efafdf4097_the-ordinary-hyaluronic-acid-2-b5-30ml.jpeg",
  },
  {
    id: 7,
    name: "La Roche-Posay Toleriane Hydrating Gentle Cleanser",
    category: "Cleanser",
    ingredients: ["Ceramides", "Niacinamide"],
    benefits: "Gentle cleansing, maintains moisture",
    skinType: "Dry",
    price: 15,
    rating: 4.7,
    potentialAllergens: [],
    image:
      "https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dw8b2f3571/product/March%202023%20packshot%20updates/Toleriane_HydratingGentleCleanser_400ml-Pump.jpg",
  },
  {
    id: 8,
    name: "Drunk Elephant Lala Retro Whipped Cream",
    category: "Moisturizer",
    ingredients: ["Ceramides", "Glycerin"],
    benefits: "Rich hydration, replenishes skin barrier",
    skinType: "Dry",
    price: 60,
    rating: 4.8,
    potentialAllergens: [],
    image: "https://m.media-amazon.com/images/I/51Kj9ye97mL._SL1280_.jpg",
  },
  {
    id: 9,
    name: "First Aid Beauty Ultra Repair Cream",
    category: "Moisturizer",
    ingredients: ["Colloidal Oatmeal", "Shea Butter"],
    benefits: "Deeply hydrates and calms irritation",
    skinType: "Dry",
    price: 36,
    rating: 4.7,
    potentialAllergens: ["Shea Butter"],
    image: "https://m.media-amazon.com/images/I/51Vc1LxC+qL._SL1500_.jpg",
  },
  {
    id: 10,
    name: "Vaseline Intensive Care Advanced Repair Lotion",
    category: "Moisturizer",
    ingredients: ["Petroleum Jelly", "Glycerin"],
    benefits: "Locks in moisture, repairs dryness",
    skinType: "Dry",
    price: 6,
    rating: 4.5,
    potentialAllergens: [],
    image:
      "https://images-cdn.ubuy.co.in/6665ac68509b7a2abb5a3779-vaseline-intensive-care-advanced-repair.jpg",
  },
  {
    id: 11,
    name: "Weleda Skin Food",
    category: "Moisturizer",
    ingredients: ["Beeswax", "Sunflower Seed Oil"],
    benefits: "Nourishes and soothes extremely dry skin",
    skinType: "Dry",
    price: 18,
    rating: 4.6,
    potentialAllergens: ["Beeswax"],
    image:
      "https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/1600/1600/12013997-7624650426187017.jpg&format=webp&auto=avif&width=985&height=985&fit=cover",
  },
  {
    id: 12,
    name: "Laneige Water Sleeping Mask",
    category: "Mask",
    ingredients: ["Hyaluronic Acid", "Mineral Water"],
    benefits: "Provides overnight hydration",
    skinType: "Dry",
    price: 25,
    rating: 4.8,
    potentialAllergens: ["Fragrance"],
    image: "https://m.media-amazon.com/images/I/61GvHfD53iL.jpg",
  },
  {
    id: 13,
    name: "Clinique Moisture Surge 100H Auto-Replenishing Hydrator",
    category: "Moisturizer",
    ingredients: ["Aloe Vera", "Hyaluronic Acid"],
    benefits: "Provides hydration for up to 100 hours",
    skinType: "Dry",
    price: 42,
    rating: 4.9,
    potentialAllergens: [],
    image:
      "https://www.clinique.com/media/export/cms/products/600x750/cl_sku_V4C001_600x750_0.png",
  },
  {
    id: 14,
    name: "The Body Shop Shea Butter Body Lotion",
    category: "Moisturizer",
    ingredients: ["Shea Butter", "Almond Oil"],
    benefits: "Deep nourishment for dry skin",
    skinType: "Dry",
    price: 16,
    rating: 4.6,
    potentialAllergens: ["Almond Oil"],
    image:
      "https://media.thebodyshop.in/media/catalog/product/1/0/1097393_body_lotion_shea_200ml_brnz_nw_inaaups360.jpg",
  },
  {
    id: 15,
    name: "Bioderma Atoderm Shower Oil",
    category: "Cleanser",
    ingredients: ["Vegetable Oil", "Vitamin B3"],
    benefits: "Gently cleanses and moisturizes",
    skinType: "Dry",
    price: 20,
    rating: 4.6,
    potentialAllergens: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28JIxRF4onPvGlnS15NvCV7fEjxkHlRHqhg&s",
  },
  {
    id: 16,
    name: "Glossier Priming Moisturizer Rich",
    category: "Moisturizer",
    ingredients: ["Ceramides", "Fatty Acids"],
    benefits: "Plumps and preps dry skin",
    skinType: "Dry",
    price: 35,
    rating: 4.5,
    potentialAllergens: [],
    image:
      "https://lh5.googleusercontent.com/proxy/Zey3GC8eeQLxam0Jw9eRr2LAbPJiUy6aDW5evWHIh4_ECmH77ZHjWcAOFGrcz6gFBE65ZS3o04Sn_m-RItnfzb_AiR_hGfVb_kO7pkNFCKiKLcE26H70irmyf7egjc5wnVawI8bajbp9SHoXCb4g3qebZgH-PPVN9bI",
  },
  {
    id: 17,
    name: "Hada Labo Gokujyun Hyaluronic Acid Lotion",
    category: "Toner",
    ingredients: ["Hyaluronic Acid", "Water"],
    benefits: "Hydrates and preps skin for other products",
    skinType: "Dry",
    price: 15,
    rating: 4.7,
    potentialAllergens: [],
    image: "https://m.media-amazon.com/images/I/51PH2WeO0RS._SL1500_.jpg",
  },
  {
    id: 18,
    name: "Aquaphor Healing Ointment",
    category: "Ointment",
    ingredients: ["Petroleum Jelly", "Glycerin"],
    benefits: "Seals in moisture, protects skin barrier",
    skinType: "Dry",
    price: 7,
    rating: 4.8,
    potentialAllergens: [],
    image:
      "https://images-1.eucerin.com/~/media/aquaphor/products/new%20ecomm%20aq%20images/aqu_ho_7oz_tube-ecom1000x1000_72dpi.jpg",
  },
  {
    id: 19,
    name: "Tatcha The Dewy Skin Cream",
    category: "Moisturizer",
    ingredients: ["Rice Extract", "Okinawa Algae"],
    benefits: "Provides a dewy glow and deep hydration",
    skinType: "Dry",
    price: 68,
    rating: 4.9,
    potentialAllergens: [],
    image:
      "https://www.tatcha.com/on/demandware.static/-/Sites-master_catalog_tatcha/default/dw41823729/images/product-images/moisturizers/DewySkinCream-Refills-1-main-image.jpg",
  },
  {
    id: 20,
    name: "Nivea Essentially Enriched Body Lotion",
    category: "Moisturizer",
    ingredients: ["Almond Oil", "Vitamin E"],
    benefits: "Moisturizes and improves skin texture",
    skinType: "Dry",
    price: 8,
    rating: 4.4,
    potentialAllergens: ["Almond Oil"],
    image: "https://m.media-amazon.com/images/I/61orf0uRMCS._SL1500_.jpg",
  },
];

export default dryProducts;
