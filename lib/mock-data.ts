import { Service, Location, ContentBlock, LocalFeature, BlogPost, BlogCategory, BlogTag } from './types';

// Mock services data
export const mockServices: Service[] = [
  {
    id: 'foreclosure-assistance',
    title: 'Foreclosure Assistance',
    description: 'Sell your home before foreclosure affects your credit score and financial future.',
    icon: 'shield',
    slug: 'foreclosure-help',
    meta_title: 'Foreclosure Assistance | Sell Your Home Before Foreclosure | eXp Realty',
    meta_description: 'Get professional foreclosure assistance and sell your home before foreclosure affects your credit. Confidential, fast, and stress-free solutions with eXp Realty.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'short-sales',
    title: 'Short Sales',
    description: 'Avoid foreclosure with a short sale solution that minimizes financial impact.',
    icon: 'handshake',
    slug: 'short-sales',
    meta_title: 'Short Sale Specialists | Avoid Foreclosure | eXp Realty',
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
    meta_title: 'Cash Home Buyers | Get an Offer in 24 Hours | eXp Realty',
    meta_description: 'Sell your home fast for cash with eXp Realty. Get a fair cash offer within 24 hours and close on your timeline. No repairs, no showings, no hassle.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'probate-sales',
    title: 'Probate Sales',
    description: 'Hassle-free estate liquidation with expert guidance through the probate process.',
    icon: 'gavel',
    slug: 'probate-sales',
    meta_title: 'Probate Real Estate Specialists | Estate Liquidation | eXp Realty',
    meta_description: 'Expert probate real estate services to help executors and administrators navigate the complex process of selling estate property. Hassle-free solutions with eXp Realty.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'divorce-property-sales',
    title: 'Divorce Property Sales',
    description: 'Confidential and fast transactions for couples going through divorce.',
    icon: 'balance',
    slug: 'divorce-property-sales',
    meta_title: 'Divorce Property Sales | Confidential Real Estate Solutions | eXp Realty',
    meta_description: 'Specialized real estate services for divorcing couples. Confidential, fair, and efficient property sales to help you move forward. Expert guidance with eXp Realty.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'inherited-homes',
    title: 'Inherited Homes',
    description: "Sell inherited properties with ease, even if they're out of state.",
    icon: 'home',
    slug: 'inherited-homes',
    meta_title: 'Selling Inherited Property | Expert Estate Solutions | eXp Realty',
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
    meta_title: 'Elk Grove, CA Real Estate | Distressed Property Solutions | eXp Realty',
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
    meta_title: 'Sacramento, CA Real Estate | Distressed Property Solutions | eXp Realty',
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
    meta_title: 'Rancho Cordova, CA Real Estate | Distressed Property Solutions | eXp Realty',
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
    meta_title: 'Folsom, CA Real Estate | Distressed Property Solutions | eXp Realty',
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
    meta_title: 'Roseville, CA Real Estate | Distressed Property Solutions | eXp Realty',
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

// Mock blog posts data
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways to Avoid Foreclosure in Sacramento County',
    slug: '5-ways-to-avoid-foreclosure-sacramento',
    excerpt: 'Learn about effective strategies to prevent foreclosure and protect your financial future in Sacramento County.',
    content: `
      # 5 Ways to Avoid Foreclosure in Sacramento County

      Facing foreclosure can be one of the most stressful experiences for any homeowner. The good news is that there are several options available to help you avoid foreclosure and its negative impact on your credit and financial future.

      ## 1. Loan Modification

      A loan modification involves working with your lender to change the terms of your mortgage to make it more affordable. This could include extending the loan term, reducing the interest rate, or even forgiving a portion of the principal. Many lenders prefer this option over foreclosure because it's less costly for them.

      To pursue a loan modification:
      - Contact your lender as soon as you realize you're having trouble making payments
      - Prepare documentation of your financial hardship
      - Be persistent and follow up regularly

      ## 2. Short Sale

      A short sale occurs when you sell your home for less than what you owe on the mortgage, with the lender agreeing to accept the proceeds as full or partial satisfaction of the debt. While this will still impact your credit, the damage is typically less severe than a foreclosure.

      Benefits of a short sale:
      - Less damage to your credit score compared to foreclosure
      - Potential for faster credit recovery
      - Possible eligibility for another mortgage sooner

      ## 3. Deed in Lieu of Foreclosure

      With this option, you voluntarily transfer ownership of your property to the lender in exchange for being released from your mortgage obligation. Like a short sale, this option has less negative impact on your credit than a foreclosure.

      Key considerations:
      - Must be approved by your lender
      - Property should be in good condition
      - May still result in tax consequences

      ## 4. Refinancing

      If you have equity in your home and your credit is still in good standing, refinancing could be an option. A new loan with better terms might lower your monthly payments to a more manageable level.

      Requirements typically include:
      - Sufficient equity in your home
      - Stable income
      - Reasonable credit score

      ## 5. Selling Your Home Quickly

      If you have equity in your home, selling it before foreclosure proceedings begin can be the best option. This allows you to pay off your mortgage and potentially walk away with some money to start fresh.

      Working with a real estate agent who specializes in distressed properties can help you:
      - Price your home competitively for a quick sale
      - Market effectively to attract motivated buyers
      - Navigate the selling process efficiently

      ## Don't Wait to Take Action

      The most important thing to remember when facing potential foreclosure is to act quickly. The earlier you address the situation, the more options you'll have available.

      If you're a Sacramento County homeowner struggling with mortgage payments, contact us for a confidential consultation. Our team specializes in helping distressed homeowners find the best solution for their unique situation.
    `,
    author: 'Ravneel Pratap',
    date: '2025-02-15',
    category_id: 1,
    image: '/images/blog/foreclosure-prevention.jpg',
    meta_title: '5 Ways to Avoid Foreclosure in Sacramento County | eXp Realty',
    meta_description: 'Learn effective strategies to prevent foreclosure in Sacramento County. Protect your credit and financial future with these expert tips from eXp Realty.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];