'use client';

import Link from 'next/link';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function TemplatesPage() {
  const templates = [
    { name: 'Hip Hop Starter', tracks: 8, genre: 'Hip Hop' },
    { name: 'EDM Template', tracks: 12, genre: 'EDM' },
    { name: 'Rock Mix', tracks: 10, genre: 'Rock' }
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
              <Link href="/templates" className="text-indigo-600 font-medium">Templates</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <DocumentDuplicateIcon className="w-10 h-10 text-indigo-600" />
          Project Templates
        </h1>
        <p className="text-gray-600 mb-8">Start with professional templates</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-full h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <DocumentDuplicateIcon className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.tracks} tracks • {template.genre}</p>
              <Link href="/mixer" className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                Use Template
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
