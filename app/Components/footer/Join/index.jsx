import React from 'react'

import { Button, Input, Space } from 'antd'
const Join = () => {
	return (
		<div className='flex px-[23px] py-[25px] bg-[#FBFBFB] flex-col lg:flex-row  gap-[37px]'>
			<div className='flex flex-col md:flex-row gap-y-[40px]'>
				<div className='card1 md:border-r-[1px] w-full md:w-[238px] md:pr-[34px] md:border-r-[#46A3581A] border-b-[1px] border-b-[#46a359] md:border-b-0 pb-[20px] md:pb-0'>
					<div className='img '>
						<img src='join1.svg' alt='' />
					</div>
					<div className=''>
						<h2 className='text-[#3D3D3D] text-[17px] leading-[16px] mb-[9px] mt-[16px] font-bold'>
							Garden Care
						</h2>
						<p className='text-[#727272] text-[16px] leading-[22px]'>
							We are an online plant shop offering a wide range of cheap and
							trendy plants.
						</p>
					</div>
				</div>

				<div className='card2 md:border-r-[1px] md:pl-[27px] w-full md:w-[238px] md:pr-[34px] md:border-r-[#46A3581A] border-b-[#46a359] md:border-b-0 pb-[20px] md:pb-0'>
					<div className='img '>
						<img src='join1.svg' alt='' />
					</div>
					<div className=''>
						<h2 className='text-[#3D3D3D] text-[17px] leading-[16px] mb-[9px] mt-[16px] font-bold'>
							Plant Renovation
						</h2>
						<p className='text-[#727272] text-[16px] leading-[22px]'>
							We are an online plant shop offering a wide range of cheap and
							trendy plants.
						</p>
					</div>
				</div>

				<div className='card3 md:pl-[27px] w-full md:w-[238px] pb-[20px] md:pb-0'>
					<div className='img '>
						<img src='join2.svg' alt='' />
					</div>
					<div className=''>
						<h2 className='text-[#3D3D3D] text-[17px] leading-[16px] mb-[9px] mt-[16px] font-bold'>
							Watering Graden
						</h2>
						<p className='text-[#727272] text-[16px] leading-[22px]'>
							We are an online plant shop offering a wide range of cheap and
							trendy plants.
						</p>
					</div>
				</div>
			</div>

			<div className='w-full mt-[12px]'>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[16px] '>
					Would you like to join newsletters?
				</h2>

				<div className='flex w-full h-[40px] text-[#ACACAC] mt-[18px] mb-[18px]'>
					<Input
						style={{ color: '#ACACAC' }}
						defaultValue='enter your email address...'
					/>
					<Button
						type='primary'
						style={{ height: '100%', backgroundColor: '#46A358' }}
					>
						Join
					</Button>
				</div>
				<p className='text-[#727272] text-[13px] leading-[22px]'>
					We usually post offers and challenges in newsletter. We’re your online
					houseplant destination. We offer a wide range of houseplants and
					accessories shipped directly from our (green)house to yours!
				</p>
			</div>

		</div>
	)
}

export default Join
