'use client'
import { Button, Input, message } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const CartTotals = ({ products }) => {
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  const subtotal = products.reduce((acc, p) => acc + p.price * p.quantity, 0)
  const shipping = 16
  const totalBeforeDiscount = subtotal + shipping
  const total = totalBeforeDiscount - discount

  const handleApplyCoupon = (value) => {

    if (value === 'DISCOUNT10') {
      const discountAmount = subtotal * 0.1 
      setDiscount(discountAmount)
      message.success('Coupon applied successfully!')
    } else {
      message.error('Invalid coupon code')
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Cart Totals</h2>
      <Input.Search
        placeholder="Enter coupon code here..."
				enterButton={<Button style={{ backgroundColor: '#4CAF50', color: 'white' }}>Apply</Button>}
        onSearch={handleApplyCoupon}
      />
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Coupon Discount</span>
          <span>(-) ${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-[#46A358] text-lg border-t pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Link href={'/ordery'}  className="bg-[#46A358] mb-[20px] px-[15px] py-[10px] text-white font-bold rounded-[6px]">
        Proceed To Checkout
      </Link>
      <div className="text-center mt-[20px]">
        <Link className="text-green-600 hover:underline" href="/home">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default CartTotals
