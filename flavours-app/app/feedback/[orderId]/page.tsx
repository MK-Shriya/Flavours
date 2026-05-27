'use client';

import { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';
import { getOrder, submitReview } from '@/lib/supabase';
import { menuItems } from '@/lib/menu-data';
import Link from 'next/link';

type PageState = 'loading' | 'form' | 'submitted' | 'already_reviewed' | 'invalid';

export default function FeedbackPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = use(params);
  const [state, setState] = useState<PageState>('loading');
  const [order, setOrder] = useState<{ customer_name: string } | null>(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [favouriteItem, setFavouriteItem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function checkOrder() {
      try {
        const data = await getOrder(orderId);
        if (!data) {
          setState('invalid');
          return;
        }
        if (data.feedback_given) {
          setState('already_reviewed');
          return;
        }
        setOrder(data);
        setState('form');
      } catch {
        // If Supabase not configured, show the form with demo mode
        setState('form');
        setOrder({ customer_name: 'Customer' });
      }
    }
    checkOrder();
  }, [orderId]);

  const handleSubmit = async () => {
    if (rating === 0 || !reviewText.trim()) return;
    setIsSubmitting(true);

    try {
      await submitReview({
        order_id: orderId,
        rating,
        review: reviewText,
        customer_name: order?.customer_name || 'Customer',
        favourite_item: favouriteItem || undefined,
      });
    } catch {
      // Supabase might not be configured
    }

    setState('submitted');
    setIsSubmitting(false);
  };

  return (
    <div className="feedback-page">
      <motion.div
        className="feedback-card"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Loading */}
        {state === 'loading' && (
          <div>
            <div className="feedback-success-icon">⏳</div>
            <h1 className="heading-md">Loading...</h1>
            <p className="feedback-subtitle">Checking your order</p>
          </div>
        )}

        {/* Invalid Order */}
        {state === 'invalid' && (
          <div className="feedback-error">
            <div className="feedback-success-icon">😕</div>
            <h1 className="heading-md">Order Not Found</h1>
            <p className="feedback-subtitle">
              We couldn&apos;t find an order with ID <strong>{orderId}</strong>.
              Please check the link and try again.
            </p>
            <Link href="/" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
              Go Home
            </Link>
          </div>
        )}

        {/* Already Reviewed */}
        {state === 'already_reviewed' && (
          <div>
            <div className="feedback-success-icon">✅</div>
            <h1 className="heading-md">Already Reviewed</h1>
            <p className="feedback-subtitle">
              You&apos;ve already submitted feedback for this order. Thank you!
            </p>
            <Link href="/" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
              Go Home
            </Link>
          </div>
        )}

        {/* Review Form */}
        {state === 'form' && (
          <>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧁</div>
            <h1 className="heading-md">How was your order?</h1>
            <p className="feedback-subtitle">
              Order <strong>{orderId}</strong> — we&apos;d love your honest feedback!
            </p>

            {/* Star Rating */}
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={rating >= star ? 'active' : ''}
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star} stars`}
                >
                  {rating >= star ? '⭐' : '☆'}
                </button>
              ))}
            </div>

            {/* Review Text */}
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="review-text">Your Review</label>
              <textarea
                id="review-text"
                rows={4}
                placeholder="Tell us what you loved about your order..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Favourite Item */}
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="favourite-item">
                Which item did you love most? (optional)
              </label>
              <select
                id="favourite-item"
                value={favouriteItem}
                onChange={(e) => setFavouriteItem(e.target.value)}
              >
                <option value="">— Select an item —</option>
                {menuItems.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '0.5rem' }}
              onClick={handleSubmit}
              disabled={rating === 0 || !reviewText.trim() || isSubmitting}
            >
              {isSubmitting ? '⏳ Submitting...' : '✨ Submit Review'}
            </button>
          </>
        )}

        {/* Success */}
        {state === 'submitted' && (
          <div className="feedback-success">
            <div className="feedback-success-icon">🎉</div>
            <h1 className="heading-md">Thank You!</h1>
            <p className="feedback-subtitle">
              Your review means the world to us. We&apos;re glad you enjoyed your order!
            </p>
            <Link href="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Visit Our Website
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
