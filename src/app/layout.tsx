import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michaela Trčková, personal website',
  description: 'Me and my work, all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          <div className="color-mesh-container">
            <section className="mesh-point"></section>
            <section className="mesh-point mesh-point-reversed"></section>
            <section className="mesh-point mesh-point-reversed"></section>
            <section className="mesh-point"></section>
          </div>
          <div className="content-container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
