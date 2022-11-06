import { getAllFiles, getMetaDataFile, getContent } from "./data"
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const getPostFiles = () => getAllFiles("post");
const formatDate = (date: string): string => {
    const dateObject = new Date(date)
    return dateObject.toLocaleDateString("es-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
}

export type Post = {
    title: string;
    content: MDXRemoteSerializeResult
    date: string;
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
    const file = `${slug}.mdx`;
    const content = await getContent<Post>("post", file);

    return {
        ...content,
         date: formatDate(content.date),
    };
}

export const getAllSlugs = async () => {
    const files = await getPostFiles()
    return files.map(file => file.replace(/\.mdx$/, ""))
}

const orderByDate = (prev: string, current: string ) =>
  new Date(current).getTime() - new Date(prev).getTime();


export const getAllPostsMetadata = async() => {
    const files = await getPostFiles()
    const filesMetadata = await Promise.all(files.map(file => getMetaDataFile("post", file)))

    return filesMetadata
        .sort((prev, current) => orderByDate(prev.date, current.date))
        .map(post => ({
            ...post,
            date: formatDate(post.date),
        }))
}