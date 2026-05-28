import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create the client if both env vars are provided
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// --- Orders ---
export async function createOrder(order: {
  id: string;
  customer_name: string;
  phone: string;
  items: Array<{ name: string; qty: number }>;
}) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        id: order.id,
        customer_name: order.customer_name,
        phone: order.phone,
        items: order.items,
        feedback_given: false,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

export async function getOrder(orderId: string) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single();

  if (error) return null;
  return data;
}

// --- Reviews ---
export async function submitReview(review: {
  order_id: string;
  rating: number;
  review: string;
  customer_name: string;
  favourite_item?: string;
}) {
  if (!supabase) throw new Error('Supabase is not configured');
  // Save the review
  const { error: reviewError } = await supabase
    .from('reviews')
    .insert([review]);

  if (reviewError) throw reviewError;

  // Mark order as feedback given
  const { error: orderError } = await supabase
    .from('orders')
    .update({ feedback_given: true })
    .eq('id', review.order_id);

  if (orderError) throw orderError;
}

export async function getReviews(limit = 10) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) return [];
  return data || [];
}

// Generate a unique order ID: FL + 4 random digits
export function generateOrderId(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `FL${num}`;
}
