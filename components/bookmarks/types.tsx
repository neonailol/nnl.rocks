import { Bookmark, Category, CategoryType } from "../../data/bookmarks/type";

export interface BookmarkView {
	type: CategoryType,
	title: string,
	link: string,
	date: string,
	tags: Array<string>
}

export default function asView(category: Category, bookmark: Bookmark): BookmarkView {
	return {
		type: category.type,
		title: bookmark.title,
		link: bookmark.link,
		date: bookmark.date,
		tags: bookmark.tags
	}
}