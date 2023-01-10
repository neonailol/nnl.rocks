import { about } from '../../data/about'
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes'
import Favicon from '../../public/favicon.svg'
import Link from 'next/link';
import styles from './header.module.css'
import themeLightDark from '@iconify/icons-mdi/theme-light-dark';

export default function Header() {
	const { theme, setTheme } = useTheme()
	return (
		<>
			<header className={styles.header}>
				<nav>
					<div>
						<Link href={"/"} className={styles.logo}>
							<Favicon />
							<h1>{about.name}</h1>
						</Link>
						<Link href={"/bookmarks"} className={styles.bookmarks}>
							<h2>Bookmarks</h2>
						</Link>
						<button className={styles.theme} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
							<Icon icon={themeLightDark} />
						</button>
					</div>
				</nav>
			</header>
		</>
	)
}