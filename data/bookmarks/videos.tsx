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
		},
		{
			title: 'Diffusion models from scratch in PyTorch',
			link: 'https://youtu.be/a4Yfz2FxXiY',
			date: '2022-07-18',
			tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Diffusion'],
		},
		{
			title: 'Diffusion Models | Paper Explanation | Math Explained',
			link: 'https://youtu.be/HoKDTa5jHvg',
			date: '2022-06-06',
			tags: ['Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Diffusion'],
		},
		{
			title: 'Diffusion Models | PyTorch Implementation',
			link: 'https://youtu.be/TBCRlnwJtZU',
			date: '2022-09-21',
			tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Diffusion'],
		},
		{
			title: 'VQ-GAN | Paper Explanation',
			link: 'https://youtu.be/wcqLFDXaDO8',
			date: '2022-02-16',
			tags: ['Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Vector Quantized'],
		},
		{
			title: 'VQ-GAN | PyTorch Implementation',
			link: 'https://youtu.be/_Br5WRwUz_U',
			date: '2022-02-16',
			tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Vector Quantized'],
		},
	]
}
