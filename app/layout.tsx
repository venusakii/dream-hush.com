import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Updated fonts to Inter and Playfair Display for sleep-focused aesthetic
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for Dream Hush
  title: "Dream Hush - Premium Sleep Sound Machines",
  description:
    "Transform your nights with precision-engineered white noise machines designed for deeper, more restorative sleep",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
