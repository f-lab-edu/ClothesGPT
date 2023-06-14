import User from '@/components/User';
import Link from '@node_modules/next/dist/client/link';


// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'


export default function Home() {

  return (
    <div>
      <div>this is main page</div>
      <Link style={{ textDecoration: 'underline' }} href={'/survey'}>click to go to survey</Link>
    </div>
  );
}
