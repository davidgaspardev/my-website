import { styled } from "../components";
import { Flex } from "../components/base/Flex";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import AppBar from "../components/v2/AppBar";
import { skills } from "../helpers/data/skills";

/**
 * Home Page
 *
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
	// Return component
	return (
		<HomePage>
			<AppBar />

			<Banner className="children-center">
				<h1>
					Hi, I{"'"}m <span>David Gaspar</span>
				</h1>
				<h2>Software Developer</h2>
			</Banner>

			<Skills>
				<h3>My favorite skills</h3>
				<Flex flexWrap="wrap" justifyContent="center">
					{skills.map((skill, index) => (
						<Skill key={index} data={skill} />
					))}
				</Flex>
			</Skills>

			<Footer />
		</HomePage>
	);
}

const HomePage = styled("main", {
	width: "100%",
	minHeight: "100vh",
});

const Banner = styled("div", {
	width: "100%",
	height: "60vh",

	h1: {
		textAlign: "center",
		fontSize: "42pt",

		linearGradient: "45deg, $green100, $green500",
		backgroundClip: "text",
		color: "transparent",

		fontFamily: "League Spartan",
	},

	h2: {
		marginTop: "$5",
		fontSize: "24pt",
		color: "$green200",

		fontFamily: "League Spartan",
	},
});

const Skills = styled("div", {
	maxWidth: 900,
	width: "100%",
	margin: "0px auto",

	">h3": {
		py: "$2",
		px: "$3",

		fontFamily: "League Spartan",
		color: "$green400",
	},
});
