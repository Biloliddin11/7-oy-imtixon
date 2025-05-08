import React from 'react'
import Cotegorys from './cotegrys'
import Product from './product'

const Products = async ({query , categories}) => {

	
	return (
		<div>
			<div className='max-w-[1200px] mx-auto px-[15px] lg:px-0'>
				<div className='md:flex md:gap-[25px] lg:gap-[50px]'>
					<div className="hidden md:block">
						<Cotegorys categories={categories} />
					</div>
					<Product query={query} categories={categories} />
				</div>
			</div>
		</div>
	)
}

export default Products
