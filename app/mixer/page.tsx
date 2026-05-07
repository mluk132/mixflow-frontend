'use client';

import Link from 'next/link';
import { AdjustmentsHorizontalIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';

export default function MixerPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mixflow
            </Link>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Save Project
              </button>
              <Link href="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="bg-gray-800 rounded-2xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              <AdjustmentsHorizontalIcon className="w-8 h-8 text-indigo-400" />
              Audio Mixer
            </h1>
            <div className="flex items-center gap-3">
              <button className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                <PlayIcon className="w-6 h-6 text-white" />
              </button>
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <PauseIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((track) => (
              <div key={track} className="bg-gray-700 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-4">Track {track}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Volume</label>
                    <input type="range" className="w-full" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Pan</label>
                    <input type="range" className="w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Timeline</h2>
          <div className="h-32 bg-gray-700 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Waveform visualization</p>
          </div>
        </div>
      </main>
    </div>
  );
}
