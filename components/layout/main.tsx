import Home from "../index/main"
import Bookmarks from "../bookmarks/main"

export enum LayoutType { Home, Bookmarks }

export default function Layout({ layoutType, params }: { layoutType: LayoutType, params: any }) {
	return (
		<>{content(layoutType, params)}</>
	)
}

function content(layoutType: LayoutType, params: any): JSX.Element {
	switch (layoutType) {
		case LayoutType.Home:
			return <><Home /></>
		case LayoutType.Bookmarks:
			return <><Bookmarks data={params} /></>
		default:
			throw new Error(`Unknown layoutType ${layoutType}`)
	}
}