import { useRouter } from 'next/router';
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { getAllPosts, getPostBySlug } from "../../helpers/blog";
import { PostData } from "../../helpers/types";
import { Container } from '../../components/base/Container';
import Script from 'next/script';
import styled from 'styled-components';
import FloatingHeader from '../../components/FloatingHeader';

export function getStaticPaths(): GetStaticPathsResult {
    const allPost = getAllPosts([ 'slug' ]);

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

export function getStaticProps(props: StaticProps): GetStaticPropsResult<PostData> {
    // Destructuring assignment
    const { slug } = props.params;
    const postData = getPostBySlug(slug, [ "metadata", "content" ]);

    // Return props for component (React)
    return { 
        props: postData
    };
}

export default function Post(props: PostData): JSX.Element {
    const router = useRouter();
    // Destructuring assignment
    const { slug } = router.query;
    const { content } = props;

    // Return component
    return (
        <main>
            <FloatingHeader/>

            <Container>
                <Article>
                    <div dangerouslySetInnerHTML={{ __html: content! }} ></div>
                </Article>
            </Container>
            <Script src="/static/js/prism.js" type="text/javascript" />
        </main>
    );
}

const Article = styled.div`
    img {
        display: block;
        width: 100%;
        border-radius: 6px;
        margin-bottom: 45px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Readex Pro', sans-serif;
    }

    h1 {
        margin: 16px 0px;
    }

    h2 {
        margin: 12px 0px;
    }

    h3 {
        margin: 8px 0px;
    }

    h4, h5, h6, p {
        margin: 6px 0px;
    }

    p {
        font-family: 'Hind Siliguri', sans-serif;
    }

    pre {
        border-radius: 8px;
        margin: 16px 0px;
    }
`;