'use client';
import { IoSearch,} from 'react-icons/io5';

import NavLink from '@/app/hook/NavLink'
import useAuthStore from '@/app/redux/OpenModalAuth/AuthSlice'
import { LogIn, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import useNotificationMessage from '@/app/hook/useNotificationMessage/useNotificationMessage'
	const Context = React.createContext({ name: 'Default' })


const HeaderMD = () => {
	const { authIsOpen, authIsOpenSet } = useAuthStore()
	const { openNotification, contextHolder } = useNotificationMessage()

	return (
		<header className='max-w-[1200px] mx-auto'>
			<Context.Provider value={openNotification}>{contextHolder}</Context.Provider>
			<nav className='flex justify-between h-[78px] w-full px-[10px] items-center border-b-[#46A35880] border-b-[1px]'>
				<div className='logo'>
					
					<a
            href=""
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 hover:from-pink-600 hover:to-blue-400 transition duration-300 ease-in-out transform hover:scale-115"
          >
            Big Market
          </a>
				</div>
				<ul className='items-center md:gap-[25px] gap-[10px] lg:gap-[50px]  text-[#3D3D3D] font-normal leading-[100%] text-[16px] h-full flex'>
					<li>
						<NavLink href={'/home'}>Home</NavLink>
					</li>
					<li>
						<NavLink href={'/blog'}>Blog</NavLink>
					</li>
				</ul>

				<ul className='flex gap-[30px] items-center '>
					<li>
					
					<form action="" className="bg-transparent p-4 rounded-lg flex items-center space-x-0">
							  <input
								type="text"
								placeholder="Search"
								className="w-full p-2 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-500 ease-in-out"
								onChange={(e) => setSearch(e.target.value)}
								onBlur={() => setSearch('')}
							  />
							  <button type="button" className="p-2 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition duration-500 ease-in-out">
								<IoSearch size={24} />
							  </button>
							</form>
						
					
					</li>
					<li>
						<Link href={'/'}>
							<ShoppingCart />
						</Link>
					</li>
					<li>
						<button
							className='bg-[#46A358] px-[19px] font-medium text-[16px] py-[10px] text-white flex gap-[5px] text-bold rounded-[6px]'
							onClick={authIsOpenSet}
						>
							<LogIn /> Login
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default HeaderMD
