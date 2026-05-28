'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories, getMenuByCategory, type Category } from '@/lib/menu-data';
import { generateWhatsAppMessage, openWhatsApp, type CartItem } from '@/lib/whatsapp';
import { createOrder, generateOrderId } from '@/lib/supabase';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryItems = getMenuByCategory(activeCategory);
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return categoryItems;
    const q = searchQuery.toLowerCase();
    return categoryItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [categoryItems, searchQuery]);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = useCallback((item: typeof menuItems[0]) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          category: item.category,
          image: item.image,
          qty: 1,
        },
      ];
    });
  }, []);

  const updateQty = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0)
    );
  }, []);

  const handlePlaceOrder = async () => {
    if (!customerName.trim() || !customerPhone.trim()) return;
    setIsSubmitting(true);

    const orderId = generateOrderId();

    try {
      await createOrder({
        id: orderId,
        customer_name: customerName,
        phone: customerPhone,
        items: cart.map((c) => ({ name: c.name, qty: c.qty })),
      });
    } catch {
      // Supabase might not be configured — still send WhatsApp
    }

    const message = generateWhatsAppMessage(orderId, cart, customerName, customerPhone);
    openWhatsApp(message);

    // Reset
    setCart([]);
    setOrderModalOpen(false);
    setCartOpen(false);
    setCustomerName('');
    setCustomerPhone('');
    setIsSubmitting(false);
  };

  return (
    <div className="menu-page">
      {/* Menu Hero */}
      <section className="menu-hero">
        <div className="container">
          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="body-lg text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ maxWidth: '500px', margin: '0.5rem auto 0' }}
          >
            Every item is fully customisable — pick what you love and we&apos;ll make it perfect for you
          </motion.p>
        </div>
      </section>

      {/* Search + Category Tabs */}
      <div className="menu-controls">
        <div className="menu-search">
          <span className="menu-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for cakes, brownies, cookies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="menu-search-input"
            id="menu-search"
          />
          {searchQuery && (
            <button
              className="menu-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container">
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-4xl) 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 className="heading-sm">No items found</h3>
            <p className="text-muted" style={{ marginTop: '0.5rem' }}>
              Try a different search term or browse by category
            </p>
          </div>
        ) : (
        <motion.div
          className="menu-grid"
          initial="hidden"
          animate="visible"
          key={`${activeCategory}-${searchQuery}`}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => {
              const inCart = cart.find((c) => c.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  className="menu-card"
                  variants={fadeInUp}
                  layout
                >
                  <div className="menu-card-img">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="menu-card-body">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="menu-card-footer">
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span className="menu-card-tag">✨ Customisable</span>
                        {item.seasonal && (
                          <span className="menu-card-tag" style={{ background: 'rgba(255, 165, 0, 0.12)', color: '#e68a00' }}>🌸 Seasonal</span>
                        )}
                      </div>
                      <button
                        className={`add-to-cart-btn ${inCart ? 'added' : ''}`}
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to cart`}
                      >
                        {inCart ? '✓' : '+'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        )}
      </div>

      {/* Cart Badge (Mobile) */}
      {cartCount > 0 && (
        <div
          className="cart-badge visible"
          onClick={() => setCartOpen(true)}
        >
          🛒 View Cart
          <span className="cart-badge-count">{cartCount}</span>
        </div>
      )}

      {/* Cart Overlay */}
      <div
        className={`cart-overlay ${cartOpen ? 'open' : ''}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart 🛒</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🧁</div>
              <p>Your cart is empty</p>
              <p className="body-sm text-muted" style={{ marginTop: '0.5rem' }}>
                Browse our menu and add some treats!
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                </div>
                <div className="cart-item-qty">
                  <button onClick={() => updateQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <p className="body-sm text-muted" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
              Pricing will be discussed on WhatsApp based on your customisation
            </p>
            <button
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
              onClick={() => {
                setCartOpen(false);
                setOrderModalOpen(true);
              }}
            >
              💬 Place Order via WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Desktop Cart Toggle */}
      {cartCount > 0 && (
        <button
          style={{
            position: 'fixed',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            background: 'var(--color-text)',
            color: 'white',
            border: 'none',
            padding: '1rem 0.75rem',
            borderRadius: '12px 0 0 12px',
            cursor: 'pointer',
            zIndex: 1000,
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
          }}
          onClick={() => setCartOpen(true)}
        >
          🛒
          <span
            style={{
              background: 'var(--color-accent)',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
            }}
          >
            {cartCount}
          </span>
        </button>
      )}

      {/* Order Modal */}
      <div className={`modal-overlay ${orderModalOpen ? 'open' : ''}`}>
        <div className="modal">
          <h2 className="heading-md">Almost There! 🎉</h2>
          <p className="modal-subtitle">
            Just need your details to complete the order
          </p>

          <div className="form-group">
            <label htmlFor="customer-name">Your Name</label>
            <input
              id="customer-name"
              type="text"
              placeholder="e.g. Rahul"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="customer-phone">Phone Number</label>
            <input
              id="customer-phone"
              type="tel"
              placeholder="e.g. 9876543210"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              className="btn btn-secondary"
              style={{ flex: 1 }}
              onClick={() => setOrderModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-whatsapp"
              style={{ flex: 2 }}
              onClick={handlePlaceOrder}
              disabled={!customerName.trim() || !customerPhone.trim() || isSubmitting}
            >
              {isSubmitting ? '⏳ Processing...' : '💬 Send to WhatsApp'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
