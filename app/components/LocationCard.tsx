import Link from 'next/link';
import { Location } from '../../lib/types';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 font-montserrat">{location.name}, {location.state}</h3>
        <p className="text-gray-600 mb-4 font-roboto">{location.description}</p>
        <Link 
          href={`/locations/${location.slug}`}
          className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center font-montserrat"
        >
          View Services
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}