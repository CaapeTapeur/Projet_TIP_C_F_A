# Berlin Historique - 1933-1989

Application web interactive pour explorer l'histoire de Berlin durant la période 1933-1989, couvrant la Seconde Guerre mondiale et la Guerre froide.

## 🏛️ Fonctionnalités

- **Page d'accueil** avec hero section immersive
- **18 monuments historiques** avec descriptions détaillées
- **Système de filtres** par période (Avant-guerre, Seconde Guerre mondiale, Guerre froide)
- **Recherche** de monuments par nom ou description
- **Chronologie interactive** des événements majeurs
- **Carte interactive** pour localiser les monuments
- **Galerie d'images** pour chaque monument
- **Design responsive** adapté mobile, tablette et desktop

## 🚀 Installation

1. Clonez le dépôt ou téléchargez les fichiers

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse affichée (généralement http://localhost:3000)

## 📦 Build Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **PostCSS** - Transformations CSS

## 📁 Structure du projet

```
berlin-historique/
├── public/               # Fichiers statiques
├── src/
│   ├── components/       # Composants React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MonumentCard.jsx
│   │   ├── MonumentModal.jsx
│   │   ├── MonumentsFilter.jsx
│   │   ├── MonumentsList.jsx
│   │   ├── Timeline.jsx
│   │   └── InteractiveMap.jsx
│   ├── data/             # Données de l'application
│   │   ├── monuments.js
│   │   └── timeline.js
│   ├── styles/           # Styles CSS
│   │   └── index.css
│   ├── App.jsx           # Composant principal
│   └── main.jsx          # Point d'entrée
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Personnalisation

### Ajouter un monument

Éditez `src/data/monuments.js` et ajoutez un nouvel objet dans le tableau `monuments` :

```javascript
{
  id: 19,
  name: "Nom du monument",
  period: "preWar", // ou "warTime", "coldWar"
  description: "Description courte",
  history: "Histoire détaillée",
  facts: "Anecdotes",
  hours: "Horaires",
  price: "Prix",
  access: "Informations d'accès",
  coordinates: [lat, lng],
  images: ["url1", "url2"]
}
```

### Modifier la chronologie

Éditez `src/data/timeline.js` pour ajouter ou modifier des événements.

### Personnaliser les couleurs

Modifiez `tailwind.config.js` pour changer les couleurs du thème :

```javascript
theme: {
  extend: {
    colors: {
      'berlin-red': '#8b0000',
      'berlin-gold': '#c8a865',
    },
  },
}
```

## 📱 Compatibilité

- Chrome, Firefox, Safari, Edge (versions récentes)
- Responsive design pour mobile, tablette et desktop
- Optimisé pour les performances

## 📄 Licence

Ce projet est fourni à des fins éducatives.

## 👥 Contributeurs

Projet créé pour explorer l'histoire de Berlin.

---

**Berlin Historique** - Un voyage à travers l'histoire de Berlin
