import Image from "next/image";
import ArtCover from '@/assets/images/art-cover.jpg';
import Spotify from '@/assets/images/icon-spotify.png';
import AppleMusic from '@/assets/images/icon-apple-music.png';
import YoutubeMusic from '@/assets/images/icon-youtube-music.png';
import IconTextButton from "./IconTextButton";

export default function PromoSection() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-4xl font-bold uppercase tracking-widest">
          Latest Release: Collateral Damage
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Album Cover Placeholder */}
          <div className="w-full md:w-1/3 px-18 md:p-0 aspect-square flex items-center justify-center">
                    <Image
                        src={ArtCover}
                        alt="Band Logo"
                        layout="responsive"
                        priority
                    />
          </div>
          
          {/* Description and Links */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
            <p className="text-gray-400">
                &quot;Collateral Damage&quot;. Available everywhere now.
            </p>
            {/* <p className="text-lg font-medium">Out October 27, 2025</p> */}
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-16 text-center md:text-left">
              <IconTextButton
                href="https://open.spotify.com/intl-de/album/09byjD7pbEm85ysXGmJlYF?si=LWjTCExgQH6HNP8_vqpa_w"
                icon={Spotify}
                label="SPOTIFY"
              />
              <IconTextButton
                href="https://music.youtube.com/watch?v=1J--Q3pieb0&si=MZJVd-9rRTfPeZ0r"
                icon={YoutubeMusic}
                label="YT MUSIC"
              />
              <IconTextButton
                href="https://music.apple.com/us/song/collateral-damage/1706471121"
                icon={AppleMusic}
                label="APPLE MUSIC"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}