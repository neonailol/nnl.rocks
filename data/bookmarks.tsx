
import Books from './bookmarks/books';
import Web from './bookmarks/web';

module.exports = {
	latest: getLatest(5),
	tags: getAllTags(),
	books: Books().elements,
	web: Web().elements,
}

function getLatest(count: number) {
	const all = [...Books().elements, ...Web().elements];
	return all.sort((l, r) => l.date.localeCompare(r.date)).reverse().slice(0, count);
}

function getAllTags() {
	const all = [...Books().elements, ...Web().elements];
	const tags = all.flatMap(l => l.tags).sort();
	return [...new Set(tags)];
}