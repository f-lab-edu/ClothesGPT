'use client';
import ReactQueryClientProvider from '@/components/context/QueryClientProvieder';
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className} center-body-content`}>
        <ReactQueryClientProvider>
          <>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
