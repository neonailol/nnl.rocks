import Home from "../index/main"

export enum LayoutType { Home }

export default function Layout({ layoutType }: { layoutType: LayoutType }) {
	return (
		<>{content(layoutType)}</>
	)
}

function content(layoutType: LayoutType): JSX.Element {
	switch (layoutType) {
		case LayoutType.Home:
			return <><Home /></>
		default:
			throw new Error(`Unknown layoutType ${layoutType}`)
	}
}