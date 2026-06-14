'use client';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Spotify from '@/assets/images/icon-spotify.png';
import AppleMusic from '@/assets/images/icon-apple-music.png';
import YoutubeMusic from '@/assets/images/icon-youtube-music.png';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const SPOTIFY_BASE = "https://open.spotify.com/embed/track/2VOTjoPEOJvyoZjGuShoj7?utm_source=generator&si=6790a4f48eaa4ce1";

export default function PromoSection() {
  const playerRef = useRef<HTMLDivElement>(null);
  const [playerSrc, setPlayerSrc] = useState('');
  const justAccepted = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    // Returning visitor — load player normally, no autoplay
    if (localStorage.getItem('cookie_consent_choice') === 'accepted') {
      setPlayerSrc(SPOTIFY_BASE);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      isVisible.current = true;
      window.fbq?.('track', 'ViewContent', { content_name: 'Deconstruct - Spotify Player' });
      if (justAccepted.current) {
        setPlayerSrc(SPOTIFY_BASE + '&autoplay=1');
      }
      observer.disconnect();
    }, { threshold: 0.5 });

    if (playerRef.current) observer.observe(playerRef.current);

    // Fired by CookieConsent when user clicks Accept
    const onAccept = () => {
      justAccepted.current = true;
      if (isVisible.current) {
        // Player already on screen — start immediately
        setPlayerSrc(SPOTIFY_BASE + '&autoplay=1');
      }
      // Not visible yet — observer will trigger autoplay on scroll
    };

    window.addEventListener('cookieConsentAccepted', onAccept);
    return () => {
      observer.disconnect();
      window.removeEventListener('cookieConsentAccepted', onAccept);
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-4xl font-bold uppercase tracking-widest">
          Latest Release: Deconstruct
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Spotify Embed */}
          <div ref={playerRef} className="w-full md:w-1/2">
            {playerSrc && (
              <iframe
                style={{ borderRadius: "12px", border: "none" }}
                src={playerSrc}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            )}
          </div>

          {/* Description and Links */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &quot;Deconstruct&quot;. Available everywhere now.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <a href="https://open.spotify.com/intl-de/album/09byjD7pbEm85ysXGmJlYF?si=LWjTCExgQH6HNP8_vqpa_w" className="flex items-center justify-center gap-2 px-5 py-3 border border-white text-white hover:bg-gray-800 text-sm font-semibold transition rounded">
                <Image src={Spotify} alt="Spotify" width={20} height={20} className="object-contain" />
                Spotify
              </a>
              <a href="https://music.youtube.com/watch?v=1J--Q3pieb0&si=MZJVd-9rRTfPeZ0r" className="flex items-center justify-center gap-2 px-5 py-3 border border-white text-white hover:bg-gray-800 text-sm font-semibold transition rounded">
                <Image src={YoutubeMusic} alt="YouTube Music" width={20} height={20} className="object-contain" />
                YouTube Music
              </a>
              <a href="https://music.apple.com/us/song/collateral-damage/1706471121" className="flex items-center justify-center gap-2 px-5 py-3 border border-white text-white hover:bg-gray-800 text-sm font-semibold transition rounded">
                <Image src={AppleMusic} alt="Apple Music" width={20} height={20} className="object-contain" />
                Apple Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
