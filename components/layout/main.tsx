import Home from "../index/main"
import Bookmarks from "../bookmarks/main"

export enum LayoutType { Home, Bookmarks }

export default function Layout({ layoutType }: { layoutType: LayoutType }) {
	return (
		<>{content(layoutType)}</>
	)
}

function content(layoutType: LayoutType): JSX.Element {
	switch (layoutType) {
		case LayoutType.Home:
			return <><Home /></>
		case LayoutType.Bookmarks:
			return <><Bookmarks /></>
		default:
			throw new Error(`Unknown layoutType ${layoutType}`)
	}
}