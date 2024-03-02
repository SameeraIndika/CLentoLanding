import { Figtree } from 'next/font/google'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'


import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'CLentoLanding',
  description: 'CLentoLanding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <UserProvider>
            <ModalProvider />
            {children}
            <video
              src={require('./../public/bubble-bg.mp4')} 
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />
          </UserProvider>
      </body>
    </html>
  )
}
