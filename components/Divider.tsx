const Divider = ({ className }: { className?: string }) => {
	return (
		<div
			className={`border-t border-indigo-600/10 dark:border-gray-100/5 ${className}`}
		></div>
	)
}

export default Divider
