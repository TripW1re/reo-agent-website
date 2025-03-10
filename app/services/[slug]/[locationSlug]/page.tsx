import { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug, getLocationBySlug, getServices, getLocations } from '../../../../lib/data';
import { notFound } from 'next/navigation';

// Generate static params for all service+location combinations
export async function generateStaticParams() {
  const services = await getServices();
  const locations = await getLocations();
  
  const params = [];
  
  for (const service of services) {
    for (const location of locations) {
      params.push({
        slug: service.slug,
        locationSlug: location.slug,
      });
    }
  }
  
  return params;
}

// Generate metadata for each service+location page
export async function generateMetadata({ params }: { params: { slug: string, locationSlug: string } }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  const location = await getLocationBySlug(params.locationSlug);
  
  if (!service || !location) {
    return {
      title: 'Page Not Found | eXp Realty',
      description: 'The requested page could not be found.',
    };
  }
  
  return {
    title: `${service.title} in ${location.name}, ${location.state} | eXp Realty`,
    description: `Expert ${service.title.toLowerCase()} services in ${location.name}, ${location.state}. Get fast, confidential solutions tailored to your needs. Contact us today.`,
  };
}

export default async function ServiceLocationPage({ params }: { params: { slug: string, locationSlug: string } }) {
  const service = await getServiceBySlug(params.slug);
  const location = await getLocationBySlug(params.locationSlug);
  
  if (!service || !location) {
    notFound();
  }
  
  // Get content blocks for this service
  const contentBlocks = service.content_blocks || [];
  
  // Get local features for this location
  const localFeatures = location.local_features || [];
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title} in {location.name}, {location.state}</h1>
            <p className="text-xl text-blue-100">
              Expert {service.title.toLowerCase()} services for homeowners in {location.name} and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Service Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-center">{service.title} Services in {location.name}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {service.description} Our team of experts specializes in helping {location.name} homeowners navigate complex real estate situations with confidence and ease.
              </p>
              
              {contentBlocks.length > 0 ? (
                <div className="space-y-8 mt-12">
                  {contentBlocks.map((block) => (
                    <div key={block.id}>
                      <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                      <p className="text-gray-700">{block.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8 mt-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">How We Can Help {location.name} Homeowners</h3>
                    <p className="text-gray-700">
                      At eXp Realty, we understand the unique challenges that {location.name} homeowners face when dealing with {service.title.toLowerCase()} situations. 
                      Our team provides confidential, professional assistance tailored to your specific needs and the local {location.name} real estate market.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our {service.title} Process in {location.name}</h3>
                    <p className="text-gray-700">
                      We begin with a confidential consultation to understand your unique situation, goals, and timeline. 
                      This helps us develop a customized approach tailored to your specific needs and the {location.name} real estate market.
                    </p>
                    <p className="text-gray-700 mt-4">
                      After evaluating your property and situation, we will develop a personalized solution that addresses 
                      your specific challenges. We handle all aspects of implementing the solution, from marketing your 
                      property to negotiating with buyers, lenders, or other parties involved in the transaction.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{location.name} Real Estate Market</h2>
            <p className="text-lg text-gray-700 mb-6">
              {location.description}
            </p>
            
            {localFeatures.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Features of the {location.name} Market</h3>
                <ul className="space-y-2">
                  {localFeatures.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-800 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us for {service.title} in {location.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 text-xl font-bold">L</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  We have extensive knowledge of the {location.name} real estate market and understand the unique challenges and opportunities in this area.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 text-xl font-bold">E</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Experience</h3>
                <p className="text-gray-700">
                  With years of specialized experience in {service.title.toLowerCase()} situations, we have the knowledge and expertise to handle even the most complex real estate challenges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 text-xl font-bold">C</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Confidentiality</h3>
                <p className="text-gray-700">
                  We understand the sensitive nature of {service.title.toLowerCase()} situations. Your privacy is our priority, and we handle all matters with the utmost discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our {location.name} Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-800 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-4">Working with Ravneel was a lifesaver during our foreclosure crisis. He found a solution that helped us avoid foreclosure and saved our credit score.</p>
              
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">Michael S.</p>
                <p className="text-gray-500 text-sm">{location.name}, {location.state}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-800 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-4">After inheriting my parent's home, I was overwhelmed with the process. Ravneel guided me through every step and got me a great price with minimal stress.</p>
              
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">Jennifer L.</p>
                <p className="text-gray-500 text-sm">{location.name}, {location.state}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-800 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-4">The short sale process was so much easier than I expected. Professional, knowledgeable, and always available to answer my questions.</p>
              
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">Robert T.</p>
                <p className="text-gray-500 text-sm">{location.name}, {location.state}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Other Services in {location.name}</h2>
            <p className="text-gray-700 mb-8">
              We offer a range of specialized real estate services for distressed homeowners in {location.name}, {location.state}:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Placeholder for related services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Foreclosure Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Sell your home before foreclosure affects your credit score and financial future.
                </p>
                <Link href={`/services/foreclosure-help/${location.slug}`} className="text-blue-800 hover:underline">
                  Learn More
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Short Sales</h3>
                <p className="text-gray-600 mb-4">
                  Avoid foreclosure with a short sale solution that minimizes financial impact.
                </p>
                <Link href={`/services/short-sales/${location.slug}`} className="text-blue-800 hover:underline">
                  Learn More
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Cash Home Sales</h3>
                <p className="text-gray-600 mb-4">
                  Get a cash offer within 24 hours and close on your timeline.
                </p>
                <Link href={`/services/cash-home-sales/${location.slug}`} className="text-blue-800 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href={`/locations/${location.slug}`} 
                className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center"
              >
                View All {location.name} Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need {service.title} Help in {location.name}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a confidential consultation about your property situation.
            We are here to help you find the best solution for your unique needs.
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