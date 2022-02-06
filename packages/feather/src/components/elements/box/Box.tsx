import React, { memo, ReactNode } from "react";
import { chic, Stylist } from "react-chic";

import styles from "./Box.module.scss";

interface BoxProps {
	children?: ReactNode;
}

export const Box = memo((props: BoxProps) => {
	const { children } = props;

	return (
		<Stylist styles={styles}>
			<chic.div cx="box">{children}</chic.div>
		</Stylist>
	);
});
