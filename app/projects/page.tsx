'use client';

import Link from 'next/link';
import { FolderIcon, PlusIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Summer Vibes Mix', tracks: 8, updated: '2 hours ago' },
    { id: 2, name: 'Hip Hop Beat', tracks: 12, updated: '1 day ago' },
    { id: 3, name: 'EDM Banger', tracks: 16, updated: '3 days ago' }
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
              <Link href="/projects" className="text-indigo-600 font-medium">Projects</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <FolderIcon className="w-10 h-10 text-indigo-600" />
            My Projects
          </h1>
          <Link href="/mixer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <PlusIcon className="w-5 h-5" />
            New Project
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(project => (
            <Link key={project.id} href="/mixer" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-full h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <FolderIcon className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{project.tracks} tracks</span>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{project.updated}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
