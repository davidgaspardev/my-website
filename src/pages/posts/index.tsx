import { GetStaticPropsResult } from "next";
import Post from "../../components/Post";
import { getAllPosts } from "../../helpers/blog";
import { PostData, PostMetadata } from "../../helpers/types";

type Props = {
    posts: PostData[];
};

/**
 * Get static props
 * 
 * @returns {Promise<GetStaticPropsResult<Props>>}
 */
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const posts = await getAllPosts([ "metadata", "slug" ]);
  
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

    // Return component
    return (
        <div className="children-center">

            {
                posts.map((post: PostData) => 
                    <Post 
                        onClick={() => window.location.href = `${window.location.pathname}/${post.slug}`} 
                        data={post.metadata as PostMetadata} />
                )
            }

        </div>
    );
}