import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import GlobalSplineLoader from "@/components/GlobalSplineLoader";
import CustomerSupportBubble from "@/components/CustomerSupportBubble";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chesapeake Project Management Solutions - CPMS",
  description:
    "We exist to uplift changemakers by providing operational excellence that frees creative minds to focus on their passion and purpose.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Removed Spline viewer script to avoid duplicates and incorrect versions */}
      </head>
      <body className={inter.className}>
        <GlobalSplineLoader />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <CustomerSupportBubble />
        </ThemeProvider>
      </body>
    </html>
  )
}
