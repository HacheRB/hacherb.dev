import { ContainerProps } from '../lib/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Container = ({
	customMeta,
	className = '',
	children,
}: ContainerProps) => {
	const router = useRouter()
	const { asPath } = router
	const urlLocale = router.locale === 'en' ? '' : '/es'
	const imageLocale = router.locale === 'en' ? '' : 'es'
	const { t } = useTranslation('seo')

	const meta = {
		title: t('title'),
		name: t('name'),
		description: t('description'),
		image: `/img/seo${imageLocale}.png`,
		type: 'website',
		url: `${t('url')}${urlLocale}${asPath}`,
		...customMeta,
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link key="canonical" rel="canonical" href={meta.url}></link>
				<title>{`${meta.name} - ${meta.title}`}</title>
				<meta name="author" content={meta.name} />
				<meta name="copyright" content={meta.name} />
				<meta
					key="title"
					name="title"
					content={`${meta.name} - ${meta.title}`}
				/>
				<meta key="description" name="description" content={meta.description} />
				<meta key="og:type" property="og:type" content={meta.type} />
				<meta key="og:url" property="og:url" content={meta.url} />
				<meta key="og:title" property="og:title" content={meta.title} />
				<meta
					key="og:description"
					property="og:description"
					content={meta.description}
				/>
				<meta key="og:image" property="og:image" content={meta.image} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta key="twitter:url" property="twitter:url" content={meta.url} />
				<meta
					key="twitter:title"
					property="twitter:title"
					content={`${meta.name} - ${meta.title}`}
				/>
				<meta
					key="twitter:description"
					property="twitter:description"
					content={meta.description}
				/>
				<meta
					key="twitter:image"
					property="twitter:image"
					content={meta.image}
				/>
			</Head>
			<main
				id="container"
				className={`${className} custom-padding flex flex-col`}
			>
				{children}
			</main>
		</>
	)
}

export default Container
