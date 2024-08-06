import React from 'react'
import Image from 'next/image'
import { Kumbh_Sans, Commissioner } from 'next/font/google'

const kumbhSans = Kumbh_Sans({ weight: ['100', '900'], subsets: ['latin'] })
const commissioner = Commissioner({
	weight: ['100', '900'],
	subsets: ['latin'],
})

export default function Hero() {
	return (
		<section className='flex flex-col md:flex-row items-center justify-between p-4 h-screen pt-20'>
			<div className='w-full md:w-[60%] mb-4 md:mb-0'>
				<Image
					src='/hero.jpg'
					alt='Hero Image'
					layout='responsive'
					width={700}
					height={500}
					className='object-cover w-full h-full'
				/>
			</div>
			<div className='w-full md:w-[40%] flex items-center justify-center p-4'>
				<div>
					<h1 className={`text-4xl font-thin mb-4 ${kumbhSans.className} text-center`}>
						Sustainability and Fashion
					</h1>
					<p className={`text-lg font-thin text-center`}>
						Where Style Meets Responsibility
					</p>
				</div>
			</div>
		</section>
	)
}
