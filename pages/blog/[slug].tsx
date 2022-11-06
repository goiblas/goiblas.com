import { MDXRemote } from "next-mdx-remote";
import { getPostBySlug, getAllSlugs  } from "../../lib/blog";
import { Box } from "../../components/Box";
import styled from '@emotion/styled'
import type { Post as PostProps } from "../../lib/blog";
import { Codepen } from "../../components/Codepen";
import { Link } from "../../components/Link";

const components = {
  Codepen,
  a: Link,
}

const Date = styled.p`
   color: ${({ theme }) => theme.colors.contrastLow};
   margin: 0;
   font-size: 15px;
`

const Title = styled.h1`
  margin: 0 0 .5rem;
`
export default function Post({ title, date, content }: PostProps) {
  return (
    <>
      <Box pt={[8, null, 9]} pb={4}>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Box>
      <MDXRemote {...content} components={components} />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
    const { slug } = context.params as { slug: string };
    const post = await getPostBySlug(slug);
    return {
        props: {
            title: post.title,
            content: post.content,
            date: post.date,
        },
    };
}