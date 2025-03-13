import { getServices, getLocations } from '../lib/data';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import LocationCard from './components/LocationCard';
import TestimonialSection from './components/TestimonialSection';
import CtaSection from './components/CtaSection';

export const revalidate = 3600; // Revalidate at most every hour

export default async function Home() {
  // Fetch services and locations from Supabase
  const services = await getServices();
  const locations = await getLocations();
  
  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer tailored solutions for homeowners facing challenging situations.
              Our expertise helps you navigate complex real estate scenarios with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            ) : (
              // Fallback if no services are found in the database
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">Our services are currently being updated. Please check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      
      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Areas We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide our specialized real estate services throughout Sacramento County
              and surrounding areas, helping distressed homeowners find solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.length > 0 ? (
              locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))
            ) : (
              // Fallback if no locations are found in the database
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">Our service areas are currently being updated. Please check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
}