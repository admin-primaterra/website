import Link from "next/link";

import Bandcamp from '@/assets/images/icon-bandcamp.png';
import Facebook from '@/assets/images/icon-facebook.png';
import Instagram from '@/assets/images/icon-instagram.png';
import Spotify from '@/assets/images/icon-spotify.png';
import Youtube from '@/assets/images/icon-youtube.png';
import IconButton from "./IconButton";

const socialLinks = [
  { href: "https://www.facebook.com/PrimaterraBand", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/primaterra.band", icon: Instagram, label: "Instagram" },
  { href: "https://open.spotify.com/artist/57nMRok22BXDPwuJGAHRGR?si=pz_tRw4LSrO8-qwbdHzbQQ", icon: Spotify, label: "Spotify" },
  { href: "https://www.youtube.com/@primaterra8496", icon: Youtube, label: "YouTube" },
  { href: "https://primaterra.bandcamp.com/album/devolution", icon: Bandcamp, label: "Bandcamp" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Social Media Links Section */}
        <div className="flex justify-center mb-6">
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
        
        {/* Navigation and Legal Links */}
        {/* <div className="flex flex-col items-center gap-3 text-sm text-gray-400">
          <div className="flex gap-4">
            <Link href="/imprint" className="hover:text-white transition">
              Impressum (Imprint)
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Datenschutzerklärung (Privacy)
            </Link>
          </div> */}
          
          {/* Copyright Text */}
          {/* <p className="mt-3">
            &copy; {currentYear} Primaterra. All Rights Reserved.
          </p>
        </div> */}
        
      </div>
    </footer>
  );
}