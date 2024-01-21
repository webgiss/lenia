import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'
import 'semantic-ui-css/semantic.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lenia',
  description: 'Lenia',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  )
}
