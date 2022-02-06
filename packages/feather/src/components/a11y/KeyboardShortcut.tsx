import React, { memo } from "react";
import { chic, Stylist } from "react-chic";
import { Line } from "^/components";

import styles from "./KeyboardShortcut.module.scss";

type MappedKey = [cx: string, kv: string];

const MAC_SYMBOL_MAP = new Map<string, MappedKey>([
	["command", ["symbol", "\u2318"]],
	["alt", ["symbol", "\u2325"]],
	["shift", ["symbol", "\u21e7"]],
	["esc", ["symbol", "\u238b"]],
	["ctrl", ["symbol", "\u2303"]],
	["delete", ["symbol", "\u2326"]],
	["backspace", ["symbol", "\u232b"]],
	["space", ["space", "\u2423"]],
	// ["enter", ["enter", "\u23ce"]],
	["enter", ["enter", "\u21a9"]],
	["tab", ["symbol", "\u21e5"]],
	["left", ["arrow", "\u2190"]],
	["right", ["arrow", "\u2192"]],
	["up", ["arrow", "\u2191"]],
	["down", ["arrow", "\u2193"]],
	["fn", ["symbol", "\u2325"]],
]);

function getKey(key: string): MappedKey {
	if (key.match(/^f/i)) {
		return ["function", key];
	}

	return MAC_SYMBOL_MAP.get(key) || ["letter", key];
}

interface KeyboardShortcutProps {
	keys: string[];
}

export const KeyboardShortcut = memo((props: KeyboardShortcutProps) => {
	const { keys } = props;

	return (
		<Stylist styles={styles}>
			<Line>
				{keys.map((key, i) => {
					const [cx, kv] = getKey(key);

					// TODO: Would it be safe to make this `key={key}`?
					// Probably more "React"-y, but could be a duplicate
					return (
						<chic.kbd key={i} cx="kbd">
							<chic.span cx={cx}>{kv}</chic.span>
						</chic.kbd>
					);
				})}
			</Line>
		</Stylist>
	);
});

KeyboardShortcut.displayName = "feather.KeyboardShortcut";
