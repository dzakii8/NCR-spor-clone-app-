import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isLogin: any = cookies().get('Authorization')?.value

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLogin?
          <Navbar isLogin={true} />:
          <Navbar isLogin={false} />
        }
        {children}
      </body>
    </html>
  )
}