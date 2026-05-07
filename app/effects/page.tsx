'use client';

import Link from 'next/link';
import { SparklesIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function EffectsPage() {
  const effects = [
    { name: 'Reverb', category: 'Spatial', downloads: '12K' },
    { name: 'Delay', category: 'Time', downloads: '10K' },
    { name: 'Compressor', category: 'Dynamics', downloads: '15K' },
    { name: 'EQ', category: 'Filter', downloads: '18K' }
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
              <Link href="/effects" className="text-indigo-600 font-medium">Effects</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <SparklesIcon className="w-10 h-10 text-indigo-600" />
          Effects Library
        </h1>
        <p className="text-gray-600 mb-8">Professional audio effects for your mixes</p>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search effects..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {effects.map((effect, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-full h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <SparklesIcon className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{effect.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{effect.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{effect.downloads} downloads</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
