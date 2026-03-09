export type ContentType = "BLOG" | "NEWS" | "RELEASE" | "SPITBALL";

export interface Frontmatter {
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  type: ContentType;
  tags?: string[];
  coverImage?: string;
}

export interface MDXPost {
  slug: string;
  meta: Frontmatter;
  content: string; // The raw markdown text
}
