import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Container from '../components/Container'
import Layout from '../components/layout/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
	const { t } = useTranslation('hero')

	return (
		<Layout>
			<Container>
				<div id="hero" className="flex flex-1 flex-grow items-center">
					<div className="grid w-full grid-cols-1 xl:grid-cols-10">
						{/* Left Hero */}
						<div
							id="left-hero"
							className="lg:py-30 mx-auto w-full py-6 text-center md:py-16 xl:col-span-6 xl:py-48 xl:text-left"
						>
							<h1 className="text-indigo-600 dark:text-violet-400">
								<span className="text-gray-700 dark:text-gray-100">
									{t('intro')}{' '}
								</span>
								<span>{t('firstName')}</span>
								<br />
								<span>{t('lastName')}</span>
							</h1>
							<h2 className="mt-3 text-gray-700 dark:text-gray-100">
								{t('subtitle')}
							</h2>
							<p className="mx-auto mt-3 max-w-md text-lg text-gray-500 dark:text-gray-300/90 sm:text-xl md:mt-5 xl:ml-0 xl:max-w-xl">
								{t('description')}
							</p>
							{/* Buttons */}
							<div className="mt-10 sm:flex sm:justify-center xl:justify-start">
								<div className="btn1">
									<a
										className="btn btn-primary shadow"
										href="/cv.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t('cv')}
									</a>
								</div>
								<div className="btn2">
									<a
										className="btn btn-secondary mt-3 shadow sm:mt-0 sm:ml-3"
										href={`mailto:${t('email')}`}
									>
										{t('contact')}
									</a>
								</div>
							</div>
						</div>

						{/* Right Hero */}
						<div
							id="right-hero"
							className="relative order-first h-96 min-h-full lg:h-128 xl:order-none xl:col-span-4"
						>
							<Image
								key="blob1"
								className="blobs blob1"
								src="/img/svg/1.svg"
								alt=""
								layout="fill"
								objectFit="contain"
								priority
							/>
							<Image
								key="blob2"
								className="blobs blob2"
								src="/img/svg/2.svg"
								alt=""
								layout="fill"
								priority
							/>
							<Image
								key="blob3"
								className="blobs blob3"
								src="/img/svg/3.svg"
								alt=""
								layout="fill"
								priority
							/>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	)
}
// https://stackoverflow.com/questions/69809141/proper-getserversideprops-syntax-for-typescript-next-js-i18n
// https://github.com/vercel/next.js/issues/32309
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

export default Home
