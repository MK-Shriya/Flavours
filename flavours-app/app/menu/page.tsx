import type { Metadata } from 'next';
import MenuContent from '@/components/MenuContent';

export const metadata: Metadata = {
  title: 'Our Menu — Cakes, Brownies, Cookies & More | Flavours Bakery Secunderabad',
  description:
    'Browse 60+ handcrafted cakes, brownies, cookies & cupcakes at Flavours. Chocolate Heaven, Fusion Cakes, Premium Cakes, Cupcakes, Tea Break Treats & more. Order custom cakes via WhatsApp from Old Bowenpally, Secunderabad.',
  keywords: [
    'cake menu Secunderabad',
    'chocolate cake Bowenpally',
    'custom cake order Secunderabad',
    'birthday cake Secunderabad',
    'red velvet cake Secunderabad',
    'brownie Secunderabad',
    'cupcakes Secunderabad',
    'cookies bakery Secunderabad',
    'Flavours menu',
    'fusion cakes Hyderabad',
    'premium cakes Secunderabad',
    'Lotus Biscoff cake',
    'KitKat cake Secunderabad',
    'Ferrero Rocher cake',
    'eggless cake Bowenpally',
  ],
  openGraph: {
    title: 'Our Menu — 60+ Handcrafted Treats | Flavours Bakery',
    description:
      'Explore our full menu of cakes, brownies, cookies & cupcakes. All items fully customisable. Order via WhatsApp!',
    type: 'website',
    url: 'https://flavours-smoky.vercel.app/menu',
    images: [
      {
        url: '/logo.jpeg',
        width: 500,
        height: 500,
        alt: 'Flavours Bakery Menu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Menu — 60+ Handcrafted Treats | Flavours Bakery',
    description:
      'Explore our full menu of cakes, brownies, cookies & cupcakes. Order via WhatsApp!',
    images: ['/logo.jpeg'],
  },
  alternates: {
    canonical: 'https://flavours-smoky.vercel.app/menu',
  },
};

export default function MenuPage() {
  return <MenuContent />;
}
