import React from "react";
import Link from "next/link";
import styled from '@emotion/styled'

type PostListItemProps = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

const Title = styled.h2`
  margin: 0 0 2px;
`

const Date = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.contrastLow};
  font-size: 15px;
`

const ReadMore = styled.a`
  font-weight: 700;
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.contrastHigh};
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
`

const PostListItem = ({ slug, title, date, excerpt }: PostListItemProps) => {
    return (
        <div>
          <Title>
            <Link href={`/blog/${slug}`}>
              <a>
                {title}
              </a>
            </Link> 
          </Title>
          <Date>{date}</Date>

          <p>{excerpt} …  
            <Link href={`/blog/${slug}`} passHref>
              <ReadMore>Leer más</ReadMore>
            </Link>
          </p>
        </div>
    )
}

export default PostListItem