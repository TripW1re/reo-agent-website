import { Service, Location, ContentBlock, LocalFeature, BlogCategory, BlogTag } from './types';

// Mock services data
export const mockServices: Service[] = [
  {
    id: 'foreclosure-assistance',
    title: 'Foreclosure Assistance',
    description: 'Sell your home before foreclosure affects your credit score and financial future.',
    icon: 'shield',
    slug: 'foreclosure-help',
    meta_title: 'Foreclosure Assistance | Sell Your Home Before Foreclosure | TurboHomes',
    meta_description: 'Get professional foreclosure assistance and sell your home before foreclosure affects your credit. Confidential, fast, and stress-free solutions with TurboHomes.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'short-sales',
    title: 'Short Sales',
    description: 'Avoid foreclosure with a short sale solution that minimizes financial impact.',
    icon: 'handshake',
    slug: 'short-sales',
    meta_title: 'Short Sale Specialists | Avoid Foreclosure | TurboHomes',
    meta_description: 'Expert short sale assistance to help you avoid foreclosure. Our specialists negotiate with lenders to minimize financial impact and provide a fresh start.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'cash-home-sales',
    title: 'Cash Home Sales',
    description: 'Get a cash offer within 24 hours and close on your timeline.',
    icon: 'cash',
    slug: 'cash-home-sales',
    meta_title: 'Cash Home Buyers | Get an Offer in 24 Hours | TurboHomes',
    meta_description: 'Sell your home fast for cash with TurboHomes. Get a fair cash offer within 24 hours and close on your timeline. No repairs, no showings, no hassle.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'probate-sales',
    title: 'Probate Sales',
    description: 'Hassle-free estate liquidation with expert guidance through the probate process.',
    icon: 'gavel',
    slug: 'probate-sales',
    meta_title: 'Probate Real Estate Specialists | Estate Liquidation | TurboHomes',
    meta_description: 'Expert probate real estate services to help executors and administrators navigate the complex process of selling estate property. Hassle-free solutions with TurboHomes.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'divorce-property-sales',
    title: 'Divorce Property Sales',
    description: 'Confidential and fast transactions for couples going through divorce.',
    icon: 'balance',
    slug: 'divorce-property-sales',
    meta_title: 'Divorce Property Sales | Confidential Real Estate Solutions | TurboHomes',
    meta_description: 'Specialized real estate services for divorcing couples. Confidential, fair, and efficient property sales to help you move forward. Expert guidance with TurboHomes.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'inherited-homes',
    title: 'Inherited Homes',
    description: "Sell inherited properties with ease, even if they're out of state.",
    icon: 'home',
    slug: 'inherited-homes',
    meta_title: 'Selling Inherited Property | Expert Estate Solutions | TurboHomes',
    meta_description: 'Specialized services for selling inherited homes. We handle everything from property clean-out to closing, making the process easy and stress-free.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// Mock locations data
export const mockLocations: Location[] = [
  {
    id: 'elk-grove',
    name: 'Elk Grove',
    state: 'CA',
    slug: 'elk-grove-ca',
    description: 'Elk Grove is a family-friendly city in Sacramento County, California, known for its excellent schools, diverse community, and growing real estate market.',
    meta_title: 'Elk Grove, CA Real Estate | Distressed Property Solutions | TurboHomes',
    meta_description: 'Specialized real estate services for distressed homeowners in Elk Grove, CA. Fast, confidential solutions to sell your property quickly and for top dollar.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'sacramento',
    name: 'Sacramento',
    state: 'CA',
    slug: 'sacramento-ca',
    description: "Sacramento is California's capital city, offering a rich history, diverse neighborhoods, and a strong real estate market with options for every budget.",
    meta_title: 'Sacramento, CA Real Estate | Distressed Property Solutions | TurboHomes',
    meta_description: 'Expert real estate services for distressed homeowners in Sacramento, CA. Confidential, fast solutions to sell your property quickly while maximizing value.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'rancho-cordova',
    name: 'Rancho Cordova',
    state: 'CA',
    slug: 'rancho-cordova-ca',
    description: 'Rancho Cordova is a thriving city in Sacramento County with affordable housing options, business opportunities, and convenient access to major highways.',
    meta_title: 'Rancho Cordova, CA Real Estate | Distressed Property Solutions | TurboHomes',
    meta_description: 'Specialized real estate services for distressed homeowners in Rancho Cordova, CA. Fast, confidential solutions tailored to your unique situation.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'folsom',
    name: 'Folsom',
    state: 'CA',
    slug: 'folsom-ca',
    description: 'Folsom offers a high quality of life with excellent schools, outdoor recreation opportunities, and a strong housing market in the Sacramento metropolitan area.',
    meta_title: 'Folsom, CA Real Estate | Distressed Property Solutions | TurboHomes',
    meta_description: 'Expert real estate services for distressed homeowners in Folsom, CA. Confidential, fast solutions to help you navigate challenging property situations.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'roseville',
    name: 'Roseville',
    state: 'CA',
    slug: 'roseville-ca',
    description: 'Roseville is a vibrant city in Placer County known for its shopping destinations, family-friendly neighborhoods, and strong economic growth.',
    meta_title: 'Roseville, CA Real Estate | Distressed Property Solutions | TurboHomes',
    meta_description: 'Specialized real estate services for distressed homeowners in Roseville, CA. Fast, confidential solutions to sell your property quickly and for top dollar.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// Mock content blocks data
export const mockContentBlocks: ContentBlock[] = [
  {
    id: 1,
    service_id: 'foreclosure-assistance',
    title: 'Understanding Foreclosure',
    content: 'Foreclosure is a legal process where a lender attempts to recover the balance of a loan from a borrower who has stopped making payments by forcing the sale of the asset used as collateral for the loan. This can severely impact your credit score and financial future.',
    type: 'text',
    position: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    service_id: 'foreclosure-assistance',
    title: 'How We Can Help',
    content: 'Our foreclosure assistance program helps homeowners sell their properties before the foreclosure process completes, protecting your credit score and giving you a fresh start. We work quickly and confidentially to find solutions that work for your specific situation.',
    type: 'text',
    position: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    service_id: 'foreclosure-assistance',
    title: 'Benefits of Selling Before Foreclosure',
    content: 'Selling your home before foreclosure can help you avoid a significant hit to your credit score, potential tax implications, and the emotional stress of going through the foreclosure process. It also gives you more control over the sale of your home.',
    type: 'text',
    position: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    service_id: 'short-sales',
    title: 'What is a Short Sale?',
    content: 'A short sale occurs when a homeowner sells their property for less than the amount owed on the mortgage, with the lender agreeing to accept the sale proceeds as full or partial satisfaction of the debt. This can be a viable alternative to foreclosure.',
    type: 'text',
    position: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 5,
    service_id: 'short-sales',
    title: 'Benefits of a Short Sale',
    content: 'Short sales typically have less negative impact on your credit score compared to foreclosure. They can also provide a more dignified exit from your property, give you more control over the timeline, and may offer tax advantages in certain situations.',
    type: 'text',
    position: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// Mock local features data
export const mockLocalFeatures: LocalFeature[] = [
  {
    id: 1,
    location_id: 'elk-grove',
    feature: 'Strong housing market with steady appreciation',
    position: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    location_id: 'elk-grove',
    feature: 'Excellent school district attracting families',
    position: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    location_id: 'elk-grove',
    feature: 'Growing commercial development',
    position: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    location_id: 'sacramento',
    feature: 'Historic neighborhoods with character and charm',
    position: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 5,
    location_id: 'sacramento',
    feature: 'Growing downtown area with new development',
    position: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 6,
    location_id: 'sacramento',
    feature: 'Diverse housing options from historic to modern',
    position: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// Mock blog categories data
export const mockBlogCategories: BlogCategory[] = [
  {
    id: 1,
    name: 'Foreclosure Prevention',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Real Estate Market Updates',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    name: 'Distressed Property Solutions',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    name: 'Quick Sale Strategies',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// Mock blog tags data
export const mockBlogTags: BlogTag[] = [
  {
    id: 1,
    name: 'foreclosure',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'sacramento',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    name: 'mortgage',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    name: 'financial hardship',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];