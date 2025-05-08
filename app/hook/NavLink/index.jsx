'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={` pb-[28px] ${isActive ? 'text-[#46A358] border-b-[4px] ' : ''}`}>
      {children}
    </Link>
  )
}
