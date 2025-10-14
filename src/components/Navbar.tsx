import Link from 'next/link';

// Define the Navbar component
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand Name */}
          <Link href="/" className="text-white text-2xl font-extrabold tracking-wider hover:text-gray-400 transition">
            <img
              src="/logo.png"
              alt="Band Logo"
              className="h-6 w-auto object-contain"
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="text-white hover:text-red-500 transition duration-150">
              Home
            </Link>
            <Link href="/gallery" className="text-white hover:text-red-500 transition duration-150">
              Gallery
            </Link>
            <Link href="/about" className="text-white hover:text-red-500 transition duration-150">
              About
            </Link>
            {/* Add more links here like /tour or /contact */}
          </div>
        </div>
      </div>
    </nav>
  );
}