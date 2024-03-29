import type { NextPage, GetStaticProps } from "next"
import { getAllPostsMetadata } from "../lib/blog"
import { Hero } from "../components/Hero"
import { PostListItem } from "../components/PostListItem"
import { Box } from "../components/Box";
import styled from '@emotion/styled'

type PostMetadata = {
  title: string
  slug: string
  date: string
  excerpt: string
}

type HomeProps = {
  posts: PostMetadata[]
}

const Email = styled.a`
  color: ${({ theme }) => theme.colors.contrastHigh};
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
`

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Hero
        image="/avatar.png"
        alt="Jesús Olazagoitia"
      >
        <p>
        Hola! 👋 soy Jesús Olazagoitia, <strong>frontend</strong> en Banktrack, 
        especializado en contruir productos digitales, 
        escribiendo código sencillo y mantenible, últimamente
        utilizando <strong>React</strong> y <strong>Typescript</strong> 
        </p>
        <p>
          Ayudo a empresas a mejorar el frontend de sus aplicaciones, puedes contactar conmigo en <Email href="mailto:jesus.olazagoitia@gmail.com">jesus.olazagoitia@gmail.com</Email>
        </p>
      </Hero>
      <Box as="section" py={4} display="grid" gap={[6, 8]}>
        {posts.map((post) => (
          <PostListItem key={post.slug} {...post} />
        ))}
      </Box>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPostsMetadata()

  return {
    props: {
      posts,
    },
  }
}

export default Home
