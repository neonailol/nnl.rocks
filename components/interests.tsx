import { about } from '../data/about'
import styles from './interests.module.css'

export default function Interests() {
	return (
		<>
			<section className={styles.interests}>
				<h2>Interests</h2>
				<ul>
					{about.interests.map(it => <li key={it.toString()}>{it}</li>)}
				</ul>
			</section>
		</>
	)
}