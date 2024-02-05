export const smoothScrollTo = value => {
	window.scrollTo({
		top: value,
		behavior: 'smooth',
	})
}