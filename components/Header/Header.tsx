import React, { useState } from 'react'
import { Logo } from '../Logo';
import { Navbar } from "./Navbar";
import { IconButton } from '../IconButton';
import styled from "@emotion/styled"
import { useTheme } from '@emotion/react';
import { Box }  from '../Box';
import Link from "next/link"
import { Container } from '../Container';

const HeaderStyled = styled.header`
    padding:${({theme}) => `${theme.spaces[3]} 0`};
    border-bottom: 1px solid ${({ theme }) => theme.colors.contrastLower};
`;

const Header = () => {
    const { toggleTheme, colors, mode } = useTheme();

    return (
        <HeaderStyled>
            <Container>
                <Box d="flex" alignItems="center" gap={[2, 6]}>
                    <div>
                    <Link href="/">
                        <a>
                            <Logo position="start" />
                        </a>
                    </Link>
                    </div>
                    <Box order={[1, 0]}>
                        <Navbar label='principal' />
                    </Box>
                    <Box flexGrow={1} />
                    <IconButton icon={ mode === "light" ? "sun": "moon"} color={colors.contrastMedium} onClick={toggleTheme} />
                </Box>
            </Container>
        </HeaderStyled>
    );
};

export default Header