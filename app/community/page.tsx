'use client';

import Link from 'next/link';
import { UserGroupIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function CommunityPage() {
  const posts = [
    { id: 1, user: 'DJ Mike', content: 'Just dropped a new beat! Check it out 🔥', likes: 45, comments: 12, time: '2h ago' },
    { id: 2, user: 'Producer Sarah', content: 'Looking for collaborators on a hip hop project', likes: 23, comments: 8, time: '5h ago' },
    { id: 3, user: 'Beat Maker', content: 'New tutorial on mixing vocals coming soon!', likes: 67, comments: 15, time: '1d ago' }
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
              <Link href="/community" className="text-indigo-600 font-medium">Community</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <UserGroupIcon className="w-10 h-10 text-indigo-600" />
          Producer Community
        </h1>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <textarea
            placeholder="Share with the community..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 mb-4"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            Post
          </button>
        </div>

        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {post.user[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{post.user}</h3>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <HeartIcon className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
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
