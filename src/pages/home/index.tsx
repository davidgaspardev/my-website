import { GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import FloatingHeader from "../../components/FloatingHeader";
import Post from "../../components/Post";
import { getAllPosts } from "../../helpers/blog";
import { PostData, PostMetadata } from "../../helpers/types";
import styled from "styled-components";
import Link from "next/link";

type Props = {
    posts: PostData[];
};

export function getStaticProps(): GetStaticPropsResult<Props> {
    const posts = getAllPosts([ "metadata", "slug" ]);
  
    return {
      props: {
        posts
      }
    };
}

export default function HomePage(props: Props) {
    const { posts } = props;
    const router = useRouter();

    function renderPosts() {
        return posts.map((post, index) => <Post
            key={index}
            onClick={() => router.push(`${window.location.pathname}/${post.slug}`)} 
            data={post.metadata as PostMetadata}
        />);
    }

    return (
        <main className="children-center">
            <FloatingHeader />
            <TagGithub />

            { renderPosts() }
        </main>
    );
}

function TagGithub() {
    return (
        <TagGithubContainer>
            <Link href={"https://github.com/davidgaspardev/my-website"}>
                <Image
                    src="/static/images/svg/icon-github-fixed.svg"
                    width={75}
                    height={75}/>
            </Link>
        </TagGithubContainer>
    );
}

const TagGithubContainer = styled.span`
    position: fixed;
    top: auto;
    right: 0;
    bottom: 0;
    transform: rotate(90deg);
    z-index: 100;

    @media(min-width: 850px) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: auto;
        transform: rotate(0deg);
    }

    img {
        cursor: pointer;
    }
`;