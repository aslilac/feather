import React, { memo } from "react";
import { chic, ChicProps, Stylist } from "react-chic";

import styles from "./Button.module.scss";

interface ButtonProps extends ChicProps<"button"> {
	kind?: "default" | "light";
	pill?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const { children, cx, kind = "default", pill, ...attrs } = props;

	return (
		<Stylist styles={styles}>
			<chic.button cx={["button", `kind-${kind}`, { pill }, cx]} {...attrs}>
				{children}
			</chic.button>
		</Stylist>
	);
});

Button.displayName = "feather.Button";
