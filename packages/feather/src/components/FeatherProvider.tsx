import React, { memo, ReactNode } from "react";
import { Stylist } from "react-chic";

import styles from "./Feather.module.scss";

interface FeatherProps {
	children?: ReactNode;
}

export const FeatherProvider = memo((props: FeatherProps) => {
	const { children } = props;

	return <Stylist styles={styles}>{children}</Stylist>;
});

FeatherProvider.displayName = "feather.FeatherProvider";
