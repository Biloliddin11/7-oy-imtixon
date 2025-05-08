import React from 'react'
import HeaderMD from './headerMd'


const ResponsiveHeader = () => {
	return (
		<div>
			<div className="hidden md:block">
				<HeaderMD/>
				
			</div>
			
		</div>
	)
}

export default ResponsiveHeader