export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Working with Ravneel was a lifesaver during our foreclosure crisis. He found a solution that helped us avoid foreclosure and saved our credit score.",
      author: "Michael S.",
      location: "Elk Grove, CA"
    },
    {
      id: 2,
      quote: "After inheriting my parent's home, I was overwhelmed with the process. Ravneel guided me through every step and got me a great price with minimal stress.",
      author: "Jennifer L.",
      location: "Sacramento, CA"
    },
    {
      id: 3,
      quote: "The short sale process was so much easier than I expected. Professional, knowledgeable, and always available to answer my questions.",
      author: "Robert T.",
      location: "Folsom, CA"
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {/* Quote icon */}
                <svg className="w-8 h-8 text-blue-800 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}