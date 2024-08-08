'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Hamburger from './hamburgerMenu'
import UserIcon from './userIcon'

const navItems = [
	{ name: 'Shop All', href: '/shopAll' },
	{ name: 'Tops', href: '/tops' },
	{ name: 'Bottoms', href: '/bottoms' },
	{ name: 'Accessories', href: '/accessories' },
]

export default function Navbar() {
	const checkboxRef = useRef<HTMLInputElement>(null)

	const handleCloseSidebar = () => {
		if (checkboxRef.current) checkboxRef.current.checked = false
	}

	return (
		<div className='drawer z-40 fixed'>
			{/* Drawer Toggle Input */}
			<input
				id='my-drawer'
				type='checkbox'
				className='drawer-toggle'
				ref={checkboxRef}
			/>

			{/* Drawer Content */}
			<div className='drawer-content flex flex-col'>
				{/* Navbar */}
				<div className='navbar bg-white w-full flex justify-between items-center'>
					{/* Hamburger Menu for Mobile */}
					<div className='flex-none lg:hidden'>
						<label
							htmlFor='my-drawer'
							aria-label='open sidebar'
							className='btn btn-square btn-ghost'
						>
							<Hamburger />
						</label>
					</div>

					{/* Navbar Title */}
					<a className='btn btn-ghost text-xl font-thin'>COZYTHREADS</a>

					{/* Navigation Items */}
					<div className='hidden lg:flex lg:flex-1 justify-center'>
						<ul className='menu menu-horizontal px-1'>
							{navItems.map((item) => (
								<li key={item.name}>
									<Link href={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Shopping Cart and User Components */}
					<div className='flex-none flex items-center'>
						{/* Shopping Cart */}
						<div className='dropdown dropdown-end ml-4'>
							<div
								tabIndex={0}
								role='button'
								className='btn btn-ghost btn-circle'
							>
								<div className='indicator'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
										/>
									</svg>
									<span className='badge badge-sm indicator-item'>8</span>
								</div>
							</div>
							<div
								tabIndex={0}
								className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'
							>
								<div className='card-body'>
									<span className='text-lg font-bold'>8 Items</span>
									<span className='text-info'>Subtotal: $999</span>
									<div className='card-actions'>
										<button className='btn btn-primary btn-block'>
											View cart
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* User Profile */}
						<div className='dropdown dropdown-end ml-4'>
							<div
								tabIndex={0}
								role='button'
								className='btn btn-ghost btn-circle avatar'
							>
								<UserIcon />
							</div>
							<ul
								tabIndex={0}
								className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
							>
								<li>
									<a className='justify-between'>
										Profile
										<span className='badge'>New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* WHERE PAGE CONTENT USED TO GO */}
			</div>

			{/* Drawer Sidebar */}
			<div className='drawer-side'>
				<label
					htmlFor='my-drawer'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>
				<ul className='menu bg-base-200 min-h-full w-80 p-4 flex flex-col items-center justify-center'>
					{navItems.map((item) => (
						<li key={item.name} className='flex items-center mb-4'>
							<Link href={item.href} className='flex items-center'>
								{item.name}
							</Link>
						</li>
					))}
					<div className='border-t border-[#b7b7b7] my-5 w-full'></div>
					<li className='flex items-center mb-4'>
						<Link href='/profile'>Profile</Link>
					</li>
					<li className='flex items-center mb-4'>
						<Link href='/cart'>My Cart</Link>
					</li>
					<button className='text-2xl' onClick={handleCloseSidebar}>
						x
					</button>
				</ul>
			</div>
		</div>
	)
}
