import Image from "next/image";
import Link from "next/link";
import { styled } from "../components";
import { Flex } from "../components/base/Flex";

export default function NotFound() {
	return (
		<NotFoundStyled
			flexDirection="row"
			flexWrap="wrap"
			alignItems="center"
			alignContent="center"
			justifyContent="center"
		>
			<LogoPanic>
				<Image
					src="/static/images/svg/logo-panic.svg"
					width={350}
					height={350}
					alt="Panic logo"
				/>
			</LogoPanic>

			<NotFoundContent flexDirection="column">
				<h1>404 Not Found</h1>
				<h3>Desculpa mas ainda não desenvolvi essa parte...</h3>

				<Link href="/">ir para home</Link>
			</NotFoundContent>
		</NotFoundStyled>
	);
}

const NotFoundStyled = styled(Flex, {
	width: "100%",
	height: "100vh",
});

const LogoPanic = styled("div", {
	maxWidth: 350,
	width: "100%",
});

const NotFoundContent = styled(Flex, {
	padding: "$1",

	"h1,h3": {
		fontFamily: "Hind Siliguri",
	},

	h1: {
		color: "$green100",
	},

	h3: {
		color: "$green400",
		fontWeight: "normal",
		opacity: 0.7,
	},

	a: {
		alignSelf: "flex-end",
		padding: "$1 $2",
		marginTop: "$2",
		backgroundColor: "$green200",
		borderRadius: "$1",
		color: "white",
		textTransform: "uppercase",
	},
});
