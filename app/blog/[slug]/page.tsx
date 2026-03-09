import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostsMeta } from "@/libs/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { customComponents } from "@/app/components/MDXComponents";

export async function generateStaticParams() {
  const posts = getAllPostsMeta("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug, "blog");

    return (
      <article className="container px-5 py-24 mx-auto max-w-3xl mt-12 animate-fade-in-up">
        {/* LIGHT/DARK MODE FIX: Added hover:text-gray-900 for light mode */}
        <Link
          href="/blog"
          className="text-xounity-orange hover:text-gray-900 dark:hover:text-white transition-colors duration-300 mb-8 inline-block font-mono text-sm"
        >
          &lt;- Back to The Vault
        </Link>

        {/* LIGHT/DARK MODE FIX: border-gray-200 for light, border-gray-800 for dark */}
        <header className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-8">
          {/* LIGHT/DARK MODE FIX: text-gray-900 for light, text-white for dark */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.meta.title}
          </h1>
          <div className="flex items-center text-sm font-mono text-gray-500 gap-4">
            <span>{post.meta.date}</span>
            <span className="bg-xounity-orange/10 text-xounity-orange px-3 py-1 rounded-full text-xs font-bold tracking-widest">
              {post.meta.type}
            </span>
          </div>
        </header>

        {/* THE TYPOGRAPHY FIX: 'prose' makes markdown look good. 'dark:prose-invert' handles dark mode text colors! */}
        <div className="prose prose-lg dark:prose-invert prose-a:text-xounity-orange prose-img:rounded-xl max-w-none">
          <MDXRemote source={post.content} components={customComponents} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
};

export default BlogPost;
