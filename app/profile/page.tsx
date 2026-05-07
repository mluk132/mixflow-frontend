'use client';

import Link from 'next/link';
import { MusicalNoteIcon, FolderIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function ProfilePage() {
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
              <Link href="/projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</Link>
              <Link href="/profile" className="text-indigo-600 font-medium">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              DJ
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">DJ Producer</h1>
              <p className="text-gray-600">Professional Producer • Member since 2026</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <MusicalNoteIcon className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-3xl font-bold text-gray-900">42</p>
            <p className="text-gray-600">Tracks Mixed</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <FolderIcon className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-3xl font-bold text-gray-900">15</p>
            <p className="text-gray-600">Projects</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <HeartIcon className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-3xl font-bold text-gray-900">128</p>
            <p className="text-gray-600">Followers</p>
          </div>
        </div>
      </main>
    </div>
  );
}
