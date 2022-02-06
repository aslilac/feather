import React, { memo, ReactNode, useEffect } from "react";
import { chic, Stylist, useStyles } from "react-chic";

import styles from "./Feather.module.scss";

interface FeatherProps {
	children?: ReactNode;
	theme?: "dark" | "light";
}

export const FeatherProvider = memo((props: FeatherProps) => {
	const { children, theme = "light" } = props;

	// const cx = useStyles(styles);

	// useEffect(() => {
	// 	document.body.classList.add(cx("feather-provider"));
	// 	return () => document.body.classList.remove(cx("feather-provider"));
	// }, []);

	return (
		<Stylist styles={styles}>
			<chic.div cx={["feather-provider", theme]}>{children}</chic.div>
		</Stylist>
	);
});

FeatherProvider.displayName = "feather.FeatherProvider";
