import { Metadata } from 'next';
import Link from 'next/link';
import { getLocations } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Service Areas | TurboHomes | Distressed Property Solutions',
  description: 'We provide specialized real estate services for distressed homeowners throughout Sacramento County and surrounding areas including Elk Grove, Sacramento, Rancho Cordova, and more.',
};

export default async function LocationsPage() {
  const locations = await getLocations();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Serve</h1>
            <p className="text-xl text-blue-100">
              Providing specialized real estate services throughout Sacramento County and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Locations Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Service Areas</h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              We provide our specialized real estate services for distressed homeowners throughout Sacramento County 
              and surrounding areas. Our team has extensive knowledge of the local real estate markets and can help 
              you navigate complex property situations no matter where you're located.
            </p>
          </div>
          
          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}, {location.state}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <Link 
                    href={`/locations/${location.slug}`}
                    className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center"
                  >
                    View Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Service Area Map</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401437.1263747999!2d-121.58334177124463!3d38.56352127957226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1709932800000!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Additional Areas We Serve</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              In addition to our primary service areas, we also assist homeowners in the following locations:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Galt, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Lodi, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Stockton, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Davis, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Woodland, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Auburn, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Rocklin, CA</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md text-center">
                <span className="text-gray-700">Lincoln, CA</span>
              </div>
            </div>
            
            <p className="text-center mt-8 text-gray-700">
              Don't see your area listed? <Link href="/contact" className="text-blue-800 hover:underline">Contact us</Link> to see if we serve your location.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-700 mb-8">
              We offer a range of specialized real estate services for distressed homeowners throughout our service areas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Foreclosure Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Sell your home before foreclosure affects your credit score and financial future.
                </p>
                <Link href="/services/foreclosure-help" className="text-blue-800 hover:underline">
                  Learn More
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Short Sales</h3>
                <p className="text-gray-600 mb-4">
                  Avoid foreclosure with a short sale solution that minimizes financial impact.
                </p>
                <Link href="/services/short-sales" className="text-blue-800 hover:underline">
                  Learn More
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Cash Home Sales</h3>
                <p className="text-gray-600 mb-4">
                  Get a cash offer within 24 hours and close on your timeline.
                </p>
                <Link href="/services/cash-home-sales" className="text-blue-800 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/services" 
                className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors inline-block"
              >
                View All Services
              </Link>
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