import { db } from './bookmarks/db';
import { Bookmark } from './bookmarks/types';

export function bookmarks(): Array<Bookmark> {
	return db;
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