
export interface Category {
	title: string,
	bookmarks: Array<Bookmark>
}

export interface Bookmark {
	title: string,
	link: string,
	date: string,
	tags: Array<string>
}