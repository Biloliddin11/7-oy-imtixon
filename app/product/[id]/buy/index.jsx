'use client'
import useNotificationMessage from '@/app/hook/useNotificationMessage/useNotificationMessage'
import useMessageStore from '@/app/redux/massege/messege'
import axios from 'axios'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

const Buy = ({id}) => {

	const [quantity , setQuantity] = useState(1)
	const { message, setMessage } = useMessageStore();
	const { openNotification, contextHolder } = useNotificationMessage();
 
	 const addShopCat = async () =>{
		 try{
			 const respons = await axios.post('https://dummyjson.com/carts/add', {
				 userId: 1,
				 products: [
					 {
						 id,
						 quantity,
					 },
				 ]
			 })
			 setMessage('Add Cart Success', 'Success');
			 
		 }catch (error) {
			 setMessage(error.message, 'Error');
		 }
		 
	 }

	return (
		<div>
			<div className='hidden mt-[23px] md:flex gap-[26px]'>
							<div className='flex items-center w-[119px] justify-between'>
								<button className='bg-[#46A358] rounded-[50%] h-[33px] w-[33px] text-white text-[18px]' onClick={()=>{setQuantity(quantity === 0 ? 0 : quantity - 1)}}>
									-
								</button>
								<p>{quantity}</p>
								<button className='bg-[#46A358] rounded-[50%] h-[33px] w-[33px] text-white text-[18px]' onClick={()=>{setQuantity(quantity+1)}}>
									+
								</button>
							</div>

							<div className='flex gap-[10px] items-center'>
								<button className='font-bold hover:text-[#46A358] hover:bg-white w-[130px] h-[40px] bg-[#46A358] text-white rounded-[6px] border-[#46A358] border-[1px] duration-300'>
									Buy NOW
								</button>

								<button className='font-bold w-[130px] h-[40px] hover:bg-[#46A358] hover:text-white border-[#46A358] border-[1px] text-[#46A358] rounded-[6px] duration-300'  onClick={addShopCat}>
									Add to cart
								</button>

								<button className='border-[1px] border-[#46A358] rounded-[6px] h-[40px] w-[40px] flex items-center justify-center  text-[#46A358] hover:text-white hover:bg-[#46A358]'>
									<Heart />
								</button>
							</div>
						</div>
		</div>
	)
}

export default Buy