import { PortfolioCardProps } from '../lib/types'
import { ExternalLink, Youtube } from '../lib/Icons'
import Image from 'next/image'
import TextSpacer from './TextSpacer'

function PortfolioCard(props: PortfolioCardProps) {
	const { project, index } = props
	const even = index % 2 === 0
	const firstCards = index <= 2 ? true : false

	return (
		<div
			className={`${
				even ? 'md:justify-self-end ' : 'md:justify-self-start '
			}flex h-full max-w-lg flex-col overflow-hidden rounded-xl bg-white shadow-xl dark:bg-dark-background dark:shadow-lg dark:shadow-gray-100/5 dark:ring-gray-100/10 md:w-full md:max-w-none md:flex-row lg:max-w-md lg:flex-col`}
		>
			{/* Image */}
			<div className="relative aspect-video w-auto shrink-0 md:w-64 lg:w-auto">
				<Image
					className="absolute object-cover object-center md:object-left-top lg:w-full lg:object-center"
					src={project.image}
					alt={`${project.label} Image`}
					layout="fill"
					objectFit="cover"
					priority={firstCards}
				/>
				{/* Background gradient */}
				<div className="absolute h-full w-full bg-indigo-500/10"></div>
				<div className="vertical-gradient-black absolute h-full w-full md:hidden lg:block"></div>

				<div className="absolute bottom-0 px-6 py-4 text-gray-100 md:hidden lg:block">
					<h3 className="inline font-semibold">{project.label}</h3>
					{project.bootcamp && <h4 className="inline"> - Bootcamp</h4>}
				</div>
			</div>
			{/* Card Body */}
			<div className="flex grow flex-col px-6">
				<div className="hidden pt-6 text-gray-700 dark:text-gray-200 md:block lg:hidden">
					<h3 className="inline font-medium">{project.label}</h3>
					{project.bootcamp && <h4 className="inline"> - Bootcamp</h4>}
				</div>
				{/* Pills */}
				<div className="justify-left flex flex-wrap gap-2 py-6">
					{project.tech &&
						project.tech.map((tech) => (
							<span
								key={tech}
								className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-gray-100 shadow-md dark:bg-violet-800 dark:text-gray-100"
							>
								{tech}
							</span>
						))}
				</div>
				{/* Description */}
				<div className="flex grow flex-col">
					{project.description && (
						<TextSpacer lineBreak={true} text={project.description} />
					)}
				</div>
				{/* Buttons */}
				<div className="flex items-center justify-center gap-6 py-6">
					{/* Links */}
					{project.links &&
						project.links.map((repo, index) => (
							<div key={index}>
								<a
									className="icon flex items-center rounded-md text-lg font-medium text-indigo-600 hover:text-indigo-700 dark:text-violet-400 selection:dark:text-gray-300 dark:hover:text-violet-500 md:block"
									href={repo.src}
								>
									{repo.label}
								</a>
							</div>
						))}
					{/* Youtube & Deploy */}
					{project.youtube && (
						<a
							title="Youtube Presentation Link"
							href={project.youtube}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Youtube className="icon h-8 w-auto text-indigo-600 hover:text-indigo-700 dark:text-violet-400 dark:hover:text-violet-500" />
						</a>
					)}
					{project.deploy && (
						<a
							title="Project Deployment Link"
							href={project.deploy}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ExternalLink className="icon h-[24px] w-auto text-indigo-600 hover:text-indigo-700 dark:text-violet-400 dark:hover:text-violet-500" />
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default PortfolioCard
