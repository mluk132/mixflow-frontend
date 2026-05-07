'use client';

import Link from 'next/link';
import { Cog6ToothIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';

export default function SettingsPage() {
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
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
              <Link href="/settings" className="text-indigo-600 font-medium">Settings</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Cog6ToothIcon className="w-10 h-10 text-indigo-600" />
          Settings
        </h1>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <UserIcon className="w-6 h-6 text-indigo-600" />
              Account Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Email</span>
                <span className="text-gray-900 font-medium">dj@example.com</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Password</span>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">Change</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BellIcon className="w-6 h-6 text-indigo-600" />
              Notifications
            </h2>
            <div className="space-y-4">
              {['New followers', 'Comments on tracks', 'Collaboration requests'].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">{item}</span>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
