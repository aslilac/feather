import React, { memo, ReactNode, useEffect, useRef } from "react";
import { useStyles } from "react-chic";
import { createPortal } from "react-dom";

import styles from "./Portal.module.scss";

interface PortalProps {
	children: ReactNode;
}

export const Portal = memo((props: PortalProps) => {
	const { children } = props;

	const ref = useRef<HTMLDivElement | null>(null);
	const cx = useStyles(styles);

	if (!ref.current) {
		const root = document.createElement("div");
		root.classList.add(cx("portal"));
		ref.current = root;
	}

	useEffect(() => {
		document.body.appendChild(ref.current!);
		return () => {
			document.body.removeChild(ref.current!);
		};
	}, []);

	return createPortal(<>{children}</>, ref.current);
});

Portal.displayName = "feather.Portal";
