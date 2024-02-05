import { useCallback, useEffect, useState } from "react"

export const useKeyPress = (watch) => {
	const [keyPress, setKeyPress] = useState('')

	const handleKeyUp = useCallback(({ key }) => {
		if (watch && watch.includes(key)) return setKeyPress(key)
		if (!watch) return setKeyPress(key)
	}, [watch])

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp)
		return () => document.removeEventListener('keyup', handleKeyUp)
	}, [handleKeyUp])

	return keyPress
}