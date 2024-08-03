import Image from "next/image";
import Link from 'next/link'
// import { useRouter } from 'next/navigation'// 客户端
// import { redirect } from 'next/navigation'

export default function Home() {
  // const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello next</h1>
      <div>
        Click{' '}
        <Link href="/about">
          here
        </Link>{' '}
        to read more
      </div>
      {/* <button type="button" onClick={() => redirect('/post')}>
        Dashboard
      </button> */}
    </main>
  );
}
