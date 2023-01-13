import { categories, latest, tags } from "./utils";
import { BookmarkView } from "./types";
import { Icon } from "@iconify/react/dist/offline";
import { useRouter } from 'next/router'
import CategoryIcon from "./icon";
import Link from "next/link";
import styles from './main.module.css'
import { parseCategory, parseTag } from "../../data/bookmarks";

export default function Main({ data }: { data: BookmarkView[] }) {
	const router = useRouter()
	const currentRoute = router.asPath.replace('/bookmarks/', '')
	const currentCategory = parseCategory(currentRoute);
	const currentTag = parseTag(currentRoute)
	return (
		<>
			<main>
				<div className={styles.content}>
					<section className={styles.header}>
						<h2>Random assortment of interesting links</h2>
					</section>
					<div className={styles.filters}>
						<section>
							<h3>Types</h3>
							<ul>
								{categories().map(it => asTagCloudElement(it, currentRoute, TagCloud.Types, currentCategory, currentTag))}
							</ul>
						</section>
						<section>
							<h3>Tags</h3>
							<ul>
								{tags(currentCategory).map(it => asTagCloudElement(it, currentRoute, TagCloud.Tags, currentCategory, currentTag))}
							</ul>
						</section>
					</div>
					<section className={styles.list}>
						<ul>
							{bookmarkList(data)}
						</ul>
					</section>
				</div>
			</main>
		</>
	)
}

function asTagCloudElement(
	it: { title: string; slug: string },
	route: string,
	tagCloud: TagCloud,
	currentCategory: string | undefined,
	currentTag: string | undefined
): JSX.Element {
	if (tagCloud == TagCloud.Types) {
		const category = parseCategory(it.slug);
		const categoryClass = currentCategory === category ? styles.active : undefined;
		return <li key={it.slug}><Link className={categoryClass} href={`/bookmarks/${it.slug}`}>{it.title}</Link></li>;
	}
	const tag = parseTag(it.slug);
	const tagClass = currentTag === tag ? styles.active : undefined;
	if (route.startsWith('category')) {
		const href = `/bookmarks/category-${currentCategory}-${it.slug}`
		return <li key={it.slug}><Link className={tagClass} href={href}>{it.title}</Link></li>;
	}
	return <li key={it.slug}><Link className={tagClass} href={`/bookmarks/${it.slug}`}>{it.title}</Link></li>;
}

function bookmarkList(data: BookmarkView[] | undefined) {
	if (data === undefined) {
		return latest(10).map(it => bookmark(it))
	}
	return data.map(it => bookmark(it))
}

function bookmark(it: BookmarkView): JSX.Element {
	return <>
		<li key={it.link}>
			<a href={it.link}>
				<Icon icon={CategoryIcon(it.type)} />
				<time dateTime={it.date}>{it.date}</time>
				<div>
					<h4>{it.title}</h4>
					<p>{it.link}</p>
				</div>
			</a>
		</li>
	</>;
}

enum TagCloud { Types, Tags }