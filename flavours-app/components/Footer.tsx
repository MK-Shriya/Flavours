import Link from 'next/link';
import { FACEBOOK_LINK } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Flavours</h3>
            <p>
              Handcrafted with love from our home kitchen in Old Bowenpally,
              Secunderabad. Every creation is made fresh, just for you.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <Link href="/menu">Cakes</Link>
            <Link href="/menu">Cupcakes</Link>
            <Link href="/menu">Brownies</Link>
            <Link href="/menu">Cookies</Link>
          </div>

          <div className="footer-col">
            <h4>Reach Us</h4>
            <a href="https://wa.me/917207022710" target="_blank" rel="noopener noreferrer">
              📱 WhatsApp
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
              📘 Facebook
            </a>
            <a href="https://www.instagram.com/flavours_bakedwithlove/" target="_blank" rel="noopener noreferrer">
              📸 Instagram
            </a>
            <p style={{ fontSize: '0.85rem', color: '#9E9790', marginTop: '8px', lineHeight: 1.5 }}>
              Flat no.307, Tirumala Sankalp Arcade,
              Old Bowenpally, Secunderabad-500011
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Flavours — Baked with Love. All rights reserved.</p>
          <div className="footer-socials">
            <a
              href="https://wa.me/917207022710"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
