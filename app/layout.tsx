'use client';

import ReactQueryClientProvider from '@/components/context/QueryClientProvieder';
import './globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Inter } from 'next/font/google';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className} center-body-content`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           <ReactQueryClientProvider>
          <>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </>
        </ReactQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



