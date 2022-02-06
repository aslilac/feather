import { FeatherProvider } from "feather";
import React, { Children, memo, ReactNode } from "react";
import { chic, Stylist } from "react-chic";

import styles from "./Grid.module.scss";

interface GridProps {
	children?: ReactNode;
}

export const Grid = memo((props: GridProps) => {
	const { children } = props;

	return (
		<Stylist styles={styles}>
			<chic.div cx="grid">
				{Children.map(children, (child) => (
					<>
						<FeatherProvider theme="light">{child}</FeatherProvider>
						<FeatherProvider theme="dark">{child}</FeatherProvider>
					</>
				))}
			</chic.div>
		</Stylist>
	);
});
