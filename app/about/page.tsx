import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | TurboHomes | Distressed Property Solutions',
  description: 'Learn about our specialized real estate services for distressed homeowners in Sacramento County and surrounding areas. Fast, confidential solutions with TurboHomes.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TurboHomes</h1>
            <p className="text-xl text-blue-100">
              Specialized real estate services for distressed homeowners in Sacramento County and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At TurboHomes, we are dedicated to providing specialized real estate solutions for homeowners facing challenging situations. We understand that financial hardship, foreclosure, divorce, probate, and other difficult circumstances can create stress and uncertainty when it comes to your property.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to offer confidential, compassionate, and professional assistance to help you navigate these complex situations and find the best possible outcome for your unique circumstances.
            </p>
            <p className="text-lg text-gray-700">
              We believe in treating every client with respect and dignity, providing transparent information, and working tirelessly to achieve the best results for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-800 text-xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Experience</h3>
              <p className="text-gray-700">
                With years of specialized experience in distressed property situations, we have the knowledge and expertise to handle even the most complex real estate challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-800 text-xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Confidentiality</h3>
              <p className="text-gray-700">
                We understand the sensitive nature of distressed property situations. Your privacy is our priority, and we handle all matters with the utmost discretion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-800 text-xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Solutions-Oriented</h3>
              <p className="text-gray-700">
                We focus on finding practical solutions tailored to your specific situation, whether you're facing foreclosure, going through a divorce, or dealing with an inherited property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16">
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