import { Button, FeatherProvider, Line } from "feather";
import React, { StrictMode } from "react";
import { render } from "react-dom";

render(
	<StrictMode>
		<FeatherProvider>
			<Line gap="lg" fill="first">
				<Button>Hi friend</Button>
				<Button>Hi friend</Button>
				<Button>Hi friend</Button>
			</Line>
		</FeatherProvider>
	</StrictMode>,
	document.querySelector("#main"),
);
