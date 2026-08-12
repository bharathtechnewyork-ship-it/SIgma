export const brand = {
  name: 'Sigma Precisions',
  shortName: 'SIGMA',
  wordmark: 'PRECISIONS',
  tagline: 'Precision-engineered systems and components',
  positioning:
    'Owner-led precision engineering — design, prototype, qualify, and manufacture for power, aerospace, and oil & gas.',
  essence: 'Precision with accountability.',
  colors: {
    primary: [
      { name: 'Ink Navy', hex: '#0B1420', role: 'Primary background, authority' },
      { name: 'Slate Deep', hex: '#121C2A', role: 'Surfaces, footer, panels' },
      { name: 'Steel', hex: '#1A2636', role: 'Logo plate, elevated blocks' },
      { name: 'Graphite', hex: '#2C3A4D', role: 'Borders, structural lines' },
    ],
    accent: [
      { name: 'Brass', hex: '#B8924A', role: 'Primary accent, CTAs, highlights' },
      { name: 'Brass Soft', hex: '#D4B06A', role: 'Hover, soft emphasis' },
      { name: 'Brass Deep', hex: '#8F6E35', role: 'Pressed / darker accent' },
      { name: 'Signal Teal', hex: '#3D8F9C', role: 'Secondary accent, cool contrast' },
      { name: 'Signal Soft', hex: '#5AABB6', role: 'Link hover, cool highlight' },
    ],
    neutral: [
      { name: 'Snow', hex: '#F2F4F7', role: 'Primary text on dark' },
      { name: 'Fog', hex: '#C8D0DA', role: 'Secondary text, wordmark' },
      { name: 'Mist', hex: '#8A97A8', role: 'Body copy, captions' },
    ],
  },
  typography: {
    display: {
      family: 'Syne',
      role: 'Brand wordmark, page titles, section headings',
      weights: '500–700',
    },
    body: {
      family: 'Manrope',
      role: 'UI, body copy, forms, navigation',
      weights: '400–700',
    },
  },
  voice: {
    tone: ['Direct', 'Technical', 'Accountable', 'Calm confidence'],
    do: [
      'Speak as the company owner-led partner, not a middleman.',
      'Use plain engineering language: design, prototype, qualify, manufacture.',
      'Prefer specifics about process and sectors over slogans.',
    ],
    dont: [
      'Invent certifications, clients, or OEM partnerships.',
      'Use startup hype, emojis, or vague “innovation” filler.',
      'Claim to be another company’s employee or subsidiary.',
    ],
  },
  logo: {
    clearSpace: 'Clear space equal to the height of the inner crosshair ring around the mark.',
    minSize: 'Mark minimum 24px digital / 8mm print.',
    misuse: [
      'Do not stretch, rotate, or recolor outside the approved palette.',
      'Do not place brass-on-brass or low-contrast fog on snow.',
      'Do not add drop shadows, glows, or outlines to the mark.',
    ],
  },
} as const;
