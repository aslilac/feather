import React, { memo, ReactNode } from "react";
import { chic } from "react-chic";

export interface MenuItemProps {
	children: ReactNode;
	divider?: false;
	label?: ReactNode;
	onActivate?: () => void;
}

export interface MenuItemDividerProps {
	divider: true;
}

type Props = MenuItemProps | MenuItemDividerProps;

export const MenuItem = memo((props: Props) => {
	const { divider } = props;

	if (divider) {
		return <hr />;
	}

	const { children, label, onActivate } = props;

	return (
		<chic.li cx="menu-item" onMouseDown={onActivate}>
			<chic.span cx="description">{children}</chic.span>
			{label && <chic.span cx="label">{label}</chic.span>}
		</chic.li>
	);
});

MenuItem.displayName = "feather.MenuItem";
