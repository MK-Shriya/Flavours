'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFeaturedItems } from '@/lib/menu-data';
import { getReviews } from '@/lib/supabase';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Sample reviews for when Supabase is not connected
const sampleReviews = [
  {
    id: '1',
    rating: 5,
    review: 'The red velvet cake was absolutely divine! So moist and the cream cheese frosting was perfect. Will definitely order again!',
    customer_name: 'Priya M.',
    created_at: '2025-12-15',
  },
  {
    id: '2',
    rating: 5,
    review: 'Ordered a custom birthday cake for my daughter and Sreeja made it exactly how we wanted. The attention to detail was amazing!',
    customer_name: 'Rahul S.',
    created_at: '2025-11-28',
  },
  {
    id: '3',
    rating: 5,
    review: 'Best brownies in Secunderabad! Fudgy, rich, and absolutely delicious. My family couldn\'t stop eating them.',
    customer_name: 'Anjali K.',
    created_at: '2025-11-10',
  },
];

export default function HomePage() {
  const featuredItems = getFeaturedItems();
  const [reviews, setReviews] = useState(sampleReviews);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getReviews(6);
        if (data && data.length > 0) {
          setReviews(data);
        }
      } catch {
        // Use sample reviews if Supabase is not configured
      }
    }
    fetchReviews();
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/hero/pexels-israyosoy-30877408.jpg"
            alt="Beautiful bakery background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="hero-overlay" />

        {/* Floating decorative blobs */}
        <div className="hero-float hero-float-1" />
        <div className="hero-float hero-float-2" />
        <div className="hero-float hero-float-3" />

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} custom={0}>
            <Image
              src="/logo.jpeg"
              alt="Flavours Logo"
              width={140}
              height={140}
              className="hero-logo"
              style={{ borderRadius: '50%' }}
            />
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp} custom={1}>
            Flavours
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp} custom={2}>
            Baked with Love...
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeInUp} custom={3}>
            <Link href="/menu" className="btn btn-primary btn-lg">
              🧁 Explore Menu
            </Link>
            <a
              href="https://wa.me/917207022710"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <WhatsAppIcon size={18} color="currentColor" /> Order on WhatsApp
            </a>
          </motion.div>

          <motion.div className="hero-badge" variants={fadeInUp} custom={4}>
            <span>📍</span> Old Bowenpally, Secunderabad
            <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
            <span>🕐</span> Pre-order 2 days before
          </motion.div>
        </motion.div>
      </section>

      {/* ===== BESTSELLERS SECTION ===== */}
      <section className="section bestsellers">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Our Bestsellers</h2>
            <div className="section-divider" />
            <p>Loved by our customers — handcrafted with the finest ingredients</p>
          </motion.div>

          <motion.div
            className="bestseller-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {featuredItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="bestseller-card"
                variants={fadeInUp}
                custom={i}
              >
                <div className="bestseller-card-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <span className="bestseller-card-badge">⭐ Bestseller</span>
                </div>
                <div className="bestseller-card-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/menu" className="btn btn-secondary">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCROLLING TICKER STRIP ===== */}
      <div className="ticker-strip">
        <div className="ticker-track">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} style={{ display: 'flex', alignItems: 'center' }}>
              <span className="ticker-item">Freshly Baked <span className="ticker-dot" /></span>
              <span className="ticker-item">Made with Love <span className="ticker-dot" /></span>
              <span className="ticker-item">100% Handmade <span className="ticker-dot" /></span>
              <span className="ticker-item">No Preservatives <span className="ticker-dot" /></span>
              <span className="ticker-item">Pre-order 2 Days Before <span className="ticker-dot" /></span>
              <span className="ticker-item">FSSAI Licensed <span className="ticker-dot" /></span>
              <span className="ticker-item">Old Bowenpally, Secunderabad <span className="ticker-dot" /></span>
              <span className="ticker-item">Custom Designs Available <span className="ticker-dot" /></span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CELEBRATIONS MOSAIC ===== */}
      <section className="section celebrations-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Celebrate Every Moment</h2>
            <div className="section-divider" />
            <p>From birthdays to milestones — every occasion deserves a Flavours cake</p>
          </motion.div>

          <motion.div
            className="celebrations-mosaic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mosaic-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Image src="/lifestyle/birthday-unicorn.jpg" alt="Colorful birthday celebration cake" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <div className="mosaic-label">
                <h3>Birthday Cakes</h3>
                <p>Make every birthday magical</p>
              </div>
            </motion.div>

            <motion.div
              className="mosaic-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image src="/lifestyle/birthday-mini-cake.jpg" alt="Elegant mini celebration cake" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <div className="mosaic-label">
                <h3>Mini Celebrations</h3>
                <p>Perfect for intimate moments</p>
              </div>
            </motion.div>

            <motion.div
              className="mosaic-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src="/lifestyle/chef-finishing.jpg" alt="Chef crafting a cake" width={600} height={800} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <div className="mosaic-label">
                <h3>Handcrafted with Precision</h3>
                <p>Every detail matters</p>
              </div>
            </motion.div>

            <motion.div
              className="mosaic-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image src="/lifestyle/cake-with-coffee.jpg" alt="Cake slice with coffee" width={800} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <div className="mosaic-label">
                <h3>Afternoon Indulgence</h3>
                <p>Best enjoyed with a cup of chai</p>
              </div>
            </motion.div>

            <motion.div
              className="mosaic-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image src="/lifestyle/date-cake.jpg" alt="Artisan date cake" width={400} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <div className="mosaic-label">
                <h3>Artisan Flavours</h3>
                <p>Unique, rustic recipes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-it-works">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">How to Order</h2>
            <div className="section-divider" />
            <p>Three simple steps to get your favourite treats</p>
          </motion.div>

          <motion.div
            className="steps-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="step-card" variants={fadeInUp} custom={0}>
              <div className="step-icon">🧁</div>
              <p className="step-number">Step 01</p>
              <h3 className="heading-sm">Browse & Pick</h3>
              <p>Explore our menu and add your favourite items to cart</p>
            </motion.div>

            <motion.div className="step-card" variants={fadeInUp} custom={1}>
              <div className="step-icon">💬</div>
              <p className="step-number">Step 02</p>
              <h3 className="heading-sm">Place via WhatsApp</h3>
              <p>Your order is sent directly to us on WhatsApp for confirmation</p>
            </motion.div>

            <motion.div className="step-card" variants={fadeInUp} custom={2}>
              <div className="step-icon">🎉</div>
              <p className="step-number">Step 03</p>
              <h3 className="heading-sm">Enjoy!</h3>
              <p>We&apos;ll bake it fresh and have it ready for you. Pre-order 2 days ahead!</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CRAFTED WITH ARTISTRY ===== */}
      <section className="section artistry-section">
        <div className="container">
          <motion.div
            className="artistry-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="artistry-images"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="artistry-img-wrapper">
                <Image src="/lifestyle/artisan-decorating.jpg" alt="Hands decorating a fresh berry cake" width={700} height={440} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="artistry-img-wrapper">
                <Image src="/lifestyle/tiramisu-slice.jpg" alt="Layered tiramisu cake slice" width={350} height={350} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="artistry-img-wrapper">
                <Image src="/lifestyle/dessert-spread.jpg" alt="Grand dessert spread" width={350} height={350} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </motion.div>

            <motion.div
              className="artistry-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="heading-lg">Crafted with Artistry</h2>
              <div className="section-divider" />
              <p>
                Every Flavours creation is more than just a dessert — it&apos;s a canvas 
                of flavour, texture, and beauty. From the first fold of batter to the 
                final piped rosette, each step is done with intention and care.
              </p>
              <p>
                Using premium ingredients sourced locally and time-honoured techniques 
                perfected over five years, Sreeja transforms simple ingredients into 
                extraordinary experiences that your taste buds won&apos;t forget.
              </p>

              <div className="artistry-stats">
                <div className="artistry-stat">
                  <div className="artistry-stat-number">5+</div>
                  <div className="artistry-stat-label">Years</div>
                </div>
                <div className="artistry-stat">
                  <div className="artistry-stat-number">2000+</div>
                  <div className="artistry-stat-label">Cakes Baked</div>
                </div>
                <div className="artistry-stat">
                  <div className="artistry-stat-number">100%</div>
                  <div className="artistry-stat-label">Handmade</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section className="section reviews-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">What Our Customers Say</h2>
            <div className="section-divider" />
            <p>Real reviews from people who&apos;ve tasted the love</p>
          </motion.div>

          <motion.div
            className="reviews-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                className="review-card"
                variants={fadeInUp}
                custom={i}
              >
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>{idx < review.rating ? '⭐' : '☆'}</span>
                  ))}
                </div>
                <p className="review-text">&ldquo;{review.review}&rdquo;</p>
                <p className="review-author">{review.customer_name}</p>
                <p className="review-date">
                  {new Date(review.created_at).toLocaleDateString('en-IN', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PERFECT FOR EVERY OCCASION ===== */}
      <section className="occasions-banner">
        <div className="occasions-banner-inner">
          <div className="occasions-banner-bg">
            <Image src="/lifestyle/grand-spread.jpg" alt="Grand dessert table spread" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="occasions-banner-overlay" />
          <div className="container">
            <motion.div
              className="occasions-banner-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>Perfect for Every Occasion</h2>
              <p>
                Whether it&apos;s a grand wedding celebration, a cozy birthday at home, 
                or a corporate event — we craft desserts that fit the moment perfectly.
              </p>
              <div className="occasions-tags">
                <span className="occasion-tag">🎂 Birthdays</span>
                <span className="occasion-tag">💒 Weddings</span>
                <span className="occasion-tag">🎉 Anniversaries</span>
                <span className="occasion-tag">🎊 Baby Showers</span>
                <span className="occasion-tag">🏢 Corporate Events</span>
                <span className="occasion-tag">🎄 Festivals</span>
              </div>
              <a
                href="https://wa.me/917207022710?text=Hi%20Sreeja!%20I'd%20like%20to%20discuss%20a%20custom%20order%20for%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <WhatsAppIcon size={18} color="currentColor" /> Discuss Your Event
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== AUTO-SCROLLING GALLERY ===== */}
      <section className="marquee-gallery-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Our Creations</h2>
            <div className="section-divider" />
            <p>A taste of what we&apos;ve baked — hover to pause, scroll to admire</p>
          </motion.div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="marquee-container">
          <div className="marquee-track marquee-track--left">
            {[...Array(2)].map((_, setIdx) => (
              <>{Array.from({ length: 12 }, (_, i) => (
                <div key={`left-${setIdx}-${i}`} className="marquee-item">
                  <Image
                    src={`/gallery/gallery-${i + 1}.jpg`}
                    alt={`Flavours creation ${i + 1}`}
                    width={260}
                    height={260}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              ))}</>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-container">
          <div className="marquee-track marquee-track--right">
            {[...Array(2)].map((_, setIdx) => (
              <>{Array.from({ length: 12 }, (_, i) => (
                <div key={`right-${setIdx}-${i}`} className="marquee-item">
                  <Image
                    src={`/gallery/gallery-${i + 13}.jpg`}
                    alt={`Flavours creation ${i + 13}`}
                    width={260}
                    height={260}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              ))}</>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, var(--color-pink-light), var(--color-lavender-light))',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
              Ready to Order?
            </h2>
            <p
              className="body-lg text-muted"
              style={{ maxWidth: '500px', margin: '0 auto 2rem' }}
            >
              Every cake tells a story. Let us bake yours — custom-made, fresh, and full of love.
            </p>
            <div className="hero-cta-group">
              <Link href="/menu" className="btn btn-primary btn-lg">
                🧁 Browse Menu
              </Link>
              <a
                href="https://wa.me/917207022710"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <WhatsAppIcon size={18} color="currentColor" /> Chat with Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
