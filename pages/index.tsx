import Head from 'next/head'
import Image from 'next/image'
import { about } from '../data/about'
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-fa-brands/github';
import twitterIcon from '@iconify/icons-fa-brands/twitter';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import Header from '../components/header';
import Footer from '../components/footer'

let icons = new Map<string, any>([
	["github", githubIcon],
	["twitter", twitterIcon],
	["telegram", telegramIcon]
])

export default function Home() {
	return (
		<>
			<Head>
				<title>{about.name}</title>
				<meta name="description" content="Personal page by Neonailol" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			</Head>
			<Header />
			<main>
				<div id="index">
					<div id="about">
						<Image src="/images/profile.jpg" priority alt={about.name} width={512} height={512} />
						<h2>{about.title}</h2>
						{about.social.map(social => <a key={social.link} href={social.link}><Icon icon={icons.get(social.name)} /></a>)}
					</div>
					<div id="interests">
						<h2>Interests</h2>
						<ul>
							{about.interests.map(it => <li key={it.toString()}>{it}</li>)}
						</ul>
					</div>
					<div id="skills">
						<h2>Skills</h2>
						<ul>
							{about.skills.map(it => <li key={it.toString()}>{it}</li>)}
						</ul>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
