# Night Drive

Jeu de conduite en 3D dans une ville de nuit, jouable directement dans le navigateur (three.js).

**Jouer en ligne :** https://night-drive-jeu.netlify.app

## Lancer en local

Le jeu tient dans un seul fichier, `index.html`. Il charge three.js et les modèles 3D depuis un CDN, il faut donc le servir en HTTP (pas en `file://`) :

```bash
python3 -m http.server 8000
```

puis ouvrir http://localhost:8000.

## Commandes principales

- **Z/Q/S/D** ou flèches : conduire · **Maj** : nitro · **Espace** : frein à main
- **F** : descendre / monter / interagir · **Tab** : téléphone · **Échap** : pause
- **C** : caméra · **P** : carte · **J** : journal

## Auto-test

Ouvrir la page avec `?selftest` lance une série de vérifications automatiques dans un emplacement de sauvegarde séparé.

## Crédits des modèles 3D

- Voitures, bus, camions, arbres, château d’eau et objets de rue : [grab3d.com](https://grab3d.com/models/) — CC0.
- Mobilier urbain, plantes, rochers, arbres (rendus en cartes), textures de route, de trottoir et de façades, ciel HDRI « Potsdamer Platz » : [Poly Haven](https://polyhaven.com) — CC0.
- Passants, livreurs, animaux, bateaux, église, parc, terrasses, chantier, engins et tableau de bord : [grab3d.com](https://grab3d.com/models/) — CC0.
- Pavés de la vieille ville : [Poly Haven](https://polyhaven.com/a/cobblestone_floor_08) — CC0.
- Moto « Motorcycle » : Poly by Google, via [Poly Pizza](https://poly.pizza/m/dse64pqMKAR) — CC BY 3.0.
- Maisons, train de marchandises, avion cargo, transats et camion de glaces : [grab3d.com](https://grab3d.com/models/) — CC0.
- Radio Libre (OpenGameArt, CC0) : « Midnight Drive » (Procoder), « Synth Wave » (HitCtrl), « Calm Relax 1 » (snabisch), « Chill lofi inspired » (omfgdude), « lofi hip hop » (TheJosving), « Bossa Nova » (owlishmedia).
- Pluie en boucle : [OpenGameArt « Rain (loopable) »](https://opengameart.org/content/rain-loopable) — CC0.
- Circulation, parc, foule, rue mouillée, fontaine et tonnerre : Gregor Quendel, [« Free General Ambience Sounds »](https://opengameart.org/content/free-general-ambience-sounds) — CC BY-SA 4.0.
- « Car Concept » : Eric Chadwick / Darmstadt Graphics Group, [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) — CC BY 4.0.
- Renard « Fox » : modèle PixelMannen (CC0), rig et animations tomkranis (CC BY 4.0), conversion AsoboStudio et scurest (CC BY 4.0) — Khronos glTF Sample Assets.

## Sauvegarde en ligne

La fonction `netlify/functions/save.mjs` (route `/api/save`) garde les parties dans Netlify Blobs et rend un code à 6 caractères pour les reprendre sur un autre appareil. `scores.mjs` (`/api/scores`) tient le classement en ligne du Grand Prix de la vieille ville, et `ghost.mjs` (`/api/ghost`) garde le meilleur fantôme du Col des Brumes.
