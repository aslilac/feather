import "feather/reset";
import {
	Box,
	Button,
	FeatherProvider,
	KeyboardShortcut,
	Line,
	Menu,
	MenuItem,
	Stack,
} from "feather";
import React, { StrictMode } from "react";
import { render } from "react-dom";

import { Frame } from "./frame/Frame";

render(
	<StrictMode>
		<FeatherProvider theme="light">
			<Frame>
				<a>a</a>
				<a href="#">a</a>
				<abbr>abbr</abbr>
				<button>button</button>
				<code>code</code>
				<div>div</div>
				<Stack gap="sm">
					<KeyboardShortcut keys={["command", "alt", "shift", "esc"]} />
					<KeyboardShortcut keys={["ctrl", "delete"]} />
					<KeyboardShortcut keys={["backspace", "space", "enter", "tab"]} />
					<KeyboardShortcut keys={["fn", "a"]} />
					<KeyboardShortcut keys={["command", "f1", "f12"]} />
					<KeyboardShortcut keys={["ctrl", "alt", "b", "c"]} />
					<KeyboardShortcut keys={["left", "up", "right", "down"]} />
					{/* <kbd>{"\u2388" "control"}</kbd> */}
				</Stack>
				<main>main</main>
				<h1>h1</h1>
				<h2>h2</h2>
				<h3>h3</h3>
				<h4>h4</h4>
				<h5>h5</h5>
				<h6>h6</h6>
				<p>This is a paragraph! How exciting! Wahoo!</p>
				<pre>pre</pre>
				<section>section</section>
				<span>span</span>
				<p>Hello</p>
				<Box>
					<Line gap="lg" fill="first">
						<Button>Hi friend</Button>
						<Button>Hi friend</Button>
						<Button pill>Hi friend</Button>
					</Line>
				</Box>
				<Box>
					<Menu>
						<MenuItem label={<KeyboardShortcut keys={["command", "h"]} />}>
							Hello!
						</MenuItem>
						<MenuItem label={<KeyboardShortcut keys={["shift", "h"]} />}>
							Hey!
						</MenuItem>
						<MenuItem label={<>&rarr;</>}>Hi!</MenuItem>
					</Menu>
				</Box>
				<Box>
					<Menu>
						<MenuItem label={<KeyboardShortcut keys={["alt", "esc"]} />}>
							Hello hello hello hello hello!
						</MenuItem>
						<MenuItem label={<KeyboardShortcut keys={["fn", "left"]} />}>
							Hey!
						</MenuItem>
						<MenuItem label={<KeyboardShortcut keys={["f5"]} />}>
							Hi!
						</MenuItem>
					</Menu>
				</Box>
				<Box>
					<Menu>
						<MenuItem label={<KeyboardShortcut keys={["alt", "esc"]} />}>
							Hello hello hello hello hello hello hello hello hello hello
							hello hello hello hello hello hello hello!
						</MenuItem>
					</Menu>
				</Box>
				<Box>
					<Menu>
						<MenuItem label={<KeyboardShortcut keys={["command", "["]} />}>
							Hello!
						</MenuItem>
						<MenuItem label={<KeyboardShortcut keys={["shift", "space"]} />}>
							Hey!
						</MenuItem>
						<MenuItem divider />
						<span>Puppies</span>
						<MenuItem
							label={<KeyboardShortcut keys={["ctrl", "shift", "1"]} />}
						>
							Toby!
						</MenuItem>
						<MenuItem
							label={<KeyboardShortcut keys={["ctrl", "shift", "2"]} />}
						>
							Dot!
						</MenuItem>
						<MenuItem
							label={<KeyboardShortcut keys={["ctrl", "shift", "3"]} />}
						>
							August!
						</MenuItem>
					</Menu>
				</Box>
			</Frame>
		</FeatherProvider>
	</StrictMode>,
	document.querySelector("#main"),
);
