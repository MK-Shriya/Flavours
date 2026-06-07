import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://flavours-smoky.vercel.app'),
  title: {
    default: 'Flavours — Baked with Love | Home Bakery in Secunderabad',
    template: '%s | Flavours — Baked with Love',
  },
  description:
    'Handcrafted cakes, brownies, cookies & cupcakes made with love in Old Bowenpally, Secunderabad. Custom orders via WhatsApp. Pre-order at least 3 days in advance.',
  keywords: [
    'Flavours baked with love',
    'Flavours bakery',
    'bakery',
    'cakes',
    'brownies',
    'cookies',
    'cupcakes',
    'Secunderabad',
    'Hyderabad',
    'Bowenpally',
    'Old Bowenpally',
    'home bakery',
    'custom cakes',
    'Flavours',
  ],
  authors: [{ name: 'Flavours — Baked with Love' }],
  creator: 'Flavours — Baked with Love',
  publisher: 'Flavours — Baked with Love',
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    title: 'Flavours — Baked with Love',
    description: 'Handcrafted cakes, brownies & cookies from a home bakery in Secunderabad',
    type: 'website',
    locale: 'en_IN',
    url: 'https://flavours-smoky.vercel.app',
    siteName: 'Flavours — Baked with Love',
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
    card: 'summary',
    title: 'Flavours — Baked with Love',
    description: 'Handcrafted cakes, brownies & cookies from a home bakery in Secunderabad',
    images: ['/logo.jpeg'],
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  verification: {
    // Add your Google Search Console verification code here when you set it up:
    // google: 'your-verification-code',
  },
};

// Structured data for the bakery business — helps Google show rich results
const bakeryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Flavours — Baked with Love',
  alternateName: 'Flavours Bakery',
  description:
    'Handcrafted cakes, brownies, cookies & cupcakes made with love in Old Bowenpally, Secunderabad. Over 60 varieties including Chocolate Heaven, Fusion Cakes, Premium Cakes, Cupcakes & Tea Break Treats.',
  image: 'https://flavours-smoky.vercel.app/logo.jpeg',
  url: 'https://flavours-smoky.vercel.app',
  telephone: '+917207022710',
  email: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat no.307, Tirumala Sankalp Arcade, Laxmi Narasimha Colony, Ghori Nagar, Old Bowenpally',
    addressLocality: 'Secunderabad',
    addressRegion: 'Telangana',
    postalCode: '500011',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.476,
    longitude: 78.4895,
  },
  sameAs: [
    'https://www.instagram.com/flavours_bakedwithlove/',
    'https://www.youtube.com/@flavours_bakedwithlove',
  ],
  priceRange: '₹₹',
  servesCuisine: ['Bakery', 'Cakes', 'Desserts'],
  hasMenu: 'https://flavours-smoky.vercel.app/menu',
  areaServed: {
    '@type': 'City',
    name: 'Secunderabad',
  },
  founder: {
    '@type': 'Person',
    name: 'Sreeja Sreekumar',
  },
  foundingDate: '2020',
  knowsAbout: [
    'Custom cakes',
    'Birthday cakes',
    'Wedding cakes',
    'Chocolate cakes',
    'Brownies',
    'Cookies',
    'Cupcakes',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://flavours-smoky.vercel.app',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Menu',
      item: 'https://flavours-smoky.vercel.app/menu',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Our Story',
      item: 'https://flavours-smoky.vercel.app/about',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://flavours-smoky.vercel.app/contact',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={bakeryJsonLd} />
        <JsonLd data={breadcrumbJsonLd} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
