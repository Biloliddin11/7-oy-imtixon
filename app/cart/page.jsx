"use client";
import React from 'react'
import CartTotals from './CartTotals'
import CartItem from './CartItem'
import HeaderSm from '../Components/header/Responsive/headerSm'

const CartPage = async () => {
  const res = await fetch('https://dummyjson.com/carts/1')
  const data = await res.json()

  const products = data?.products || []

  return (
    <div className="max-w-[1200px] mx-auto px-[15px] mt-[50px]">
			<div className="md:hidden">
      <HeaderSm/>
      </div>
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {products.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          )}
        </div>
        <CartTotals products={products} />
      </div>
    </div>
  )
}

export default CartPage
