
import { books } from './bookmarks/books';
import { web } from './bookmarks/web';

module.exports = {
	latest: latest(5),
	tags: tags(),
	books: books,
	web: web,
}

const bookmarks = [...books.bookmarks, ...web.bookmarks];

function latest(count: number) {
	return bookmarks.sort((l, r) => l.date.localeCompare(r.date)).reverse().slice(0, count);
}

function tags() {
	const tags = bookmarks.flatMap(it => it.tags).sort();
	return [...new Set(tags)];
}

function categories() {
	return [books, web].map(it => it.title).sort()
}

function cross() {

}