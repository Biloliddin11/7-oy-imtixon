import { Rate } from 'antd'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Card = ({ product }) => {


	return (
		<div className='w-[168px] md:w-[250px] mx-auto'>
			<div className='w-[168px] md:w-[250px] group  mx-auto bg-[#FBFBFB] relative'>
				<div className='img w-full h-full'>
					<img src={`${product?.thumbnail}`} alt='' />
				</div>
				<div className='scale-0 group-hover:scale-100 duration-300 flex gap-[26px] absolute bottom-[8px] left-1/2 transform -translate-x-1/2'>
					<div className='w-[35px] h-[35px] bg-white rounded-[4px] flex items-center justify-center'><Heart  /></div>
					<div className='w-[35px] h-[35px] bg-white rounded-[4px] flex items-center justify-center'><ShoppingCart /></div>
					<div className='w-[35px] h-[35px] bg-white rounded-[4px] flex items-center justify-center'><Search /></div>		
				</div>

				
			</div>
			<div className='px-[5px] mt-[12px]'>
				<p className='text-[16px] leading-[16px]  h-[40px] text-[#3D3D3D] font-bold'>
					<Link href={`/product/${product?.id}`}>{product?.title}</Link>
				</p>
				<Rate allowHalf disabled={true} defaultValue={product?.rating}/>
				<p className='text-[#46A358] text-[18px] font-bold leading-[16px] mt-[7px]'>
					{product?.price}
				</p>
			</div>
		</div>
	)
}

export default Card
