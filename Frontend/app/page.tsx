'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/feature-card'
import { StatCard } from '@/components/stat-card'
import { BookOpen, Zap, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 glass z-50 border-b border-primary/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text animate-slide-in-down">RAVYA</div>
          <div className="flex gap-4">
            <Link href="/signin">
              <Button variant="ghost" className="transition-smooth hover:text-primary">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all hover:-translate-y-1 text-white border-0">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient-shift" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <div className="animate-slide-in-up mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Empowering <span className="gradient-text">Youth & Women</span> Entrepreneurs Digitally
            </h1>
          </div>
          <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Unlock digital literacy, access mentorship, and discover financial opportunities. Build your entrepreneurial dreams with RAVYA.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all hover:-translate-y-2 text-white border-0">
                Get Started
              </Button>
            </Link>
            <Link href="/register?role=mentor">
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 transition-all hover:-translate-y-2">
                Join as Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Path to Success
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <FeatureCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Learn"
                description="Access digital training modules designed for rural entrepreneurs with flexible, accessible content."
              />
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Build"
                description="Explore funding opportunities, access financial tools, and showcase your business ideas on our platform."
              />
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="Connect"
                description="Network with mentors, get personalized guidance, and build meaningful professional relationships."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 animate-gradient-shift" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Proven Impact
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <StatCard
                statistic="83%"
                description="Digital literacy improvement"
              />
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <StatCard
                statistic="56%"
                description="Mentorship participation"
              />
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <StatCard
                statistic="70%"
                description="Training completion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent animate-gradient-shift" />
        <div className="absolute -top-40 right-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl opacity-30 animate-float" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Join thousands of entrepreneurs building their dreams with RAVYA.
            </p>
          </div>
          <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:shadow-2xl transition-all hover:-translate-y-2 text-white border-0 px-8">
                Start Your Journey Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-transparent to-primary/5 py-12 border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 RAVYA. Empowering entrepreneurs worldwide.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce-soft" />
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce-soft" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce-soft" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </footer>
    </div>
  )
}
