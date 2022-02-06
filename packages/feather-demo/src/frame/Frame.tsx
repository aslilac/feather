import { Stack } from "feather";
import React, { memo, ReactNode } from "react";
import { chic, Stylist } from "react-chic";

import { Grid } from "./Grid";
import { Sidebar } from "./Sidebar";

import styles from "./Frame.module.scss";

interface FrameProps {
	children?: ReactNode;
}

export const Frame = memo((props: FrameProps) => {
	const { children } = props;

	return (
		<Stylist styles={styles}>
			<chic.div cx="frame">
				<Sidebar>
					<Stack gap="sm">
						<h1>Feather</h1>
						<a href="#">Hello</a>
					</Stack>
				</Sidebar>
				<Grid>{children}</Grid>
			</chic.div>
		</Stylist>
	);
});
