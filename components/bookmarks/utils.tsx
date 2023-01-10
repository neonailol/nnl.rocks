import list from '../../data/bookmarks';
import asView from './types';

export function bookmarks() {
	return list().flatMap(it => it.bookmarks.map(bookmark => asView(it, bookmark)));
}

export function categories() {
	return list().map(it => it.title).sort()
}

export function tags() {
	const tags = bookmarks().flatMap(it => it.tags).sort();
	return [...new Set(tags)];
}

export function latest(count: number) {
	return bookmarks().sort((l, r) => l.date.localeCompare(r.date)).reverse().slice(0, count);
}

function cross() {

}