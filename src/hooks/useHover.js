import { useState } from "react"

export const useHover = () => {
	const [isHovered, setIsHovered] = useState(false)

	const onMouseOver = () => setIsHovered(true)
	const onMouseOut = () => setIsHovered(false)

	const bind = { onMouseOver, onMouseOut }

	return { bind, isHovered }
}