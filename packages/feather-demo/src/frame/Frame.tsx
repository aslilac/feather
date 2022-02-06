import { Stack } from "feather";
import React, { memo, ReactNode } from "react";
import { chic, Stylist } from "react-chic";

import { Grid } from "./Grid";
import { Sidebar } from "./Sidebar";

import styles from "./Frame.module.scss";

export interface FrameProps {
	children?: ReactNode;
}

export const Frame = memo((props: FrameProps) => {
	const { children } = props;

	return (
		<Stylist styles={styles}>
			<chic.div cx="frame">
				<Sidebar>
					<Stack gap="sm">
						<h1>Controllers</h1>
						<a href="#">SelectionController</a>

						<h1>Elements</h1>
						<a href="#">Button</a>
						<a href="#">Flex / Line / Stack</a>
						<a href="#">KeyboardShortcut</a>
						<a href="#">Menu</a>
					</Stack>
				</Sidebar>
				<Grid>{children}</Grid>
			</chic.div>
		</Stylist>
	);
});
