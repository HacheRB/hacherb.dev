// Context
export type LanguageState = string | 'en' | 'es'
export type ThemeState = string | 'dark' | 'light'

// Layout
export interface childrenProps {
	children?: React.ReactNode
}

export interface ContainerProps extends childrenProps {
	customMeta?: { [key: string]: string }
	className?: string
}
export interface NavProps {
	navigateHomeTop: () => void
	show: boolean
	routes: Route[]
}
export interface HeaderProps extends NavProps {
	onOpen: () => void
}

export interface SideNavProps extends NavProps {
	onClose: () => void
}

export interface FooterProps {
	copyright: string
}

export interface Route {
	path: string
	name: string
}

export interface SectionHeaderProps {
	title: string
	description?: string
	className?: string
}

// Portfolio
export interface Project {
	id: number
	label: string
	image: string
	bootcamp?: boolean
	description: string[]
	links?: GithubObject[]
	deploy?: string
	youtube?: string
	tech: string[]
}

export interface Tech {
	label: string
	icon?: string
}
export interface Skill {
	id: number
	label: string
	tech: Tech[]
}

export interface PortfolioCardProps {
	project: Project
	index: number
}

//  Blog
export interface Post {
	_id: string
	publishedAt: string
	title: string
	description: string
	slug: {
		current: string
	}
	mainImage: {
		asset: {
			_ref: string
		}
	}
	author: {
		name: string
		image: {
			asset: {
				_ref: string
			}
		}
	}
}

export interface CompletePost extends Post {
	author: {
		name: string
		image: {
			asset: {
				_ref: string
			}
		}
	}
	body: { _type: string }[]
}

export interface BlogProps {
	posts: Post[]
}
export interface BlogPostCardProps {
	post: Post
	index: number
}

export interface BlogPostProps {
	post: CompletePost
}
