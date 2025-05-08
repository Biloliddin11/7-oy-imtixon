import React from 'react'
import Cotegory from './cotegory'
import CotegoryModal from './cotegoryModal'

const Cotegorys = ({categories}) => {
	return (
		<div className='px-[18px] py-[14px] h-full bg-[#FBFBFB]  rounded-[5px] w-[310px]'>	
			<Cotegory categories={categories}/>
			<CotegoryModal categories={categories}/>
		</div>
	)
}

export default Cotegorys