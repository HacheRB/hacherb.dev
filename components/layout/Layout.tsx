import { childrenProps, Route } from '../../lib/types'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'

const Layout = ({ children }: childrenProps) => {
	const router = useRouter()
	const [showModal, setShowModal] = useState<boolean>(false)
	const { t } = useTranslation('layout')
	const routes: Route[] = t('routes', { returnObjects: true })

	function navigateHomeTop(): void {
		router.push({
			pathname: '/',
		})
		window.scrollTo(0, 0)
	}

	return (
		<>
			<SideNav
				navigateHomeTop={navigateHomeTop}
				onClose={() => setShowModal(false)}
				show={showModal}
				routes={routes}
			/>
			<Header
				navigateHomeTop={navigateHomeTop}
				onOpen={() => setShowModal(true)}
				show={showModal}
				routes={routes}
			/>
			{children}
			<Footer />
		</>
	)
}

export default Layout
