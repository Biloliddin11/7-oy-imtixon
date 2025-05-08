'use client'

import { Carousel } from 'antd'
import Image from 'next/image'

const Hero = () => {
	const heroSlider = [
		{
			greetings: 'WELCOME TO GREENSHOP',
			title: ["LET'S MAKE A BETTER", 'PLANET'],
			content:
				'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
			img: '/slider1.png',
		},
		{
			greetings: 'WELCOME TO GREENSHOP',
			title: ["LET'S LIVE IN A BETTER", 'PLANET'],
			content:
				'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
			img: '/slider1.png',
		},
		{
			greetings: 'WELCOME TO GREENSHOP',
			title: ["LET'S OBSERVE A BETTER", 'PLANET'],
			content:
				'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
			img: '/slider1.png',
		},
	]

	return (
		<div className='max-w-[1200px] md:h-[calc(80vh)]  mx-auto mt-[12px] overflow-hidden rounded-[30px] md:rounded-none bg-linear-to-bl  from-[#46A35833] to-[#46A3581A] md:from-[#F5F5F580] md:to-[#F5F5F580]'>
			
			<Carousel
				autoplay
				touchMove={true}
				className={`{styles.heroCarousel} `}
				
			>
				{heroSlider.map((item, index) => (
					<div key={index} className='max-w-[1200px] h-[calc(80vh)] rounded-[30px]'>
						<div className='px-6 md:px-20 py-12 flex h-full items-center  max-w-[1200px]  mx-auto'>
							<div className=' space-y-5'>
								<p className='text-sm tracking-widest text-gray-500 font-medium'>
									{item.greetings}
								</p>
								<h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
									{item.title[0]}{' '}
									<span className='text-[#46A358]'>{item.title[1]}</span>
								</h1>
								<p className='text-gray-600'>{item.content}</p>
								<button className='mt-4 px-6 py-3 bg-[#46A358] text-white font-semibold rounded-md hover:bg-green-700 transition'>
									SHOP NOW
								</button>
							</div>
							<div className='md:block hidden'>
								<Image
									src={item.img}
									alt='plant'
									width={700}
									height={700}
									className='object-contain'
								/>
							</div>
						</div>
					</div>
				))}
			</Carousel>

			<style jsx global>{`
				.ant-carousel .slick-dots li button {
					background-color: #ccc; /* Серые точки */
					width: 12px;
					height: 12px;
					border-radius: 50%; /* Круглые точки */
				}

				.ant-carousel .slick-dots li.slick-active button {
					background-color: #46a358; /* Зеленая точка при активном слайде */
				}
			`}</style>
		</div>
	)
}

export default Hero
