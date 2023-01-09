import { about } from '../data/about'
import styles from './skills.module.css'

export default function Skills() {
	return (
		<>
			<section className={styles.skills}>
				<h2>Skills</h2>
				<ul>
					{about.skills.map(it => <li key={it.toString()}>{it}</li>)}
				</ul>
			</section>
		</>
	)
}