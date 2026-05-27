export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  'All',
  'Cakes',
  'Cupcakes',
  'Brownies',
  'Cookies',
  'Speciality',
] as const;

export type Category = (typeof categories)[number];

export const menuItems: MenuItem[] = [
  // --- Cakes ---
  {
    id: 'red-velvet-cake',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet with cream cheese frosting, topped with red velvet crumbs',
    category: 'Cakes',
    image: '/menu/red-velvet.jpg',
    featured: true,
  },
  {
    id: 'chocolate-truffle-cake',
    name: 'Chocolate Truffle Cake',
    description: 'Rich dark chocolate ganache with decorative piping and chocolate shavings',
    category: 'Cakes',
    image: '/menu/chocolate-truffle.jpg',
    featured: true,
  },
  {
    id: 'birthday-theme-cake',
    name: 'Themed Birthday Cake',
    description: 'Fully customisable themed cakes for birthdays — tell us your dream design!',
    category: 'Cakes',
    image: '/menu/birthday-theme.jpg',
  },
  {
    id: 'photo-print-cake',
    name: 'Photo Print Cake',
    description: 'Personalised edible photo print on rich chocolate cake',
    category: 'Cakes',
    image: '/menu/photo-cake.jpg',
  },
  {
    id: 'elegant-cake',
    name: 'Elegant Birthday Cake',
    description: 'Minimalist buttercream design with ribbon accents — sophisticated and chic',
    category: 'Cakes',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'floral-cake',
    name: 'Floral Celebration Cake',
    description: 'Beautiful buttercream cake adorned with flowers, pearls, and butterfly details',
    category: 'Cakes',
    image: '/menu/floral-cake.jpg',
    featured: true,
  },
  {
    id: 'wedding-cake',
    name: 'Wedding & Engagement Cake',
    description: 'Elegant two-tier cake with premium finishes — perfect for your special day',
    category: 'Cakes',
    image: '/menu/wedding-cake.jpg',
  },
  {
    id: 'fruit-cake',
    name: 'Rich Fruit Cake',
    description: 'Loaded with dry fruits, nuts, and spices — a timeless celebration classic',
    category: 'Cakes',
    image: '/menu/fruit-cake.jpg',
  },
  {
    id: 'gold-pink-cake',
    name: 'Pink & Gold Celebration',
    description: 'Stunning white buttercream cake with pink and gold sphere decorations',
    category: 'Cakes',
    image: '/menu/gold-pink-cake.jpg',
  },
  {
    id: 'chocolate-drip-cake',
    name: 'Chocolate Drip Cake',
    description: 'Decadent chocolate cake with ganache drip and gold pearl decorations',
    category: 'Cakes',
    image: '/menu/chocolate-drip.jpg',
  },
  {
    id: 'mini-chocolate-cake',
    name: 'Mini Chocolate Cakes',
    description: 'Adorable individual-sized chocolate cakes with gold leaf accents',
    category: 'Cakes',
    image: '/menu/mini-chocolate.jpg',
  },

  {
    id: 'mermaid-cake-1',
    name: 'Custom Mermaid Cake (Pink)',
    description: 'Beautiful mermaid-themed cake with pink shells and pearls',
    category: 'Cakes',
    image: '/menu/mermaid-cake-1.jpg',
  },
  {
    id: 'iron-man-cake',
    name: 'Iron Man Theme Cake',
    description: 'Two-tier superhero cake featuring Iron Man mask and hand details',
    category: 'Cakes',
    image: '/menu/iron-man-cake.jpg',
  },
  {
    id: 'mermaid-cake-2',
    name: 'Custom Mermaid Cake (Blue & Pink)',
    description: 'Ocean-inspired mermaid cake with colorful tails and pearls',
    category: 'Cakes',
    image: '/menu/mermaid-cake-2.jpg',
  },
  {
    id: 'barbie-doll-cake',
    name: 'Barbie Doll Cake',
    description: 'Stunning doll cake with a beautiful piped pink rosette dress',
    category: 'Cakes',
    image: '/menu/barbie-doll-cake.jpg',
  },
  {
    id: 'pink-glaze-cake',
    name: 'Pink Glaze Cake',
    description: 'Elegant cake with shiny pink mirror glaze and delicate flowers',
    category: 'Cakes',
    image: '/menu/pink-glaze-cake.jpg',
  },
  {
    id: 'floral-garden-cake',
    name: 'Floral Garden Cake',
    description: 'Beautiful white cake adorned with vibrant fondant flowers',
    category: 'Cakes',
    image: '/menu/floral-garden-cake.jpg',
  },
  {
    id: 'naked-berry-cake',
    name: 'Naked Chocolate Berry Cake',
    description: 'Rustic tiered chocolate cake loaded with fresh strawberries and blueberries',
    category: 'Cakes',
    image: '/menu/naked-berry-cake.jpg',
  },
  {
    id: 'honey-bee-cake',
    name: 'Honey Bee Cake',
    description: 'Adorable dripping honey cake decorated with cute fondant bees',
    category: 'Cakes',
    image: '/menu/honey-bee-cake.jpg',
  },
  {
    id: 'sprinkle-fun-cake',
    name: 'Sprinkle Fun Cake',
    description: 'Playful birthday cake with colorful sprinkles and fondant letters',
    category: 'Cakes',
    image: '/menu/sprinkle-fun-cake.jpg',
  },

  // --- Cupcakes ---
  {
    id: 'caramel-cupcakes',
    name: 'Salted Caramel Cupcakes',
    description: 'Fluffy cupcakes topped with caramel buttercream and caramel drizzle',
    category: 'Cupcakes',
    image: '/menu/caramel-cupcakes.jpg',
    featured: true,
  },

  // --- Brownies ---
  {
    id: 'classic-brownies',
    name: 'Classic Fudge Brownies',
    description: 'Dense, fudgy brownies with a crackly top — pure chocolate indulgence',
    category: 'Brownies',
    image: '/menu/brownies.jpg',
  },

  // --- Cookies ---
  {
    id: 'chocolate-chip-cookies',
    name: 'Double Chocolate Cookies',
    description: 'Chunky chocolate cookies loaded with white and dark chocolate chips',
    category: 'Cookies',
    image: '/menu/choc-cookies.jpg',
  },
  {
    id: 'butter-cookies',
    name: 'Rose Butter Cookies',
    description: 'Melt-in-your-mouth piped butter cookies — delicate and buttery',
    category: 'Cookies',
    image: '/menu/butter-cookies.jpg',
  },

  {
    id: 'choc-chip-cookies-2',
    name: 'Classic Chocolate Chip Cookies',
    description: 'Thick and chewy chocolate cookies loaded with rich chocolate chips',
    category: 'Cookies',
    image: '/menu/choc-chip-cookies-2.jpg',
  },

  // --- Speciality ---
  {
    id: 'almond-biscotti',
    name: 'Almond Biscotti',
    description: 'Crunchy Italian-style almond biscotti — perfect with your evening tea',
    category: 'Speciality',
    image: '/menu/almond-biscotti.jpg',
  },
  {
    id: 'macaron-box',
    name: 'Assorted Macaron Box',
    description: 'A beautiful box of our delicate, colorful French macarons',
    category: 'Speciality',
    image: '/menu/macaron-box.jpg',
  },
  {
    id: 'macaron-plate',
    name: 'Signature Macarons',
    description: 'Delicate pink and yellow macarons with rich chocolate filling',
    category: 'Speciality',
    image: '/menu/macaron-plate.jpg',
  },
];

export function getMenuByCategory(category: Category): MenuItem[] {
  if (category === 'All') return menuItems;
  return menuItems.filter((item) => item.category === category);
}

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured);
}

export function getAllCategories(): string[] {
  return [...categories];
}
