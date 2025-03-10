import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-blue-900 text-white">
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Fast, Confidential Solutions for Distressed Homeowners
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Specialized real estate services in Sacramento County and surrounding areas. 
            We help homeowners facing foreclosure, divorce, probate, and other challenging situations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-block text-center"
            >
              Get a Free Consultation
            </Link>
            
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors inline-block text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}