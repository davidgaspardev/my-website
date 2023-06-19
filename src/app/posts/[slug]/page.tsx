import { Metadata } from "next";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../../../helpers/blog";
import GithubIcon from "../../../../public/static/images/svg/icon-github-fixed.svg";
import Link from "next/link";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  console.log("generateMetadata call getPostBySlug:", props.params.slug);
  const { slug } = props.params;
  const { metadata } = await getPostBySlug(slug, ["metadata"]);

  return { title: metadata!.title };
}

export function generateStaticParams() {
  console.log("generateStaticParams call getAllPosts");
  const allPost = getAllPosts(["slug"]);

  return allPost.map(({ slug }) => ({
    slug,
  }));
}

export default function PostPage(props: PostPageProps): JSX.Element {
  const { slug } = props.params;
  console.log("PostPage call getPostBySlug:", slug);
  const { content } = getPostBySlug(slug, ["content"]);

  return (
    <div className="w-full pt-[65px]">
      <div className="blog-style" dangerouslySetInnerHTML={{ __html: content! }} />
      <GithubLink
        url={`https://github.com/davidgaspardev/my-website/tree/main/src/contents/${slug}.md`}
      />
    </div>
  );
}

type GithubLinkProps = {
  url: string;
};

function GithubLink(props: GithubLinkProps) {
  const { url } = props;

  return (
    <Link
      href={url}
      className="fixed bottom-0 right-0 w-20 h-20 rotate-90"
      target="_blank"
    >
      <Image
        // className="fixed bottom-0 right-0 w-20 h-20 rotate-90"
        src={GithubIcon}
        alt="Github icon"
      />
    </Link>
  );
}
