// Online saves for Night Drive: POST a save, get a short code back; GET ?code=XXXXXX to fetch it.
// Stored in Netlify Blobs (store "saves"). A save holds only the game's own localStorage keys.
import { getStore } from '@netlify/blobs';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const MAX = 512 * 1024;
const newCode = () => Array.from(crypto.getRandomValues(new Uint8Array(6)), (b) => ALPHABET[b % ALPHABET.length]).join('');

export default async (req) => {
  const store = getStore('saves');
  if (req.method === 'POST') {
    const body = await req.text();
    if (body.length > MAX) return new Response('Sauvegarde trop grosse', { status: 413 });
    let json;
    try { json = JSON.parse(body); } catch { return new Response('JSON invalide', { status: 400 }); }
    if (json.game !== 'night-drive' || typeof json.data !== 'object') return new Response('Format inconnu', { status: 400 });
    let code = newCode();
    for (let k = 0; k < 5 && (await store.get(code)); k++) code = newCode();
    await store.set(code, body);
    return Response.json({ code });
  }
  if (req.method === 'GET') {
    const code = (new URL(req.url).searchParams.get('code') || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (code.length !== 6) return new Response('Code invalide', { status: 400 });
    const save = await store.get(code);
    if (!save) return new Response('Code inconnu', { status: 404 });
    return new Response(save, { headers: { 'content-type': 'application/json' } });
  }
  return new Response('Méthode non autorisée', { status: 405 });
};

export const config = { path: '/api/save' };
