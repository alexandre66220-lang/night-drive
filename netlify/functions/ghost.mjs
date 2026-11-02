// The best ghost run per track for Night Drive: POST {track, name, time, rec} keeps it if it beats the record; GET ?track= returns it.
import { getStore } from '@netlify/blobs';

const clean = (s, n) => String(s || '').replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, n);

export default async (req) => {
  const store = getStore({ name: 'ghosts', consistency: 'strong' });
  const url = new URL(req.url);
  if (req.method === 'POST') {
    const body = await req.text();
    if (body.length > 400 * 1024) return new Response('Fantôme trop gros', { status: 413 });
    let j; try { j = JSON.parse(body); } catch { return new Response('JSON invalide', { status: 400 }); }
    const track = clean(j.track, 32), time = Number(j.time);
    if (!track || !(time > 5 && time < 3600) || !Array.isArray(j.rec) || j.rec.length < 10) return new Response('Fantôme invalide', { status: 400 });
    const cur = await store.get(track, { type: 'json' });
    if (cur && cur.time <= time) return Response.json({ kept: false, best: cur.time });
    await store.setJSON(track, { track, time, name: clean(j.name, 24) || 'Anonyme', rec: j.rec });
    return Response.json({ kept: true, best: time });
  }
  const track = clean(url.searchParams.get('track'), 32);
  const g = track && (await store.get(track, { type: 'json' }));
  return g ? Response.json(g) : new Response('Aucun fantôme', { status: 404 });
};

export const config = { path: '/api/ghost' };
