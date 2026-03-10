// ── Flame Level System ──
export const flameLevels = [
  {
    level: 1,
    name: 'Mild & Aromatisch',
    slug: 'mild',
    color: '#4CAF50',
    colorName: 'green',
    tailwind: 'text-green-500',
    bg: 'bg-green-500',
    bgLight: 'bg-green-500/10',
    border: 'border-green-500/30',
    scovilleRange: '0 – 2.500 SHU',
    chilis: ['Jalapeño', 'Poblano', 'Piment d\'Espelette', 'Anaheim'],
    description: 'Sanfte Wärme mit vollem Aroma. Perfekt für Einsteiger und als Alltagswürze.',
  },
  {
    level: 2,
    name: 'Deutlich spürbar',
    slug: 'medium',
    color: '#FDD835',
    colorName: 'yellow',
    tailwind: 'text-yellow-400',
    bg: 'bg-yellow-400',
    bgLight: 'bg-yellow-400/10',
    border: 'border-yellow-400/30',
    scovilleRange: '2.500 – 30.000 SHU',
    chilis: ['Cayenne', 'Serrano', 'Tabasco', 'Guajillo'],
    description: 'Hier fängt der Spaß an. Wärme, die man spürt, aber noch genießen kann.',
  },
  {
    level: 3,
    name: 'Schweißperlen',
    slug: 'hot',
    color: '#FF9800',
    colorName: 'orange',
    tailwind: 'text-orange-500',
    bg: 'bg-orange-500',
    bgLight: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    scovilleRange: '30.000 – 100.000 SHU',
    chilis: ['Thai Chili', 'Piri Piri', 'Birds Eye', 'Ají Amarillo'],
    description: 'Schweißperlen auf der Stirn, Endorphinrausch garantiert. Für Fortgeschrittene.',
  },
  {
    level: 4,
    name: 'Schmerzgrenze',
    slug: 'extreme',
    color: '#F44336',
    colorName: 'red',
    tailwind: 'text-red-500',
    bg: 'bg-red-500',
    bgLight: 'bg-red-500/10',
    border: 'border-red-500/30',
    scovilleRange: '100.000 – 600.000 SHU',
    chilis: ['Habanero', 'Scotch Bonnet', 'Red Savina', 'Fatalii'],
    description: 'An der Grenze des Erträglichen. Hier trennt sich die Spreu vom Weizen.',
  },
  {
    level: 5,
    name: 'Nur für Mutige',
    slug: 'inferno',
    color: '#212121',
    colorName: 'black',
    tailwind: 'text-neutral-100',
    bg: 'bg-neutral-800',
    bgLight: 'bg-neutral-800/20',
    border: 'border-neutral-500/30',
    scovilleRange: '600.000+ SHU',
    chilis: ['Carolina Reaper', 'Trinidad Scorpion', 'Pepper X', '7 Pot Douglah'],
    description: 'Nur für die Härtesten. Handschuhe und Respekt sind Pflicht.',
  },
];

export function getFlameLevel(level: number) {
  return flameLevels.find(f => f.level === level) || flameLevels[0];
}

export function getFlameEmoji(level: number): string {
  const emojis = ['🟢', '🟡', '🟠', '🔴', '⚫'];
  return emojis[Math.min(level - 1, 4)];
}

export function getFlameIcons(level: number): string {
  return '🔥'.repeat(level);
}

// ── Recipe categories ──
export const categories = [
  { name: 'Vorspeisen & Dips', slug: 'vorspeisen-dips' },
  { name: 'Hauptgerichte', slug: 'hauptgerichte' },
  { name: 'Saucen & Marinaden', slug: 'saucen-marinaden' },
  { name: 'Snacks & Beilagen', slug: 'snacks-beilagen' },
  { name: 'Grillen & BBQ', slug: 'grillen-bbq' },
];

// ── Site metadata ──
export const site = {
  name: 'Walk of Flame',
  tagline: 'Chili & Heat Blog',
  claim: 'Earn your heat.',
  description: 'Der Weg zur perfekten Schärfe. Von mildem Kick bis zur absoluten Flame-Stufe. Rezepte, Wissen und Challenges rund um Chili und Schärfe.',
  url: 'https://walkofflame.com',
  author: 'Walk of Flame',
  social: {
    instagram: 'https://instagram.com/walkofflame',
    tiktok: 'https://tiktok.com/@walkofflame',
    youtube: 'https://youtube.com/@walkofflame',
    pinterest: 'https://pinterest.com/walkofflame',
  },
};
