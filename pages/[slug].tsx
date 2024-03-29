import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPageBySlug, getAllSlugs  } from "../lib/page";
import { Box } from "../components/Box";
import styled from '@emotion/styled'
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "../components/Link";
import type { Page as PageProps } from "../lib/page";
import { Qoute } from "../components/Qoute";

const Title = styled.h1`
  margin: 0;
`

export default function Post({ title, content, author, quote }: PageProps) {
  return (
    <>
      <Box pt={[8, null, 9]} pb={4}>
        <Title>{title}</Title>
        <Qoute 
          content={quote}
          author={author}
        />
      </Box>
      <MDXRemote {...content} components={{
        Codepen: ({ id }) => <iframe height="265" style={{width: '100%'}} scrolling="no" title="Codepen" src={`https://codepen.io/jesusolazagoitia/embed/${id}?height=265&theme-id=dark&default-tab=result`} frameBorder="no" loading="lazy" allowFullScreen={true} />,
        ProjectCard,
        a: Link
      }} />
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
    const props = await getPageBySlug(slug);
    return {
        props,
    };
}