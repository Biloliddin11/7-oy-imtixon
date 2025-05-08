import Link from 'next/link'
import React from 'react'

const Cotegory = async ({categories}) => {
	const respons = await fetch('https://dummyjson.com/products/categories')
	const data = await respons.json()


	
	return (
		<div className=''>
			<h2 className='text-[#3D3D3D] text-[16px] font-bold'>
					Categories
			</h2>
			<ul className='mt-[8px]  pl-[12px]'>
				{
					data?.map(({name , slug})=>(
					<li key={slug} className={`${categories == slug ? "text-[#46A358] font-bold" : "font-normal"} hover:text-[#46A358] leading-[40px] text-[15px]  text-[#3D3D3D] duration-[0.3s] hover:font-bold`} >
						<Link href={`?category=${slug}`} scroll={false}>
							{name}
						</Link>
						
					</li>))
				}
			</ul>
		</div>
	)
}

export default Cotegory
