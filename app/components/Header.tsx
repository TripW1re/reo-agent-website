import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-blue-800 font-montserrat">
            TurboHomes
          </Link>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-800 font-medium font-roboto">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-800 font-medium font-roboto">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-800 font-medium font-roboto">
            Services
          </Link>
          <Link href="/locations" className="text-gray-700 hover:text-blue-800 font-medium font-roboto">
            Locations
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-800 font-medium font-roboto">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-800 font-medium font-roboto">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center mt-4 md:mt-0">
          <Link 
            href="/contact" 
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors font-montserrat"
          >
            Get Help Now
          </Link>
        </div>
      </div>
    </header>
  );
}