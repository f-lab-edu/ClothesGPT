import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'clothes gpt',
  description:
    'Clothes GPT is an innovative mobile application that revolutionizes the way you discover and shop for clothes. It utilizes advanced artificial intelligence and machine learning algorithms to provide personalized clothing recommendations tailored to your unique style preferences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className} center-body-content`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
