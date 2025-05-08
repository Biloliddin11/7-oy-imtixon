import React from 'react'
import Join from './Join'
import Contact from './contact'

import FooterInfo from './nav'


const Footer = () => {
	return (
		<div className='max-w-[1200px] mx-auto mt-[100px] px-[15px]'>
			<Join/>
			<Contact/>
			<FooterInfo/>
		</div>
	)
}

export default Footer