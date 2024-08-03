'use client'
import { useRouter } from 'next/navigation'// 客户端


export default function Page() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello post</h1>
    </main>
  );
}
