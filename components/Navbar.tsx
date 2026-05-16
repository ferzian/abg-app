'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/register', label: 'Register' },
    { href: '/login', label: 'Login' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition">
          ABG
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`transition ${
                  isActive(item.href)
                    ? 'text-orange-600 font-semibold'
                    : 'hover:text-orange-600'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Order Now
          </button>
        </div>
      </nav>
    </header>
  );
}
