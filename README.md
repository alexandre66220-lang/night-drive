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
- Mobilier urbain, plantes et rochers : [Poly Haven](https://polyhaven.com/models) — CC0.
- « Car Concept » : Eric Chadwick / Darmstadt Graphics Group, [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) — CC BY 4.0.
- Renard « Fox » : modèle PixelMannen (CC0), rig et animations tomkranis (CC BY 4.0), conversion AsoboStudio et scurest (CC BY 4.0) — Khronos glTF Sample Assets.
