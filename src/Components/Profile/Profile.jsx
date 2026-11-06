
const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-slate-800 font-sans antialiased">
      
      {/* Cover Banner */}
      <div className="h-48 md:h-64 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 relative" />

      {/* Profile Header Section */}
      <div className="px-6 pb-6 pt-0 relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-20 sm:-mt-16 mb-6">
          
          {/* Avatar & User Info */}
          <div className="flex items-end space-x-5">
            <img
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
              alt="User Avatar"
            />
            <div className="mb-1">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-slate-900">Sophia Martinez</h1>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
                  Pro
                </span>
              </div>
              <p className="text-sm text-slate-500">@sophiamartinez</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button type="button" className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-xl transition shadow-sm">
              Share Profile
            </button>
            <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition shadow-sm">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-2xl mb-6">
          <p className="text-slate-600 text-sm leading-relaxed">
            Full-stack developer & UI/UX enthusiast. Passionate about building scalable web applications, clean code architecture, and delightful user experiences. Coffee lover ☕ & open-source contributor.
          </p>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-500 mb-6">
          <div className="flex items-center space-x-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <a href="#website" className="text-indigo-600 hover:underline">
              sophiamartinez.dev
            </a>
          </div>
          <div className="flex items-center space-x-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Joined October 2023</span>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-3 gap-4 py-4 px-6 bg-slate-50 border border-slate-100 rounded-2xl mb-6">
          <div className="text-center sm:text-left">
            <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">Projects</span>
            <span className="text-lg font-bold text-slate-900">38</span>
          </div>
          <div className="text-center sm:text-left border-x border-slate-200 px-4">
            <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">Followers</span>
            <span className="text-lg font-bold text-slate-900">2,450</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">Following</span>
            <span className="text-lg font-bold text-slate-900">410</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-slate-200 mb-6">
          <nav className="flex space-x-8">
            <button type="button" className="pb-3 border-b-2 border-indigo-600 font-semibold text-sm text-indigo-600">
              Overview
            </button>
            <button type="button" className="pb-3 border-b-2 border-transparent font-medium text-sm text-slate-500 hover:text-slate-700">
              Repositories
            </button>
            <button type="button" className="pb-3 border-b-2 border-transparent font-medium text-sm text-slate-500 hover:text-slate-700">
              Activity
            </button>
            <button type="button" className="pb-3 border-b-2 border-transparent font-medium text-sm text-slate-500 hover:text-slate-700">
              Settings
            </button>
          </nav>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 transition shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-800 text-sm">TaskFlow Dashboard</h3>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Public</span>
            </div>
            <p className="text-slate-500 text-xs mb-3 line-clamp-2">
              A real-time task management system built with React, Tailwind CSS, and Node.js backend integration.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>React</span>
              </span>
              <span>•</span>
              <span>Updated 2 days ago</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 transition shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-800 text-sm">CloudPulse API Gateway</h3>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Public</span>
            </div>
            <p className="text-slate-500 text-xs mb-3 line-clamp-2">
              High-performance microservices API gateway handling authentication, rate limiting, and request proxying.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Node.js</span>
              </span>
              <span>•</span>
              <span>Updated last week</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile