import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-blue-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-montserrat">Need Help With Your Property?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto font-roboto">
          Whether you're facing foreclosure, going through a divorce, or dealing with an inherited property,
          we're here to help you find the best solution for your unique situation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-block font-montserrat"
          >
            Schedule a Consultation
          </Link>
          
          <Link 
            href="tel:9166903334" 
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors inline-block font-montserrat"
          >
            Call Us: (916) 690-3334
          </Link>
        </div>
      </div>
    </section>
  );
}