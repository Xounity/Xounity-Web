import React from "react";
import Link from "next/link";
import { getAllPostsMeta } from "@/libs/mdx";

const BlogFeed = () => {
  const posts = getAllPostsMeta("blog");

  return (
    <section className="body-font mt-32 container mx-auto px-5 min-h-screen animate-fade-in-up">
      <div className="mb-12 border-b border-gray-200 dark:border-gray-800/50 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          The <span className="text-xounity-orange">Vault</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Systems-level thoughts, reverse-engineering, and Xounity updates.
        </p>
      </div>

      <div className="flex flex-col space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            /* LIGHT/DARK MODE FIX: Updated backgrounds and borders for both modes */
            className="group block p-8 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-xounity-orange dark:hover:border-xounity-orange transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 shadow-sm hover:shadow-md dark:shadow-none"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-xounity-orange transition-colors">
              {post.meta.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {post.meta.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm font-mono text-gray-500">
              <span>{post.meta.date}</span>
              <span className="bg-xounity-orange/10 text-xounity-orange px-3 py-1 rounded-full text-xs font-bold tracking-widest">
                {post.meta.type}
              </span>
            </div>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="text-gray-500 text-center py-20 font-mono">
            [ ERROR: No data found in the vault ]
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogFeed;
