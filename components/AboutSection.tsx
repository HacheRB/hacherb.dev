import Image from 'next/image'
import SectionHeader from './SectionHeader'
import TextSpacer from './TextSpacer'
import { useTranslation } from 'next-i18next'

const About = () => {
	const { t } = useTranslation('about')
	const paragraph: string[] = t('paragraph', { returnObjects: true })

	return (
		<section id="about" className="pb-16 md:pb-20 lg:pb-24 xl:pb-32">
			<SectionHeader title={t('title')} />
			<div className="grid grid-cols-2 gap-8 xl:flex xl:justify-center">
				{/* Avatar */}
				<div className="col-span-2 p-3 xl:flex">
					<div className="2xl:justify-left items relative mx-auto aspect-video max-h-72 justify-center xl:h-72 xl:w-72">
						<Image
							className=""
							src="/img/svg/avatar.svg"
							alt="Avatar"
							layout="fill"
							objectFit="contain"
							priority
						/>
					</div>
				</div>
				{/* About */}
				<div className="col-span-2 flex flex-col justify-center xl:flex">
					<TextSpacer
						lineBreak={false}
						text={paragraph}
						className="flex flex-col p-3 text-left text-lg sm:text-xl"
					/>
				</div>
			</div>
		</section>
	)
}

export default About
