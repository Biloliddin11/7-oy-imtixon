import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
	return (
		<div className='bg-[#46A3581A] w-full min-h-[88px] py-[50px] md:py-0 gap-y-[20px] flex-col md:flex-row  flex items-center px-[23px] justify-between'>
				<div className="">
						logo
				</div>
				<p className='flex items-center gap-[13px] text-[#3D3D3D] text-[14px] leading-[22px]'>
					<MapPin className='text-[#46A358]' />70 West Buckingham Ave. Farmingdale, NY 11735
				</p>
				<p className='flex items-center gap-[13px] text-[#3D3D3D] text-[14px] leading-[22px]'>
					<Mail className='text-[#46A358]' /> contact@greenshop.com
				</p>
				<p className='flex items-center gap-[13px] text-[#3D3D3D] text-[14px] leading-[22px]'>
				<Phone className='text-[#46A358]' />+88 01911 717 490</p>
		</div>
	)
}

export default Contact