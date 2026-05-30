'use client';

import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="floating-whatsapp">
      <a
        href="https://wa.me/917207022710"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={30} color="#fff" />
      </a>
      <div
        className="floating-whatsapp-tooltip"
        style={{ opacity: showTooltip ? 1 : undefined }}
      >
        Chat with us! 🧁
      </div>
    </div>
  );
}
