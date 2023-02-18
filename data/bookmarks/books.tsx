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
		},
		{
			title: 'The Tipping Point: How Little Things Can Make a Big Difference',
			link: 'https://www.amazon.com/Tipping-Point-Little-Things-Difference/dp/0316346624',
			date: '2002-01-07',
			tags: ['Psychology'],
			isbn: 9780316346627
		},
		{
			title: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
			link: 'https://dataintensive.net/',
			date: '2017-05-02',
			tags: ['Software Architecture', 'Big Data'],
			isbn: 9781449373320
		},
		{
			title: '지구 끝 의 온실: 김 초엽 장편 소설',
			link: 'http://www.yes24.com/Product/Goods/103026125',
			date: '2021-08-18',
			tags: ['Ficton', 'Science Fiction', 'Post Apocalyptic'],
			isbn: 9791191824001,
			alternative: 'The Greenhouse at the End of the Earth',
		},
		{
			title: 'Hands-on Rust: Effective Learning through 2D Game Development and Play',
			link: 'https://hands-on-rust.com/',
			date: '2021-08-03',
			tags: ['Rust', 'GameDev'],
			isbn: 9781680508161,
		},
		{
			title: 'Kafka: The Definitive Guide',
			link: 'https://www.oreilly.com/library/view/kafka-the-definitive/9781491936153/',
			date: '2017-10-10',
			tags: ['Kafka', 'Streaming', 'Java'],
			isbn: 9781491936153,
		},
		{
			title: 'Serious Cryptography: A Practical Introduction to Modern Encryption',
			link: 'https://nostarch.com/seriouscrypto',
			date: '2017-11-06',
			tags: ['Cryptography', 'Security'],
			isbn: 9781593278267,
		},
		{
			title: 'Practical Process Automation: Orchestration and Integration in Microservices and Cloud Native Architectures',
			link: 'https://processautomationbook.com/',
			date: '2021-03-16',
			tags: ['Software Architecture', 'Cloud Native', 'Microservices', 'BPMN'],
			isbn: 9781492061458,
		}
	]
}
