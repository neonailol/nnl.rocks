import { about } from '../data/about'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<span>© 2023 {about.name}</span>
				<span>
					<a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
				</span>
				<span>
					<a href="https://nextjs.org/">next.js</a>
				</span>
				<span>
					<a href="https://tailwindcss.com/">tailwindcss</a>
				</span>
				<span>
					<a href="https://flowbite.com/">flowbite</a>
				</span>
				<span>
					<a href="https://iconify.design/">iconify</a>
				</span>
			</footer>
		</>
	)
}