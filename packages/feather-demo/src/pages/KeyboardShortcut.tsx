import { Box, KeyboardShortcut, Stack } from "feather";
import React, { memo } from "react";

export const Example = memo(() => {
	return (
		<Box>
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
		</Box>
	);
});
