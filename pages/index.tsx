import { about } from '../data/about'
import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header';
import Main from '../components/main';

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
			<Main />
			<Footer />
		</>
	)
}
