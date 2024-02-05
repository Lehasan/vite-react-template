import PropTypes from 'prop-types'
import { smoothScrollTo } from '@/utils/smoothScrollTo'

const ScrollTo = ({ className, target, offset = 0, onClick, children, ...props }) => {
	const handleLinkClick = event => {
		event.preventDefault()
		onClick && onClick()

		switch (target) {
			case 'top':
				return smoothScrollTo(0)
			case 'bottom':
				return smoothScrollTo(document.body.scrollHeight)
		}

		const section = document.getElementById(target)

		if (!section) {
			return console.error(`Section '${target}' not found`)
		}

		smoothScrollTo(section.offsetTop + offset)
	}

	return (
		<a href="#" className={className} {...props} onClick={handleLinkClick}>{children}</a>
	)
}

ScrollTo.propTypes = {
	className: PropTypes.string,
	target: PropTypes.string.isRequired,
	offset: PropTypes.number,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
}

export default ScrollTo