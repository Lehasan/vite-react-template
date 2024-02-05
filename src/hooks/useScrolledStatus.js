import { useState, useEffect, useCallback } from "react"

export const useScrolledStatus = ({ offset = 0, debounce = false, debounceTime = 0.2 } = {}) => {
	const [isScrolled, setIsScrolled] = useState(false)

	const handleWindowScroll = useCallback(() => {
		const handleScroll = () => {
			window.scrollY > offset
				? setIsScrolled(true)
				: setIsScrolled(false)
		}

		if (!debounce) return handleScroll()

		const debounceScroll = setTimeout(handleScroll, debounceTime * 1000)
		return () => clearTimeout(debounceScroll)
	}, [offset, debounce, debounceTime])

	useEffect(() => {
		window.addEventListener('scroll', handleWindowScroll)
		return () => window.removeEventListener('scroll', handleWindowScroll)
	}, [handleWindowScroll])

	return isScrolled
}