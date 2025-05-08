'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ScanOutlined,
} from '@ant-design/icons'

import useAuthStore from '@/app/redux/OpenModalAuth/AuthSlice'


const HeaderSm = () => {
  const { authIsOpen, authIsOpenSet } = useAuthStore()
	const pathname = usePathname()


  const isScanActive = pathname === '/scan'
	return (
		<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white rounded-full shadow-lg px-6 py-4 flex justify-between items-center z-50">
      
      <div className="flex flex-1 justify-evenly gap-4">
        <Link href="/home">
          <div className="text-2xl text-gray-400">
            <HomeOutlined />
          </div>
        </Link>
        <Link href="/wishlist">
          <div className="text-2xl text-gray-400">
            <HeartOutlined />
          </div>
        </Link>
      </div>

      <div className="relative z-10 -mt-[40px]">
        <Link href="/scan">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border-4 border-white shadow-lg bg-green-500">
            <ScanOutlined className="text-white text-2xl" />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 justify-evenly gap-4">
        <Link href="/cart">
          <div className="text-2xl text-gray-400">
            <ShoppingCartOutlined />
          </div>
        </Link>
        <button onClick={authIsOpenSet} className="text-2xl text-gray-400">
          <UserOutlined />
        </button>
      </div>

    </div>
	)
}

export default HeaderSm