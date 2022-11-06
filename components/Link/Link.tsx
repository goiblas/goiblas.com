import styled from "@emotion/styled"

const Link = styled.a`
    color: ${({ theme }) => theme.colors.contrastHigh};
    font-weight: 600;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
`

export default Link