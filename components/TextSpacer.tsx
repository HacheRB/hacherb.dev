import { Fragment } from 'react'

const Text = ({
	lineBreak,
	text,
	className,
}: {
	lineBreak: boolean
	text: string[]
	className?: string
}) => {
	const arrLength = text.length - 1
	const formatedText = text.map((paragraph: string, index: number) => (
		<Fragment key={index + paragraph.slice(0, 3)}>
			<p className={className}>{paragraph}</p>
			{index < arrLength && lineBreak && <br />}
		</Fragment>
	))

	return <Fragment>{formatedText}</Fragment>
}

export default Text
