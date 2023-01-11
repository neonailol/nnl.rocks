import { bookmarks, categories, latest, slugs, tags } from "./utils";
import { BookmarkView } from "./types";
import { Icon } from "@iconify/react/dist/offline";
import CategoryIcon from "./icon";
import Link from "next/link";
import styles from './main.module.css'
import { CategoryType } from "../../data/bookmarks/type";

export default function Main({ data }: { data: BookmarkView[] }) {
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
								{categories().map(it => asTagCloudElement(it))}
							</ul>
						</section>
						<section>
							<h3>Tags</h3>
							<ul>
								{tags().map(it => asTagCloudElement(it))}
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

function asTagCloudElement(it: { title: string; slug: string; }): JSX.Element {
	return <li key={it.slug}><Link href={`/bookmarks/${it.slug}`}>{it.title}</Link></li>;
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
