import type { ReactElement } from 'react'

import React from 'react'

export default function ThemeSwitcher(): ReactElement {
	const [theme, setTheme] = React.useState('dark')
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	// initially set the theme and "listen" for changes to apply them to the HTML tag
	React.useEffect(() => {
		document.querySelector('html').dataset.theme = theme
	}, [theme])
	return (
		<div className='mx-auto flex gap-4'>
			<p>Dark Mode:</p>
			<input
				onChange={toggleTheme}
				type='checkbox'
				className='toggle toggle-primary'
				checked={theme === 'dark'}
			/>
		</div>
	)
}
