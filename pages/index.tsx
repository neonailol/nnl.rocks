import Head from 'next/head'
import Image from 'next/image'
import { about } from '../data/about'
import { Icon } from '@iconify/react';
import themeLightDark from '@iconify/icons-mdi/theme-light-dark';
import githubIcon from '@iconify/icons-fa-brands/github';
import twitterIcon from '@iconify/icons-fa-brands/twitter';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import { useTheme } from 'next-themes'
import Link from 'next/link';

let icons = new Map<string, any>([
	["github", githubIcon],
	["twitter", twitterIcon],
	["telegram", telegramIcon]
])

export default function Home() {
	const { theme, setTheme } = useTheme()
	return (
		<>
			<Head>
				<title>{about.name}</title>
				<meta name="description" content="Personal page by Neonailol" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			</Head>
			<header>
				<nav>
					<div>
						<Link href={"/"} id="header-logo">
							<Image src="/favicon.svg" alt="Site Logo" width={0} height={0} priority />
							<span>{about.name}</span>
						</Link>
						<button id="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
							<Icon icon={themeLightDark} />
						</button>
					</div>
				</nav>
			</header>
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
			<footer>
				<span>© 2023 Neonailol</span>
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
