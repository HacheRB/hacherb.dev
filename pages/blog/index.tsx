import type { GetServerSideProps, NextPage } from 'next'
import { BlogProps, Post } from '../../lib/types'
import { sanityClient } from '../../lib/sanity/sanity'
import { postsQuery } from '../../lib/sanity/queries'
import Container from '../../components/Container'
import BlogPostCard from '../../components/BlogPostCard'
import Layout from '../../components/layout/Layout'
import SectionHeader from '../../components/SectionHeader'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => {
	const { t } = useTranslation('blog')
	const title = t('title')
	const description = t('description')
	const customMeta = {
		title,
		description,
	}

	return (
		<Layout>
			<Container customMeta={customMeta}>
				<SectionHeader
					title={title}
					description={description}
					className="mx-auto lg:w-9/12"
				/>
				<div className="mx-auto lg:w-9/12">
					{posts.map((post: Post, index: number) => (
						<BlogPostCard post={post} index={index} key={post._id} />
					))}
				</div>
				{posts.length <= 0 && (
					<p className="flex justify-center text-2xl font-medium">
						{' '}
						{t('no-posts')}
					</p>
				)}
			</Container>
		</Layout>
	)
}
export default Blog

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const translations = await serverSideTranslations(locale as string, [
		'blog',
		'layout',
		'seo',
	])
	const posts = await sanityClient.fetch(postsQuery)
	return {
		props: {
			posts,
			...translations,
		},
	}
}
