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
