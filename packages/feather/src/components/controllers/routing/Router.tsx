import React, { createContext, memo, ReactNode } from "react";

interface RouterContextValue {
	segments: string[];
}

export const RouterContext = createContext<RouterContextValue>({
	segments: [],
});

export interface RouterProps {
	children?: ReactNode;
}

export const Router = memo((props: RouterProps) => {
	const { children } = props;

	return <RouterContext.Provider>{children}</RouterContext.Provider>;
});
