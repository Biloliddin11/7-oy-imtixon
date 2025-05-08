'use client'
import { Tabs } from 'antd'
import React from 'react'

const TabsDescription = ({description}) => {
	const onChange = key => {
		console.log(key);
	};
	const items = [
		{
			key: '1',
			label: <span className="tab-label">Product Description</span>,
			children: <div>
				<p className='text-[#727272] text-[14px] leading-[24px]'>{description}</p>
			</div>,
		},
		{
			key: '2',
			label: <span className="tab-label">Reviews</span>,
			children: <p className='text-[#727272] text-[14px] leading-[24px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam minus adipisci accusantium autem debitis doloribus sequi tempore, alias nostrum, laborum, animi repellat fugit totam omnis incidunt impedit nemo cum ipsum molestiae. Dolor enim, facilis perspiciatis, commodi illo ratione odio, repudiandae consequuntur quas alias non impedit ut reprehenderit aliquid laudantium suscipit. Eaque repellat deleniti, mollitia debitis quos labore voluptatum dignissimos delectus esse molestiae ab! Minus et voluptas dicta, natus, voluptate libero repellendus ducimus laudantium excepturi, explicabo nulla! Minima amet quos maxime quisquam ut, culpa ab vitae cumque consequuntur voluptate libero esse nisi exercitationem! Amet, debitis rem. Unde, ipsam. Aliquam doloribus vel dolore enim quidem voluptatibus. Praesentium sint distinctio dignissimos sed quam! Adipisci similique quasi provident reiciendis officia voluptatum consectetur perferendis magni. Repellat cumque molestiae unde placeat ad minima voluptatibus voluptas quod dolore id amet rem eum aperiam quidem illo, in sapiente repellendus temporibus quia. Iusto quaerat minima corrupti et, magnam quas velit sint animi aperiam, cupiditate nihil atque, suscipit quidem ex quibusdam iure mollitia sunt? Neque quam obcaecati ratione impedit possimus eos molestias repellendus nesciunt eius provident, fugiat est nulla! Laborum sit illum iusto dignissimos et repudiandae, in cumque voluptate, at, corrupti sint quasi optio aspernatur doloribus nemo asperiores impedit hic aut. Consequuntur quo quod quisquam, dolores nemo impedit eos totam dolorem fuga architecto vitae eligendi mollitia, excepturi minus odio asperiores culpa inventore facere quas? Hic in earum debitis. Assumenda reiciendis iste cupiditate nihil quo, exercitationem debitis tempora aperiam molestias dolorem iure, placeat minima voluptates excepturi eveniet velit. Rem, fuga veritatis.</p> ,
		}
	];

	return (
		<div>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} className="custom-tabs" />
		</div>
	)
}

export default TabsDescription