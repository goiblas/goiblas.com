import type { NextPage, GetStaticProps } from "next"
import { getAllPostsMetadata } from "../lib/blog"
import { Hero } from "../components/Hero"
import { PostListItem } from "../components/PostListItem"
import { Box } from "../components/Box";

type PostMetadata = {
  title: string
  slug: string
  date: string
  excerpt: string
}

type HomeProps = {
  posts: PostMetadata[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Hero
        image="/avatar.png"
        alt="Jesús Olazagoitia"
      >
        Hola! 👋 soy Jesús Olazagoitia, <strong>frontend</strong> en Banktrack, 
        especializado en contruir productos digitales, 
        escribiendo código sencillo y mantenible, últimamente
        utilizando <strong>React</strong> y <strong>Typescript</strong> 
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
