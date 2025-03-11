import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPostBySlug, getBlogPosts } from '../../../lib/data';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | TurboHomes',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: post.meta_title?.replace('eXp Realty', 'TurboHomes') || `${post.title} | TurboHomes`,
    description: post.meta_description?.replace('eXp Realty', 'TurboHomes') || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Format the content (assuming it's markdown or HTML)
  const formattedContent = post.content.replace(/eXp Realty/g, 'TurboHomes');
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {post.category?.name || 'Real Estate'}
              </span>
              <span className="text-blue-200 text-sm ml-4">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-blue-100">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose max-w-none">
              {/* Render the content as HTML */}
              <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Author:</strong> {post.author}
              </p>
              <p className="text-gray-600">
                <strong>Published:</strong> {post.date}
              </p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/blog" 
                className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Foreclosure Prevention Strategies</h3>
                <p className="text-gray-600 mb-4">
                  Learn about effective strategies to prevent foreclosure and protect your financial future.
                </p>
                <Link href="/blog" className="text-blue-800 hover:underline">
                  Read More
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Sacramento Market Update</h3>
                <p className="text-gray-600 mb-4">
                  Stay informed about the latest trends, pricing, and opportunities in the Sacramento County real estate market.
                </p>
                <Link href="/blog" className="text-blue-800 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help With Your Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're facing foreclosure, going through a divorce, or dealing with an inherited property,
            we're here to help you find the best solution for your unique situation.
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