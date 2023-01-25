import { Category, CategoryType } from "./type"

export const videos: Category = {
	title: "Videos",
	type: CategoryType.Video,
	bookmarks: [
		{
			title: 'A Firehose of Rust, for busy people who know some C++',
			link: 'https://youtu.be/IPmRDS0OSxM',
			date: '2021-06-01',
			tags: ['Programming', 'Rust', 'C++'],
		},
		{
			title: 'Herbert Wolverson - Procedural Map Generation Techniques',
			link: 'https://youtu.be/TlLIOgWYVpI',
			date: '2020-10-15',
			tags: ['Programming', 'GameDev', 'Procedural Generation'],
		},
		{
			title: 'Cellular Automata & Procedural Generation | Game Development Tutorial',
			link: 'https://youtu.be/slTEz6555Ts',
			date: '2020-09-19',
			tags: ['Programming', 'GameDev', 'Procedural Generation'],
		}
	]
}
