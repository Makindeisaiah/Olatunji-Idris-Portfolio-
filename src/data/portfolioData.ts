import { ProjectItem, HeadshotItem, ModelingItem, GalleryItem, ModelingSpecs } from '../types';

import heroPortrait from '../assets/images/hero_portrait_1788959592159.jpg';
import actingHeadshot from '../assets/images/acting_headshot_1788959605050.jpg';
import fashionEditorial from '../assets/images/fashion_editorial_1788959616099.jpg';
import actingReelCover from '../assets/images/acting_reel_cover_1788959628544.jpg';

export const PORTFOLIO_INFO = {
  name: 'Olatunji Idris',
  titles: ['Actor', 'Model', 'Creative'],
  tagline: 'Stories deserve to be felt, not just seen.',
  heroIntro: 'I’m Olatunji Idris, an aspiring actor and model passionate about storytelling, fashion, culture, and creative expression.',
  about: {
    title: 'ABOUT ME',
    paragraphs: [
      'I’m Olatunji Idris, an aspiring actor and model with a passion for storytelling, fashion, culture, and creative expression.',
      'I’m drawn to characters, emotions, and stories that connect with people. For me, acting is more than simply being in front of a camera — it is about understanding a character, embracing their emotions, and bringing their story to life with authenticity.',
      'I’m constantly learning, evolving, and challenging myself to become a better performer and creative.'
    ],
    quickFacts: [
      'Actor',
      'Model',
      'Creative',
      'Fashion & Culture Enthusiast',
      'Storytelling Enthusiast'
    ]
  },
  acting: {
    title: 'ACTING',
    intro: 'Every character has a story. My goal is to make people believe it.',
    profile: 'Olatunji Idris is an emerging actor deeply committed to the craft of physical and emotional transformation. Drawn to psychological depth, complex character motivations, and compelling narrative arcs, he brings raw presence, vulnerability, and commanding focus to every performance. He actively explores roles spanning intense drama, grounded realism, and contemporary narrative storytelling.'
  },
  modeling: {
    title: 'MODELING',
    intro: 'Style is another language. I use it to express identity, confidence, and character.'
  },
  ambition: {
    title: 'THE VISION',
    mainStatement: 'My ambition is to build a lasting career in the entertainment industry and become an actor whose work speaks beyond the screen.',
    goals: [
      'Take on diverse and challenging roles',
      'Work with talented creatives',
      'Continue developing as a performer',
      'Build a recognizable personal identity',
      'Create meaningful work',
      'Inspire people through his journey',
      'Leave a lasting mark on the entertainment industry'
    ],
    endingStatement: 'I’m not just building a portfolio. I’m building a body of work.'
  },
  contact: {
    title: 'LET’S WORK TOGETHER',
    text: 'For acting, modeling, casting, brand collaborations, or creative opportunities, I’d love to hear from you.',
    socials: {
      instagram: 'https://instagram.com/olatunji.idris',
      instagramHandle: '@olatunji.idris',
      tiktok: 'https://tiktok.com/@olatunji.idris',
      tiktokHandle: '@olatunji.idris',
      email: 'olatunji.idris.bookings@example.com'
    }
  },
  copyright: '© 2026 Olatunji Idris. All rights reserved.'
};

export const MODELING_SPECS: ModelingSpecs = {
  height: '[Height — e.g. 6\'1" / 185 cm]',
  measurements: '[Chest: 38" • Waist: 30" • Inseam: 32"]',
  shoeSize: '[Shoe Size — e.g. US 11 / EU 44]',
  hair: '[Dark Brown / Black]',
  eyes: '[Dark Brown]',
  location: '[London / Available for Global Travel]',
  availability: '[Open for Editorial, Commercial & Theatrical Work]'
};

export const ASSETS = {
  hero: heroPortrait,
  aboutPortrait: heroPortrait,
  actingHeadshotMain: actingHeadshot,
  fashionEditorialMain: fashionEditorial,
  actingReelCover: actingReelCover
};

export const HEADSHOTS: HeadshotItem[] = [
  {
    id: 'hs-1',
    title: 'Theatrical Key Headshot',
    type: 'Theatrical',
    image: actingHeadshot,
    year: '2026'
  },
  {
    id: 'hs-2',
    title: 'Dramatic Profile Study',
    type: 'Dramatic',
    image: heroPortrait,
    year: '2026'
  },
  {
    id: 'hs-3',
    title: 'Editorial Casting Frame',
    type: 'Editorial',
    image: fashionEditorial,
    year: '2026'
  },
  {
    id: 'hs-4',
    title: 'Intense Dialogue Scene Still',
    type: 'Commercial',
    image: actingReelCover,
    year: '2026'
  }
];

