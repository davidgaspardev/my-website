import { styled } from "..";

export const Flex = styled("div", {
	display: "flex",

	variants: {
		flexDirection: {
			column: {
				flexDirection: "column",
			},
			"column-reverse": {
				flexDirection: "column-reverse",
			},
			row: {
				flexDirection: "row",
			},
			"row-reverse": {
				flexDirection: "row-reverse",
			},
		},
		flexWrap: {
			wrap: {
				flexWrap: "wrap",
			},
			"no-wrap": {
				flexWrap: "nowrap",
			},
		},
		justifyContent: {
			center: {
				justifyContent: "center",
			},
		},
		alignContent: {
			center: {
				alignContent: "center",
			},
		},
		alignItems: {
			center: {
				alignItems: "center",
			},
		},
	},
});
