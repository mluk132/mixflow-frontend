'use client';

import Link from 'next/link';
import { 
  MusicalNoteIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      icon: MusicalNoteIcon,
      title: 'Professional Mixer',
      description: 'Industry-standard audio mixing tools in your browser'
    },
    {
      icon: SparklesIcon,
      title: 'Effects Library',
      description: 'Hundreds of professional effects and plugins'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborate',
      description: 'Work with producers worldwide in real-time'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learn & Grow',
      description: 'Tutorials and courses from industry professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mixflow
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/mixer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Mixer
              </Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Community
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                Start Creating
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Create Professional
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Music Mixes
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The ultimate online audio mixing platform for producers, DJs, and musicians. Mix, master, and share your tracks with the world.
              </p>
              <div className="flex gap-4">
                <Link href="/mixer" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg">
                  Open Mixer
                </Link>
                <Link href="/tutorials" className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl hover:bg-indigo-50 transition-all font-semibold text-lg">
                  Watch Tutorials
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg"></div>
                        <div className="flex-1 h-8 bg-gray-800 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100K+', label: 'Producers' },
              { value: '1M+', label: 'Tracks Mixed' },
              { value: '500+', label: 'Effects' },
              { value: '50K+', label: 'Samples' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Create
            </h2>
            <p className="text-xl text-gray-600">
              Professional tools for professional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl w-fit mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Next Hit?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of producers creating amazing music with Mixflow
          </p>
          <Link href="/register" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mixflow</h3>
              <p className="text-gray-400">Professional audio mixing for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/mixer" className="block text-gray-400 hover:text-white transition-colors">Mixer</Link>
                <Link href="/effects" className="block text-gray-400 hover:text-white transition-colors">Effects</Link>
                <Link href="/samples" className="block text-gray-400 hover:text-white transition-colors">Samples</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <div className="space-y-2">
                <Link href="/tutorials" className="block text-gray-400 hover:text-white transition-colors">Tutorials</Link>
                <Link href="/courses" className="block text-gray-400 hover:text-white transition-colors">Courses</Link>
                <Link href="/community" className="block text-gray-400 hover:text-white transition-colors">Community</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Mixflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
