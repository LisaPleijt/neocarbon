import { Button } from '@/components/ui'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* NeoCarbon Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neocarbon-dark-teal via-neocarbon-mid-teal to-neocarbon-green-teal" />
      
      {/* Bottom right radial glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-neocarbon-glow-start via-neocarbon-glow-end to-transparent opacity-60" />
      
      {/* Top center vignette */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-black via-transparent to-transparent opacity-20" />
      
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
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                About
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Contact
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Neocarbon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Demo
              </Button>
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
                Next.js 15
              </h3>
              <p className="text-slate-300">
                Built with the latest Next.js features including App Router and Turbopack.
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
                Optimized for deployment with Vercel Analytics and Speed Insights.
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
