import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface LinkProps {
  href: string;
  icon: StaticImageData;
  label: string;
}

export default function IconButton({ href, icon, label }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-5 py-2 text-white hover:opacity-50 text-sm font-semibold transition duration-150"
    >
      <Image
        src={icon}
        alt={`${label} icon`}
        width={20}
        height={20}
        className="object-contain"
      />
    </a>
  );
}
