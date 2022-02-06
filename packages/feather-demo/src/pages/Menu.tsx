import { Box, KeyboardShortcut, Menu, MenuItem, Stack } from "feather";
import React, { memo } from "react";

export const Example = memo(() => {
	return (
		<Stack gap="xl">
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
					<MenuItem label={<KeyboardShortcut keys={["f5"]} />}>Hi!</MenuItem>
				</Menu>
			</Box>
			<Box>
				<Menu>
					<MenuItem label={<KeyboardShortcut keys={["alt", "esc"]} />}>
						Hello hello hello hello hello hello hello hello hello hello hello
						hello hello hello hello hello hello!
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
						onActivate={() => console.log("Hi Toby!")}
					>
						Toby!
					</MenuItem>
					<MenuItem
						label={<KeyboardShortcut keys={["ctrl", "shift", "2"]} />}
						onActivate={() => console.log("Hi Dot!")}
					>
						Dot!
					</MenuItem>
					<MenuItem
						label={<KeyboardShortcut keys={["ctrl", "shift", "3"]} />}
						onActivate={() => console.log("Hi August!")}
					>
						August!
					</MenuItem>
				</Menu>
			</Box>
		</Stack>
	);
});
