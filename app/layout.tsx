import { PropsWithChildren } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { SearchBar } from '@/components/SearchBar';
import logo from '@/public/logo_sm.png';
import Image from 'next/image';
import Link from 'next/link';

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
      <body className={inter.className}>
        <header className="flex w-full items-center p-3">
          <Link href={'/'}>
            <Image src={logo} alt="logo" height={35} />
          </Link>
          <SearchBar className="w-5/6 ml-10" />
        </header>
        {children}
      </body>
    </html>
  );
}
