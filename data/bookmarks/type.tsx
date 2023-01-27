
export interface Category {
	title: string,
	type: CategoryType,
	bookmarks: Array<Bookmark>
}

export enum CategoryType {
	Book, Article, Video
}

export interface Bookmark {
	title: string,
	link: string,
	date: string,
	tags: Array<string>,
	isbn?: number,
	alternative?: string
}