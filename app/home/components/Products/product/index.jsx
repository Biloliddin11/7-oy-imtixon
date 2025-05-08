import { Pagination } from 'antd'
import Card from './card'
import Search from './seacrch'

const Product = async ({ query, categories }) => {
	let products = []

	if (query) {
		const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
		const dataSearch = await res.json()
		products = dataSearch.products || []
	} else {
		const res = await fetch(
			`https://dummyjson.com/products/category/${categories}?limit=9`
		)
		const data = await res.json()
		products = data.products || []
	}

	return (
		<div>
			<Search />
			<div className='grid md:grid-rows-3 lg:grid-cols-3 grid-cols-2 justify-between gap-y-[50px] gap-x-[23px] md:gap-x-[33px]'>
				{products?.map(product => {
					return <Card key={product.id} product={product} />
				})}
			</div>
			<div className="mt-[50px]">
			<Pagination
			
				align='center'
				defaultCurrent={1}
				total={50}
			/>
			</div>
		</div>
	)
}

export default Product
