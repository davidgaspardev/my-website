import Layout from "../../components/Layout";
import { getAllPosts } from "../../helpers/blog";
import PostList from "./PostList";

export default function PostsPage(): JSX.Element {
  const posts = getAllPosts(["metadata", "slug"]);

  return (
    <div className="pt-[75px]">
      <PostList posts={posts} />
    </div>
  );
}
