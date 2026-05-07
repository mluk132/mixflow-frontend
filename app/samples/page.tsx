'use client';

import Link from 'next/link';
import { MusicalNoteIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function SamplesPage() {
  const samples = [
    { name: 'Kick Drum', category: 'Drums', duration: '0:02' },
    { name: 'Snare', category: 'Drums', duration: '0:01' },
    { name: 'Hi-Hat', category: 'Drums', duration: '0:01' },
    { name: 'Bass', category: 'Bass', duration: '0:03' }
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
              <Link href="/samples" className="text-indigo-600 font-medium">Samples</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <MusicalNoteIcon className="w-10 h-10 text-indigo-600" />
          Sample Library
        </h1>
        <p className="text-gray-600 mb-8">Professional audio samples for your productions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {samples.map((sample, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                    <PlayIcon className="w-5 h-5 text-white" />
                  </button>
                  <div>
                    <h3 className="font-bold text-gray-900">{sample.name}</h3>
                    <p className="text-sm text-gray-600">{sample.category} • {sample.duration}</p>
                  </div>
                </div>
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
