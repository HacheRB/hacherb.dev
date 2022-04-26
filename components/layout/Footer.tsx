import { FooterProps } from '../../lib/types'
import { GithubSocial, LinkedinSocial } from '../../lib/Icons'

const Footer = ({ copyright }: FooterProps) => {
	const date = new Date().getFullYear()

	return (
		<footer id="footer" className="flex h-20 justify-center">
			<div className="custom-padding flex w-full items-center justify-between">
				<span className="text-left text-sm font-normal">
					&#169; {date} {copyright}
				</span>
				<div className="flex justify-end gap-6 md:gap-8">
					<a
						aria-labelledby="github"
						className="icon github"
						href="https://github.com/HacheRB"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubSocial />
						<span id="github" className="sr-only">
							Github
						</span>
					</a>
					<a
						aria-labelledby="linkedin"
						className="icon linkedin"
						href="https://www.linkedin.com/in/hacherb/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinSocial />
						<span id="linkedin" className="sr-only">
							Linkedin
						</span>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
