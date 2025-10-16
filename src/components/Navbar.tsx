'use client'; // required if using Next.js App Router
import Image from "next/image";
import Logo from '@/assets/images/logo.png';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls more than 50px down, set navbar as "scrolled"
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-500 ${
        scrolled
          ? 'bg-black/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
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
            {/* Add more links here */}
          </div>
        </div>
      </div>
    </nav>
  );
}