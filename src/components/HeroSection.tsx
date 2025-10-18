import Image from "next/image";
import HeroImage from '@/assets/images/hero-bg.jpg';
import BandName from '@/assets/images/name.png';

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center text-white">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={HeroImage}
                    alt="Full band promo image"
                    fill
                    className="w-full object-none object-top sm:object-center"
                    quality={100}
                    priority
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-1 flex flex-col items-center justify-center w-full h-full p-4">

                {/* Band Logo - Now using Next.js Image component for optimization */}
                <div className="w-11/12 max-w-lg md:max-w-xl lg:max-w-2xl mt-[10vh] mb-auto opacity-50">
                    <Image
                        src={BandName}
                        alt="Band Logo"
                        width={400}
                        height={200}
                        layout="responsive"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}