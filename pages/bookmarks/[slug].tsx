import { about } from '../../data/about'
import { bookmarksView, slugs } from '../../components/bookmarks/utils'
import { BookmarkView } from '../../components/bookmarks/types'
import { CategoryType } from '../../data/bookmarks/type'
import { GetStaticProps, GetStaticPaths } from 'next'
import { parseCategory, parseTag } from '../../data/bookmarks'
import Footer from '../../components/layout/footer'
import Head from 'next/head'
import Header from '../../components/layout/header';
import Layout, { LayoutType } from '../../components/layout/main';

export default function Bookmarks({ data }: { data: BookmarkView[] }) {
	return (
		<>
			<Head>
				<title>{about.name}</title>
				<meta name="description" content="Personal page by Neonailol" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			</Head>
			<Header />
			<Layout layoutType={LayoutType.Bookmarks} params={data} />
			<Footer />
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: slugs().map(it => asParams(it)),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const category = parseCategory(params?.slug);
	const tag = parseTag(params?.slug)
	const data = searchBookmarks(category, tag);
	return {
		props: {
			data
		}
	}
}

function asParams(slug: string) {
	return { params: { slug: slug } }
}

function searchBookmarks(category: string | undefined, tag: string | undefined) {
	if (category === undefined && tag == undefined) {
		return bookmarksView()
	}
	if (category !== undefined && tag == undefined) {
		return bookmarksView().filter(it => categoryFilter(it, category))
	}
	if (category === undefined && tag !== undefined) {
		return bookmarksView().filter(it => tagsFilter(it, tag))
	}
	if (category !== undefined && tag !== undefined) {
		return bookmarksView().filter(it => categoryFilter(it, category) && tagsFilter(it, tag))
	}
	return undefined
}

function tagsFilter(it: BookmarkView, tag: string): unknown {
	return it.tags.some(t => equals(t, tag))
}

function categoryFilter(it: BookmarkView, category: string): unknown {
	return equals(CategoryType[it.type], category)
}

function equals(l: string, r: string) {
	return l.replaceAll(' ', '-').localeCompare(r.replaceAll(' ', '-'), undefined, { sensitivity: 'accent' }) === 0;
}

