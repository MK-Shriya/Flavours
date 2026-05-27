import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Flavours — Baked with Love | Home Bakery in Secunderabad',
  description:
    'Handcrafted cakes, brownies, cookies & cupcakes made with love in Old Bowenpally, Secunderabad. Custom orders via WhatsApp. Pre-order at least 2 days in advance.',
  keywords: [
    'bakery',
    'cakes',
    'brownies',
    'cookies',
    'cupcakes',
    'Secunderabad',
    'Hyderabad',
    'home bakery',
    'custom cakes',
    'Flavours',
  ],
  openGraph: {
    title: 'Flavours — Baked with Love',
    description: 'Handcrafted cakes, brownies & cookies from a home bakery in Secunderabad',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
