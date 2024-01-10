'use client'

import type { ChangeEvent, ReactNode } from 'react'
import { useTransition } from 'react'
import { useRouter, usePathname } from '@/utils/navigation'

interface LocaleSwitcherSelectProps {
	children: ReactNode
	defaultValue: string
	label: string
}

export function LocaleSwitcherSelect({
	children,
	defaultValue,
	label,
}: LocaleSwitcherSelectProps) {
	const router = useRouter()
	const pathname = usePathname()
	const [isPending, startTransition] = useTransition()

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale })
		})
	}

	return (
		<label
			className="'relative text-gray-400',"
			// className={clsx(
			// 	'relative text-gray-400',
			// 	isPending && 'transition-opacity [&:disabled]:opacity-30',
			// )}
		>
			<p className="sr-only">{label}</p>
			<select
				className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
				defaultValue={defaultValue}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
		</label>
	)
}
