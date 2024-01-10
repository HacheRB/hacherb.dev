'use client'
// https://next-intl-docs.vercel.app/docs/environments/error-files

import Error from 'next/error'

export default function NotFound() {
	return (
		<html lang="en">
			<body>
				<Error statusCode={404} />
			</body>
		</html>
	)
}
