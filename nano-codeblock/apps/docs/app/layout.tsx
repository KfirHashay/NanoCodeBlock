import React from 'react';
import { Layout } from '@nano-codeblock/ui';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NanoCodeBlock Docs'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
