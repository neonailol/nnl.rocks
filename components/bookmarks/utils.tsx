import { bookmarks } from '../../data/bookmarks';
import { CategoryType } from '../../data/bookmarks/types';
import asView, { BookmarkView } from './types';
import slugify from 'slugify';

export function bookmarksView() {
	return bookmarks().map(it => asView(it)).sort((l, r) => l.date.localeCompare(r.date));
}

export function categories() {
	return Object.values(CategoryType).filter(isNaN as any).map(it => categoryView(it)).sort((l, r) => l.title.localeCompare(r.title))
}

function categoryView(it: string | CategoryType): { title: string, slug: string } {
	return {
		title: it.toString(),
		slug: 'category-' + slugify(it.toString(), { lower: true, strict: true })
	}
}

export function tags(category: string | undefined) {
	const tags = bookmarksView().filter(it => filterTags(it, category)).flatMap(it => it.tags);
	return [...new Set(tags)].map(it => tagView(it)).sort((l, r) => l.title.localeCompare(r.title));
}

function filterTags(it: BookmarkView, category: string | undefined) {
	if (category == undefined) {
		return true;
	}
	return !CategoryType[it.type].localeCompare(category, undefined, { sensitivity: 'accent' });
}

function tagView(it: string): { title: string, slug: string } {
	return {
		title: it,
		slug: 'tag-' + slugify(it, { lower: true, strict: true })
	}
}

export function latest(count: number) {
	return bookmarksView().sort((l, r) => l.date.localeCompare(r.date)).reverse().slice(0, count);
}

export function slugs() {
	const cross = bookmarksView().flatMap(c => c.tags.map(t => `category-${CategoryType[c.type]}-tag-${t}`))
	const all = [...tags(undefined).map(it => it.slug), ...categories().map(it => it.slug), ...cross];
	return [...new Set(all)].map(it => slugify(it, { lower: true, strict: true }));
}