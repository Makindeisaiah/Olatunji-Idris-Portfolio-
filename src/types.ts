export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  year: string;
  category: 'Short Film' | 'Theatrical' | 'Commercial' | 'Dramatic Showcase' | 'Independent';
  description: string;
  fullSynopsis?: string;
  director?: string;
  image: string;
  videoUrl?: string;
  isPlaceholder?: boolean;
}

export interface HeadshotItem {
  id: string;
  title: string;
  type: 'Theatrical' | 'Commercial' | 'Dramatic' | 'Editorial';
  image: string;
  year: string;
}

export interface ModelingItem {
  id: string;
  title: string;
  category: 'EDITORIAL' | 'FASHION' | 'LIFESTYLE' | 'COMMERCIAL';
  image: string;
  caption?: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Acting' | 'Fashion' | 'Lifestyle' | 'Behind the Scenes' | 'Creative';
  image: string;
  caption: string;
  year: string;
}

export interface ModelingSpecs {
  height: string;
  measurements: string;
  shoeSize: string;
  hair: string;
  eyes: string;
  location: string;
  availability: string;
}
