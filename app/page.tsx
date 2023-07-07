'use client';
import User from '@/src/components/User';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <User />
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </main>
    </QueryClientProvider>
  );
}
