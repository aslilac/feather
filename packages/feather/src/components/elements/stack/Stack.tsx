import React, { memo } from "react";

import { Flex, FlexProps } from "../flex/Flex";

interface StackProps extends Omit<FlexProps, "direction"> {}

export const Stack = memo((props: StackProps) => {
	const { children, ...attrs } = props;

	return (
		<Flex direction="column" {...attrs}>
			{children}
		</Flex>
	);
});

Stack.displayName = "feather.Stack";
