import React from 'react'
import Navbar from './ui/navbar'

interface MainLayoutProps {
	children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}
