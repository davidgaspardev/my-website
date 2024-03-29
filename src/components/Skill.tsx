"use client";

import { SkillInfo } from "../helpers/types";
import Image from "next/image";
import { styled } from ".";
import { useEffect, useId, useRef, useState } from "react";
import { hideScrollbar, showScrollbar } from "../utils/scrollbar";
import { keyframes } from "@stitches/react";

type Props = {
	data: SkillInfo;
};

export default function Skill(props: Props) {
	// Destructuring assignment
	const { iconPath, name, description } = props.data;

	const id = useId();
	const hoverRef = useRef<boolean>(false);

	const [isDescriptionVisible, setDescriptionVisible] =
		useState<boolean>(false);

	useEffect(() => {
		const card = document.getElementById(id) as HTMLDivElement;
		const cardImage = document.getElementById(
			`${id}-image`
		) as HTMLImageElement;

		card.onmouseover = () => {
			if (hoverRef.current) return;
			hoverRef.current = true;

			cardImage.style.transform = "scale(1.1)";
		};

		card.onmouseout = () => {
			if (!hoverRef.current) return;
			hoverRef.current = false;

			cardImage.style.transform = "scale(1)";
		};
	}, [id]);

	return (
		<>
			<SkillContainer>
				<Card
					id={id}
					onClick={() => {
						setDescriptionVisible(!isDescriptionVisible);
					}}
				>
					<CardImage>
						<Image
							id={`${id}-image`}
							src={iconPath}
							width={75}
							height={75}
							alt="Skill logo"
						/>
					</CardImage>
					<h3>{name}</h3>
				</Card>
			</SkillContainer>

			<DescriptionModal
				showDescription={isDescriptionVisible}
				description={description}
				onClose={() => setDescriptionVisible(false)}
			/>
		</>
	);
}

const SkillContainer = styled("div", {
	width: 180,
	height: 220,
	padding: 10,
});

const Card = styled("div", {
	width: "100%",
	height: "100%",
	borderRadius: 8,

	display: "flex",
	flexDirection: "column",
	cursor: "pointer",

	linearGradient: "$greenDark100, $greenDark500",

	h3: {
		textAlign: "center",
		color: "white",
		opacity: 0.9,
		padding: "$3",
		letterSpacing: "0.1em",

		fontFamily: "League Spartan",
	},
});

const CardImage = styled("div", {
	display: "flex",
	flex: 1,
	justifyContent: "center",
	alignItems: "center",

	img: {
		transitionDuration: "500ms",
		transitionPropety: "transform",
		transitionTimingFunction: "ease",
	},
});

function DescriptionModal(props: {
	showDescription: boolean;
	description: string;
	onClose?: () => void;
}): JSX.Element {
	const { showDescription, description, onClose } = props;
	const id = useId();
	const [digits, setDigits] = useState<string>(String());
	const [shouldStartDigitAnim, setShouldStartDigitAnim] =
		useState<boolean>(false);
	let timeoutDigitsSpeed: NodeJS.Timeout;

	function closeModal() {
		const decriptionModalElement = document.getElementById(id);
		if (!decriptionModalElement) return;

		decriptionModalElement.style.opacity = "0";

		setTimeout(() => {
			decriptionModalElement.style.display = "none";
			showScrollbar();
			setShouldStartDigitAnim(false);
			if (timeoutDigitsSpeed) clearTimeout(timeoutDigitsSpeed);
			if (onClose) onClose();
		}, 500);
	}

	function openModal() {
		hideScrollbar();

		const decriptionModalElement = document.getElementById(id);
		if (!decriptionModalElement) return;

		decriptionModalElement.style.display = "flex";

		setTimeout(() => {
			decriptionModalElement.style.opacity = "1";
			setShouldStartDigitAnim(true);
		}, 128);
	}

	function handleEscKey(event: KeyboardEvent) {
		if (event.code === "Escape") closeModal();
	}

	useEffect(() => {
		document.addEventListener("keydown", handleEscKey);

		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	}, []);

	useEffect(() => {
		if (showDescription) openModal();
	}, [showDescription, id]);

	useEffect(() => {
		const digitsSpeed = 50;

		if (shouldStartDigitAnim && digits.length < description.length) {
			timeoutDigitsSpeed = setTimeout(() => {
				setDigits(description.substring(0, digits.length + 1));
			}, digitsSpeed);
		}

		if (!shouldStartDigitAnim && digits.length) {
			setDigits(String());
		}
	}, [digits, description, shouldStartDigitAnim]);

	return (
		<DescriptionModalContainer id={id}>
			<DecriptionLogoImage
				src={"/static/images/svg/logo.svg"}
				width={60}
				height={60}
				alt={"Logo"}
			/>

			<DescriptionModalContent>
				<DescriptionDigits>
					{digits}
					<DescriptionDigitsCursor> ▋</DescriptionDigitsCursor>
				</DescriptionDigits>
			</DescriptionModalContent>

			<DescriptionModalClose onClick={() => closeModal()}>
				<h4>X</h4>
			</DescriptionModalClose>

			<DescriptionModalObs>
				<p>
					press <strong>ESC</strong> key to close
				</p>
			</DescriptionModalObs>
		</DescriptionModalContainer>
	);
}

const DescriptionModalContainer = styled("div", {
	position: "fixed",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,

	display: "none",
	opacity: 0,
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	"@bp3": {
		flexDirection: "row",
	},

	background: "#012128bd",
	zIndex: "$max",
	transition: "opacity ease 500ms",
});

const DecriptionLogoImage = styled(Image, {});

const DescriptionModalContent = styled("div", {
	maxWidth: 480,
	width: "100%",

	padding: "$5",
});

const DescriptionDigits = styled("p", {
	color: "white",
});

const cursorBlink = keyframes({
	"0%": {
		opacity: 0,
	},
	"50%": {
		opacity: 1,
	},
	"100%": {
		opacity: 0,
	},
});

const DescriptionDigitsCursor = styled("span", {
	animation: `${cursorBlink} 500ms infinite`,
});

const DescriptionModalClose = styled("div", {
	position: "absolute",
	top: "$2",
	right: "$2",

	cursor: "pointer",

	h4: {
		color: "white",
	},
});

const DescriptionModalObs = styled("div", {
	position: "absolute",
	bottom: 0,
	left: "calc(50% - (300px / 2))",

	maxWidth: 300,
	width: "100%",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",

	p: {
		color: "white",
		padding: "$1 $2",
		marginBottom: "$2",
		borderRadius: "$1",
		backgroundColor: "#FFFFFF32",
	},
});
