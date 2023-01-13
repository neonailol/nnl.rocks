import { Category, CategoryType } from "./type"

export const books: Category = {
	title: "Books",
	type: CategoryType.Book,
	bookmarks: [
		{
			title: 'Five Lines of Code: How and when to refactor',
			link: 'https://www.manning.com/books/five-lines-of-code',
			date: '2021-10-26',
			tags: ['OOP', 'Refactoring'],
			isbn: 9781617298318
		},
		{
			title: 'Rust in Action: Systems programming concepts and techniques',
			link: 'https://www.manning.com/books/rust-in-action',
			date: '2021-08-10',
			tags: ['Rust', 'Systems Programming'],
			isbn: 9781617294556
		},
		{
			title: 'Programming Rust',
			link: 'https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/',
			date: '2021-07-20',
			tags: ['Rust', 'Systems Programming'],
			isbn: 9781492052548
		}
	]
}
