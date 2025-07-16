import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import GlobalSplineLoader from "@/components/GlobalSplineLoader";

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
        </ThemeProvider>
        {/* Add Botpress scripts for chat widget */}
        <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" defer></script>
        <script src="https://files.bpcontent.cloud/2025/07/16/08/20250716084418-W1PK5CL9.js" defer></script>
      </body>
    </html>
  )
}
