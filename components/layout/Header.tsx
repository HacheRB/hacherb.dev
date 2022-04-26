import { HeaderProps } from '../../lib/types'
import { Logo, Menu } from '../../lib/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DarkModeToggle from '../DarkModeToggle'
import LanguageSelector from '../LanguageSelector'

const Header = (props: HeaderProps) => {
	const router = useRouter()
	const [scrolled, setScrolled] = useState<boolean>(false)
	const { navigateHomeTop, onOpen, show, routes } = props

	const navigation = routes.map((link) => (
		<Link href={link.path} key={link.name}>
			<a className={router.pathname === link.path ? 'nav-link' : ''}>
				{link.name}
			</a>
		</Link>
	))

	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
	}, [])

	return (
		<header
			id="header"
			className={`${
				scrolled ? 'shadow shadow-indigo-600/10 dark:shadow-gray-100/5 ' : ''
			}sticky top-0 z-10 flex h-20 bg-white font-sans text-gray-700 dark:bg-dark-background dark:text-gray-100`}
		>
			<nav className="custom-padding flex w-full items-center justify-between">
				{/* Logo and Title*/}
				<button
					aria-label="Home"
					onClick={navigateHomeTop}
					className="flex cursor-pointer items-center"
				>
					<Logo className="mr-4 h-10 w-auto" />
					<div
						className={`${
							router.pathname === '/' ? 'nav-link ' : ''
						}hidden text-lg font-semibold md:flex`}
					>
						HacheRB
					</div>
				</button>
				{/* Main Navigation */}
				<ul className="hidden items-center gap-8 font-medium md:flex">
					{navigation}
					<LanguageSelector />
					<DarkModeToggle />
				</ul>
				{/* Hamburguer Menu Icon */}
				<div
					onClick={() => onOpen()}
					className={`${
						show ? 'hidden opacity-0 ' : 'opacity-100 '
					}icon translate-y-1" w-5 transform transition-all duration-300 ease-in hover:text-gray-400 dark:hover:text-gray-400 md:hidden`}
				>
					<Menu className="object-cover" />
				</div>
			</nav>
		</header>
	)
}

export default Header
