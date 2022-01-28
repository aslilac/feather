import React, { memo, ReactNode } from "react";

interface SelectionControllerProps {
	children?: ReactNode;
}

export const SelectionController = memo((props: SelectionControllerProps) => {
	const { children } = props;

	return <>{children}</>;
});

SelectionController.displayName = "feather.SelectionController";
