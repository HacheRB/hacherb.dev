import { Project } from '../lib/types'
import type { GetStaticProps, NextPage } from 'next'
import Container from '../components/Container'
import Layout from '../components/layout/Layout'
import PortfolioCard from '../components/PortfolioCard'
import SectionHeader from '../components/SectionHeader'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Portfolio: NextPage = () => {
	const { t } = useTranslation('portfolio')
	const title = t('title')
	const description = t('description')
	const projects: Project[] = t('projects', { returnObjects: true })

	const customMeta = {
		title,
		description,
	}

	return (
		<Layout>
			<Container customMeta={customMeta} className="pb-20">
				<SectionHeader title={title} description={description} />
				<div className="grid grid-cols-1 place-items-center gap-8 md:gap-x-0 md:gap-y-16 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
					{projects.map((project, index) => (
						<PortfolioCard key={project.id} project={project} index={index} />
					))}
				</div>
			</Container>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	try {
		const translations = await serverSideTranslations(locale as string, [
			'portfolio',
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

export default Portfolio
