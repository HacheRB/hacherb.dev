import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
						rel="stylesheet"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="font-serif text-gray-600 dark:bg-dark-background dark:text-gray-300/90">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
