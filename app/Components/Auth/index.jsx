'use client'

import React from 'react'
import Login from './login'
import { Modal, Tabs } from 'antd'
import Register from './register'
import useAuthStore from '@/app/redux/OpenModalAuth/AuthSlice'

const Auth = () => {
	const { authIsOpen, authIsOpenSet } = useAuthStore()
	const onChange = key => {
		console.log(key)
	}

	const items = [
		{
			key: '1',
			label: 'Login',
			children: <Login />,
		},
		{
			key: '2',
			label: 'Register',
			children: <Register />,
		},
	]

	return (
		<div className=''>
			<Modal
				open={authIsOpen}
				onCancel={authIsOpenSet}
				footer={null}
				centered
			>
				<div className="">
					<Tabs defaultActiveKey='1' centered={true} items={items} onChange={onChange} />
				</div>
			</Modal>
		</div>
	)
}

export default Auth
