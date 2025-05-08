'use client'
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios'
import useMessageStore from '@/app/redux/massege/messege'
import useNotificationMessage from '@/app/hook/useNotificationMessage/useNotificationMessage'

const BuyNowSection = ({id}) => {
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
    <div className="fixed w-full bottom-0 left-0 right-0 z-50  ">
      <div className="w-full  mx-auto bg-white p-5 rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col gap-5">
        

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Qty</span>
            <button className="w-6 h-6 rounded-full bg-[#F1F1F1] flex items-center justify-center text-gray-600 shadow-inner" onClick={()=>{setQuantity(quantity === 0 ? 0 : quantity - 1)}}>-</button>
            <span className="text-sm font-semibold">{quantity}</span>
            <button className="w-6 h-6 rounded-full bg-[#F1F1F1] flex items-center justify-center text-gray-600 shadow-inner" onClick={()=>{setQuantity(quantity+1)}} >+</button>
          </div>
          <span className="text-[#46A358] font-bold text-lg">$119.00</span>
        </div>

  
        <div className="flex items-center justify-between">
          <button className="flex items-center justify-center w-[196px] h-[60px] bg-gradient-to-r from-[#46A358] to-[#3CB371] text-white rounded-[40px] font-semibold shadow-md" onClick={addShopCat}>
            Buy Now
          </button>
          <button className="ml-4 w-10 h-10 rounded-full bg-[#F1F1F1] flex items-center justify-center shadow-inner">
            <ShoppingCart size={20} className="text-gray-600" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default BuyNowSection;
