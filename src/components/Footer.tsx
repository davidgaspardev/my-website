import Image from "next/image";
import Link from "next/link";
import { styled } from ".";

/**
 * Footer
 *
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {
	return (
		<FooterComponent>
			<FooterCopyright>
				© 2022 David Gaspar. All rights reserved.
			</FooterCopyright>

			<FooterShares>
				<Link href="https://twitter.com/davidgaspardev" target="_blank">
					<Image
						width={24}
						height={24}
						src={"/static/images/svg/icon-share-twitter.svg"}
						alt="Twitter logo"
					/>
				</Link>

				<Link href="https://github.com/davidgaspardev" target="_blank">
					<Image
						width={24}
						height={24}
						src={"/static/images/svg/icon-share-github.svg"}
						alt="Github logo"
					/>
				</Link>
			</FooterShares>
		</FooterComponent>
	);
}

const FooterComponent = styled("footer", {
	maxWidth: 1000,
	width: "100%",
	height: 60,
	padding: "$3",

	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",

	martin: "0px auto",
});

const FooterCopyright = styled("h6", {
	opacity: 0.75,
	color: "$greenDark600",
});

const FooterShares = styled("div", {
	flexDirection: "row",

	img: {
		mx: "$1",
	},
});
