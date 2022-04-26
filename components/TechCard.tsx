import { Tech } from '../lib/types'
import * as Icons from '../lib/TechIcons'

const TechCard = ({ skill }: { skill: Tech }) => {
	// @ts-ignore:next-line. Investigate how to type dynamic SVG use
	const Icon = skill.icon ? Icons[skill.icon] : Icons[skill.label]

	return (
		<div className="xs:w-18 flex flex-col xs:h-24 md:w-20 lg:w-24">
			<div className="h-10">
				<Icon height="100%" width="100%" className="object-contain" />
			</div>
			<p className="flex justify-center py-4 font-light">{skill.label}</p>
		</div>
	)
}

export default TechCard
