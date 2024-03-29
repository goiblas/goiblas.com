import fs from "fs"
import path from "path"
import * as matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd();

export const getAllFiles = async (route: string) => fs.readdirSync(path.join(root, "data", route))

const LIMIT_EXCERPT = 260

const getExcerpt = (content: string) => {
    const paragraphs = content.split("\n")
    const firstParagraph = paragraphs.find((line) => line.length > 0)

    if(!firstParagraph) return ""

    if(firstParagraph.length <= LIMIT_EXCERPT) {
        return firstParagraph.slice(0, firstParagraph.length - 1)
    }

    return firstParagraph.slice(0, LIMIT_EXCERPT)
}

export const getMetaDataFile = async (route: string, file: string) => {
    const { data, excerpt } = matter.read(path.join(root,"data", route, file), {
        excerpt: (file: any) => {
            file.excerpt = getExcerpt(file.content)

            return file;
        },
    })
    return {
        title: data.title,
        date: data.date,
        slug: file.replace(".mdx", ""),
        excerpt,
    }
}

export const getContent = async <T>(route: string, file: string): Promise<T> => {
    const pathFile = path.join(root,"data", route, file)

    const { content, data } = matter.read(pathFile)

    const source = await serialize(content, {})

    return { 
        ...data,
        content: source
     } as T
}