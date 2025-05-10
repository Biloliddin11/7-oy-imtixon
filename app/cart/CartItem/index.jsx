'use client'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import useMessageStore from '@/app/redux/massege/messege'

const CartItem = ({ product }) => {
	const { title, price, quantity, thumbnail } = product
	const [count, setCount] = useState(quantity)
	const { message, setMessage } = useMessageStore()

	const deleteFech = async () => {
		try {
			const res = await fetch('https://dummyjson.com/carts/1', {
				method: 'DELETE',
			})
			setMessage('DELETE Success', 'Success')
		} catch (error) {
			setMessage(error.message, 'Error')
		}
	}
		
	const handleIncrease = product => {
		dispatch(increaseCountFromShopping(product))
	}
	const handleDecrease = product => {
		dispatch(decreaseCountFromShopping(product))
	}

	return (
		<div className='flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow space-y-4 md:space-y-0'>
			<div className='flex items-center space-x-4'>
				<img
					src={thumbnail}
					alt={title}
					className='w-20 h-20 object-cover rounded-xl'
				/>
				<div>
					<p className='font-semibold'>{title}</p>
					<p className='text-gray-500 text-sm'>Quantity: {quantity}</p>
				</div>
			</div>
			<div className='flex items-center space-x-6'>
				<p>${price?.toFixed(2)}</p>
				<div className='w-[90px] flex gap-[10px]'>
					<button
						onClick={() => handleDecrease(cart)}
						className='text-white font-bold bg-[#46A358] rounded-[50%] h-[25px] w-[25px]'
						
					>
						-
					</button>
					<p>{count}</p>
					<button
															onClick={() => handleIncrease(cart)}
						className='text-white font-bold bg-[#46A358] rounded-[50%] h-[25px] w-[25px]'
					>
						+
					</button>
				</div>
				<p className='text-green-600 font-bold'>
					${(price * count).toFixed(2)}
				</p>
				<Button
					onClick={deleteFech}
					danger
					icon={<DeleteOutlined />}
					className='!h-[30px] !w-[30px]'
				/>
			</div>
		</div>
	)
}

export default CartItem
