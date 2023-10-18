import AppState from '@/context/AppContext';
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Video Conferencing App | Livekit',
  description: 'A simple to use video conferencing application using an open source tool know as LiveKit.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppState>{children}</AppState>
      </body>
    </html>
  )
}
