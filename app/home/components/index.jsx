import React from 'react'
import Hero from './hero'
import Products from './Products'

const Components = ({query , categories}) => {

	
	
	return (
		<div>
			<div className="px-[15px]">
				<Hero/>
			</div>

			<div className="mt-[46px]">
					<Products query={query} categories={categories}/>
			</div>

		</div>
	)
}

export default Components 