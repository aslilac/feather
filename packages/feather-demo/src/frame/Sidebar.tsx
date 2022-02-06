import { Line, Stack } from "feather";
import React, { memo, ReactNode } from "react";
import { chic, Stylist } from "react-chic";

import featherSvg from "url:./feather.svg";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
	children?: ReactNode;
}

export const Sidebar = memo((props: SidebarProps) => {
	const { children } = props;

	return (
		<Stylist styles={styles}>
			<chic.div cx="sidebar">
				<Stack gap="lg">
					<Line gap="md">
						<chic.img cx="feather" src={featherSvg} />
						<span>Feather</span>
					</Line>
					{children}
				</Stack>
			</chic.div>
		</Stylist>
	);
});
