import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import LloydBot from '../components/LloydBot';

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
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.29/build/spline-viewer.js"
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <LloydBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
