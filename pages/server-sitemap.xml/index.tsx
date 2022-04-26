import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { sanityClient } from '../../lib/sanity/sanity'

if (!process.env.SITE_URL) {
	throw new Error('SITE_URL environment variable is not set')
}

const GetPosts = async () => {
	const query = `*[_type == "post"]|order(publishedAt desc)  {
  slug,   
}`
	return await sanityClient.fetch(query)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const siteUrl = process.env.SITE_URL
	const data: any = await GetPosts()

	const enFields: ISitemapField[] = data?.map((data: any) => ({
		loc: `${siteUrl}/${data.slug.current}`,
		lastmod: new Date().toISOString(),
	}))

	const esFields: ISitemapField[] = data?.map((data: any) => ({
		loc: `${siteUrl}/es/${data.slug.current}`,
		lastmod: new Date().toISOString(),
	}))
	const fields = [...enFields, ...esFields]

	return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors - next-sitemap docs
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
