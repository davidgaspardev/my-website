import Image from "next/image";
import { Flex } from "./base/Flex";
import { Text } from "./base/Text";

/**
 * Footer
 *
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {
	return (
		<Flex
			maxWidth={1000}
			width={"100%"}
			height={60}
			flexDirection={"row"}
			justifyContent={"space-between"}
			alignItems={"center"}
			margin={"0px auto"}
		>
			<Text as={"h6"} style={{ opacity: 0.75, color: "#003d3a" }}>
				© 2022 David Gaspar. All rights reserved.
			</Text>

			<Flex flexDirection={"row"}>
				<Image
					width={24}
					height={24}
					src={"/static/images/svg/icon-share-twitter.svg"}
					alt="Twitter logo"
				/>

				<Image
					width={24}
					height={24}
					src={"/static/images/svg/icon-share-github.svg"}
					alt="Github logo"
				/>
			</Flex>
		</Flex>
	);
}
