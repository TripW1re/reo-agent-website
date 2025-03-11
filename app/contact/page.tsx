import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | TurboHomes | Distressed Property Solutions',
  description: 'Get in touch with our team of real estate experts specializing in distressed property solutions in Sacramento County and surrounding areas.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with our team of real estate experts specializing in distressed property solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  Whether you're facing foreclosure, going through a divorce, or dealing with an inherited property, 
                  we're here to help. Contact us today for a confidential consultation about your unique situation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:9166903334" className="hover:text-blue-800">
                          (916) 690-3334
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:ravneel_pratap@live.com" className="hover:text-blue-800">
                          ravneel_pratap@live.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Office Location</h3>
                      <p className="text-gray-700">
                        2603 Camino Ramon, Suite 200<br />
                        San Ramon, CA 94583
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">License Information</h3>
                      <p className="text-gray-700">
                        REALTOR®| DRE: 02156944| eXp Realty of California Inc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="mb-6">
                    <p className="text-gray-700">
                      Fill out our contact form and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <a 
                      href="https://form.jotform.com/250516766708161" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors inline-block w-full text-center"
                    >
                      Open Contact Form
                    </a>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="text-blue-800 hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.8273116241198!2d-121.97800492392758!3d37.76646001456141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff2e0a7e8c9a7%3A0x7ebc1b8593a171ed!2s2603%20Camino%20Ramon%2C%20San%20Ramon%2C%20CA%2094583!5e0!3m2!1sen!2sus!4v1709932800000!5m2!1sen!2sus" 
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

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Areas We Serve</h2>
            <p className="text-gray-700 mb-8">
              We provide our specialized real estate services throughout Sacramento County and surrounding areas, including:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded-md">
                <Link href="/locations/elk-grove-ca" className="text-blue-800 hover:underline">
                  Elk Grove, CA
                </Link>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <Link href="/locations/sacramento-ca" className="text-blue-800 hover:underline">
                  Sacramento, CA
                </Link>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <Link href="/locations/rancho-cordova-ca" className="text-blue-800 hover:underline">
                  Rancho Cordova, CA
                </Link>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <Link href="/locations/folsom-ca" className="text-blue-800 hover:underline">
                  Folsom, CA
                </Link>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <Link href="/locations/roseville-ca" className="text-blue-800 hover:underline">
                  Roseville, CA
                </Link>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <Link href="/locations" className="text-blue-800 hover:underline">
                  View All Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}