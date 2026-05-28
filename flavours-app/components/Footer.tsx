import Link from 'next/link';

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
            <p style={{ fontSize: '0.8rem', color: '#9E9790', marginTop: '10px' }}>
              FSSAI Lic. No: 23623029000268
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
            <Link href="/menu">Chocolate Heaven</Link>
            <Link href="/menu">Fusion Cakes</Link>
            <Link href="/menu">Premium Cakes</Link>
            <Link href="/menu">Cup Cakes</Link>
            <Link href="/menu">Tea Break Treats</Link>
          </div>

          <div className="footer-col">
            <h4>Reach Us</h4>
            <a href="https://wa.me/917207022710" target="_blank" rel="noopener noreferrer">
              📱 WhatsApp
            </a>
            <a href="https://www.instagram.com/flavours_bakedwithlove/" target="_blank" rel="noopener noreferrer">
              📸 Instagram
            </a>
            <a href="https://www.youtube.com/@flavoursbysreeja" target="_blank" rel="noopener noreferrer">
              🎥 YouTube
            </a>
            <p style={{ fontSize: '0.85rem', color: '#9E9790', marginTop: '8px', lineHeight: 1.5 }}>
              Flat no.307, Tirumala Sankalp Arcade,
              Old Bowenpally, Secunderabad-500011
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Flavours — Baked with Love. All rights reserved.</p>
          <p style={{ fontSize: '0.75rem', color: '#8a837d', marginTop: '4px' }}>
            FSSAI: 23623029000268
          </p>
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
              href="https://www.instagram.com/flavours_bakedwithlove/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="https://www.youtube.com/@flavoursbysreeja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              🎥
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
