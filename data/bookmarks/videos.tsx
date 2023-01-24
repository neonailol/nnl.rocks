import { Category, CategoryType } from "./type"

export const videos: Category = {
	title: "Videos",
	type: CategoryType.Video,
	bookmarks: [
		{
			title: 'A Firehose of Rust, for busy people who know some C++ ',
			link: 'https://youtu.be/IPmRDS0OSxM',
			date: '2021-06-01',
			tags: ['Programming', 'Rust', 'C++'],
		},
	]
}
