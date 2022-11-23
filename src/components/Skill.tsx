import { SkillInfo } from "../helpers/types";
import Image from "next/image";
import { styled } from ".";
import { useEffect, useId, useRef } from "react";

type Props = {
	data: SkillInfo;
};

export default function Skill(props: Props) {
	// Destructuring assignment
	const { iconPath, name, description } = props.data;

	const id = useId();
	const hoverRef = useRef<boolean>(false);

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
		<SkillContainer>
			<Card id={id}>
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
