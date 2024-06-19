import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

import Nav from './components/Navbar';


// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evan Gordon',
  description: ' Frontend developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
       {children}
   
        </Providers>
      </body>
    </html>
  );
}
