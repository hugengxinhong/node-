'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname
  console.log(usePathname)
  console.log(pathname)
  return (
    <ul>
      <li className={pathname === '/overview/page1' ? 'active' : ''}>
        <Link href="/overview/page1">page1</Link>
      </li>
      <li className={pathname === '/overview/page2' ? 'active' : ''}>
        <Link href="/overview/page2">page2</Link>
      </li>
    </ul>
  )
}
