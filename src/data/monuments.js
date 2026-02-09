export const monuments = [
  {
    id: "brandenburgGate",
    name: "Porte de Brandebourg",
    period: "preWar",
    description: "Le symbole emblématique de Berlin, construit entre 1788 et 1791. Durant la Seconde Guerre mondiale, elle a été gravement endommagée et est devenue le symbole de la division allemande pendant la Guerre froide.",
    history: "Chef-d'œuvre néoclassique de Carl Gotthard Langhans, la Porte de Brandebourg était la porte d'entrée royale de Berlin. En 1945, elle se trouvait dans le no man's land entre Berlin-Est et Berlin-Ouest. Le 22 décembre 1989, elle fut rouverte lors de la chute du Mur. Aujourd'hui, elle symbolise la réunification allemande et la paix européenne.",
    facts: "La statue du Quadrige au sommet a été volée par Napoléon en 1806 et restituée en 1814. Durant la guerre froide, elle était inaccessible des deux côtés du mur.",
    hours: "24h/24",
    price: "Gratuit",
    access: "S-Bahn/U-Bahn: Brandenburger Tor",
    coordinates: [52.5163, 13.3777],
    images: ["https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800", "https://images.unsplash.com/photo-1587330979470-3595ac045ab3?w=800"]
  },
  {
    id: "reichstag",
    name: "Reichstag",
    period: "warTime",
    description: "Le parlement allemand, théâtre de moments historiques majeurs. Incendié en 1933, gravement endommagé en 1945, il fut restauré après la réunification avec sa célèbre coupole de verre.",
    history: "Inauguré en 1894, le Reichstag a connu l'incendie de 1933 qui permit à Hitler de consolider son pouvoir. En avril 1945, la bataille pour le Reichstag fut l'un des derniers combats de la guerre en Europe. Le drapeau soviétique hissé sur le toit devint une image iconique de la victoire alliée. Rénové par Norman Foster dans les années 1990, il abrite aujourd'hui le Bundestag.",
    facts: "Plus de 1.5 million de graffitis de soldats soviétiques sont encore visibles à l'intérieur. La coupole de verre symbolise la transparence démocratique.",
    hours: "8h-24h (réservation requise)",
    price: "Gratuit",
    access: "U-Bahn: Bundestag, Bus: 100",
    coordinates: [52.5186, 13.3761],
    images: ["https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=800", "https://images.unsplash.com/photo-1595530661502-c0629e1903d3?w=800"]
  },
  {
    id: "holocaustMemorial",
    name: "Mémorial de l'Holocauste",
    period: "warTime",
    description: "Un mémorial poignant composé de 2 711 stèles de béton rendant hommage aux victimes juives de l'Holocauste. Inauguré en 2005, il se trouve près du bunker d'Hitler.",
    history: "Conçu par l'architecte Peter Eisenman, ce mémorial a été inauguré 60 ans après la fin de la guerre. Les stèles de hauteurs variables créent une atmosphère de désorientation et d'isolement. Le centre d'information souterrain présente les noms et témoignages des victimes. Le lieu rappelle les 6 millions de Juifs assassinés pendant la Shoah.",
    facts: "Le site se trouve à quelques mètres seulement de l'ancien bunker de Hitler. Les stèles sont traitées avec un produit anti-graffiti développé par la même entreprise qui fabriquait le Zyklon B.",
    coordinates: [52.5139, 13.3787],
    images: ["https://images.unsplash.com/photo-1590876254297-6e9edbb30273?w=800"]
  },
]

export const periodColors = {
  preWar: '#2d2d2d',
  warTime: '#8b0000',
  coldWar: '#1a5490',
  modern: '#c8a865'
};

export const periodLabels = {
  preWar: 'Avant-guerre',
  warTime: 'Seconde Guerre mondiale',
  coldWar: 'Guerre froide',
  modern: 'Berlin moderne'
};
