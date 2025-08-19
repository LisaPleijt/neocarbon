export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* NeoCarbon Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #011C1E 0%, #02272A 50%, #0F3229 100%)'
      }} />
      
      {/* Bottom right radial glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px]" style={{
        background: 'radial-gradient(circle at center, rgba(26, 58, 45, 0.6) 0%, rgba(42, 106, 76, 0.4) 50%, transparent 100%)'
      }} />
      
      {/* Top center vignette - reduced opacity */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px]" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, transparent 70%)'
      }} />
      
      {/* Square Grid - Top layer (brighter) */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Square Grid - Bottom layer (darker) */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Neocarbon
            </div>
            <div className="flex items-center gap-4">
              <button className="px-3 py-2 text-white hover:bg-white/10 rounded">
                About
              </button>
              <button className="px-3 py-2 text-white hover:bg-white/10 rounded">
                Contact
              </button>
              <button className="px-3 py-2 text-white border border-white/20 hover:bg-white/10 rounded">
                GitHub
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to{' '}
              <span style={{
                background: 'linear-gradient(90deg, #34D399 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Neocarbon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium">
                Get Started →
              </button>
              <button className="px-8 py-3 text-white border border-white/30 hover:bg-white/10 rounded-lg">
                View Demo ↗
              </button>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Next.js 14
              </h3>
              <p className="text-slate-300">
                Built with the latest Next.js features including App Router and modern React patterns.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Tailwind CSS
              </h3>
              <p className="text-slate-300">
                Utility-first CSS framework for rapid UI development.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Vercel Ready
              </h3>
              <p className="text-slate-300">
                Optimized for deployment with modern web standards.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-white/10">
          <div className="text-center text-slate-300">
            <p>© 2024 Neocarbon. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
