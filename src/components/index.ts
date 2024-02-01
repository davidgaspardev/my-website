import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
	theme: {
		colors: {
			green50: "#a4ccc8",
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

			greenGray50: "#D3DDDC",
			greenGray100: "#B9CAC8",
			greenGray200: "#85A3A0",
			greenGray300: "#789996",
			greenGray400: "#6A8F8B",
			greenGray500: "#5D8681",
			greenGray600: "#49716C",
		},
		space: {
			1: "5px",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "30px",
			7: "35px",
			8: "40px",
			9: "45px",
			10: "50px",
		},
		sizes: {
			1: "5",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "30px",
			7: "35px",
			8: "40px",
			9: "45px",
			10: "50px",
		},
		radii: {
			1: "5px",
			2: "10px",
			3: "15px",
			4: "20px",
			5: "25px",
			6: "30px",
			7: "35px",
			8: "40px",
			9: "45px",
			10: "50px",
		},
		zIndices: {
			1: "100",
			2: "200",
			3: "300",
			4: "400",
			5: "500",
			10: "1000",
			max: "9999",
		},

		media: {
			bp1: "(min-width: 640px)",
			bp2: "(min-width: 768px)",
			bp3: "(min-width: 1024px)",
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
