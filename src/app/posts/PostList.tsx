"use client";

import { PostData } from "../../helpers/types";
import Post from "./PostItem";

type PostListProps = {
  posts: PostData[];
};

export default function PostList(porps: PostListProps): JSX.Element {
  return (
    <div className="container mx-auto max-w-[800px]">
      {porps.posts.map((post, index) => (
        <Post
          key={index}
          data={post.metadata!}
          onClick={() => window.open(`posts/${post.slug}`, "_self")}
        />
      ))}
    </div>
  );
}
