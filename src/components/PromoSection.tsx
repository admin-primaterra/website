export default function PromoSection() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-4xl font-bold uppercase tracking-widest">
          Latest Release: Collateral Damage
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Album Cover Placeholder */}
          <div className="w-full md:w-1/3 aspect-square bg-gray-700 flex items-center justify-center">
            <span className="text-xl">Album Cover Art</span>
          </div>
          
          {/* Description and Links */}
          <div className="w-full md:w-2/3 text-left space-y-4">
            <p className="text-gray-400">
                "Echoes of the Night". Available everywhere now.
            </p>
            <p className="text-lg font-medium">Out October 27, 2025</p>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="px-5 py-2 bg-red-600 hover:bg-red-700 text-sm font-semibold transition">
                Spotify
              </a>
              <a href="#" className="px-5 py-2 bg-white text-black hover:bg-gray-200 text-sm font-semibold transition">
                Apple Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}