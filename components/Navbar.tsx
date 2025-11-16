import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-lg text-indigo-600">Manas Technologies</a>
        </Link>
        <nav className="flex gap-4">
          <Link href="/#services"><a className="text-sm text-gray-700">Services</a></Link>
          <Link href="/case-studies"><a className="text-sm text-gray-700">Case Studies</a></Link>
          <Link href="/contact"><a className="text-sm text-gray-700">Contact</a></Link>
        </nav>
      </div>
    </header>
  );
}
