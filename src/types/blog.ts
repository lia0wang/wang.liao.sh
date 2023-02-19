import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface rehypeRawFrontMatter {
	banner_alt?: string;
	banner_show?: boolean;
	banner?: string;
	date: string;
	description_show?: boolean;
	description?: string;
	title_prefix?: string;
	title: string;
}

export interface FrontMatter extends rehypeRawFrontMatter {
	slug: string;
}

export interface Post {
	frontmatter: FrontMatter;
	source: MDXRemoteSerializeResult;
}
