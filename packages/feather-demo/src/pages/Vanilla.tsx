import { Box, Stack } from "feather";
import React, { memo } from "react";

export const Example = memo(() => {
	return (
		<Box>
			<Stack gap="sm">
				<a>a</a>
				<a href="#">a</a>
				<abbr>abbr</abbr>
				<button>button</button>
				<code>code</code>
				<div>div</div>
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
			</Stack>
		</Box>
	);
});
