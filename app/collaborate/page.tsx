'use client';

import Link from 'next/link';
import { UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function CollaboratePage() {
  const collaborators = [
    { name: 'DJ Mike', role: 'Producer', projects: 3 },
    { name: 'Sarah Beats', role: 'Mixer', projects: 2 }
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
              <Link href="/collaborate" className="text-indigo-600 font-medium">Collaborate</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <UserGroupIcon className="w-10 h-10 text-indigo-600" />
            Collaborations
          </h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <PlusIcon className="w-5 h-5" />
            Invite Collaborator
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborators.map((collab, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {collab.name[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{collab.name}</h3>
                  <p className="text-gray-600">{collab.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{collab.projects} shared projects</p>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                View Projects
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
