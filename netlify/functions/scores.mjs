// Online leaderboards for Night Drive time trials: POST {track, name, time} → top 10; GET ?track= → top 10.
import { getStore } from '@netlify/blobs';

const clean = (s, n) => String(s || '').replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, n);

export default async (req) => {
  const store = getStore({ name: 'scores', consistency: 'strong' });
  const url = new URL(req.url);
  let track = clean(url.searchParams.get('track'), 32);
  if (req.method === 'POST') {
    let j; try { j = await req.json(); } catch { return new Response('JSON invalide', { status: 400 }); }
    track = clean(j.track, 32); const name = clean(j.name, 24) || 'Anonyme', time = Number(j.time);
    if (!track || !(time > 5 && time < 3600)) return new Response('Score invalide', { status: 400 });
    const list = (await store.get(track, { type: 'json' })) || [];
    list.push({ name, time: Math.round(time * 100) / 100, date: new Date().toISOString().slice(0, 10) });
    list.sort((a, b) => a.time - b.time);
    const top = list.slice(0, 10);
    await store.setJSON(track, top);
    return Response.json(top);
  }
  if (!track) return new Response('Piste manquante', { status: 400 });
  return Response.json((await store.get(track, { type: 'json' })) || []);
};

export const config = { path: '/api/scores' };
