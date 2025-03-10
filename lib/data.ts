import {
  Service,
  Location,
  ServiceWithLocation
} from './types';

import {
  mockServices,
  mockLocations,
  mockContentBlocks,
  mockLocalFeatures,
  mockBlogPosts,
  mockBlogCategories,
  mockBlogTags
} from './mock-data';

// Data fetching functions using mock data
export async function getServices(): Promise<Service[]> {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockServices;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const service = mockServices.find(s => s.slug === slug);
    
    if (!service) {
      return null;
    }
    
    // Add content blocks to the service
    const contentBlocks = mockContentBlocks.filter(cb => cb.service_id === service.id);
    
    return {
      ...service,
      content_blocks: contentBlocks
    };
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockLocations;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const location = mockLocations.find(l => l.slug === slug);
    
    if (!location) {
      return null;
    }
    
    // Add local features to the location
    const localFeatures = mockLocalFeatures.filter(lf => lf.location_id === location.id);
    
    return {
      ...location,
      local_features: localFeatures
    };
  } catch (error) {
    console.error(`Error fetching location with slug ${slug}:`, error);
    return null;
  }
}

export async function getBlogPosts() {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Add categories to blog posts
    return mockBlogPosts.map(post => {
      const category = mockBlogCategories.find(c => c.id === post.category_id);
      return {
        ...post,
        category
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const post = mockBlogPosts.find(p => p.slug === slug);
    
    if (!post) {
      return null;
    }
    
    // Add category to the post
    const category = mockBlogCategories.find(c => c.id === post.category_id);
    
    // For simplicity, we'll just add the first two tags to the post
    const tags = mockBlogTags.slice(0, 2);
    
    return {
      ...post,
      category,
      tags
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getServiceLocationPages(): Promise<ServiceWithLocation[]> {
  // Generate combinations of services and locations
  const services = await getServices();
  const locations = await getLocations();
  
  const pages: ServiceWithLocation[] = [];
  
  for (const service of services) {
    for (const location of locations) {
      pages.push({
        service,
        location,
        meta_title: `${service.title} in ${location.name}, ${location.state} | Fast, Confidential Solutions | eXp Realty`,
        meta_description: `Expert ${service.title.toLowerCase()} services in ${location.name}, ${location.state}. Get fast, confidential solutions tailored to your needs. Contact us today.`,
        slug: `${service.slug}/${location.slug}`
      });
    }
  }
  
  return pages;
}