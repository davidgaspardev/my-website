import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Field, PostData, PostMetadata } from "./types";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

// Directory root for blog contents
const contentsDirectory = join(process.cwd(), "src/contents");

/**
 * Get all posts (raw content)
 *
 * @param {Field[]} fields
 * @returns {PostData[]}
 */
export function getAllPosts(fields: Field[] = []): PostData[] {
  // Get all filenames from contents directory
  console.log("Contents directory:", contentsDirectory);
  const filenames = readdirSync(contentsDirectory, "utf-8");
  // Read all files (filnames)
  const posts: PostData[] = [];
  for (const filename of filenames) {
    posts.push(getPostBySlug(filename2slug(filename), fields));
  }

  // Sort content by date
  if (fields.indexOf("metadata") >= 0)
    posts.sort((a: PostData, b: PostData) => {
      const aDate = (a.metadata as PostMetadata).date;
      const bDate = (b.metadata as PostMetadata).date;
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });

  // Returns content list
  return posts;
}

function filename2slug(filename: string): string {
  return filename.replace(/\.md$/, "");
}

/**
 * Get all post data by slug
 *
 * @param {string} slug
 * @param {fields} fields
 * @returns {PostData}
 */
export function getPostBySlug(slug: string, fields: Field[] = []): PostData {
  const fullPath = join(contentsDirectory, `${slug}.md`);
  const fileContent = readFileSync(fullPath, "utf8");
  const { data: metadata, content } = matter(fileContent);

  const post: PostData = {};

  for (const field of fields) {
    switch (field) {
      case "metadata":
        post.metadata = metadata as PostMetadata;
        break;
      case "content":
        post.content = markdownToHtml(content);
        break;
      case "slug":
        post.slug = slug;
        break;
      default:
        throw Error("Field unknown");
    }
  }

  return post;
}

/**
 * Convert markdown to html
 *
 * @param {string} markdown
 * @returns {string}
 */
export function markdownToHtml(markdown: string) {
  const result = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(markdown);
  return result.toString();
}
