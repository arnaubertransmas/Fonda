export const CATEGORIES = [
  { value: 'senderisme', label: '🥾 Senderisme' },
  { value: 'btt', label: '🚵 Bicicleta de muntanya' },
  { value: 'ciclisme', label: '🚴 Ciclisme de carretera' },
  { value: 'running', label: '🏃 Trail running' },
  { value: 'altres', label: '🗺️ Altres' },
];

export const CATEGORIES_SELECT = [
  { value: '', label: 'Selecciona una categoria...' },
  ...CATEGORIES,
];

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map(c => [c.value, c.label])
);