import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { Header } from '@/ui/header'
import { Providers } from '@/utils/providers'

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
	const locale = useLocale()
	return (
		// next-themes requires suppressHydrationWarning
		<html lang={locale} suppressHydrationWarning>
			<body className={`${inter.className} flex flex-col`}>
				<Providers>
					<Header />
					<main className="flex-1">{children}</main>
				</Providers>
			</body>
		</html>
	)
}
