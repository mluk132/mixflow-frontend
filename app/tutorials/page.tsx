'use client';

import Link from 'next/link';
import { AcademicCapIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function TutorialsPage() {
  const tutorials = [
    { title: 'Mixing Basics', duration: '15:30', views: '12K', level: 'Beginner' },
    { title: 'Advanced EQ Techniques', duration: '22:45', views: '8K', level: 'Advanced' },
    { title: 'Mastering Your Track', duration: '18:20', views: '10K', level: 'Intermediate' }
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
              <Link href="/tutorials" className="text-indigo-600 font-medium">Tutorials</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <AcademicCapIcon className="w-10 h-10 text-indigo-600" />
          Video Tutorials
        </h1>
        <p className="text-gray-600 mb-8">Learn from industry professionals</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="relative h-48 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
                <PlayIcon className="w-16 h-16 text-white" />
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-sm rounded">
                  {tutorial.duration}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">{tutorial.level}</span>
                  <span className="text-sm text-gray-500">{tutorial.views} views</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tutorial.title}</h3>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
