const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
	// Products
	const product1 = await prisma.product.create({
		data: {
			title: 'Pink T-Shirt',
			description: 'Fine cotton pink t-shirt',
			category: 'TOPS',
			total: 100,
			price: 19.99,
			image: '/pink-top.jpg',
			sizes: {
				create: [
					{ name: 'S', quantity: 20 },
					{ name: 'M', quantity: 40 },
					{ name: 'L', quantity: 20 },
					{ name: 'XL', quantity: 20 },
				],
			},
		},
	})

	const product2 = await prisma.product.create({
		data: {
			title: 'Purple Jacket',
			description: 'Stylish and comfortable jacket',
			category: 'TOPS',
			total: 50,
			price: 90.99,
			image: '/purple-jacket.jpg',
			sizes: {
				create: [
					{ name: 'S', quantity: 25 },
					{ name: 'M', quantity: 25 },
					{ name: 'L', quantity: 0 },
					{ name: 'XL', quantity: 0 },
				],
			},
		},
		include: {
			sizes: true,
		},
	})

	const product3 = await prisma.product.create({
		data: {
			title: 'Orange Pants',
			description: 'Colorful and comfortable pants',
			category: 'BOTTOMS',
			total: 23,
			price: 54.59,
			image: '/orange-pants.jpg',
			sizes: {
				create: [
					{ name: 'S', quantity: 3 },
					{ name: 'M', quantity: 4 },
					{ name: 'L', quantity: 6 },
					{ name: 'XL', quantity: 9 },
				],
			},
		},
	})

	const product4 = await prisma.product.create({
		data: {
			title: 'Ethereal Short',
			description: 'Edgy and comfortable shorts',
			category: 'BOTTOMS',
			total: 176,
			price: 78.34,
			image: '/cream-shorts.jpg',
			sizes: {
				create: [
					{ name: 'S', quantity: 35 },
					{ name: 'M', quantity: 41 },
					{ name: 'L', quantity: 70 },
					{ name: 'XL', quantity: 30 },
				],
			},
		},
	})

	const product5 = await prisma.product.create({
		data: {
			title: 'Cool Glasses',
			description: 'Recycled Material',
			category: 'ACCESSORIES',
			total: 9,
			price: 78.99,
			image: '/white-glasses.jpg',
			sizes: {
				create: [{ name: 'ONE_SIZE', quantity: 9 }],
			},
		},
	})

	const product6 = await prisma.product.create({
		data: {
			title: 'Handy Totebag',
			description: 'Recycled Material',
			category: 'ACCESSORIES',
			total: 50,
			price: 78.99,
			image: '/yellow-totebag.jpg',
			sizes: {
				create: [{ name: 'ONE_SIZE', quantity: 50 }],
			},
		},
	})

	// Create Users
	const user1 = await prisma.user.create({
		data: {
			name: 'Donut',
			lastName: 'Monster',
			pwd: 'pwd123',
			email: 'yiril80940@foraro.com',
			phone: '1234567890',
			address: '123 Sesame Street, NY, USA',
		},
	})

	// Create Orders with OrderItems
	const order1 = await prisma.order.create({
		data: {
			userId: user1.id,
			total: 169.98,
			OrderItem: {
				create: [
					{
						productId: product2.id,
						quantity: 1,
						sizeId:
							(
								await prisma.size.findFirst({
									where: { productId: product2.id, name: 'L' },
								})
							)?.id ?? 0,
					},
					{
						productId: product6.id,
						quantity: 2,
						sizeId:
							(
								await prisma.size.findFirst({
									where: { productId: product6.id, name: 'ONE_SIZE' },
								})
							)?.id ?? 0,
					},
				],
			},
		},
	})

	console.log('Seed data worked')
}

main()
	.then(() => {
		console.log('Seed data worked')
	})
	.catch((e) => {
		console.log('Seed data did not work')
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
