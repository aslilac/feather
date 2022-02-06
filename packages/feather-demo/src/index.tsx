import "feather/reset";
import {
	Box,
	Button,
	Card,
	FeatherProvider,
	KeyboardShortcut,
	Line,
	Menu,
	MenuItem,
} from "feather";
import React, { StrictMode } from "react";
import { render } from "react-dom";

import { Frame } from "./frame/Frame";
import { Example } from "./pages/Menu";

render(
	<StrictMode>
		<FeatherProvider theme="light">
			<Frame>
				<Box>
					<Line gap="lg" fill="first">
						<Button size="sm">Hi friend</Button>
						<Button pill onActivate={() => console.log("Hi friend!")}>
							Hi friend
						</Button>
						<Button pill kind="primary">
							Hi friend
						</Button>
					</Line>
				</Box>
				<Box>
					<Line gap="lg" fill="first">
						<Button size="xs">Hi friend</Button>
						<Button
							pill
							size="sm"
							onActivate={() => console.log("Hi friend!")}
						>
							Hi friend
						</Button>
						<Button pill kind="primary">
							Hi friend
						</Button>
					</Line>
				</Box>
				<Example />
				<Box>
					<Card>Hello!</Card>
					<Card size="md">Hello!</Card>
				</Box>
			</Frame>
		</FeatherProvider>
	</StrictMode>,
	document.querySelector("#main"),
);
