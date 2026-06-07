import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'Our Story — Meet Sreeja | Flavours Bakery Secunderabad',
  description:
    'Discover the heart behind Flavours — Sreeja Sreekumar\'s journey from corporate life to handcrafting artisan cakes from her home kitchen in Old Bowenpally, Secunderabad. 5+ years of baking with love.',
  keywords: [
    'Flavours bakery story',
    'Sreeja Sreekumar baker',
    'home baker Secunderabad',
    'artisan bakery Bowenpally',
    'handmade cakes Secunderabad',
    'about Flavours baked with love',
  ],
  openGraph: {
    title: 'Our Story — Meet Sreeja | Flavours Bakery',
    description:
      'From corporate boardrooms to baking beautiful cakes — discover how Sreeja built Flavours from her home kitchen in Secunderabad.',
    type: 'website',
    url: 'https://flavours-smoky.vercel.app/about',
    images: [
      {
        url: '/lifestyle/profile.jpeg',
        width: 500,
        height: 625,
        alt: 'Sreeja — the heart behind Flavours bakery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story — Meet Sreeja | Flavours Bakery',
    description:
      'From corporate boardrooms to baking beautiful cakes — discover how Sreeja built Flavours.',
    images: ['/lifestyle/profile.jpeg'],
  },
  alternates: {
    canonical: 'https://flavours-smoky.vercel.app/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
