import { Skill } from '../lib/types'
import SectionHeader from './SectionHeader'
import TechCard from './TechCard'
import { useTranslation } from 'next-i18next'

const Tech = () => {
	const { t } = useTranslation('tech')
	const skills: Skill[] = t('skills', { returnObjects: true })

	return (
		<section id="tech" className="pb-16 md:pb-20 lg:pb-24 xl:pb-32">
			<SectionHeader title={t('title')} />
			<div className="space-y-8 2xl:space-y-16">
				{skills.map((skill) => (
					<div key={skill.label} className="flex flex-wrap justify-center">
						<h3 className="mb-12 w-full text-center font-normal lg:mb-0 lg:mr-auto lg:w-auto">
							{skill.label}
						</h3>
						<div className="grid w-full grid-cols-3 gap-4 xs:flex xs:w-fit xs:flex-row xs:flex-wrap sm:justify-center">
							{skill.tech.map((skill) => (
								<TechCard skill={skill} key={skill.label} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Tech
