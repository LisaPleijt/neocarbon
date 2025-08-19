import { Button } from '@/components/ui'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            Neocarbon
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Neocarbon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Next.js 15
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Built with the latest Next.js features including App Router and Turbopack.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Tailwind CSS
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Utility-first CSS framework for rapid UI development.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Vercel Ready
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Optimized for deployment with Vercel Analytics and Speed Insights.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-slate-200 dark:border-slate-700">
        <div className="text-center text-slate-600 dark:text-slate-400">
          <p>© 2024 Neocarbon. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
