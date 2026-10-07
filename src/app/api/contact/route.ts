import { NextResponse } from 'next/server';
import redis from '@/lib/redis';

const TOPICS = ['Internship', 'Collaboration', 'Project', 'Just saying hi'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PER_HOUR = 5;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const topic = String(body.topic ?? '');
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!TOPICS.includes(topic) || name.length < 1 || name.length > 80 || !EMAIL_RE.test(email) || email.length > 120 || message.length < 5 || message.length > 2000) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  try {
    const ip = (request.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
    const key = `contact:rl:${ip}`;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, 3600);
    if (count > MAX_PER_HOUR) {
      return NextResponse.json({ error: 'Too many messages' }, { status: 429 });
    }
    await redis.lpush('contact:messages', JSON.stringify({ topic, name, email, message, at: new Date().toISOString() }));
    return NextResponse.json({ ok: true });
  } catch {
    // Redis not configured or unavailable: the client falls back to mailto.
    return NextResponse.json({ error: 'Storage unavailable' }, { status: 503 });
  }
}
