'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

// Gallery images (all from work/ folder)
const galleryImages = Array.from({ length: 37 }, (_, i) => `/gallery/gallery-${i + 1}.jpg`);

export default function AboutPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
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
            The heart and soul behind every Flavours creation
          </motion.p>
        </div>
      </section>

      {/* Sreeja's Story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-content">
            <motion.div
              className="about-story-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p className="highlight" variants={fadeInUp} custom={0}>
                &ldquo;Behind every cake is a story of courage.&rdquo;
              </motion.p>

              <motion.p variants={fadeInUp} custom={1}>
                Sreeja Sreekumar once spent her days in the corporate world at Olivia —
                spreadsheets, meetings, deadlines. But her heart was always elsewhere.
                It was in the kitchen, in the quiet hum of the oven, in the joy of watching
                someone take that first bite and smile.
              </motion.p>

              <motion.p variants={fadeInUp} custom={2}>
                In 2020, she made the leap — trading boardrooms for butter and flour,
                presentations for piping bags. What started as a passion project from
                her home kitchen in Old Bowenpally quickly became something the
                neighbourhood couldn&apos;t stop talking about.
              </motion.p>

              <motion.p variants={fadeInUp} custom={3}>
                Five years later, Sreeja still does everything herself — from kneading
                the dough at dawn to carefully boxing each order with a personal touch.
                She knows every regular by name, remembers their favourite flavours,
                and puts a little piece of her heart into every creation.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                custom={4}
                style={{ fontWeight: 600, color: 'var(--color-accent)', marginTop: '1rem' }}
              >
                Every Flavours creation carries a piece of her heart. ❤️
              </motion.p>
            </motion.div>

            <motion.div
              className="about-story-img"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/hero/pexels-murun-e-2158048371-37748387.jpg"
                alt="Baking with love"
                width={500}
                height={625}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="quality-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Our Promise</h2>
            <div className="section-divider" />
            <p>What makes Flavours special</p>
          </motion.div>

          <div className="quality-grid">
            <motion.div
              className="quality-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="quality-card-icon">🌿</div>
              <h3>Fresh Ingredients</h3>
              <p>Only the finest, freshest ingredients make it into our kitchen. No preservatives, no shortcuts — just pure, wholesome goodness.</p>
            </motion.div>

            <motion.div
              className="quality-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="quality-card-icon">🎨</div>
              <h3>Fully Customisable</h3>
              <p>Every order is made to your specifications. Theme, flavour, size, decoration — you dream it, Sreeja creates it.</p>
            </motion.div>

            <motion.div
              className="quality-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="quality-card-icon">❤️</div>
              <h3>Made with Love</h3>
              <p>Every single item is handcrafted by Sreeja herself. When you order from Flavours, you&apos;re ordering from family.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Gallery</h2>
            <div className="section-divider" />
            <p>A glimpse of what comes out of our kitchen</p>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setLightboxImg(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox open" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            ✕
          </button>
          <Image
            src={lightboxImg}
            alt="Gallery preview"
            width={800}
            height={800}
            style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh' }}
          />
        </div>
      )}
    </div>
  );
}
