import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Blog | TurboHomes | Distressed Property Solutions',
  description: 'Expert advice and insights on distressed property solutions, foreclosure prevention, short sales, and real estate market updates for Sacramento County and surrounding areas.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Insights</h1>
            <p className="text-xl text-blue-100">
              Expert advice and insights on distressed property solutions, foreclosure prevention, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {post.category?.name || 'Real Estate'}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're currently working on creating valuable content to help you navigate distressed property situations.
                  Check back soon for articles, guides, and market updates.
                </p>
                <Link 
                  href="/contact" 
                  className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors inline-block"
                >
                  Contact Us for Immediate Help
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Topics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Foreclosure Prevention</h3>
                <p className="text-gray-600 mb-4">
                  Learn about strategies to avoid foreclosure, protect your credit, and find alternatives that work for your situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Short Sale Guidance</h3>
                <p className="text-gray-600 mb-4">
                  Understand the short sale process, benefits compared to foreclosure, and how to navigate lender negotiations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Sacramento Market Updates</h3>
                <p className="text-gray-600 mb-4">
                  Stay informed about the latest trends, pricing, and opportunities in the Sacramento County real estate market.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Distressed Property Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Explore options for selling distressed properties quickly, including cash sales, auction alternatives, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive the latest articles, market updates, and expert advice directly to your inbox.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                Our newsletter provides valuable insights for homeowners facing challenging property situations.
              </p>
              
              <Link 
                href="/contact" 
                className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors inline-block"
              >
                Contact Us to Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Contact us today for a confidential consultation about your property situation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
            
            <Link 
              href="tel:9166903334" 
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              Call Us: (916) 690-3334
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}