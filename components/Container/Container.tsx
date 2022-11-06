import styled from "@emotion/styled"

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    padding-left: ${({theme}) => theme.spaces[4]};
    padding-right: ${({theme}) => theme.spaces[4]};
    ${({theme}) => theme.breakpoints.sm} {
        max-width: 600px;
    }
    ${({theme}) => theme.breakpoints.md} {
        max-width: 821px;
    }
`

export default Container