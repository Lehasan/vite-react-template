import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useWatcher } from "@/hooks/useWatcher"

const AnimatedElement = ({
	x = 0,
	y = 0,
	scale = 1,
	rotate = 0,
	opacity = 0,
	transformOrigin = 'center',
	duration = 1.4,
	delay = 0,
	easing = 'ease',
	once = false,
	threshold = 0,
	children
}) => {
	const [ref, isVisible] = useWatcher({ once, threshold });

	useEffect(() => {
		const animation = ref.current.animate({
			transformOrigin,
			translate: isVisible ? 0 : `${x}px ${y}px`,
			scale: `${isVisible ? 1 : scale}`,
			rotate: isVisible ? '0deg' : rotate + 'deg',
			opacity: isVisible ? 1 : opacity,
		}, {
			duration: duration * 1000,
			delay: delay * 1000,
			fill: 'forwards',
			easing
		})

		return () => setTimeout(() => {
			animation.finish()
		}, (duration + delay) * 1000)
	}, [ref, isVisible, x, y, scale, rotate, opacity, transformOrigin, duration, delay, easing])

	return (
		<div ref={ref}>{children}</div>
	)
}

AnimatedElement.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	scale: PropTypes.number,
	rotate: PropTypes.number,
	opacity: PropTypes.number,
	transformOrigin: PropTypes.string,
	duration: PropTypes.number,
	delay: PropTypes.number,
	easing: PropTypes.string,
	once: PropTypes.bool,
	threshold: PropTypes.number,
	children: PropTypes.node,
}

export default AnimatedElement