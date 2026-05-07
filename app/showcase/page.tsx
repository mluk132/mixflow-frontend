'use client';

import Link from 'next/link';
import { SparklesIcon, PlayIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function ShowcasePage() {
  const featured = [
    { title: 'Epic Drop', artist: 'DJ Mike', plays: 15000, likes: 1200 },
    { title: 'Chill Vibes', artist: 'Sarah Beats', plays: 12000, likes: 980 },
    { title: 'Bass Heavy', artist: 'Producer X', plays: 18000, likes: 1500 }
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
              <Link href="/showcase" className="text-indigo-600 font-medium">Showcase</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <SparklesIcon className="w-10 h-10 text-indigo-600" />
          Featured Tracks
        </h1>
        <p className="text-gray-600 mb-8">Discover amazing tracks from our community</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((track, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="relative h-48 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
                <PlayIcon className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{track.title}</h3>
                <p className="text-gray-600 mb-4">by {track.artist}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{track.plays.toLocaleString()} plays</span>
                  <div className="flex items-center gap-1">
                    <HeartIcon className="w-4 h-4" />
                    <span>{track.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
