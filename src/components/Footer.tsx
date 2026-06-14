import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-sm py-8 px-4 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Primaterra. All rights reserved.</p>
        <Link href="/privacy" className="hover:text-white transition">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
