import { BlogPostCardProps } from '../lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity/sanity'

function BlogPostCard({ post, index }: BlogPostCardProps) {
	const { title, description, publishedAt, mainImage } = post
	const slug = post.slug.current
	const firstPosts = index <= 2 ? true : false

	return (
		<div className="group mb-6 flex flex-row justify-between gap-8 xl:mb-12">
			<Link href={`/blog/${slug}`} passHref>
				<div className="flex flex-1 cursor-pointer flex-col pt-3">
					<p className="mb-1 text-xl">{title}</p>
					<p className="mb-1">
						{description} - {new Date(publishedAt).toLocaleDateString()}
					</p>
				</div>
			</Link>
			<Link href={`/blog/${slug}`} passHref>
				<div className="relative hidden aspect-video cursor-pointer overflow-hidden rounded-xl sm:flex sm:h-24 sm:w-24">
					<Image
						src={urlFor(mainImage).url()}
						alt={`${post} Image`}
						className="absolute transition-transform duration-150 ease-in-out group-hover:scale-105"
						layout="fill"
						objectFit="cover"
						priority={firstPosts}
					/>
				</div>
			</Link>
		</div>
	)
}

export default BlogPostCard
