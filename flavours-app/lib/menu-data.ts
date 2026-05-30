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
    image: '/menu/choc-double-delight.jpg',
    featured: true,
  },
  {
    id: 'chocolate-truffle',
    name: 'Chocolate Truffle',
    description: 'Rich dark chocolate ganache with decorative piping and chocolate shavings',
    category: 'Chocolate Heaven',
    image: '/menu/choc-truffle.jpg',
    featured: true,
  },
  {
    id: 'chocolate-tres-leches',
    name: 'Chocolate Tres Leches',
    description: 'Moist chocolate sponge soaked in three milks — indulgence in every bite',
    category: 'Chocolate Heaven',
    image: '/menu/choc-tres-leches.jpg',
  },
  {
    id: 'german-black-forest',
    name: 'German Black Forest',
    description: 'Classic German recipe with chocolate layers, whipped cream, and cherries',
    category: 'Chocolate Heaven',
    image: '/menu/cake-4.jpg',
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    description: 'Timeless chocolate sponge with cherry filling and whipped cream',
    category: 'Chocolate Heaven',
    image: '/menu/black-forest.jpg',
  },
  {
    id: 'white-forest',
    name: 'White Forest',
    description: 'Vanilla sponge with white chocolate cream and cherry topping',
    category: 'Chocolate Heaven',
    image: '/menu/cake-6.jpg',
  },
  {
    id: 'ferraro-rocher',
    name: 'Ferraro Rocher',
    description: 'Hazelnut chocolate cake inspired by the iconic Ferrero Rocher',
    category: 'Chocolate Heaven',
    image: '/menu/ferraro-rocher.jpg',
  },
  {
    id: 'kitkat-cake',
    name: 'KitKat',
    description: 'Fun-loaded cake layered and decorated with KitKat bars and chocolate',
    category: 'Chocolate Heaven',
    image: '/menu/kitkat.jpg',
  },

  // ═══════════════════════════════════════════════
  // FUSION CAKES — A PERFECT BLEND OF TASTES
  // ═══════════════════════════════════════════════
  {
    id: 'vancho',
    name: 'Vanilla - Chocolate (Vancho)',
    description: 'The classic fusion — vanilla sponge meets rich chocolate ganache',
    category: 'Fusion Cakes',
    image: '/menu/vancho.jpg',
    featured: true,
  },
  {
    id: 'strawberry-chocolate',
    name: 'Strawberry - Chocolate',
    description: 'Sweet strawberry cream paired with decadent chocolate layers',
    category: 'Fusion Cakes',
    image: '/menu/strawberry-chocolate.jpg',
  },
  {
    id: 'caramel-chocolate',
    name: 'Caramel - Chocolate',
    description: 'Buttery caramel meets deep chocolate — sweet meets sophisticated',
    category: 'Fusion Cakes',
    image: '/menu/caramel-chocolate.jpg',
  },
  {
    id: 'coffee-macha',
    name: 'Coffee - Chocolate (Coffee Macha)',
    description: 'Bold espresso infused with rich chocolate — a coffee lover\'s dream',
    category: 'Fusion Cakes',
    image: '/menu/cake-12.jpg',
  },
  {
    id: 'chocolate-hazelnut',
    name: 'Chocolate - Hazelnut',
    description: 'Nutella-inspired layers of hazelnut cream and chocolate sponge',
    category: 'Fusion Cakes',
    image: '/menu/chocolate-hazelnut.jpg',
  },
  {
    id: 'chocolate-mint',
    name: 'Chocolate - Mint',
    description: 'Refreshing mint cream layered with smooth dark chocolate',
    category: 'Fusion Cakes',
    image: '/menu/chocolate-mint.jpg',
  },
  {
    id: 'spanish-delight',
    name: 'Spanish Delight',
    description: 'Where chocolate meets coffee and nuts — a fusion of Spanish flavours',
    category: 'Fusion Cakes',
    image: '/menu/cake-15.jpg',
  },
  {
    id: 'red-bee',
    name: 'Red Bee',
    description: 'Combination of Chocolate, Vanilla and Red Velvet in one stunning cake',
    category: 'Fusion Cakes',
    image: '/menu/cake-16.jpg',
  },
  {
    id: 'neapolitan',
    name: 'Neapolitan',
    description: 'Combination of Vanilla, Chocolate and Strawberry — a classic trio',
    category: 'Fusion Cakes',
    image: '/menu/cake-17.jpg',
  },
  {
    id: 'vanstraw',
    name: 'Vanilla - Strawberry (Vanstraw)',
    description: 'Fresh strawberry cream paired with light, fluffy vanilla sponge',
    category: 'Fusion Cakes',
    image: '/menu/vanstraw.jpg',
  },
  {
    id: 'honey-almond',
    name: 'Honey - Almond',
    description: 'Golden honey cake with crunchy almond layers — sweet and nutty',
    category: 'Fusion Cakes',
    image: '/menu/cake-19.jpg',
  },
  {
    id: 'kifaya',
    name: 'Kifaya (Mango + Pistachio)',
    description: 'Seasonal special — tropical mango meets earthy pistachio',
    category: 'Fusion Cakes',
    image: '/menu/kifaya.jpg',
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
    image: '/menu/cake-21.jpg',
  },
  {
    id: 'pineapple-cake',
    name: 'Pineapple',
    description: 'Light and refreshing pineapple cake with cream and pineapple chunks',
    category: 'Pure Cream',
    image: '/menu/pineapple.jpg',
  },
  {
    id: 'butterscotch-cake',
    name: 'Butterscotch',
    description: 'Rich butterscotch-flavoured cake topped with crunchy praline',
    category: 'Pure Cream',
    image: '/menu/butterscotch.jpg',
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
    image: '/menu/coffee.jpg',
  },
  {
    id: 'dalgona-coffee-cake',
    name: 'Dalgona Coffee',
    description: 'Trendy whipped coffee cream atop a fluffy vanilla base',
    category: 'Pure Cream',
    image: '/menu/dalgona.jpg',
  },
  {
    id: 'blueberry-cake',
    name: 'Blueberry',
    description: 'Bursting with fresh blueberry flavour and a creamy finish',
    category: 'Pure Cream',
    image: '/menu/blueberry.jpg',
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry',
    description: 'Sweet strawberry cream with fresh berry garnish — light and lovely',
    category: 'Pure Cream',
    image: '/menu/strawberry.jpg',
  },
  {
    id: 'caramel-cake',
    name: 'Caramel',
    description: 'Velvety caramel cream on a buttery sponge base — pure indulgence',
    category: 'Pure Cream',
    image: '/menu/caramel.jpg',
  },
  {
    id: 'classic-tresleches',
    name: 'Classic Tresleches',
    description: 'Sponge soaked in three milks — unbelievably moist and creamy',
    category: 'Pure Cream',
    image: '/menu/cake-30.jpg',
  },
  {
    id: 'mango-truffle',
    name: 'Mango Truffle',
    description: 'Seasonal tropical mango meets creamy truffle — sunshine in a slice',
    category: 'Pure Cream',
    image: '/menu/mango-truffle.jpg',
    seasonal: true,
  },
  {
    id: 'orange-truffle',
    name: 'Orange Truffle',
    description: 'Zesty orange cream layered with smooth truffle — seasonal favourite',
    category: 'Pure Cream',
    image: '/menu/orange-truffle.jpg',
    seasonal: true,
  },
  {
    id: 'fresh-fruit-cake',
    name: 'Fresh Fruit',
    description: 'Light cream cake loaded with seasonal fresh fruits — colourful and fresh',
    category: 'Pure Cream',
    image: '/menu/fresh-fruit.jpg',
  },

  // ═══════════════════════════════════════════════
  // PREMIUM CAKES
  // ═══════════════════════════════════════════════
  {
    id: 'lotus-biscoff',
    name: 'Lotus Biscoff',
    description: 'Caramelised biscuit cake with Biscoff spread and cookie crumble',
    category: 'Premium Cakes',
    image: '/menu/lotus-biscoff.jpg',
    featured: true,
  },
  {
    id: 'french-opera',
    name: 'French Opera',
    description: 'Elegant layers of almond sponge, coffee buttercream, and chocolate ganache',
    category: 'Premium Cakes',
    image: '/menu/french-opera.jpg',
  },
  {
    id: 'medovik',
    name: 'Medovik — Russian Honey Cake',
    description: 'Traditional Russian layered honey cake with silky cream — a true delicacy',
    category: 'Premium Cakes',
    image: '/menu/medovik.jpg',
  },
  {
    id: 'rosemilk-tresleches',
    name: 'Rosemilk Tresleches',
    description: 'Fragrant rose-infused tres leches — an Indian twist on a classic',
    category: 'Premium Cakes',
    image: '/menu/rosemilk.jpg',
  },
  {
    id: 'rainbow-cake',
    name: 'Rainbow Cake',
    description: 'Vibrant multi-layered rainbow sponge with vanilla cream — a showstopper',
    category: 'Premium Cakes',
    image: '/menu/rainbow.jpg',
  },
  {
    id: 'tender-coconut',
    name: 'Tender Coconut',
    description: 'Light coconut cream cake with tender coconut pieces — tropical bliss',
    category: 'Premium Cakes',
    image: '/menu/tender-coconut.jpg',
  },
  {
    id: 'rasmalai-cake',
    name: 'Rasmalai',
    description: 'Indian fusion — saffron-cardamom sponge with rasmalai-inspired cream',
    category: 'Premium Cakes',
    image: '/menu/rasmalai.jpg',
  },
  {
    id: 'gulab-jamun-cake',
    name: 'Gulab Jamun',
    description: 'Sweet gulab jamun flavours baked into a luxurious cake — festive favourite',
    category: 'Premium Cakes',
    image: '/menu/gulab-jamun.jpg',
  },
  {
    id: 'rich-plum',
    name: 'Rich Plum',
    description: 'Where every bite carries a hint of Rum — rich, dark, and decadent',
    category: 'Premium Cakes',
    image: '/menu/rich-plum.jpg',
  },
  {
    id: 'cheese-cake',
    name: 'Cheese Cake',
    description: 'Creamy New York-style cheesecake on a buttery biscuit base',
    category: 'Premium Cakes',
    image: '/menu/cheese-cake.jpg',
  },

  // ═══════════════════════════════════════════════
  // CUP CAKES — Small Cakes, Big Smiles
  // ═══════════════════════════════════════════════
  {
    id: 'cupcake-vanilla',
    name: 'Vanilla Cupcake',
    description: 'Fluffy vanilla cupcake with swirled buttercream frosting',
    category: 'Cup Cakes',
    image: '/menu/cupcake-vanilla.jpg',
  },
  {
    id: 'cupcake-chocolate',
    name: 'Chocolate Cupcake',
    description: 'Rich chocolate cupcake with decadent chocolate buttercream',
    category: 'Cup Cakes',
    image: '/menu/cupcake-chocolate.jpg',
  },
  {
    id: 'cupcake-butterscotch',
    name: 'Butterscotch Cupcake',
    description: 'Sweet butterscotch cupcake topped with praline crunch',
    category: 'Cup Cakes',
    image: '/menu/cupcake-butterscotch.jpg',
  },
  {
    id: 'cupcake-strawberry',
    name: 'Strawberry Cupcake',
    description: 'Pink strawberry cupcake with fresh strawberry cream swirl',
    category: 'Cup Cakes',
    image: '/menu/cupcake-strawberry.jpg',
  },
  {
    id: 'cupcake-red-velvet',
    name: 'Red Velvet Cupcake',
    description: 'Classic red velvet cupcake with cream cheese frosting',
    category: 'Cup Cakes',
    image: '/menu/cupcake-redvelvet.jpg',
    featured: true,
  },
  {
    id: 'cupcake-caramel',
    name: 'Caramel Cupcake',
    description: 'Fluffy cupcake topped with caramel buttercream and caramel drizzle',
    category: 'Cup Cakes',
    image: '/menu/cupcake-caramel.jpg',
  },

  // ═══════════════════════════════════════════════
  // TEA BREAK TREATS
  // ═══════════════════════════════════════════════
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Overloaded Brownie',
    description: 'Dense, fudgy brownie loaded with extra chocolate — pure indulgence',
    category: 'Tea Break Treats',
    image: '/menu/choc-brownie.jpg',
    featured: true,
  },
  {
    id: 'chocolate-lamington',
    name: 'Chocolate Lamington',
    description: 'Sponge cubes coated in chocolate and rolled in desiccated coconut',
    category: 'Tea Break Treats',
    image: '/menu/choc-lamington.jpg',
  },
  {
    id: 'butter-cake',
    name: 'Butter Cake',
    description: 'Classic buttery sponge cake — soft, simple, and irresistible',
    category: 'Tea Break Treats',
    image: '/menu/butter-cake.jpg',
  },
  {
    id: 'marble-cake',
    name: 'Marble Cake',
    description: 'Swirled vanilla and chocolate cake — a visual and flavourful treat',
    category: 'Tea Break Treats',
    image: '/menu/marble-cake.jpg',
  },
  {
    id: 'bundt-cake',
    name: 'Bundt Cake',
    description: 'Beautifully shaped bundt cake with a moist, tender crumb',
    category: 'Tea Break Treats',
    image: '/menu/bundt-cake.jpg',
  },
  {
    id: 'banana-loaf',
    name: 'Banana Loaf',
    description: 'Moist banana bread with walnuts — perfect for tea time',
    category: 'Tea Break Treats',
    image: '/menu/banana-loaf.jpg',
  },
  {
    id: 'blueberry-loaf',
    name: 'Blueberry Loaf',
    description: 'Soft loaf bursting with blueberries — sweet and tangy',
    category: 'Tea Break Treats',
    image: '/menu/blueberry-loaf.jpg',
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with cream cheese frosting and walnut crumble',
    category: 'Tea Break Treats',
    image: '/menu/carrot-cake.jpg',
  },
  {
    id: 'chocolate-loaf',
    name: 'Chocolate Loaf',
    description: 'Rich, dense chocolate loaf — the ultimate snack for chocoholics',
    category: 'Tea Break Treats',
    image: '/menu/choc-loaf.jpg',
  },
  {
    id: 'jam-roll',
    name: 'Jam Roll',
    description: 'Light sponge rolled with sweet jam filling — a nostalgic favourite',
    category: 'Tea Break Treats',
    image: '/menu/jam-roll.jpg',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    description: 'Warm, gooey cinnamon rolls with cream cheese glaze',
    category: 'Tea Break Treats',
    image: '/menu/cinnamon-roll.jpg',
  },
  {
    id: 'mawa-cake',
    name: 'Mawa Cake',
    description: 'Traditional Indian mawa (khoya) cake with cardamom — rich and aromatic',
    category: 'Tea Break Treats',
    image: '/menu/mawa-cake.jpg',
  },

  // ═══════════════════════════════════════════════
  // CRUMBLE 'N' CRUNCH — BITE SIZED HAPPINESS
  // ═══════════════════════════════════════════════
  {
    id: 'macarons',
    name: 'Macarons',
    description: 'Delicate, colourful French macarons with rich fillings',
    category: 'Crumble n Crunch',
    image: '/menu/macaron-1.jpg',
    featured: true,
  },
  {
    id: 'sugar-cookies',
    name: 'Sugar Cookies',
    description: 'Sweet, buttery sugar cookies — simple perfection',
    category: 'Crumble n Crunch',
    image: '/menu/sugar-cookies.jpg',
  },
  {
    id: 'oats-choco-chip-cookies',
    name: 'Oats-Choco Chip Cookies',
    description: 'Hearty oat cookies loaded with chocolate chips — guilt-free(ish)',
    category: 'Crumble n Crunch',
    image: '/menu/oats-choco-cookies.jpg',
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
    image: '/menu/coconut-kisses.jpg',
  },
  {
    id: 'almond-cookies',
    name: 'Almond Cookies',
    description: 'Nutty almond cookies with a satisfying crunch',
    category: 'Crumble n Crunch',
    image: '/menu/almond-cookies.jpg',
  },
  {
    id: 'london-almond-cookies',
    name: 'London Almond Cookies',
    description: 'Premium almond cookies inspired by classic London bakeries',
    category: 'Crumble n Crunch',
    image: '/menu/london-almond.jpg',
  },
  {
    id: 'jam-cookies',
    name: 'Jam Cookies',
    description: 'Buttery cookies with a sweet jam center — a delightful bite',
    category: 'Crumble n Crunch',
    image: '/menu/jam-cookies.jpg',
  },
  {
    id: 'sesame-crackers',
    name: 'Sesame Crackers (Sweet & Salt)',
    description: 'Crispy sesame crackers available in sweet and salty — addictively crunchy',
    category: 'Crumble n Crunch',
    image: '/menu/sesame-crackers.jpg',
  },
  {
    id: 'butter-palmers',
    name: 'Butter Palmers',
    description: 'Flaky, caramelised puff pastry hearts — golden and crispy',
    category: 'Crumble n Crunch',
    image: '/menu/butter-palmers.jpg',
  },
  {
    id: 'cheese-crackers',
    name: 'Cheese Crackers',
    description: 'Savoury cheese-flavoured crackers — the perfect snack companion',
    category: 'Crumble n Crunch',
    image: '/menu/cheese-crackers.jpg',
  },

  // ═══════════════════════════════════════════════
  // MINI INDULGENCES
  // ═══════════════════════════════════════════════
  {
    id: 'donuts',
    name: 'Donuts',
    description: 'Soft, fluffy donuts with colourful glazes and toppings',
    category: 'Mini Indulgences',
    image: '/menu/donuts.jpg',
  },
  {
    id: 'cake-pops',
    name: 'Cake Pops',
    description: 'Fun bite-sized cake balls on a stick — perfect for parties',
    category: 'Mini Indulgences',
    image: '/menu/cake-pops.jpg',
  },
  {
    id: 'cake-sickles',
    name: 'Cake Sickles',
    description: 'Cake on a popsicle stick — the coolest way to eat cake',
    category: 'Mini Indulgences',
    image: '/menu/cake-sickles.jpg',
  },
  {
    id: 'jar-cake',
    name: 'Jar Cake',
    description: 'Layered cake in a jar — beautifully presented and delicious',
    category: 'Mini Indulgences',
    image: '/menu/jar-cake.jpg',
    featured: true,
  },
  {
    id: 'tub-cake',
    name: 'Tub Cake',
    description: 'Generous tub of your favourite cake flavour — pure comfort',
    category: 'Mini Indulgences',
    image: '/menu/tub-cake.jpg',
  },
  {
    id: 'tin-cake',
    name: 'Tin Cake',
    description: 'Adorable individual cakes baked and served in vintage tins',
    category: 'Mini Indulgences',
    image: '/menu/tin-cake.jpg',
  },
  {
    id: 'dream-cake',
    name: 'Dream Cake',
    description: 'A dreamy layered mini cake — small but heavenly',
    category: 'Mini Indulgences',
    image: '/menu/dream-cake.jpg',
  },
  {
    id: 'letto-milk-cake',
    name: 'Letto Milk Cake',
    description: 'Soft milk cake with a melt-in-your-mouth texture',
    category: 'Mini Indulgences',
    image: '/menu/letto-milk.jpg',
  },
  {
    id: 'korean-buns',
    name: 'Korean Buns',
    description: 'Trendy Korean cream buns with a crispy cookie shell top',
    category: 'Mini Indulgences',
    image: '/menu/korean-buns.jpg',
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
