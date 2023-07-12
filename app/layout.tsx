import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import './globals.scss';
import { ImagesContextProvider } from '@/context/ImagesContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NCI | No Copyright Images',
  description: `NCI | No Copyright Images - Tired of searching copyright free images from diffrent websites? Try
  using NCI which searches copyright free images from across the
  popular platforms and shows you the results in a single platform.`,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/nextjs_logo.png" type="images/png" />
      </head>
      <body className={inter.className}>
        <ImagesContextProvider>{children}</ImagesContextProvider>
        <Footer />
      </body>
    </html>
  );
}
