import { useEffect } from "react"
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import styles from './SwitchColorTheme.module.scss'

const SwitchColorTheme = () => {
	const isSystemThemeDark = useMediaQuery('(prefers-color-scheme: dark)')
	const colorThemeStorage = useLocalStorage('color-theme')

	const handleColorThemeToggle = () => {
		colorThemeStorage.setItem(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		!colorThemeStorage.item && colorThemeStorage.setItem(
			isSystemThemeDark ? 'dark' : 'light'
		)

		document.body.dataset.colorTheme = colorThemeStorage.item
	}, [isSystemThemeDark, colorThemeStorage, colorThemeStorage.item])

	return (
		<button onClick={handleColorThemeToggle} className={styles.button}>{colorThemeStorage.item}</button>
	)
}

export default SwitchColorTheme