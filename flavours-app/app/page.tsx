import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Flavours — Baked with Love | Home Bakery in Secunderabad',
  description:
    'Handcrafted cakes, brownies, cookies & cupcakes made with love in Old Bowenpally, Secunderabad. Over 60 varieties of chocolate cakes, fusion cakes, premium cakes, cupcakes & cookies. Custom orders via WhatsApp. Pre-order at least 3 days in advance.',
  keywords: [
    'Flavours baked with love',
    'Flavours bakery',
    'bakery Bowenpally',
    'bakery Old Bowenpally',
    'bakery Secunderabad',
    'home bakery Secunderabad',
    'cakes Secunderabad',
    'custom cakes Hyderabad',
    'chocolate cake Secunderabad',
    'birthday cake Secunderabad',
    'brownies Secunderabad',
    'cookies Secunderabad',
    'cupcakes Secunderabad',
    'eggless cakes Secunderabad',
    'Flavours',
    'Sreeja bakery',
  ],
  openGraph: {
    title: 'Flavours — Baked with Love | Home Bakery in Secunderabad',
    description:
      'Handcrafted cakes, brownies, cookies & cupcakes from a home bakery in Old Bowenpally, Secunderabad. Order via WhatsApp!',
    type: 'website',
    url: 'https://flavours-smoky.vercel.app',
    siteName: 'Flavours — Baked with Love',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpeg',
        width: 500,
        height: 500,
        alt: 'Flavours — Baked with Love Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flavours — Baked with Love | Home Bakery in Secunderabad',
    description:
      'Handcrafted cakes, brownies & cookies from a home bakery in Old Bowenpally, Secunderabad.',
    images: ['/logo.jpeg'],
  },
  alternates: {
    canonical: 'https://flavours-smoky.vercel.app',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
