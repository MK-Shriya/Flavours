export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  seasonal?: boolean;
}

export const categories = [
  'All',
  'Chocolate Heaven',
  'Fusion Cakes',
  'Pure Cream',
  'Premium Cakes',
  'Cup Cakes',
  'Tea Break Treats',
  'Crumble n Crunch',
  'Mini Indulgences',
] as const;

export type Category = (typeof categories)[number];

export const menuItems: MenuItem[] = [
  // ═══════════════════════════════════════════════
  // A SLICE OF CHOCOLATE HEAVEN
  // ═══════════════════════════════════════════════
  {
    id: 'chocolate-double-delight',
    name: 'Chocolate Double Delight',
    description: 'Double the chocolate, double the bliss — rich layers of chocolate cake and ganache',
    category: 'Chocolate Heaven',
    image: '/menu/chocolate-drip.jpg',
    featured: true,
  },
  {
    id: 'chocolate-truffle',
    name: 'Chocolate Truffle',
    description: 'Rich dark chocolate ganache with decorative piping and chocolate shavings',
    category: 'Chocolate Heaven',
    image: '/menu/chocolate-truffle.jpg',
    featured: true,
  },
  {
    id: 'chocolate-tres-leches',
    name: 'Chocolate Tres Leches',
    description: 'Moist chocolate sponge soaked in three milks — indulgence in every bite',
    category: 'Chocolate Heaven',
    image: '/menu/mini-chocolate.jpg',
  },
  {
    id: 'german-black-forest',
    name: 'German Black Forest',
    description: 'Classic German recipe with chocolate layers, whipped cream, and cherries',
    category: 'Chocolate Heaven',
    image: '/menu/naked-berry-cake.jpg',
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    description: 'Timeless chocolate sponge with cherry filling and whipped cream',
    category: 'Chocolate Heaven',
    image: '/menu/chocolate-drip.jpg',
  },
  {
    id: 'white-forest',
    name: 'White Forest',
    description: 'Vanilla sponge with white chocolate cream and cherry topping',
    category: 'Chocolate Heaven',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'ferraro-rocher',
    name: 'Ferraro Rocher',
    description: 'Hazelnut chocolate cake inspired by the iconic Ferrero Rocher',
    category: 'Chocolate Heaven',
    image: '/menu/gold-pink-cake.jpg',
  },
  {
    id: 'kitkat-cake',
    name: 'KitKat',
    description: 'Fun-loaded cake layered and decorated with KitKat bars and chocolate',
    category: 'Chocolate Heaven',
    image: '/menu/chocolate-drip.jpg',
  },

  // ═══════════════════════════════════════════════
  // FUSION CAKES — A PERFECT BLEND OF TASTES
  // ═══════════════════════════════════════════════
  {
    id: 'vancho',
    name: 'Vanilla - Chocolate (Vancho)',
    description: 'The classic fusion — vanilla sponge meets rich chocolate ganache',
    category: 'Fusion Cakes',
    image: '/menu/elegant-cake.jpg',
    featured: true,
  },
  {
    id: 'strawberry-chocolate',
    name: 'Strawberry - Chocolate',
    description: 'Sweet strawberry cream paired with decadent chocolate layers',
    category: 'Fusion Cakes',
    image: '/menu/pink-glaze-cake.jpg',
  },
  {
    id: 'caramel-chocolate',
    name: 'Caramel - Chocolate',
    description: 'Buttery caramel meets deep chocolate — sweet meets sophisticated',
    category: 'Fusion Cakes',
    image: '/menu/chocolate-drip.jpg',
  },
  {
    id: 'coffee-macha',
    name: 'Coffee - Chocolate (Coffee Macha)',
    description: 'Bold espresso infused with rich chocolate — a coffee lover\'s dream',
    category: 'Fusion Cakes',
    image: '/menu/chocolate-truffle.jpg',
  },
  {
    id: 'chocolate-hazelnut',
    name: 'Chocolate - Hazelnut',
    description: 'Nutella-inspired layers of hazelnut cream and chocolate sponge',
    category: 'Fusion Cakes',
    image: '/menu/gold-pink-cake.jpg',
  },
  {
    id: 'chocolate-mint',
    name: 'Chocolate - Mint',
    description: 'Refreshing mint cream layered with smooth dark chocolate',
    category: 'Fusion Cakes',
    image: '/menu/mini-chocolate.jpg',
  },
  {
    id: 'spanish-delight',
    name: 'Spanish Delight',
    description: 'Where chocolate meets coffee and nuts — a fusion of Spanish flavours',
    category: 'Fusion Cakes',
    image: '/menu/chocolate-truffle.jpg',
  },
  {
    id: 'red-bee',
    name: 'Red Bee',
    description: 'Combination of Chocolate, Vanilla and Red Velvet in one stunning cake',
    category: 'Fusion Cakes',
    image: '/menu/red-velvet.jpg',
  },
  {
    id: 'neapolitan',
    name: 'Neapolitan',
    description: 'Combination of Vanilla, Chocolate and Strawberry — a classic trio',
    category: 'Fusion Cakes',
    image: '/menu/floral-cake.jpg',
  },
  {
    id: 'vanstraw',
    name: 'Vanilla - Strawberry (Vanstraw)',
    description: 'Fresh strawberry cream paired with light, fluffy vanilla sponge',
    category: 'Fusion Cakes',
    image: '/menu/pink-glaze-cake.jpg',
  },
  {
    id: 'honey-almond',
    name: 'Honey - Almond',
    description: 'Golden honey cake with crunchy almond layers — sweet and nutty',
    category: 'Fusion Cakes',
    image: '/menu/honey-bee-cake.jpg',
  },
  {
    id: 'kifaya',
    name: 'Kifaya (Mango + Pistachio)',
    description: 'Seasonal special — tropical mango meets earthy pistachio',
    category: 'Fusion Cakes',
    image: '/menu/floral-garden-cake.jpg',
    seasonal: true,
  },

  // ═══════════════════════════════════════════════
  // PURE CREAM INDULGENCE
  // ═══════════════════════════════════════════════
  {
    id: 'classic-vanilla',
    name: 'Classic Vanilla',
    description: 'Timeless vanilla sponge with silky cream frosting — pure and elegant',
    category: 'Pure Cream',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'pineapple-cake',
    name: 'Pineapple',
    description: 'Light and refreshing pineapple cake with cream and pineapple chunks',
    category: 'Pure Cream',
    image: '/menu/floral-garden-cake.jpg',
  },
  {
    id: 'butterscotch-cake',
    name: 'Butterscotch',
    description: 'Rich butterscotch-flavoured cake topped with crunchy praline',
    category: 'Pure Cream',
    image: '/menu/gold-pink-cake.jpg',
  },
  {
    id: 'red-velvet-cream-cheese',
    name: 'Red Velvet with Cream Cheese',
    description: 'Velvety red sponge with luscious cream cheese frosting',
    category: 'Pure Cream',
    image: '/menu/red-velvet.jpg',
    featured: true,
  },
  {
    id: 'coffee-cake',
    name: 'Coffee',
    description: 'Rich espresso-infused sponge with coffee cream — bold and aromatic',
    category: 'Pure Cream',
    image: '/menu/chocolate-truffle.jpg',
  },
  {
    id: 'dalgona-coffee-cake',
    name: 'Dalgona Coffee',
    description: 'Trendy whipped coffee cream atop a fluffy vanilla base',
    category: 'Pure Cream',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'blueberry-cake',
    name: 'Blueberry',
    description: 'Bursting with fresh blueberry flavour and a creamy finish',
    category: 'Pure Cream',
    image: '/menu/floral-cake.jpg',
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry',
    description: 'Sweet strawberry cream with fresh berry garnish — light and lovely',
    category: 'Pure Cream',
    image: '/menu/pink-glaze-cake.jpg',
  },
  {
    id: 'caramel-cake',
    name: 'Caramel',
    description: 'Velvety caramel cream on a buttery sponge base — pure indulgence',
    category: 'Pure Cream',
    image: '/menu/gold-pink-cake.jpg',
  },
  {
    id: 'classic-tresleches',
    name: 'Classic Tresleches',
    description: 'Sponge soaked in three milks — unbelievably moist and creamy',
    category: 'Pure Cream',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'mango-truffle',
    name: 'Mango Truffle',
    description: 'Seasonal tropical mango meets creamy truffle — sunshine in a slice',
    category: 'Pure Cream',
    image: '/menu/floral-garden-cake.jpg',
    seasonal: true,
  },
  {
    id: 'orange-truffle',
    name: 'Orange Truffle',
    description: 'Zesty orange cream layered with smooth truffle — seasonal favourite',
    category: 'Pure Cream',
    image: '/menu/fruit-cake.jpg',
    seasonal: true,
  },
  {
    id: 'fresh-fruit-cake',
    name: 'Fresh Fruit',
    description: 'Light cream cake loaded with seasonal fresh fruits — colourful and fresh',
    category: 'Pure Cream',
    image: '/menu/fruit-cake.jpg',
  },

  // ═══════════════════════════════════════════════
  // PREMIUM CAKES
  // ═══════════════════════════════════════════════
  {
    id: 'lotus-biscoff',
    name: 'Lotus Biscoff',
    description: 'Caramelised biscuit cake with Biscoff spread and cookie crumble',
    category: 'Premium Cakes',
    image: '/menu/gold-pink-cake.jpg',
    featured: true,
  },
  {
    id: 'french-opera',
    name: 'French Opera',
    description: 'Elegant layers of almond sponge, coffee buttercream, and chocolate ganache',
    category: 'Premium Cakes',
    image: '/menu/chocolate-truffle.jpg',
  },
  {
    id: 'medovik',
    name: 'Medovik — Russian Honey Cake',
    description: 'Traditional Russian layered honey cake with silky cream — a true delicacy',
    category: 'Premium Cakes',
    image: '/menu/honey-bee-cake.jpg',
  },
  {
    id: 'rosemilk-tresleches',
    name: 'Rosemilk Tresleches',
    description: 'Fragrant rose-infused tres leches — an Indian twist on a classic',
    category: 'Premium Cakes',
    image: '/menu/pink-glaze-cake.jpg',
  },
  {
    id: 'rainbow-cake',
    name: 'Rainbow Cake',
    description: 'Vibrant multi-layered rainbow sponge with vanilla cream — a showstopper',
    category: 'Premium Cakes',
    image: '/menu/sprinkle-fun-cake.jpg',
  },
  {
    id: 'tender-coconut',
    name: 'Tender Coconut',
    description: 'Light coconut cream cake with tender coconut pieces — tropical bliss',
    category: 'Premium Cakes',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'rasmalai-cake',
    name: 'Rasmalai',
    description: 'Indian fusion — saffron-cardamom sponge with rasmalai-inspired cream',
    category: 'Premium Cakes',
    image: '/menu/floral-cake.jpg',
  },
  {
    id: 'gulab-jamun-cake',
    name: 'Gulab Jamun',
    description: 'Sweet gulab jamun flavours baked into a luxurious cake — festive favourite',
    category: 'Premium Cakes',
    image: '/menu/gold-pink-cake.jpg',
  },
  {
    id: 'rich-plum',
    name: 'Rich Plum',
    description: 'Where every bite carries a hint of Rum — rich, dark, and decadent',
    category: 'Premium Cakes',
    image: '/menu/fruit-cake.jpg',
  },
  {
    id: 'cheese-cake',
    name: 'Cheese Cake',
    description: 'Creamy New York-style cheesecake on a buttery biscuit base',
    category: 'Premium Cakes',
    image: '/menu/elegant-cake.jpg',
  },

  // ═══════════════════════════════════════════════
  // CUP CAKES — Small Cakes, Big Smiles
  // ═══════════════════════════════════════════════
  {
    id: 'cupcake-vanilla',
    name: 'Vanilla Cupcake',
    description: 'Fluffy vanilla cupcake with swirled buttercream frosting',
    category: 'Cup Cakes',
    image: '/menu/caramel-cupcakes.jpg',
  },
  {
    id: 'cupcake-chocolate',
    name: 'Chocolate Cupcake',
    description: 'Rich chocolate cupcake with decadent chocolate buttercream',
    category: 'Cup Cakes',
    image: '/menu/caramel-cupcakes.jpg',
  },
  {
    id: 'cupcake-butterscotch',
    name: 'Butterscotch Cupcake',
    description: 'Sweet butterscotch cupcake topped with praline crunch',
    category: 'Cup Cakes',
    image: '/menu/caramel-cupcakes.jpg',
  },
  {
    id: 'cupcake-strawberry',
    name: 'Strawberry Cupcake',
    description: 'Pink strawberry cupcake with fresh strawberry cream swirl',
    category: 'Cup Cakes',
    image: '/menu/caramel-cupcakes.jpg',
  },
  {
    id: 'cupcake-red-velvet',
    name: 'Red Velvet Cupcake',
    description: 'Classic red velvet cupcake with cream cheese frosting',
    category: 'Cup Cakes',
    image: '/menu/caramel-cupcakes.jpg',
    featured: true,
  },
  {
    id: 'cupcake-caramel',
    name: 'Caramel Cupcake',
    description: 'Fluffy cupcake topped with caramel buttercream and caramel drizzle',
    category: 'Cup Cakes',
    image: '/menu/caramel-cupcakes.jpg',
  },

  // ═══════════════════════════════════════════════
  // TEA BREAK TREATS
  // ═══════════════════════════════════════════════
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Overloaded Brownie',
    description: 'Dense, fudgy brownie loaded with extra chocolate — pure indulgence',
    category: 'Tea Break Treats',
    image: '/menu/brownies.jpg',
    featured: true,
  },
  {
    id: 'chocolate-lamington',
    name: 'Chocolate Lamington',
    description: 'Sponge cubes coated in chocolate and rolled in desiccated coconut',
    category: 'Tea Break Treats',
    image: '/menu/brownies.jpg',
  },
  {
    id: 'butter-cake',
    name: 'Butter Cake',
    description: 'Classic buttery sponge cake — soft, simple, and irresistible',
    category: 'Tea Break Treats',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'marble-cake',
    name: 'Marble Cake',
    description: 'Swirled vanilla and chocolate cake — a visual and flavourful treat',
    category: 'Tea Break Treats',
    image: '/menu/chocolate-truffle.jpg',
  },
  {
    id: 'bundt-cake',
    name: 'Bundt Cake',
    description: 'Beautifully shaped bundt cake with a moist, tender crumb',
    category: 'Tea Break Treats',
    image: '/menu/floral-cake.jpg',
  },
  {
    id: 'banana-loaf',
    name: 'Banana Loaf',
    description: 'Moist banana bread with walnuts — perfect for tea time',
    category: 'Tea Break Treats',
    image: '/menu/fruit-cake.jpg',
  },
  {
    id: 'blueberry-loaf',
    name: 'Blueberry Loaf',
    description: 'Soft loaf bursting with blueberries — sweet and tangy',
    category: 'Tea Break Treats',
    image: '/menu/fruit-cake.jpg',
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with cream cheese frosting and walnut crumble',
    category: 'Tea Break Treats',
    image: '/menu/fruit-cake.jpg',
  },
  {
    id: 'chocolate-loaf',
    name: 'Chocolate Loaf',
    description: 'Rich, dense chocolate loaf — the ultimate snack for chocoholics',
    category: 'Tea Break Treats',
    image: '/menu/brownies.jpg',
  },
  {
    id: 'jam-roll',
    name: 'Jam Roll',
    description: 'Light sponge rolled with sweet jam filling — a nostalgic favourite',
    category: 'Tea Break Treats',
    image: '/menu/pink-glaze-cake.jpg',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    description: 'Warm, gooey cinnamon rolls with cream cheese glaze',
    category: 'Tea Break Treats',
    image: '/menu/honey-bee-cake.jpg',
  },
  {
    id: 'mawa-cake',
    name: 'Mawa Cake',
    description: 'Traditional Indian mawa (khoya) cake with cardamom — rich and aromatic',
    category: 'Tea Break Treats',
    image: '/menu/gold-pink-cake.jpg',
  },

  // ═══════════════════════════════════════════════
  // CRUMBLE 'N' CRUNCH — BITE SIZED HAPPINESS
  // ═══════════════════════════════════════════════
  {
    id: 'macarons',
    name: 'Macarons',
    description: 'Delicate, colourful French macarons with rich fillings',
    category: 'Crumble n Crunch',
    image: '/menu/macaron-plate.jpg',
    featured: true,
  },
  {
    id: 'sugar-cookies',
    name: 'Sugar Cookies',
    description: 'Sweet, buttery sugar cookies — simple perfection',
    category: 'Crumble n Crunch',
    image: '/menu/butter-cookies.jpg',
  },
  {
    id: 'oats-choco-chip-cookies',
    name: 'Oats-Choco Chip Cookies',
    description: 'Hearty oat cookies loaded with chocolate chips — guilt-free(ish)',
    category: 'Crumble n Crunch',
    image: '/menu/choc-cookies.jpg',
  },
  {
    id: 'butter-cookies',
    name: 'Butter Cookies',
    description: 'Melt-in-your-mouth piped butter cookies — delicate and buttery',
    category: 'Crumble n Crunch',
    image: '/menu/butter-cookies.jpg',
  },
  {
    id: 'coconut-kisses',
    name: 'Coconut Kisses',
    description: 'Chewy coconut cookies with a crisp exterior — tropical crunch',
    category: 'Crumble n Crunch',
    image: '/menu/almond-biscotti.jpg',
  },
  {
    id: 'almond-cookies',
    name: 'Almond Cookies',
    description: 'Nutty almond cookies with a satisfying crunch',
    category: 'Crumble n Crunch',
    image: '/menu/almond-biscotti.jpg',
  },
  {
    id: 'london-almond-cookies',
    name: 'London Almond Cookies',
    description: 'Premium almond cookies inspired by classic London bakeries',
    category: 'Crumble n Crunch',
    image: '/menu/almond-biscotti.jpg',
  },
  {
    id: 'jam-cookies',
    name: 'Jam Cookies',
    description: 'Buttery cookies with a sweet jam center — a delightful bite',
    category: 'Crumble n Crunch',
    image: '/menu/butter-cookies.jpg',
  },
  {
    id: 'sesame-crackers',
    name: 'Sesame Crackers (Sweet & Salt)',
    description: 'Crispy sesame crackers available in sweet and salty — addictively crunchy',
    category: 'Crumble n Crunch',
    image: '/menu/almond-biscotti.jpg',
  },
  {
    id: 'butter-palmers',
    name: 'Butter Palmers',
    description: 'Flaky, caramelised puff pastry hearts — golden and crispy',
    category: 'Crumble n Crunch',
    image: '/menu/butter-cookies.jpg',
  },
  {
    id: 'cheese-crackers',
    name: 'Cheese Crackers',
    description: 'Savoury cheese-flavoured crackers — the perfect snack companion',
    category: 'Crumble n Crunch',
    image: '/menu/almond-biscotti.jpg',
  },

  // ═══════════════════════════════════════════════
  // MINI INDULGENCES
  // ═══════════════════════════════════════════════
  {
    id: 'donuts',
    name: 'Donuts',
    description: 'Soft, fluffy donuts with colourful glazes and toppings',
    category: 'Mini Indulgences',
    image: '/menu/sprinkle-fun-cake.jpg',
  },
  {
    id: 'cake-pops',
    name: 'Cake Pops',
    description: 'Fun bite-sized cake balls on a stick — perfect for parties',
    category: 'Mini Indulgences',
    image: '/menu/mini-chocolate.jpg',
  },
  {
    id: 'cake-sickles',
    name: 'Cake Sickles',
    description: 'Cake on a popsicle stick — the coolest way to eat cake',
    category: 'Mini Indulgences',
    image: '/menu/mini-chocolate.jpg',
  },
  {
    id: 'jar-cake',
    name: 'Jar Cake',
    description: 'Layered cake in a jar — beautifully presented and delicious',
    category: 'Mini Indulgences',
    image: '/menu/mini-chocolate.jpg',
    featured: true,
  },
  {
    id: 'tub-cake',
    name: 'Tub Cake',
    description: 'Generous tub of your favourite cake flavour — pure comfort',
    category: 'Mini Indulgences',
    image: '/menu/chocolate-drip.jpg',
  },
  {
    id: 'tin-cake',
    name: 'Tin Cake',
    description: 'Adorable individual cakes baked and served in vintage tins',
    category: 'Mini Indulgences',
    image: '/menu/mini-chocolate.jpg',
  },
  {
    id: 'dream-cake',
    name: 'Dream Cake',
    description: 'A dreamy layered mini cake — small but heavenly',
    category: 'Mini Indulgences',
    image: '/menu/floral-cake.jpg',
  },
  {
    id: 'letto-milk-cake',
    name: 'Letto Milk Cake',
    description: 'Soft milk cake with a melt-in-your-mouth texture',
    category: 'Mini Indulgences',
    image: '/menu/elegant-cake.jpg',
  },
  {
    id: 'korean-buns',
    name: 'Korean Buns',
    description: 'Trendy Korean cream buns with a crispy cookie shell top',
    category: 'Mini Indulgences',
    image: '/menu/honey-bee-cake.jpg',
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
