import { Category, CategoryType } from '../../data/bookmarks/type';
import asView from './types';
import list from '../../data/bookmarks';
import slugify from 'slugify';

export function bookmarks() {
	return list().flatMap(it => it.bookmarks.map(bookmark => asView(it, bookmark))).sort((l, r) => l.date.localeCompare(r.date));
}

export function categories() {
	return list().map(it => categoryView(it)).sort((l, r) => l.title.localeCompare(r.title))
}

function categoryView(it: Category): { title: string, slug: string } {
	return {
		title: it.title,
		slug: 'category-' + slugify(CategoryType[it.type], { lower: true, strict: true })
	}
}

export function tags() {
	const tags = bookmarks().flatMap(it => it.tags);
	return [...new Set(tags)].map(it => tagView(it)).sort((l, r) => l.title.localeCompare(r.title));
}

function tagView(it: string): { title: string, slug: string } {
	return {
		title: it,
		slug: 'tag-' + slugify(it, { lower: true, strict: true })
	}
}

export function latest(count: number) {
	return bookmarks().sort((l, r) => l.date.localeCompare(r.date)).reverse().slice(0, count);
}

export function slugs() {
	const cross = bookmarks().flatMap(c => c.tags.map(t => `category-${CategoryType[c.type]}-tag-${t}`))
	const all = [...tags().map(it => it.slug), ...categories().map(it => it.slug), ...cross];
	return [...new Set(all)].map(it => slugify(it, { lower: true, strict: true }));
}