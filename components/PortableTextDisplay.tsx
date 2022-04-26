import Image from 'next/image'
import { urlFor } from '../lib/sanity/sanity'
import PortableText from 'react-portable-text'

const PortableTextDisplay = ({ body }: { body: object[] }) => {
	return (
		<PortableText
			dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
			projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
			content={body}
			serializers={{
				h1: (props: any) => (
					<h1
						className="mb-6 text-4xl font-normal text-gray-700 dark:text-gray-300/90"
						{...props}
					/>
				),
				h2: (props: any) => (
					<h2
						className="mb-4 text-2xl font-normal text-gray-600 dark:text-gray-300/80"
						{...props}
					/>
				),
				h3: (props: any) => (
					<h3
						className="mb-2 font-normal text-gray-600 dark:text-gray-300/70"
						{...props}
					/>
				),
				li: ({ children }: any) => (
					<li className="ml-4 list-disc">{children}</li>
				),
				link: ({ href, children }: any) => (
					<a
						href={href}
						className="text-blue-700 hover:underline dark:text-blue-400"
					>
						{children}
					</a>
				),
				normal: ({ children }: any) => (
					<p className="mb-4 text-gray-600 dark:text-gray-300/90">{children}</p>
				),
				image: (asset: { _ref: string; _type: string }) => (
					<div className="relative my-8 aspect-video h-full">
						<Image
							src={urlFor(asset).url()!}
							alt="Blog Image"
							layout="fill"
							objectFit="contain"
							priority
						/>
					</div>
				),
			}}
		/>
	)
}

export default PortableTextDisplay
