"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ChevronRight, Menu, X, Moon, Sun, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function PricingPage() {
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
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
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
                Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Transparent, Value-Driven Pricing</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Invest in operational excellence that frees your creative mind to focus on your passion and purpose.
                Choose the service package that best supports your visionary ideas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="consulting" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="consulting" className="rounded-full px-6">
                      Consulting
                    </TabsTrigger>
                    <TabsTrigger value="project" className="rounded-full px-6">
                      Project Management
                    </TabsTrigger>
                    <TabsTrigger value="website" className="rounded-full px-6">
                      Website Development
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="consulting">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {[
                      {
                        name: "Strategic Review",
                        price: "",
                        period: "",
                        description: "Comprehensive business analysis and strategic recommendations.",
                        features: [
                          "Business assessment",
                          "Strategic roadmap",
                          "Risk analysis",
                          "Implementation plan",
                          "Follow-up session",
                        ],
                        cta: "Contact Sales",
                      },
                      {
                        name: "Ongoing Advisory",
                        price: "",
                        period: "",
                        description: "Continuous strategic guidance and operational support.",
                        features: [
                          "Monthly strategy sessions",
                          "Quarterly reviews",
                          "Process optimization",
                          "Team training",
                          "24/7 email support",
                          "Performance tracking",
                        ],
                        cta: "Contact Sales",
                        popular: true,
                      },
                      {
                        name: "Enterprise Partnership",
                        price: "",
                        period: "",
                        description: "Full-scale transformation and ongoing partnership.",
                        features: [
                          "Dedicated team",
                          "Custom solutions",
                          "Executive coaching",
                          "Change management",
                          "Priority support",
                          "Quarterly business reviews",
                        ],
                        cta: "Contact Sales",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40"} bg-gradient-to-b from-background to-muted/10`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted-foreground mb-6">{plan.description}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              asChild
                              className="w-full rounded-full"
                              variant={plan.popular ? "default" : "outline"}
                            >
                              <Link href="/contact">{plan.cta}</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="project">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {[
                      {
                        name: "Project Kickstart",
                        price: "$10,000",
                        period: "project",
                        description: "Complete project setup and initial management phase.",
                        features: [
                          "Project planning",
                          "Team setup",
                          "Risk assessment",
                          "First milestone delivery",
                          "30-day support",
                        ],
                        cta: "Contact Sales",
                      },
                      {
                        name: "Full Project Management",
                        price: "",
                        period: "project",
                        description: "End-to-end project management from start to finish.",
                        features: [
                          "Complete project oversight",
                          "Resource management",
                          "Quality assurance",
                          "Stakeholder communication",
                          "Post-project review",
                          "90-day warranty",
                        ],
                        cta: "Contact Sales",
                        popular: true,
                      },
                      {
                        name: "Program Management",
                        price: "Custom",
                        period: "program",
                        description: "Multi-project program management and coordination.",
                        features: [
                          "Multiple project coordination",
                          "Portfolio management",
                          "Executive reporting",
                          "Change management",
                          "Continuous improvement",
                          "Dedicated program manager",
                        ],
                        cta: "Contact Sales",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40"} bg-gradient-to-b from-background to-muted/10`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted-foreground mb-6">{plan.description}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              asChild
                              className="w-full rounded-full"
                              variant={plan.popular ? "default" : "outline"}
                            >
                              <Link href="/contact">{plan.cta}</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="website">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {[
                      {
                        name: "Basic Website",
                        price: "$200 - $350",
                        period: "per project",
                        description: "Perfect for personal sites, portfolios, or simple business landing pages.",
                        features: [
                          "Up to 3 pages",
                          "Mobile responsive design",
                          "Contact form integration",
                          "Basic SEO setup",
                          "1 revision round",
                        ],
                        cta: "Get Started",
                      },
                      {
                        name: "Business Website",
                        price: "$350 - $550",
                        period: "per project",
                        description: "Professional websites for small to medium businesses with more functionality.",
                        features: [
                          "Up to 7 pages",
                          "Custom design",
                          "Mobile responsive",
                          "Contact & lead forms",
                          "Social media integration",
                          "2 revision rounds",
                        ],
                        cta: "Get Started",
                        popular: true,
                      },
                      {
                        name: "Premium Website",
                        price: "$550 - $750",
                        period: "per project",
                        description: "Advanced websites with custom features and ongoing support.",
                        features: [
                          "Up to 12 pages",
                          "Custom design & branding",
                          "Advanced functionality",
                          "CMS integration",
                          "E-commerce ready",
                          "3 revision rounds",
                          "30-day support",
                        ],
                        cta: "Get Started",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40"} bg-gradient-to-b from-background to-muted/10`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="mb-2">
                              <span className="text-3xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                            </div>
                            <p className="text-muted-foreground mb-6">{plan.description}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              asChild
                              className="w-full rounded-full"
                              variant={plan.popular ? "default" : "outline"}
                            >
                              <Link href="/contact">{plan.cta}</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-center text-muted-foreground mt-8">
                    Final pricing determined during consultation based on specific requirements and complexity.
                  </p>
                </TabsContent>
              </Tabs>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business is unique. Let's discuss a tailored approach that fits your specific requirements and
                budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                  <Link href="/services">View Services</Link>
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
