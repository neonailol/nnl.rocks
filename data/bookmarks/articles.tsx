import { Category, CategoryType } from "./type"

export const articles: Category = {
	title: "Articles",
	type: CategoryType.Article,
	bookmarks: [
		{
			title: 'Essential Books That Every Programmer Should Read',
			link: 'https://dmshvetsov.medium.com/essential-books-that-every-programmer-should-read-a61565095781',
			date: '2019-02-11',
			tags: ['Programming', 'Reading List'],
		},
		{
			title: 'Clean Architecture with Java 11',
			link: 'https://medium.com/slalom-build/clean-architecture-with-java-11-f78bba431041',
			date: '2019-02-04',
			tags: ['Java', 'Clean Architecture', 'Software Architecture'],
		},
		{
			title: 'The Forgotten History of OOP',
			link: 'https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f',
			date: '2018-11-01',
			tags: ['Programming', 'OOP', 'JavaScript', 'Functional Programming'],
		}
	]
}
