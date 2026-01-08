// Mock data for KSM FRUITS website

import { Product } from "@/app/page";

export const storeInfo = {
  name: "KSM FRUITS, UDUPI",
  tagline: "Where Freshness Meets Flavor! Straight from farms to your table.",
  phone: "+919845916877",
  email: "Ksmfruits77@gmail.com",
  whatsapp: "+919845916877",
  socialMedia: {
    facebook: "https://facebook.com/ksmfruits",
    instagram: "https://instagram.com/ksmfruits",
    whatsapp: "https://wa.me/+919845916877",
  },
  locations: [
    {
      id: 1,
      name: "Main Store - Adiudupi",
      address:
        "Shop No: 14, APMC Yard, Adiudupi, Udupi, Karnataka, India - 576103",
      mapLink: "https://maps.google.com",
    },
    {
      id: 2,
      name: "Brindavan Complex Branch",
      address:
        "Brindavan Complex, Opp. Radha Medical, Near Gandhi Hospital, Udupi, Karnataka - 576102",
      mapLink: "https://maps.google.com",
    },
    {
      id: 3,
      name: "Third Shop",
      address: "Coming Soon",
      mapLink: "#",
    },
  ],
};

export const categories = [
  { id: "all", name: "All Fruits" },
  { id: "tropical", name: "Tropical" },
  { id: "berries", name: "Berries" },
  { id: "citrus", name: "Citrus" },
  { id: "seasonal", name: "Seasonal" },
  { id: "exotic", name: "Exotic" },
];

export const allProducts = [
  // Tropical
  {
    id: 1,
    name: "Fresh Banana",
    price: "40 - 60",
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    description: "Fresh hill bananas, rich in potassium and nutrients",
    category: "tropical",
    inStock: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Sweet Guava",
    price: "60 - 90",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46",
    description: "Sweet and crunchy white guavas, direct from orchards",
    category: "tropical",
    inStock: true,
  },
  {
    id: 3,
    name: "Tropical Strawberry",
    price: "180 - 250",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    description: "Sweet and juicy strawberries grown in tropical climates",
    category: "tropical",
    inStock: true,
    isPopular: true,
  },
  {
    id: 4,
    name: "Exotic Rambuttan",
    price: "250 - 350",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1704079617783-3a65c68b5d8f",
    description: "Exotic hairy rambuttans, sweet and juicy inner fruit",
    category: "tropical",
    inStock: true,
    isSeasonal: true,
  },
  {
    id: 5,
    name: "Sweet Pineapple",
    price: "60 - 80",
    unit: "piece",
    image: "https://plus.unsplash.com/premium_photo-1724849329910-2e4fa234ee94",
    description: "Tangy and sweet tropical pineapple, perfect for snacks",
    category: "tropical",
    inStock: true,
  },
  {
    id: 6,
    name: "Passion Fruit",
    price: "120 - 180",
    unit: "kg",
    image: "https://plus.unsplash.com/premium_photo-1722691370600-18315542e96c",
    description: "Fragrant and tangy passion fruits with vibrant flavor",
    category: "tropical",
    inStock: true,
  },
  {
    id: 7,
    name: "Ripe Papaya",
    price: "50 - 80",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305",
    description: "Ripe and sweet sun-ripened papayas, rich in Vitamin A",
    category: "tropical",
    inStock: true,
  },
  {
    id: 8,
    name: "Premium Mangosteen",
    price: "400 - 500",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1627998398537-0cbff2cee742",
    description: "The queen of fruits, sweet and tangy white segments",
    category: "tropical",
    inStock: true,
    isOffer: true,
    discount: 10,
  },
  {
    id: 9,
    name: "Seasonal Mango",
    price: "200 - 300",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    description: "Premium seasonal mangoes, handpicked for sweetness",
    category: "tropical",
    inStock: true,
    isPopular: true,
    isSeasonal: true,
  },
  {
    id: 10,
    name: "Fresh Litchi",
    price: "240 - 320",
    unit: "kg",
    image: "https://plus.unsplash.com/premium_photo-1722961405964-ec2ab6e7ecb8",
    description: "Juicy litchis with a delicate floral aroma",
    category: "tropical",
    inStock: true,
    isSeasonal: true,
  },
  {
    id: 11,
    name: "Red Plums",
    price: "150 - 220",
    unit: "kg",
    image: "https://plus.unsplash.com/premium_photo-1690272333523-5cfd5405015d",
    description: "Succulent and sweet red plums, perfect for desserts",
    category: "tropical",
    inStock: true,
  },
  {
    id: 12,
    name: "Dragon Fruit",
    price: "180 - 250",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888",
    description: "Vibrant and exotic dragon fruit with a mild sweet taste",
    category: "tropical",
    inStock: true,
  },
  {
    id: 13,
    name: "Creamy Avocado",
    price: "300 - 450",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    description: "Creamy, ripe avocados, perfect for healthy meals",
    category: "tropical",
    inStock: true,
  },

  // Berries
  {
    id: 14,
    name: "Blueberries",
    price: "350 - 450",
    unit: "packet",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
    description: "Premium imported blueberries, rich in antioxidants",
    category: "berries",
    inStock: true,
    isPopular: true,
  },
  {
    id: 15,
    name: "Raspberries",
    price: "400 - 550",
    unit: "packet",
    image: "https://plus.unsplash.com/premium_photo-1725986663031-1611a3dcf23a",
    description: "Delicate and sweet red raspberries, freshly packed",
    category: "berries",
    inStock: true,
  },
  {
    id: 16,
    name: "Blackberries",
    price: "380 - 480",
    unit: "packet",
    image: "https://images.unsplash.com/photo-1669562064740-e7d35af4cdb3",
    description: "Juicy and rich blackberries, bursting with flavor",
    category: "berries",
    inStock: true,
  },
  {
    id: 17,
    name: "Mulberries",
    price: "120 - 180",
    unit: "packet",
    image: "https://images.unsplash.com/photo-1594444930956-c90343345d3b",
    description: "Sweet and seasonal mulberries, a nostalgic treat",
    category: "berries",
    inStock: true,
    isSeasonal: true,
  },

  // Citrus
  {
    id: 18,
    name: "Egyptian Orange",
    price: "100 - 150",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f",
    description: "Large, juicy Egyptian navel oranges, full of Vitamin C",
    category: "citrus",
    inStock: true,
    isOffer: true,
    discount: 15,
  },
  {
    id: 19,
    name: "Indian Orange",
    price: "80 - 120",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b",
    description: "Tangy and sweet Nagpur oranges, refreshing and juicy",
    category: "citrus",
    inStock: true,
  },
  {
    id: 20,
    name: "Mandarin Orange",
    price: "120 - 180",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1607116692929-ece4c84a5992",
    description: "Easy-to-peel sweet mandarins, perfect for kids",
    category: "citrus",
    inStock: true,
    isPopular: true,
  },

  // Seasonal
  {
    id: 21,
    name: "Muskmelon",
    price: "50 - 80",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1646992049387-df88d5b8b638",
    description: "Sweet and refreshing muskmelons, perfect for summer",
    category: "seasonal",
    inStock: true,
    isSeasonal: true,
  },
  {
    id: 22,
    name: "Seedless Grapes",
    price: "90 - 140",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
    description: "Sweet seedless green grapes, juicy and crisp",
    category: "seasonal",
    inStock: true,
    isPopular: true,
  },
  {
    id: 23,
    name: "Pomegranate",
    price: "140 - 200",
    unit: "kg",
    image: "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4",
    description: "Nutrient-rich ruby red pomegranates with sweet arils",
    category: "seasonal",
    inStock: true,
    isOffer: true,
    discount: 5,
  },
  {
    id: 24,
    name: "Seasonal Pear",
    price: "150 - 220",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25",
    description: "Crunchy and sweet seasonal pears, rich in fiber",
    category: "seasonal",
    inStock: true,
    isSeasonal: true,
  },
  {
    id: 25,
    name: "Custard Apple",
    price: "120 - 180",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
    description: "Creamy and sweet custard apples with unique texture",
    category: "seasonal",
    inStock: true,
    isSeasonal: true,
  },

  // Exotic
  {
    id: 26,
    name: "Medjool Dates",
    price: "450 - 600",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1681122449774-e8ae4bc2cd92",
    description: "Premium quality Medjool dates, naturally sweet",
    category: "exotic",
    inStock: true,
    isPopular: true,
  },
  {
    id: 27,
    name: "Kiwi Fruit",
    price: "220 - 280",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a",
    description: "Zesty and vitamin-rich green kiwis, imported quality",
    category: "exotic",
    inStock: true,
  },
  {
    id: 28,
    name: "Sweet Chikku",
    price: "80 - 120",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1699863164964-13805b27bc42",
    description: "Sweet and grainy sapodilla (Chikku), a tropical delight",
    category: "exotic",
    inStock: true,
  },
  {
    id: 29,
    name: "Watermelon",
    price: "30 - 50",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
    description: "Hydrating and sweet watermelons, perfect for hydration",
    category: "exotic",
    inStock: true,
    isOffer: true,
    discount: 20,
  },
];

