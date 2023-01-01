import { useRef } from "react";
import { styled } from ".";
// import styled from "styled-components";
import { PostMetadata } from "../helpers/types";
import Image from "next/image";
import { format } from "date-fns";

type Props = {
	onClick: () => void;
	data: PostMetadata;
};

export default function Post(props: Props): JSX.Element {
	const { data, onClick } = props;
	const dateRef = useRef<Date>(new Date(data.date));

	return (
		<PostWrapper>
			<PostContainer onClick={onClick}>
				<PostDate>
					<p>{format(dateRef.current, "dd/MM/yyyy")}</p>
				</PostDate>
				<PostTitle>
					<h1>{data.title}</h1>
				</PostTitle>
				<PostDescrition>
					<p>{data.excerpt}</p>
				</PostDescrition>
				<PostAuthor>
					<Image
						src={data.author.picture}
						width={32}
						height={32}
						alt="Author picture"
					/>
					<h4>{data.author.name}</h4>
				</PostAuthor>
				<PostTags>
					{data.labels?.map((label, index) => (
						<PostTag key={index}>{label}</PostTag>
					))}
				</PostTags>
			</PostContainer>
		</PostWrapper>
	);
}

const PostWrapper = styled("div", {
	maxWidth: 750,
	width: "100%",
	padding: "$4",
});

const PostContainer = styled("div", {
	display: "grid",
	gridTemplateAreas: `
		"date date date date"
		"title title title title"
		"description description description description"
		"author tags tags tags"
	`,
	gridTemplateColumns: "1fr 1fr 1fr 1fr",
	gap: "$2",

	"@media (max-width: 600px)": {
		gridTemplateAreas: `
			"author author date date"
			"title title title title"
			"description description description description"
			"tags tags tags tags"
		`,
	},
});

const PostDate = styled("div", {
	gridArea: "date",

	p: {
		opacity: 0.8,
		fontSize: "$2",
	},

	"@media (max-width: 600px)": {
		textAlign: "end",
	},
});

const PostTitle = styled("div", {
	gridArea: "title",
	color: "$greenDark600",
});

const PostDescrition = styled("div", {
	gridArea: "description",
});

const PostAuthor = styled("div", {
	gridArea: "author",

	display: "flex",
	flexDirection: "row",
	alignItems: "center",

	h4: {
		fontWeight: "600",
		color: "$greenDark600",
	},

	img: {
		borderRadius: 16,
		marginRight: "$2",
	},

	"@media (max-width: 600px)": {
		img: {
			display: "none",
		},
	},
});

const PostTags = styled("div", {
	gridArea: "tags",

	display: "flex",
	flexDirection: "row-reverse",
	alignItems: "center",
});

const PostTag = styled("span", {
	padding: "$1",
	borderRadius: "$1",
	mx: "$1",
	backgroundColor: "#00403a50",
	color: "$green600",
	fontFamily: "Readex Pro",
});
