import type { GetStaticProps, NextPage } from 'next'
import AboutSection from '../components/AboutSection'
import Container from '../components/Container'
import Divider from '../components/Divider'
import Layout from '../components/layout/Layout'
import TechSection from '../components/TechSection'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About: NextPage = () => {
	const { t } = useTranslation('about')
	const customMeta = {
		title: t('seo-title'),
		description: t('seo-description'),
	}

	return (
		<Layout>
			<Container customMeta={customMeta}>
				<AboutSection />
				<Divider />
				<TechSection />
			</Container>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	try {
		const translations = await serverSideTranslations(locale as string, [
			'about',
			'tech',
			'layout',
			'seo',
		])
		return {
			props: {
				ok: 1,
				...translations,
			},
		}
	} catch (error) {
		return {
			props: {
				ok: 0,
				error: error,
			},
		}
	}
}

export default About
