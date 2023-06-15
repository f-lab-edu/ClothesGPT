import User from '@/components/User';

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <User />
    </main>
  );
}
