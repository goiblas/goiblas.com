import React from "react";
import styled from '@emotion/styled'
import { Icon } from "../Icon";
import Image from "next/image";

type PostListItemProps = {
    url: string;
    title: string;
    description: string;
    image: string;
    color: string;
}

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.contrastHigh};
  margin-bottom: 12px;
`

const UrlLink = styled.a`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.contrastLow};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
`

const Description = styled.div`
    color: ${({ theme }) => theme.colors.contrastLow};
    margin-bottom: 16px;
`

const Card = styled.div`
    border-radius: 20px;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.contrastLower};
    overflow: hidden;
    display: grid;
    margin-bottom: 32px;
    margin-right: -16px;
    margin-left: -16px;
    ${({ theme }) => theme.breakpoints.md} {
        grid-template-columns: 1fr 1fr;
        margin-right: -32px;
        margin-left: -32px;
    }
`

const Content = styled.div`
    padding: 24px;
    font-size: 16px;
    line-height: 1.6;
    ${({ theme }) => theme.breakpoints.md} {
        padding: 32px;
    }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    ${({ theme }) => theme.breakpoints.md} {
        order: 1;
    }
`

const formatUrl = (url: string) => {
    return url.replace(/(^\w+:|^)\/\//, '');
}

const ProyectCard = ({ url, title, description, image, color }: PostListItemProps) => {
    return (
        <Card>
            <ImageContainer color={color}>
                <Image
                     src={image}
                     alt={title}
                     width={630}
                     height={417}
                     objectFit='cover'
                />
            </ImageContainer>
            <Content>
                <Title> {title} </Title>
                <Description> {description}</Description>
                <div>
                    <UrlLink href={url} target="_blank" rel="noopener noreferrer">
                        <Icon name="anchor" size={16} />
                        {formatUrl(url)}
                    </UrlLink>
                </div>
            </Content>
        </Card>
    )
}

export default ProyectCard