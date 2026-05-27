const WHATSAPP_LINK = 'https://wa.me/917207022710';
const WHATSAPP_NUMBER = '917207022710';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  image: string;
  qty: number;
}

export function generateWhatsAppMessage(
  orderId: string,
  items: CartItem[],
  customerName: string,
  customerPhone: string
): string {
  const itemLines = items
    .map((item) => `• ${item.name} × ${item.qty}`)
    .join('\n');

  return `Hello! I'd like to place an order 🛒

Order ID: ${orderId}

Items:
${itemLines}

Name: ${customerName}
Phone: ${customerPhone}

Please let me know the pricing and availability! 🙏`;
}

export function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, '_blank');
}

export function getWhatsAppDirectLink(): string {
  return WHATSAPP_LINK;
}

export const FACEBOOK_LINK = 'https://www.facebook.com/446639648529726';
