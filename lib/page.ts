import { getAllFiles, getContent } from "./data"
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const getPageFiles = () => getAllFiles("page");

export type Page = {
    title: string;
    content: MDXRemoteSerializeResult;
    quote: string;
    author: string;
}

export const getPageBySlug = async (slug: string): Promise<Page> => {
    const file = `${slug}.mdx`;
    const content = await getContent<Page>("page", file);

    return content
}

export const getAllSlugs = async () => {
    const files = await getPageFiles()
    return files.map(file => file.replace(/\.mdx$/, ""))
}
