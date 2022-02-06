import React, { memo } from "react";
import { chic, ChicProps, Stylist } from "react-chic";

import styles from "./Button.module.scss";

interface ButtonProps extends ChicProps<"button"> {
	kind?: "default" | "primary";
	pill?: boolean;
	size?: "xs" | "sm" | "md";
	onActivate?: () => void;
}

export const Button = memo((props: ButtonProps) => {
	const {
		children,
		cx,
		kind = "default",
		onActivate,
		pill,
		size = "md",
		...attrs
	} = props;

	return (
		<Stylist styles={styles}>
			<chic.button
				cx={["button", `kind-${kind}`, `size-${size}`, { pill }, cx]}
				onMouseDown={onActivate}
				{...attrs}
			>
				{children}
			</chic.button>
		</Stylist>
	);
});

Button.displayName = "feather.Button";
