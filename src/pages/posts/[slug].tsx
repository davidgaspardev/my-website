import { useRouter } from "next/router";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { getAllPosts, getPostBySlug } from "../../helpers/blog";
import { PostData } from "../../helpers/types";
import { Container } from "../../components/base/Container";
import { useEffect } from "react";
import GithubFixed from "../../components/GithubFixed";
import AppBar from "../../components/v2/AppBar";
import { styled } from "../../components";

/**
 * Get static paths
 *
 * @returns {GetStaticPathsResult}
 */
export function getStaticPaths(): GetStaticPathsResult {
	const allPost = getAllPosts(["slug"]);

	return {
		paths: allPost.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}

type StaticProps = {
	params: {
		slug: string;
	};
};

/**
 * Get static props
 *
 * @param {StaticProps}
 * @returns {GetStaticPropsResult<PostData>}
 */
export function getStaticProps(
	props: StaticProps
): GetStaticPropsResult<PostData> {
	// Destructuring assignment
	const { slug } = props.params;
	const postData = getPostBySlug(slug, ["metadata", "content"]);

	// Return props for component (React)
	return {
		props: postData,
	};
}

/**
 * Post component
 *
 * @param {PostData} props
 * @returns {JSX.Element}
 */
export default function Post(props: PostData): JSX.Element {
	const router = useRouter();
	// Destructuring assignment
	const { slug } = router.query;
	const { content } = props;

	useEffect(() => {
		const script = document.createElement("script");

		script.async = true;
		script.src = "/static/js/prism.js";

		const main = document.getElementById(slug as string);
		main?.appendChild(script);
	}, [slug]);

	// Return component
	return (
		<main id={slug as string}>
			<AppBar />
			<GithubFixed
				href={`https://github.com/davidgaspardev/my-website/tree/main/src/contents/${slug}.md`}
			/>

			<Container>
				<Article>
					<div dangerouslySetInnerHTML={{ __html: content! }}></div>
				</Article>
			</Container>
		</main>
	);
}

const Article = styled("div", {
	img: {
		display: "block",
		width: "100%",
		borderRadius: "$3",
		margin: "$1 auto $10",

		// "@media (max-width: 840px)": {
		// 	borderRadius: 0,
		// },
	},

	"h1, h2, h3, h4, h5, h6": {
		fontFamily: "Readex Pro",
		color: "#1d1d1d",
	},

	h1: {
		margin: "$4 0px",
	},

	h2: {
		margin: "$3 0px",
	},

	h3: {
		margin: "$2 0px",
	},

	"h4, h5, h6, p": {
		margin: "$1 0px",
	},

	p: {
		fontFamily: "Hind Siliguri",
		color: "#1d1d1d",
	},

	pre: {
		borderRadius: "$1",
		margin: "$3 0px",
	},

	// $$codeSpace: "calc($1 - 2px)",

	"code:not([class])": {
		// padding: "$$codeSpace",
		padding: "calc($1 - 2px)",
		// margin: "0px $$codeSpace",
		margin: "0px calc($1 - 2px)",
		borderRadius: "$1",
		backgroundColor: "$green50",
	},
});
