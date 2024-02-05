import PropTypes from 'prop-types'
import { classNames } from '@/utils/classNames'
import styles from './Container.module.scss'

const Container = ({ className, children }) => {
	return (
		<div className={classNames(styles.container, className)}>{children}</div>
	)
}

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

export default Container