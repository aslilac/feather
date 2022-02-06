import React, { memo, ReactElement } from "react";
import { chic, Stylist } from "react-chic";

import { MenuItem, MenuItemProps } from "./MenuItem";

import menuStyles from "./Menu.module.scss";
import itemStyles from "./MenuItem.module.scss";
const styles = { ...menuStyles, ...itemStyles };

interface MenuProps {
	// children: ReactNode;
	children: Array<ReactElement<MenuItemProps, typeof MenuItem>>;
}

export const Menu = memo((props: MenuProps) => {
	const { children } = props;

	return (
		<Stylist styles={styles}>
			<chic.menu cx="menu">{children}</chic.menu>
		</Stylist>
	);
});

Menu.displayName = "feather.Menu";
