'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="nav-logo">
            <Image
              src="/logo.jpeg"
              alt="Flavours Logo"
              width={44}
              height={44}
              style={{ borderRadius: '50%' }}
            />
            <div>
              <span className="nav-logo-text">Flavours</span>
              <span className="nav-logo-tagline">baked with love...</span>
            </div>
          </Link>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/menu" className="nav-order-btn">
              Order Now
            </Link>
          </div>

          <button
            className={`nav-hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
