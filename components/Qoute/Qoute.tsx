import React from "react";
import styled from '@emotion/styled'

type QouteProps = {
    content: string;
    author: string;
}

const Figure = styled.figure`
    margin: 0;
    padding: 12px 0 32px;
`
const Blockquote = styled.blockquote`
    font-size: 20px;
    line-height: 1.5;
    margin: 0 0 5px;
    padding: 0;
    font-style: normal;
    color: ${({ theme }) => theme.colors.contrastHigh};

    &::before,
    &::after {
        font-size: 48px;
        line-height: 1;
        color: ${({ theme }) => theme.colors.contrastLower};
        position: absolute;
        ${({ theme }) => theme.breakpoints.md} {
            font-size: 68px;
        }
    }
    &::after {
        content: '”';
        transform: translate(4px, -10%);
    }
    &::before {
        content: '“';
        transform: translate(-100%, -10%);
    }
`

const Author = styled.figcaption`
    color: ${({ theme }) => theme.colors.contrastLow};
`

const Qoute = ({ content, author }: QouteProps) => {
    return (
        <Figure>
            <Blockquote>
                {content}
            </Blockquote>
            <Author>{author}</Author>
        </Figure>
    )
}

export default Qoute