import { Category, CategoryType } from "./type"

export const books: Category = {
	title: "Books",
	type: CategoryType.Book,
	bookmarks: [
		{
			title: 'Book 1',
			link: 'Book 1 Link',
			date: '2020-10-07',
			tags: ['qqq'],
		},
		{
			title: 'Book 2',
			link: 'Book 2 Link',
			date: '2011-10-07',
			tags: ['qqq', 'www'],
		},
		{
			title: 'Book 3',
			link: 'Book 3 Link',
			date: '2022-10-07',
			tags: ['eee'],
		}
	]
}
