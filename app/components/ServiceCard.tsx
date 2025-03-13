import Link from 'next/link';
import { Service } from '../../lib/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          {/* Icon placeholder - in a real app, you'd use actual icons */}
          <span className="text-blue-800 text-xl font-bold font-montserrat">{service.icon.charAt(0).toUpperCase()}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 font-montserrat">{service.title}</h3>
        <p className="text-gray-600 mb-4 font-roboto">{service.description}</p>
        <Link 
          href={`/services/${service.slug}`}
          className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center font-montserrat"
        >
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}