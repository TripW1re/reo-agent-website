import Link from 'next/link';
import HeroSection from './components/HeroSection';
import TestimonialSection from './components/TestimonialSection';
import CtaSection from './components/CtaSection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Specialized Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Foreclosure Assistance</h3>
              <p className="text-gray-600 mb-4">
                Sell your home before foreclosure affects your credit score and financial future.
              </p>
              <Link href="/services/foreclosure-help" className="text-blue-800 hover:underline">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Short Sales</h3>
              <p className="text-gray-600 mb-4">
                Avoid foreclosure with a short sale solution that minimizes financial impact.
              </p>
              <Link href="/services/short-sales" className="text-blue-800 hover:underline">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Cash Home Sales</h3>
              <p className="text-gray-600 mb-4">
                Get a cash offer within 24 hours and close on your timeline.
              </p>
              <Link href="/services/cash-home-sales" className="text-blue-800 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/services" 
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Elk Grove, CA</h3>
              <p className="text-gray-600 mb-4">
                Specialized real estate solutions for homeowners in Elk Grove and surrounding areas.
              </p>
              <Link href="/locations/elk-grove-ca" className="text-blue-800 hover:underline">
                View Services
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sacramento, CA</h3>
              <p className="text-gray-600 mb-4">
                Expert assistance for Sacramento homeowners facing challenging property situations.
              </p>
              <Link href="/locations/sacramento-ca" className="text-blue-800 hover:underline">
                View Services
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Folsom, CA</h3>
              <p className="text-gray-600 mb-4">
                Confidential, professional real estate solutions for Folsom homeowners.
              </p>
              <Link href="/locations/folsom-ca" className="text-blue-800 hover:underline">
                View Services
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/locations" 
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}