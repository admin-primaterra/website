// Using a simple array of objects for the tour data
const tourDates = [
  { date: 'AUG 31', city: 'Berlin, DE', venue: 'Spirale', link: '#' },
  { date: 'SEP 14', city: 'Berlin, DE', venue: 'Spirale', link: '#' },
  { date: 'OCT 11', city: 'Berlin, DE', venue: 'Private Show', link: '#' },
];

export default function TourSection() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 uppercase tracking-widest">
          Upcoming Tour Dates
        </h2>
        
        <ul className="divide-y divide-gray-300">
          {tourDates.map((gig, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center py-4 text-left hover:bg-gray-200 transition duration-150"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-red-600">{gig.date}</p>
                <p className="text-xl font-medium truncate">{gig.city}</p>
                <p className="text-sm text-gray-500">{gig.venue}</p>
              </div>
              <a 
                href={gig.link} 
                className="ml-4 px-4 py-2 bg-black text-white hover:bg-gray-700 transition font-medium text-sm whitespace-nowrap"
              >
                Event
              </a>
            </li>
          ))}
        </ul>
        
        <p className="mt-8 text-gray-600">
          All dates subject to change.
        </p>
      </div>
    </section>
  );
}