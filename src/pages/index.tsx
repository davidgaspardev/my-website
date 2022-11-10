import styled from "styled-components";
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
		<HomePageStyled>
			<AppBar />

			<div className="banner children-center">
				<h1>
					Hi, I'm <span>David Gaspar</span>
				</h1>
				<h2>Software Developer</h2>
			</div>

			<div className="my-skills">
				<h3>My favorite skills</h3>
				<Flex flexWrap="wrap" justifyContent="center">
					{skills.map((skill, index) => (
						<Skill key={index} data={skill} />
					))}
				</Flex>
			</div>

			<Footer />
		</HomePageStyled>
	);
}

const HomePageStyled = styled.main`
	width: 100%;
	min-height: 100vh;

	.banner {
		width: 100%;
		height: 60vh;

		h1 {
			text-align: center;
			font-size: 42pt;
			background: linear-gradient(
				45deg,
				var(--color-keppel),
				var(--color-rich-black)
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			font-family: "League Spartan", sans-serif;

			span {
				font-weight: 800;
				white-space: nowrap;
			}
		}

		h2 {
			margin-top: 32px;
			font-size: 24pt;
			color: #5acbbd;

			font-family: "League Spartan", sans-serif;
		}
	}

	.my-skills {
		max-width: 900px;
		width: 100%;
		margin: 0px auto;

		> h3 {
			padding: 8px;
			margin: 8px;

			font-family: "League Spartan", sans-serif;

			border-left: 4px solid red;
		}
	}
`;
