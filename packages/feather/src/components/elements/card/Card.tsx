import React, { memo, ReactNode } from "react";
import { chic, Stylist } from "react-chic";

import styles from "./Card.module.scss";

export interface CardProps {
	children: ReactNode;
	size: "sm" | "md" | "lg";
}

export const Card = memo((props: CardProps) => {
	const { children, size } = props;
	return (
		<Stylist styles={styles}>
			<chic.div cx={["card", size]}>{children}</chic.div>
		</Stylist>
	);
});
