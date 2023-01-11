import { Category, CategoryType } from "./type"

export const articles: Category = {
	title: "Articles",
	type: CategoryType.Article,
	bookmarks: [
		{
			title: 'Web 1',
			link: 'Web 1 Link',
			date: '2020-11-07',
			tags: ['qqq', 'we ew'],
		},
		{
			title: 'Web 2',
			link: 'Web 2 Link111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
			date: '2013-10-07',
			tags: ['qqq', 'yy', 'ccc'],
		},
		{
			title: 'Web 3',
			link: 'Web 3 Link',
			date: '2009-10-07',
			tags: ['eee', 'asd fff qqq'],
		}
	]
}
