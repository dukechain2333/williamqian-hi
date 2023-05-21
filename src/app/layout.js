import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello from William Qian',
  description: "Hi, my name is William Qian, and this is my welcome page. On this page you can find my introduction, my blog, and my projects from GitHub. Hope you enjoy my website!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full bg-gradient-to-tl from-black to-red-950">{children}</body>
    </html>
  )
}