export const featuredProducts = [
  allProducts[0], // Banana (Tropical)
  allProducts[8], // Mango (Tropical)
  allProducts[13], // Blueberries (Berries)
  allProducts[17], // Egyptian Orange (Citrus)
  allProducts[21], // Grapes (Seasonal)
  allProducts[25], // Dates (Exotic)
];

export const productsByCategory = {
  tropical: allProducts.filter((p) => p.category === "tropical"),
  berries: allProducts.filter((p) => p.category === "berries"),
  citrus: allProducts.filter((p) => p.category === "citrus"),
  seasonal: allProducts.filter((p) => p.category === "seasonal"),
  exotic: allProducts.filter((p) => p.category === "exotic"),
};

export const todaysOffers = allProducts.filter((p) => p.isOffer);
export const seasonalSpecials = allProducts.filter((p) => p.isSeasonal);
export const popularProducts = allProducts.filter((p) => p.isPopular);

export const heroImage =
  "https://images.unsplash.com/photo-1498579397066-22750a3cb424";
export const aboutImage =
  "https://images.unsplash.com/photo-1550989460-0adf9ea622e2";

// Cart management (using localStorage)
export const getCart = () => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("ksmFruitsCart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: { id: number; quantity: number }[]) => {
  localStorage.setItem("ksmFruitsCart", JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find(
    (item: { id: number }) => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: number | string) => {
  let cart = getCart();
  cart = cart.filter((item: { id: number }) => item.id !== productId);
  saveCart(cart);
  return cart;
};

export const updateCartQuantity = (
  productId: number | string,
  quantity: number
) => {
  const cart = getCart();
  const item = cart.find((item: { id: number }) => item.id === productId);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }

  return cart;
};

export const clearCart = () => {
  localStorage.removeItem("ksmFruitsCart");
  return [];
};

export const getCartTotal = () => {
  return "Market Price";
};

export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce(
    (count: number, item: { quantity: number }) => count + item.quantity,
    0
  );
};
