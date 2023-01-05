import { styled } from "..";

export const Flex = styled("div", {
	display: "flex",

	variants: {
		flexDirection: {
			column: {
				flexDirection: "column",
			},
			columnReverse: {
				flexDirection: "column-reverse",
			},
			row: {
				flexDirection: "row",
			},
			rowReverse: {
				flexDirection: "row-reverse",
			},
		},
		flexWrap: {
			wrap: {
				flexWrap: "wrap",
			},
			noWrap: {
				flexWrap: "nowrap",
			},
		},
		justifyContent: {
			center: {
				justifyContent: "center",
			},
		},
	},
});
