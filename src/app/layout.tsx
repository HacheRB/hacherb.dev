import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | Portfolio',
		default: 'Portfolio',
	},
	description: 'Personal Portfolio',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<main className="flex flex-1">{children}</main>
			</body>
		</html>
	)
}
