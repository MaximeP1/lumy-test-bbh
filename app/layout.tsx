import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Navmenu from '@/components/Navbar';
import { Providers } from './provider';
import FooterMenu from '@/components/FooterMenu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BBH | Accueil',
  description: 'Découvrez toute l\'action et la passion du Brest Bretagne Handball grâce à notre sélection de vidéos exclusives.'
    + 'Revivez les plus grands moments, les matches épiques et suivez l\'évolution de votre équipe préférée.' 
    + 'Accédez à une collection complète de vidéos captivantes pour rester connecté au cœur de l\'univers du handball avec le BBH.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} dark bg-black min-h-screen`}>
        <Providers>
          <Navmenu />
          {children}
          <FooterMenu />
        </Providers>
      </body>
    </html>
  )
}
