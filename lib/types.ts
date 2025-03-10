export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
  content_blocks?: ContentBlock[];
}

export interface ContentBlock {
  id: number;
  service_id: string;
  title: string;
  content: string;
  type: string;
  image?: string;
  alt?: string;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: string;
  name: string;
  state: string;
  slug: string;
  description: string;
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
  local_features?: LocalFeature[];
}

export interface LocalFeature {
  id: number;
  location_id: string;
  feature: string;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface BlogTag {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category_id?: number;
  image: string;
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
  category?: BlogCategory;
  tags?: BlogTag[];
}

export interface ServiceWithLocation {
  service: Service;
  location: Location;
  meta_title: string;
  meta_description: string;
  slug: string;
}