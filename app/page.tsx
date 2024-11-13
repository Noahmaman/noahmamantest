"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Lock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  const handleScroll = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen gradient-bg">
      <header className="container mx-auto px-6 py-8">
        <Navbar />
      </header>

      <main>
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business
              <br />
              <span className="text-purple-200">with Modern Solutions</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Streamline your operations, enhance team collaboration, and drive growth
              with our comprehensive SaaS platform.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-purple-50"
                onClick={() => handleScroll("pricing")}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
                onClick={() => handleScroll("cta")}
              >
                Schedule Demo
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link href="/features/analytics" className="block">
              <div className="glass-card rounded-xl p-6 transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get deep insights into your business performance with real-time analytics and custom reports.
                </p>
              </div>
            </Link>

            <Link href="/features/collaboration" className="block">
              <div className="glass-card rounded-xl p-6 transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work seamlessly with your team using our integrated collaboration tools and workspaces.
                </p>
              </div>
            </Link>

            <Link href="/features/security" className="block">
              <div className="glass-card rounded-xl p-6 transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rest easy with our enterprise-grade security features and compliance standards.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}