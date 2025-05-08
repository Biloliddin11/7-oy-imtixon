import BuyNowSection from '@/app/Components/smartphone'
import { Rate } from 'antd'
import { Facebook, Heart, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import ProductImage from './image'
import TabsDescription from './tabs'
import Buy from './buy'

const ProductShop = async ({ params }) => {
	const { id } = await params

	const respons = await fetch(`https://dummyjson.com/products/${id}`)
	const data = await respons.json()
	console.log(data);
	
	return (
		<div className='max-w-[1200px] mx-auto px-[15px] mt-[36px]'>
			<div className='text-[#3D3D3D] mb-[43px]'>
				<Link className='font-bold' href={'/home'}>
					Home
				</Link>
				<span> / </span>
				<span>Shop</span>
			</div>

			<div className='flex flex-col md:flex-row md:justify-between'>
				<div className=''>
					<ProductImage images={data?.images} />
				</div>

				<div className=' lg:max-w-[574px]'>
					<div className='border-b-[1px] border-b-[#46A35880] pb-[13px] mb-[15px]'>
						<h2 className='font-bold text-[#3D3D3D] text-[28px] md:leading-[16px] mb-[21px]'>
							{data?.title}
						</h2>
						<div className='flex w-full justify-between items-center'>
							<p className='text-[#46A358] font-bold text-[22px] leading-[16px]'>
								${data?.price}
							</p>
							<div className='flex gap-[10px]  items-center text-[15px] text-[#3D3D3D] leading-[16px]'>
								<Rate allowHalf defaultValue={data?.rating} />
								<span>{data?.minimumOrderQuantity} Customer Review</span>
							</div>
						</div>
					</div>
					<p className='font-semibold text-[15px] leading-[16px] text-[#3D3D3D]'>
						Short Description:
					</p>
					<p className='font-normal text-[14px] text-wrap text-[#727272] leading-[24px] mt-[10px]'>
						{data?.description}
					</p>

					<div className='mt-[24px]'>
						<p className='mb-[11px] font-medium text-[15px] text-[#3D3D3D] leading-[16px]'>
							Size:
						</p>

						<div className=' gap-[10px] flex'>
							<div className='hover:text-[#46A358] border-[1px] duration-300 text-[#727272] border-[#EAEAEA] flex justify-center items-center text-[14px] leading-[16px] font-bold hover:border-[1px] hover:border-[#46A358] w-[28px] h-[28px] rounded-[50px]'>
								<p>S</p>
							</div>

							<div className='hover:text-[#46A358] border-[1px] duration-300 text-[#727272] border-[#EAEAEA] flex justify-center items-center text-[14px] leading-[16px] font-bold hover:border-[1px] hover:border-[#46A358] w-[28px] h-[28px] rounded-[50px]'>
								<p>M</p>
							</div>

							<div className='hover:text-[#46A358] border-[1px] duration-300 text-[#727272] border-[#EAEAEA] flex justify-center items-center text-[14px] leading-[16px] font-bold hover:border-[1px] hover:border-[#46A358] w-[28px] h-[28px] rounded-[50px]'>
								<p>L</p>
							</div>

							<div className='hover:text-[#46A358] border-[1px] duration-300 text-[#727272] border-[#EAEAEA] flex justify-center items-center text-[14px] leading-[16px] font-bold hover:border-[1px] hover:border-[#46A358] w-[28px] h-[28px] rounded-[50px]'>
								<p>XL</p>
							</div>
						</div>

						<Buy id={data.id}/>

						<div className='flex flex-col gap-[11px] mt-[26px]'>
							<p className='text-[#727272ca] text-[15px] leading-[16px] font-normal'>
								SKU: <span className='text-[#727272]'>{data?.sku}</span>
							</p>

							<p className='text-[#727272ca] text-[15px] leading-[16px] font-normal'>
								Cotegories:{' '}
								<span className='text-[#727272]'>{data?.category}</span>
							</p>

							<p className='text-[#727272ca] flex gap-[5px] text-[15px] leading-[16px] font-normal'>
								Tags:
								{data?.tags?.map((tag, index) => {
									return (
										<span className='text-[#727272] ' key={index}>
											{tag}
										</span>
									)
								})}
							</p>

							<p className='text-[#3D3D3D] font-bold text-[15px] leading-[16px] flex items-center gap-[15px]'>
								Share this products: <Facebook /> <Twitter /> <Linkedin />{' '}
								<Mail />
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='w-full mt-[92px]'>
				<TabsDescription description={data.description} />
			</div>

			<div className='md:hidden fixed bottom-0 left-0 right-0 z-50'>
				<BuyNowSection id={data.id} />
			</div>
		</div>
	)
}

export default ProductShop
