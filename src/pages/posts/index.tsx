import { GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import FloatingHeader from "../../components/FloatingHeader";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { getAllPosts } from "../../helpers/blog";
import { PostData, PostMetadata } from "../../helpers/types";

type Props = {
    posts: PostData[];
};

/**
 * Get static props
 * 
 * @returns {GetStaticPropsResult<Props>}
 */
export function getStaticProps(): GetStaticPropsResult<Props> {
    const posts = getAllPosts([ "metadata", "slug" ]);
  
    return {
      props: {
        posts
      }
    };
}

/**
 * 
 * @param {Props} props 
 * @returns 
 */
export default function Posts(props: Props): JSX.Element {
    // Destructuring assignment
    const { posts } = props;

    const router = useRouter();

    // Return component
    return (
        <main className="children-center">

            <FloatingHeader/>

            <div className="post-list">
                {
                    // Pender posts using metadata received by static properties
                    posts.map((post: PostData, index: number) => 
                        <Post
                            key={index}
                            onClick={() => router.push(`${window.location.pathname}/${post.slug}`)} 
                            data={post.metadata as PostMetadata} />
                    )
                }
            </div>

        </main>
    );
}