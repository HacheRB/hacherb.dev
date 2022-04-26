import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BlogPostProps, Post } from '../../lib/types'
import { sanityClient, urlFor } from '../../lib/sanity/sanity'
import { singlePostQuery, slugs } from '../../lib/sanity/queries'
import Container from '../../components/Container'
import Layout from '../../components/layout/Layout'
import PortableTextDisplay from '../../components/PortableTextDisplay'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const BlogPost: NextPage<BlogPostProps> = ({ post }: BlogPostProps) => {
	const { publishedAt, title, description, body, mainImage } = post
	const author = post.author.name
	const customMeta = {
		title: title,
		description: description,
		image: urlFor(mainImage).url(),
	}

	return (
		<Layout>
			<Container customMeta={customMeta}>
				<article className="mx-auto py-10 text-gray-700 dark:text-gray-300/90 md:py-24 lg:w-9/12 xl:py-32">
					<p className="mb-6">
						Blog post by <span className="font-medium">{author}</span> -{' '}
						Published at {new Date(publishedAt).toLocaleDateString()}
					</p>
					<h1 className="mb-3 text-4xl font-medium text-gray-800 dark:text-gray-200/90">
						{title}
					</h1>
					<h2 className="mb-12 text-2xl font-normal text-gray-700 dark:text-gray-300/90">
						{description}
					</h2>
					<PortableTextDisplay body={body} />
				</article>
			</Container>
		</Layout>
	)
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await sanityClient.fetch(slugs)
	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
	const translations = await serverSideTranslations(locale as string, [
		'layout',
		'seo',
	])
	const post = await sanityClient.fetch(singlePostQuery, { slug: params?.slug })

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post,
			...translations,
		},
		revalidate: 60,
	}
}
