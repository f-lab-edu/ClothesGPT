'use client';

import React from 'react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function ReactQueryClientProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (query.meta && query.meta.errorMessage) {
          console.error('error', error);
          console.error('query.meta.errorMessage', query.meta.errorMessage);
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryClientProvider;
