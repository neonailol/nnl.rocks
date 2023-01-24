import { articles } from './bookmarks/articles';
import { books } from './bookmarks/books';
import { videos } from './bookmarks/videos';
import { Category } from './bookmarks/type';

export function bookmarks(): Array<Category> {
	return [books, articles, videos];
}

export function parseCategory(slug: string | string[] | undefined): string | undefined {
	if (slug === undefined) {
		return undefined;
	}
	if (Array.isArray(slug)) {
		return undefined;
	}
	if (slug.startsWith('category-')) {
		return slug.replace('category-', '').replace(/-tag-[\w-]+/, '')
	}
	return undefined;
}

export function parseTag(slug: string | string[] | undefined): string | undefined {
	if (slug === undefined) {
		return undefined;
	}
	if (Array.isArray(slug)) {
		return undefined;
	}
	if (slug.indexOf('tag-') >= 0) {
		return slug.replace('category-', '').replace(/([\w-]*)tag-([\w-]+)/, '$2')
	}
	return undefined;
}