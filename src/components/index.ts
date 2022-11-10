import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
	theme: {
		colors: {
			green100: "#12bca8",
			green200: "#0e9d8d",
			green300: "#097e71",
			green400: "#055f56",
			green500: "#035048",
			green600: "#00403a",

			greenDark100: "#0D534C",
			greenDark200: "#0A4B48",
			greenDark300: "#074243",
			greenDark400: "#04393F",
			greenDark500: "#02353D",
			greenDark600: "#00303A",
		},
		space: {
			1: "5px",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "30px",
			7: "35px",
		},
		sizes: {
			1: "5",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "30px",
			7: "35px",
		},
		radii: {
			1: "5px",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "30px",
			7: "35px",
		},
	},
	utils: {
		mx: (value: string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: string) => ({
			marginTop: value,
			marginBottom: value,
		}),

		px: (value: string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: string) => ({
			paddingTop: value,
			paddingBottom: value,
		}),

		// A property for applying width/height together
		size: (value: string) => ({
			width: value,
			height: value,
		}),

		// A property to apply linear gradient
		linearGradient: (value: string) => ({
			backgroundImage: `linear-gradient(${value})`,
		}),
	},
});
