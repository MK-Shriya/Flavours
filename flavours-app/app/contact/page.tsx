'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="page-hero-bg">
          <Image
            src="/hero/pexels-trishik-bose-166596160-33339343.jpg"
            alt="Sweet treats background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
            priority
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.div
            className="section-divider"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="body-lg text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ maxWidth: '500px', margin: '0.5rem auto 0' }}
          >
            We&apos;d love to hear from you — drop us a message or visit us!
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div className="contact-grid">
          {/* Left: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div
              className="contact-info-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="contact-icon pink"><WhatsAppIcon size={24} color="#25D366" /></div>
              <div className="contact-info">
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/917207022710"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 72070 22710
                </a>
                <p style={{ marginTop: '4px' }}>
                  The fastest way to reach us — chat directly!
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="contact-icon lavender">🎥</div>
              <div className="contact-info">
                <h3>YouTube</h3>
                <a
                  href="https://www.youtube.com/@flavours_bakedwithlove"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  flavours_bakedwithlove
                </a>
                <p style={{ marginTop: '4px' }}>
                  Watch our baking videos and tutorials!
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="contact-icon pink">📸</div>
              <div className="contact-info">
                <h3>Instagram</h3>
                <a
                  href="https://www.instagram.com/flavours_bakedwithlove/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @flavours_bakedwithlove
                </a>
                <p style={{ marginTop: '4px' }}>
                  Check out our latest aesthetic bakes!
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="contact-icon yellow">📍</div>
              <div className="contact-info">
                <h3>Visit Us</h3>
                <p>
                  Flavours_bakedwithlove<br />
                  Flat no.307, Tirumala Sankalp Arcade<br />
                  Laxmi Narasimha Colony, Ghori Nagar<br />
                  Old Bowenpally, Secunderabad-500011
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="contact-icon pink">🕐</div>
              <div className="contact-info">
                <h3>Order Timings</h3>
                <p>
                  <strong>Pre-order at least 2 days in advance</strong><br />
                  All items are freshly baked to order — no ready stock.<br />
                  Message us on WhatsApp to discuss your requirements!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            className="contact-map"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.437!2d78.4895!3d17.4760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a4f0d3d9db1%3A0x0!2sOld%20Bowenpally%2C%20Secunderabad%2C%20Telangana%20500011!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 'none', minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flavours Location - Old Bowenpally, Secunderabad"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
