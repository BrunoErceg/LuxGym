import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';
import CookiesProvider from '@/components/sections/CookiesProvider';

export const metadata: Metadata = {
  title: 'Lux Gym - Vaša omiljena Teretana u Šibeniku',
  description: 'Tvoja zona snage i energije',
  keywords: 'Gym,Teratana,Šibenik,Fitnes,Trening,Privatni Trener',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`antialiased`}>
        <CookiesProvider>
          <main>
            {children}
            <Footer />
          </main>
        </CookiesProvider>
      </body>
    </html>
  );
}
