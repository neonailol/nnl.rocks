import { about } from '../data/about'
import { Icon } from '@iconify/react/dist/offline';
import Image from 'next/image'
import SocialIcon from './social'
import styles from './about.module.css'

export default function About() {
	return (
		<>
			<section className={styles.about}>
				<Image src="/images/profile.jpg" priority alt={about.name} width={512} height={512} className="dark:ring-gray-50" />
				<h2>{about.title}</h2>
				{about.social.map(social => <a key={social.link} href={social.link}><Icon icon={SocialIcon(social.name)} /></a>)}
			</section>
		</>
	)
}