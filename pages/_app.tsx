import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { OptionsContextProvider } from '../context/OptionsContext'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
	return (
		<OptionsContextProvider>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
			/>
			<Script strategy="lazyOnload" id="google-analytics-script">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}', {
					page_path: window.location.pathname,
					});
				`}
			</Script>
			<Component {...pageProps} />
		</OptionsContextProvider>
	)
}

export default appWithTranslation(App)
