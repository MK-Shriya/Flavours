import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us — Order via WhatsApp | Flavours Bakery Secunderabad',
  description:
    'Get in touch with Flavours bakery in Old Bowenpally, Secunderabad. Order custom cakes via WhatsApp at +91 72070 22710. Visit us at Tirumala Sankalp Arcade. Find us on Instagram & YouTube.',
  keywords: [
    'Flavours bakery contact',
    'Flavours bakery WhatsApp',
    'order cake Bowenpally',
    'order cake Secunderabad',
    'bakery Old Bowenpally address',
    'Flavours bakery location',
    'cake delivery Secunderabad',
    'custom cake order WhatsApp',
  ],
  openGraph: {
    title: 'Contact Flavours Bakery — Order via WhatsApp',
    description:
      'Order custom cakes via WhatsApp or visit us at Old Bowenpally, Secunderabad. Open for pre-orders!',
    type: 'website',
    url: 'https://flavours-smoky.vercel.app/contact',
    images: [
      {
        url: '/logo.jpeg',
        width: 500,
        height: 500,
        alt: 'Contact Flavours Bakery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Flavours Bakery — Order via WhatsApp',
    description:
      'Order custom cakes via WhatsApp or visit us at Old Bowenpally, Secunderabad.',
    images: ['/logo.jpeg'],
  },
  alternates: {
    canonical: 'https://flavours-smoky.vercel.app/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
