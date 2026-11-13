import React from 'react'

const About = () => {

    const stats = [
    { label: 'Books Delivered', value: '50K+' },
    { label: 'Active Readers', value: '12K+' },
    { label: 'Partner Bookstores', value: '85+' },
    { label: 'City Hubs', value: '24' },
  ];

  const features = [
    {
      title: 'Lightning-Fast Delivery',
      description: 'From local independent shelves straight to your doorstep in hours, not days.',
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Curated for Book Lovers',
      description: 'Handpicked recommendations, rare editions, and bestsellers tailored to your reading taste.',
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Packaging',
      description: 'Eco-friendly, plastic-free wrapping that protects your precious paperbacks while protecting the planet.',
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
<div className="relative overflow-hidden bg-linear-to-b from-stone-50 
via-amber-100 to-stone-300 py-24 px-4 sm:px-6 lg:px-8 rounded-2xl mt-10">
      {/* Decorative Background Blur Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            About Book Courier
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Bridging the gap between <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">readers</span> and <span className="bg-linear-to-r from-stone-800 to-amber-900 bg-clip-text text-transparent">stories</span>.
          </h2>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed">
            We believe that the magic of turning a physical page shouldn't be delayed by slow logistics. Book Courier was born out of a profound love for literature and a commitment to supporting local indie bookstores.
          </p>
        </div>

        {/* Story Grid / Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-amber-900 group">
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-950/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop" 
                alt="Cozy bookstore atmosphere" 
                className="w-full h-105 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Our Mission</span>
                <p className="text-xl font-semibold mt-1">"Delivering worlds, one package at a time."</p>
              </div>
            </div>
            {/* Floating Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden sm:block max-w-xs z-30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                  📖
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">Indie Bookstore Ally</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Empowering community shops globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content / Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Why book lovers choose us over traditional delivery
              </h3>
              <p className="text-stone-600 text-base leading-relaxed">
                Standard delivery services throw books around like boxes of machine parts. At Book Courier, our handlers treat every single spine, cover, and page with the reverence it deserves.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-stone-100/80 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-lg bg-amber-50 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-semibold text-lg">{feature.title}</h4>
                    <p className="text-stone-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 shadow-xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-stone-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About