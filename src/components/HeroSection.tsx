// You'll need to use the Image component for optimized image loading
import Image from "next/image";

// Placeholder for your band's hero image (replace with your file path!)
import HeroImage from '@/assets/images/hero-bg.jpg';
import BandName from '@/assets/images/name.png'; // <--- NEW IMPORT for your logo

// NOTE: Create a public/images directory and add your hero-bg.jpg there.

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center text-white">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={HeroImage}
                    alt="Band playing live on stage"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority // Load this main image first for performance
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-1 flex flex-col items-center justify-center w-full h-full p-4">

                {/* Band Logo - Now using Next.js Image component for optimization */}
                {/* We'll use negative top margin or padding-bottom on the text below to push it up */}
                <div className="w-11/12 max-w-lg md:max-w-xl lg:max-w-2xl mt-[10vh] mb-auto opacity-50">
                    {/* ^^^ Use a DIV to control the logo's max width/size */}
                    <Image
                        src={BandName}
                        alt="Band Logo"
                        // Set intrinsic width/height to define aspect ratio
                        width={400}
                        height={200}
                        // Use 'responsive' layout
                        layout="responsive"
                        priority
                    />
                </div>
                {/* <p className="text-xl md:text-3xl font-light italic">
                </p>
                <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold transition duration-300">
                </button> */}
            </div>
        </section>
    );
}