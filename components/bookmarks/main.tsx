import { bookmarks, categories, latest, tags } from "./utils";
import styles from './main.module.css'
import { Bookmark } from "../../data/bookmarks/type";
import { Icon } from "@iconify/react/dist/offline";
import CategoryIcon from "./icon";
import { BookmarkView } from "./types";

export default function Main() {
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
								{categories().map(it => <li key={it}>{it}</li>)}
							</ul>
						</section>
						<section>
							<h3>Tags</h3>
							<ul>
								{tags().map(it => <li key={it}>{it}</li>)}
							</ul>
						</section>
					</div>
					<section className={styles.list}>
						<ul>
							{latest(5).map(it => bookmark(it))}
						</ul>
					</section>
				</div>
			</main>
		</>
	)
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
