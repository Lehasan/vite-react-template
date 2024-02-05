import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (query, { debounce = false, debounceTime = 0.5 } = {}) => {
	const [state, setState] = useState(window.matchMedia(query).matches)

	const handleWindowResize = useCallback(() => {
		const handleResize = () => setState(window.matchMedia(query).matches)

		if (!debounce) return handleResize()

		const debounceResize = setTimeout(handleResize, debounceTime * 1000)
		return () => clearTimeout(debounceResize)
	}, [query, debounce, debounceTime])

	useEffect(() => {
		if (!query) {
			return console.error('useMediaQuery: No media queries have been entered')
		}

		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [query, handleWindowResize])

	return state
}