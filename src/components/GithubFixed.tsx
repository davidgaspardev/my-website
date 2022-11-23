import Link from "next/link";
import Image from "next/image";
import { styled } from ".";

type Props = {
	href: string;
};

/**
 * Tag Github
 *
 * @returns {JSX.Element}
 */
export default function GithubFixed(props: Props): JSX.Element {
	const { href } = props;

	return (
		<GithubFixedWrapper>
			<Link href={href}>
				<Image
					src="/static/images/svg/icon-github-fixed.svg"
					width={75}
					height={75}
					alt="Github logo"
				/>
			</Link>
		</GithubFixedWrapper>
	);
}

const GithubFixedWrapper = styled("span", {
	position: "fixed",
	right: 0,
	bottom: -5,

	transform: "rotate(90deg)",
	zIndex: 100,

	"@media (min-width: 1100px)": {
		position: "absolute",
		top: 0,
		right: 0,

		transform: "rotate(0deg)",
	},

	img: {
		cursor: "pointer",
	},
});
