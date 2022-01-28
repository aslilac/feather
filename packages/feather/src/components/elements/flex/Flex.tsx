import React, { memo } from "react";
import { chic, ChicProps, Stylist } from "react-chic";

import type { Gap } from "../../types";

import styles from "./Flex.module.scss";

export interface FlexProps extends ChicProps<"div"> {
	direction: "row" | "column";
	fill?: "first" | "last" | "even" | "none";
	gap?: Gap;
	reverse?: boolean;
	wrap?: "reverse" | "wrap" | boolean;
}

export const Flex = memo((props: FlexProps) => {
	const { children, cx, direction, fill, gap, reverse, wrap, ...attrs } = props;

	return (
		<Stylist styles={styles}>
			<chic.div
				cx={[
					direction,
					gap && `gap-${gap}`,
					{
						"wrap": wrap === true || wrap === "wrap",
						"wrap-reverse": wrap === "reverse",
						[`${direction}-reverse`]: reverse,
					},
					{
						"fill-first": fill === "first",
						"fill-last": fill === "last",
						"fill-even": fill === "even",
					},
				]}
				{...attrs}
			>
				{children}
			</chic.div>
		</Stylist>
	);
});

Flex.displayName = "feather.Flex";
