"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X, Moon, Sun, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const portfolioItems = [
    {
      title: "E-Commerce Storefront",
      category: "E-Commerce",
      description: "A modern online store with product catalog, shopping cart, and secure checkout functionality.",
      image: "/images/portfolio/ecommerce-store.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Stripe"],
      tier: "Premium",
    },
    {
      title: "Local Restaurant Website",
      category: "Restaurant & Food",
      description: "Elegant restaurant website featuring online menu, reservations, and location information.",
      image: "/images/portfolio/restaurant-website.jpg",
      technologies: ["React", "Responsive Design", "Google Maps"],
      tier: "Business",
    },
    {
      title: "Professional Services Firm",
      category: "Professional Services",
      description: "Corporate website for a law firm with team profiles, practice areas, and contact forms.",
      image: "/images/portfolio/law-firm-website.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Contact Forms"],
      tier: "Premium",
    },
    {
      title: "Creative Portfolio & Blog",
      category: "Portfolio",
      description: "Personal portfolio site for a designer showcasing work, blog posts, and professional journey.",
      image: "/images/portfolio/portfolio-blog.jpg",
      technologies: ["React", "CMS Integration", "SEO Optimized"],
      tier: "Business",
    },
    {
      title: "Nonprofit Organization",
      category: "Nonprofit",
      description: "Mission-driven website with donation integration, volunteer signup, and impact storytelling.",
      image: "/images/portfolio/nonprofit-website.jpg",
      technologies: ["Next.js", "Donation Integration", "Accessibility"],
      tier: "Business",
    },
    {
      title: "SaaS Product Landing Page",
      category: "Technology",
      description: "High-converting landing page for a software product with features, pricing, and testimonials.",
      image: "/images/portfolio/saas-landing.jpg",
      technologies: ["Next.js", "Animations", "Lead Capture"],
      tier: "Premium",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              C
            </div>
            <span>CPMS</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild className="rounded-full">
              <Link href="/contact">
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="/services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/portfolio" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/about" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Our Work
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Website Development Portfolio</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explore our collection of custom-built websites. Each project showcases our commitment to quality
                design, functionality, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="w-full pb-12">
          <div className="container px-4 md:px-6">
            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mb-2">Website Development Services</h2>
              <p className="text-muted-foreground mb-4">
                Custom websites starting from <span className="font-bold text-foreground">$200 - $750</span> based on
                project scope and requirements.
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/pricing">
                  View Pricing Details
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg group">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge
                          className={`${item.tier === "Premium" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                        >
                          {item.tier}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your website needs and create something amazing together. Schedule a free consultation to
                get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  C
                </div>
                <span>CPMS</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Professional management solutions and consulting services to optimize your business operations.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Strategic Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Website Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} CPMS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
