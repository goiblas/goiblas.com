import React  from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Box } from '../Box'

const Title = styled.h1`
    font-size: 19px;
    font-family: ${({ theme }) => theme.typography.family.body};
    color: ${({theme}) => theme.colors.contrastMedium};
    line-height: 1.5;
    font-weight: 300;
    padding: 0;
    margin: 0;

    strong {
        color: ${({theme}) => theme.colors.contrastHigh};
    }
    a, strong {
        font-weight: 550;
    }
    ${({theme}) => theme.breakpoints.sm} {
        font-size: 22px;
    }
`

const HeroImage = styled(Image)`
    border-radius: 50%;
`
const ImageContainer = styled.div`
    margin-bottom: ${({theme}) => theme.spaces[3]};
    width: 76px;

    ${({theme}) => theme.breakpoints.lg} {
        position: absolute;
        right: calc(100% + 36px);
        top: 0;
    }
`

type HeroProps = {
    children: React.ReactNode
    image: string
    alt: string
}

const Hero = ({ children, image, alt }: HeroProps) => {
    return (
        <Box py={[5, 6, null, 8]}>
            <Box pos="relative">
                <ImageContainer>
                    <HeroImage src={image} width={76} height={76} alt={alt} />
                </ImageContainer>
                <Title>{children}</Title>
            </Box>
        </Box>
    )
}

export default Hero