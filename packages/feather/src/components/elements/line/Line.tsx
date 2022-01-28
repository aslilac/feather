import React, { memo } from "react";

import { Flex, FlexProps } from "../flex/Flex";

interface LineProps extends Omit<FlexProps, "direction"> {}

export const Line = memo((props: LineProps) => {
	const { children, ...attrs } = props;

	return (
		<Flex direction="row" {...attrs}>
			{children}
		</Flex>
	);
});

Line.displayName = "feather.Line";
