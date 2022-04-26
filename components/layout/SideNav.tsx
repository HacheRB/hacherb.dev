import { SideNavProps } from '../../lib/types'
import { Logo, GithubSocial, LinkedinSocial } from '../../lib/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggle from '../DarkModeToggle'
import LanguageSelector from '../LanguageSelector'

const SideNav = (props: SideNavProps) => {
	const router = useRouter()
	const { navigateHomeTop, onClose, show, routes } = props

	const navigation = routes.map((link) => (
		<Link href={link.path} key={link.name}>
			<a
				onClick={onClose}
				className={`${
					router.pathname == link.path ? 'nav-link hover:dark:text-white' : ''
				}  flex cursor-pointer items-center border-b border-indigo-600/10 p-4 font-sans hover:bg-indigo-500 hover:text-white dark:border-gray-100/5 hover:dark:bg-violet-500`}
			>
				{link.name}
			</a>
		</Link>
	))

	return (
		<>
			<div
				id="backdrop"
				className={`${
					show ? 'fixed ' : 'hidden '
				}z-40 min-h-screen w-screen backdrop-blur-sm`}
				onClick={onClose}
			></div>
			<div
				id="sidebar"
				className={`${
					show ? '' : '-translate-x-full '
				}fixed top-0 left-0 z-50 flex h-full w-52 transform flex-col bg-white font-sans text-gray-700 ring-1 ring-indigo-600/10 transition-all duration-500 ease-in-out dark:bg-dark-background dark:text-gray-100 dark:ring-gray-100/5 md:hidden`}
			>
				{/* Logo and Title*/}
				<button
					onClick={navigateHomeTop}
					className="flex h-[72px] w-full cursor-pointer items-center border-b border-indigo-600/10 p-6  dark:border-gray-100/5"
				>
					<Logo className="mr-4 h-10 w-auto" />
					<div
						className={`${
							router.pathname === '/' ? 'nav-link ' : ''
						}text-lg font-semibold`}
					>
						HacheRB
					</div>
				</button>
				{/* Navigation */}
				<nav className="flex-1 items-center overflow-y-auto font-medium">
					{navigation}
				</nav>

				<div className="flex h-[73px] flex-row items-center justify-between p-6">
					<LanguageSelector />
					<DarkModeToggle />
				</div>
				{/* Social */}
				<div className="flex h-16 flex-row justify-center gap-6 border-t border-indigo-600/10 p-6 dark:border-gray-100/5 dark:bg-dark-background md:h-20">
					<a
						className="icon github"
						href="https://github.com/HacheRB"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubSocial />
					</a>
					<a
						className="icon linkedin"
						href="https://www.linkedin.com/in/hacherb/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinSocial />
					</a>
				</div>
			</div>
		</>
	)
}

export default SideNav
