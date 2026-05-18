'use client';

import { useState } from 'react';
import { MdShoppingCart, MdSearch } from 'react-icons/md';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Ayam Bakar Spesial',
    description: 'Ayam pedihan dengan rempah rumahan khusus dari warisan nenek',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1598908867192-f513de42cb7e?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 124,
    category: 'Ayam Bakar',
    badge: 'BEST SELLER',
  },
  {
    id: 2,
    name: 'Ayam Goreng Krem Spesial',
    description: 'Ayam goreng dengan saus krem gurih yang melezat dan creamy',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 89,
    category: 'Ayam Goreng',
  },
  {
    id: 3,
    name: 'Paket Nasi Kuning',
    description: 'Nasi kuning lengkap dengan telur dadar, lauk dan sambal',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 205,
    category: 'Paket Combo',
    badge: 'NEW',
  },
  {
    id: 4,
    name: 'Sate Ayam Madura',
    description: 'Sate ayam empuk ayam madura dengan kacang yang gurih',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561231?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 231,
    category: 'Sisi & Sambal',
  },
  {
    id: 5,
    name: 'Sambal Korek Extra',
    description: 'Sambal akan disiapkan dengan kepedahan tingkat tinggi',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1559333086-b0a38235dae4?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 156,
    category: 'Sisi & Sambal',
  },
  {
    id: 6,
    name: 'Es Teh Manis Legit',
    description: 'Teh sedap tradisional dengan gula asli dan es batu Kristal',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1585518419759-bba4f0e44e7c?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 132,
    category: 'Minuman',
  },
  {
    id: 7,
    name: 'Ayam Goreng Mentega',
    description: 'Ayam goreng dengan saus mentega yang lezat dan creamy',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1598108001614-bc54953c0fc0?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 98,
    category: 'Ayam Goreng',
  },
  {
    id: 8,
    name: 'Paket Lengkap Family',
    description: 'Paket hemat untuk 4-5 orang dengan berbagai pilihan ayam',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 67,
    category: 'Paket Combo',
  },
  {
    id: 9,
    name: 'Paket Lengkap Family',
    description: 'Paket hemat untuk 4-5 orang dengan berbagai pilihan ayam',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 67,
    category: 'Paket Combo',
  },
];

const categories = ['Semua', 'Ayam Bakar', 'Ayam Goreng', 'Paket Combo', 'Sisi & Sambal', 'Minuman'];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="bg-gray-50 py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <MdSearch className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-32 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Menu Hari Ini</h1>
        <p className="text-gray-600 mb-8">Pilihan terbaik yang paling banyak dipesan pelanggan.</p>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Menu tidak ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-200 h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                  {item.badge && (
                    <div className="absolute top-2 left-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold text-white rounded ${
                          item.badge === 'BEST SELLER'
                            ? 'bg-red-500'
                            : 'bg-green-500'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Name */}
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-sm font-semibold text-gray-900">
                      ⭐ {item.rating}
                    </span>
                    <span className="text-xs text-gray-500">({item.reviews})</span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">
                      {formatPrice(item.price)}
                    </span>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition">
                      <MdShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2">Dapatkan Promo Eksklusif!</h2>
            <p className="text-gray-600 mb-6">
              Berlangganan newsletter kami dan dapatkan voucher diskon 20% untuk pesanan pertama Anda.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">ABG</h3>
              <p className="text-sm">© 2024 ABG Ayam Bakar Goreng. Sizzling & Fresh.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Careers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 ABG Ayam Bakar Goreng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
