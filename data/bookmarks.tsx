import { articles } from './bookmarks/articles';
import { books } from './bookmarks/books';
import { Category } from './bookmarks/type';

export default function bookmarks(): Array<Category> {
	return [books, articles];
}