export const ACTING_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '[Project In Development — Dramatic Short]',
    role: 'Lead Character [Character Name — In Pre-Production]',
    year: '2026',
    category: 'Short Film',
    description: 'A compelling character-driven dramatic short exploring identity, moral conflict, and emotional vulnerability.',
    fullSynopsis: 'Currently in active preparation. Olatunji portrays a nuanced young protagonist navigating unexpected crossroads in a high-stakes urban drama. Prepared with rigorous scene study, physical stamina, and internal monologue work.',
    director: '[Independent Director Placeholder]',
    image: actingReelCover,
    isPlaceholder: true
  },
  {
    id: 'proj-2',
    title: '[Dramatic Monologue & Scene Study Showcase]',
    role: 'Solo Dramatic Performance',
    year: '2025',
    category: 'Dramatic Showcase',
    description: 'An intense exploratory performance study focusing on subtext, silence, and emotional authenticity under pressure.',
    fullSynopsis: 'Focused dramatic monologue examination dissecting psychological tension and nuanced vocal control. Designed as a direct showcase for casting directors and producers seeking authentic screen presence.',
    director: '[Studio Showcase Workshop]',
    image: actingHeadshot,
    isPlaceholder: true
  },
  {
    id: 'proj-3',
    title: '[Upcoming Theatrical Production]',
    role: 'Ensemble Lead / Guest Artist [Role Title]',
    year: '2026',
    category: 'Theatrical',
    description: 'Stage performance examining human resilience, dialogue rhythms, and heightened theatrical storytelling.',
    fullSynopsis: 'Physical theatre and classical text interpretation bringing grounded presence and kinetic energy to the contemporary stage.',
    director: '[Theatre Workshop Director]',
    image: heroPortrait,
    isPlaceholder: true
  }
];

export const MODELING_ITEMS: ModelingItem[] = [
  {
    id: 'mod-1',
    title: 'Architectural Shadows & Structure',
    category: 'EDITORIAL',
    image: fashionEditorial,
    caption: 'Clean lines, tailored silhouettes, and understated modern elegance.',
    aspect: 'tall'
  },
  {
    id: 'mod-2',
    title: 'Minimalist Noir Campaign',
    category: 'FASHION',
    image: heroPortrait,
    caption: 'High-contrast studio session showcasing tailored high-neck knitwear and confident poise.',
    aspect: 'square'
  },
  {
    id: 'mod-3',
    title: 'The Contemporary Performer',
    category: 'LIFESTYLE',
    image: actingHeadshot,
    caption: 'Natural presence, expressive eyes, and effortless contemporary aesthetic.',
    aspect: 'tall'
  },
  {
    id: 'mod-4',
    title: 'Urban Narrative Editorial',
    category: 'COMMERCIAL',
    image: actingReelCover,
    caption: 'Modern movement, cinematic framing, and dynamic brand presentation.',
    aspect: 'wide'
  },
  {
    id: 'mod-5',
    title: 'High-End Monochromatic Series',
    category: 'EDITORIAL',
    image: fashionEditorial,
    caption: 'Sculptural trench coats, raw materials, and quiet intensity.',
    aspect: 'tall'
  },
  {
    id: 'mod-6',
    title: 'Studio Lighting Study',
    category: 'FASHION',
    image: heroPortrait,
    caption: 'Focus on bone structure, poised stillness, and tactile fabric interaction.',
    aspect: 'square'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Studio Noir Portrait',
    category: 'Portraits',
    image: heroPortrait,
    caption: 'Intimate editorial portrait emphasizing presence and quiet strength.',
    year: '2026'
  },
  {
    id: 'gal-2',
    title: 'Emotional Beat: Theatrical Headshot',
    category: 'Acting',
    image: actingHeadshot,
    caption: 'Casting portrait designed for dramatic feature and series consideration.',
    year: '2026'
  },
  {
    id: 'gal-3',
    title: 'Structured Overcoat Campaign',
    category: 'Fashion',
    image: fashionEditorial,
    caption: 'High-fashion editorial testing proportion, silhouette, and posture.',
    year: '2026'
  },
  {
    id: 'gal-4',
    title: 'Cinematic Atmosphere Frame',
    category: 'Acting',
    image: actingReelCover,
    caption: 'Character still capturing tension and psychological depth.',
    year: '2026'
  },
  {
    id: 'gal-5',
    title: 'Natural Ambient Portraiture',
    category: 'Lifestyle',
    image: actingHeadshot,
    caption: 'Relaxed demeanor exploring warmth, authenticity, and approachable charm.',
    year: '2026'
  },
  {
    id: 'gal-6',
    title: 'Pre-Shoot Preparation & Focus',
    category: 'Behind the Scenes',
    image: heroPortrait,
    caption: 'Quiet concentration between camera takes and character immersion.',
    year: '2026'
  },
  {
    id: 'gal-7',
    title: 'Monochrome Silhouette Experiment',
    category: 'Creative',
    image: fashionEditorial,
    caption: 'Visual experimentation with negative space, texture, and light falloff.',
    year: '2026'
  },
  {
    id: 'gal-8',
    title: 'Expression & Introspection',
    category: 'Portraits',
    image: actingReelCover,
    caption: 'Close framing studying vulnerability and screen presence.',
    year: '2026'
  }
];
