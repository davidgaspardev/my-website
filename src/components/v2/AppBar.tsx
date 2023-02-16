import { styled } from "..";
import Image from "next/image";
import { useEffect } from "react";
import { links } from "../../helpers/data/links";
import Link from "next/link";

const APPBAR_ID = "app-bar";

export default function AppBar() {
	useEffect(() => {
		const appBar = document.getElementById(APPBAR_ID) as HTMLHeadingElement;

		appBar.style.top = "16px";
	}, []);

	return (
		<StyledAppBar id={APPBAR_ID}>
			<Link href="/">
				<Image
					src="/static/images/svg/logo.svg"
					width={35}
					height={35}
					alt="Logo"
				/>
			</Link>

			<Menu />
		</StyledAppBar>
	);
}

const StyledAppBar = styled("header", {
	zIndex: "$10",
	position: "fixed",
	top: -50,
	left: "50%",
	transform: "translateX(-50%)",

	maxWidth: 1000,
	width: "calc(100% - calc($4 * 2))",
	height: 50,
	padding: "0 $4",

	borderRadius: "$2",

	linearGradient: "to right, $green100, $green600",

	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",

	transition: "top 500ms",

	img: {
		cursor: "pointer",

		transitionDuration: "500ms",
		transitionProperty: "transform",
		transitionTimingFunction: "ease",

		"&:hover": {
			transform: "scale(1.1)",
		},
	},
});

function Menu() {
	function onClickMenu() {
		const menuBox = document.getElementById("menu-box") as HTMLElement;

		if (getComputedStyle(menuBox).display === "none") {
			// It's closed, then open menu
			menuBox.style.display = "block";
			setTimeout(() => {
				menuBox.style.opacity = "1";
				menuBox.style.top = "48px";
			}, 200);
		} else {
			// It's opened, then close menu
			menuBox.style.top = "32px";
			menuBox.style.opacity = "0";
			setTimeout(() => {
				menuBox.style.display = "none";
			}, 200);
		}
	}

	return (
		<StyledMenu>
			<div onClick={onClickMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<nav id="menu-box">
				<div className="arrow" />
				<ul>
					{links.map(({ path, name }, index) => (
						<li key={index}>
							<Link href={`/${path}`}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</StyledMenu>
	);
}

const StyledMenu = styled("div", {
	position: "relative",

	div: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",

		cursor: "pointer",

		width: 18,
		height: 14,

		span: {
			height: 2,
			with: "100%",
			borderRadius: 1,

			backgroundColor: "white",
		},

		transitionDuration: "500ms",
		transitionProperty: "transform",
		transitionTimingFunction: "ease",

		"&:hover": {
			transform: "scale(1.1)",
		},
	},

	nav: {
		position: "absolute",
		top: 32,
		right: -16,
		width: 120,
		borderRadius: "$1",

		display: "none",
		opacity: 0,

		transitionDuration: "300ms",
		transitionProperty: "opacity, top",
		transitionTimingFunction: "ease",

		backgroundColor: "$green300",

		div: {
			position: "absolute",
			top: -8,
			right: 17,

			width: 0,
			height: 0,
			borderLeft: "8px solid transparent",
			borderRight: "8px solid transparent",
			borderBottom: "8px solid $green300",
		},

		ul: {
			listStyle: "none",
			py: "$1",
		},

		li: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",

			"&:hover": {
				backgroundColor: "#ADADAD32",
			},

			a: {
				marginLeft: 10,
				py: 10,
				color: "white",

				fontFamily: "League Spartan",
				fontWeight: "500",
			},
		},
	},
});
