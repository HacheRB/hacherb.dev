import { SectionHeaderProps } from '../lib/types'

const SectionHeader = ({
	title,
	description = '',
	className = '',
}: SectionHeaderProps) => {
	return (
		<div
			className={`mx-auto w-full py-10 text-center md:py-24 xl:py-32 ${className}`}
		>
			<h2 className="nav-link mb-6 font-sans font-medium">{title}</h2>
			{description !== '' && (
				<p className="flex justify-center text-left lg:text-xl">
					{description}
				</p>
			)}
		</div>
	)
}

export default SectionHeader
