import { useRef, useState, useEffect } from 'react'

export const useWatcher = ({ once = false, threshold = 0 } = {}) => {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const watcher = new IntersectionObserver(entries => {
			once
				? entries[0].isIntersecting && setIsVisible(true)
				: setIsVisible(entries[0].isIntersecting)
		}, { threshold })

		if (!ref.current) {
			return console.error('useWatcher: Element is not defined:', ref.current)
		}

		watcher.observe(ref.current)
		return () => watcher.disconnect()
	}, [ref, once, threshold])

	return [ref, isVisible]
}