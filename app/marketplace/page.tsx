'use client';

import Link from 'next/link';
import { ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function MarketplacePage() {
  const products = [
    { name: 'Drum Kit Vol. 1', type: 'Samples', price: '$29', sales: '2.5K' },
    { name: 'Vocal Presets Pack', type: 'Presets', price: '$19', sales: '1.8K' },
    { name: 'Mixing Template', type: 'Template', price: '$39', sales: '3.2K' },
    { name: 'Bass Synth', type: 'Plugin', price: '$99', sales: '1.2K' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mixflow
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/mixer" className="text-gray-600 hover:text-indigo-600 transition-colors">Mixer</Link>
              <Link href="/marketplace" className="text-indigo-600 font-medium">Marketplace</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <ShoppingBagIcon className="w-10 h-10 text-indigo-600" />
          Marketplace
        </h1>
        <p className="text-gray-600 mb-8">Buy and sell production assets</p>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search marketplace..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-full h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <ShoppingBagIcon className="w-12 h-12 text-indigo-600" />
              </div>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded mb-2 inline-block">
                {product.type}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.sales} sales</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
