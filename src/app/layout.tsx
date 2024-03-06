import type { Metadata } from 'next';
import { Raleway, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import cn from 'classnames';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

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
    <html lang="en" className={cn(raleway.variable, poppins.variable)}>
      <body className={raleway.className}>
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
