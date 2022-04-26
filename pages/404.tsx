import type { GetStaticProps, NextPage } from 'next'
import Container from '../components/Container'
import Layout from '../components/layout/Layout'
import SectionHeader from '../components/SectionHeader'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Custom404: NextPage = () => {
	const { t } = useTranslation('layout')
	const error = t('404')
	const description = t('404-description')
	return (
		<Layout>
			<Container>
				<SectionHeader title={error} description={description} />
			</Container>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	try {
		const translations = await serverSideTranslations(locale as string, [
			'hero',
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

export default Custom404
