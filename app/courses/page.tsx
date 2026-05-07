'use client';

import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/outline';

export default function CoursesPage() {
  const courses = [
    { title: 'Complete Mixing Masterclass', lessons: 24, duration: '8 hours', students: '5K', price: '$99' },
    { title: 'Music Production Fundamentals', lessons: 18, duration: '6 hours', students: '8K', price: '$79' },
    { title: 'Advanced Mastering', lessons: 12, duration: '4 hours', students: '3K', price: '$129' }
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
              <Link href="/tutorials" className="text-gray-600 hover:text-indigo-600 transition-colors">Tutorials</Link>
              <Link href="/courses" className="text-indigo-600 font-medium">Courses</Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <BookOpenIcon className="w-10 h-10 text-indigo-600" />
          Professional Courses
        </h1>
        <p className="text-gray-600 mb-8">Comprehensive courses to master music production</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-full h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <BookOpenIcon className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">{course.lessons} lessons • {course.duration}</p>
                <p className="text-sm text-gray-600">{course.students} students enrolled</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">{course.price}</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
