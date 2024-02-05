import { classNames } from '@/utils/classNames'
import { useScrolledStatus } from '@/hooks/useScrolledStatus'
import styles from './Header.module.scss'

const Header = () => {
	const isScrolled = useScrolledStatus()

	return (
		<header className={classNames(styles.header, isScrolled && styles.header_scrolled)}>
			header
		</header >
	)
}

export default Header