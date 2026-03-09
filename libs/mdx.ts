import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXPost, Frontmatter } from "@/types/content";

const rootDirectory = path.join(process.cwd(), "content");

/**
 * Fetches a single post by its filename (slug)
 */
export const getPostBySlug = (slug: string, folder: string): MDXPost => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, folder, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  // gray-matter rip the metadata away from the markdown body
  const { data, content } = matter(fileContent);

  return {
    slug: realSlug,
    meta: data as Frontmatter,
    content,
  };
};

/**
 * Grabs every post in a specific folder and sorts them by date
 */
export const getAllPostsMeta = (folder: string): MDXPost[] => {
  const folderPath = path.join(rootDirectory, folder);

  if (!fs.existsSync(folderPath)) return [];

  const files = fs.readdirSync(folderPath);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file, folder));

  // Sort them so by newest
  return posts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
};
