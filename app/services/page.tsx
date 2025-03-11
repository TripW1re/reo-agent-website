import { Metadata } from 'next';
import Link from 'next/link';
import { getServices } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Our Services | TurboHomes | Distressed Property Solutions',
  description: 'Specialized real estate services for distressed homeowners including foreclosure assistance, short sales, cash home sales, probate sales, and more.',
};

export default async function ServicesPage() {
  const services = await getServices();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Specialized real estate solutions for homeowners facing challenging situations.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How We Can Help</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              At TurboHomes, we specialize in helping homeowners navigate complex real estate situations. 
              Our team provides confidential, professional assistance tailored to your unique needs.
            </p>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Whether you're facing foreclosure, going through a divorce, or dealing with an inherited property, 
              we have the expertise to help you find the best solution.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 text-xl font-bold">{service.icon.charAt(0).toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center"
                  >
                    Learn More
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin with a confidential consultation to understand your unique situation, goals, and timeline. This helps us develop a customized approach tailored to your specific needs.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Property Evaluation</h3>
                  <p className="text-gray-700">
                    We conduct a thorough evaluation of your property to determine its current market value and potential. This assessment helps us identify the best strategy for your situation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Customized Solution</h3>
                  <p className="text-gray-700">
                    Based on your needs and our evaluation, we develop a personalized solution that addresses your specific challenges, whether it's a quick sale, short sale, or other specialized approach.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Implementation</h3>
                  <p className="text-gray-700">
                    We handle all aspects of implementing the solution, from marketing your property to negotiating with buyers, lenders, or other parties involved in the transaction.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Successful Closing</h3>
                  <p className="text-gray-700">
                    We guide you through the closing process, ensuring all legal and financial aspects are handled properly, giving you peace of mind and a fresh start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
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
                <p className="text-gray-500 text-sm">Elk Grove, CA</p>
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
                <p className="text-gray-500 text-sm">Sacramento, CA</p>
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
                <p className="text-gray-500 text-sm">Folsom, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a confidential consultation about your property situation.
            We're here to help you find the best solution for your unique needs.
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