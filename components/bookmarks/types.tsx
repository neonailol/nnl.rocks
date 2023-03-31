import { Bookmark, CategoryType } from "../../data/bookmarks/types";

export interface BookmarkView {
	type: CategoryType,
	title: string,
	link: string,
	date: string,
	tags: Array<string>
}

export default function asView(bookmark: Bookmark): BookmarkView {
	return {
		type: bookmark.category,
		title: bookmark.title,
		link: bookmark.link,
		date: bookmark.published_at,
		tags: bookmark.tags
	}
}