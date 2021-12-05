import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { getAllPosts, getPostBySlug } from "../../helpers/blog";
import { PostData } from "../../helpers/types";
import { Container } from '../../components/base/Container';
import Script from 'next/script';

/**
 * Get static paths
 * 
 * @returns {Promise<GetStaticPathsResult>}
 */
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const allPost = await getAllPosts([ 'slug' ]);

    return {
        paths: allPost.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    }
}

type StaticProps = {
    params: {
      slug: string;
    };
}

/**
 * Get static props
 * 
 * @param {StaticProps}
 * @returns {Promise<GetStaticPropsResult<PostData>>}
 */
export async function getStaticProps(props: StaticProps): Promise<GetStaticPropsResult<PostData>> {
    // Destructuring assignment
    const { slug } = props.params;
    const postData = await getPostBySlug(slug, [ "metadata", "content" ]);

    // Return props for component (React)
    return { 
        props: postData
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

    // Return component
    return (
        <main>
            <Head>
                {/* <Link href="static/css/prism.css" /> */}
            </Head>
            <Container>
                <h1>{slug}</h1>
                <div dangerouslySetInnerHTML={{ __html: content! }} ></div>
            </Container>
            <Script src="/static/js/prism.js" type="text/javascript" />
        </main>
    );
}