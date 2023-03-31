
export enum CategoryType {
	Book,
	Article,
	Video
}

export interface Bookmark {
	category: CategoryType,
	title: string,
	link: string,
	added_at: String,
	published_at: string,
	tags: Array<string>,
	isbn?: number,
	alternative?: string
}