import ChatBot from '@/modules/survey/components/ChatBot';
// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <ChatBot />
    </main>
  );
}
