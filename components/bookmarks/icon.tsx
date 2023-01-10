import bookOpenPageVariantOutline from '@iconify/icons-mdi/book-open-page-variant-outline';
import articleIcon from '@iconify/icons-material-symbols/article';
import { IconifyIcon } from '@iconify/react/dist/offline';
import { CategoryType } from '../../data/bookmarks/type';

let icons = new Map<CategoryType, IconifyIcon>([
	[CategoryType.Book, bookOpenPageVariantOutline],
	[CategoryType.Article, articleIcon]
]);

export default function CategoryIcon(category: CategoryType): IconifyIcon {
	return icons.get(category)!;
}