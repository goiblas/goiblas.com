import React, { useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'
import styled from "@emotion/styled"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { IconButton } from "../IconButton"
import { useTheme } from "@emotion/react"
import { Box } from "../Box"
import { useMenu } from "../../hooks/useMenu"
import { NavLink } from "./NavLink"

const routes = [{
    path: '/',
    name: 'Blog'
}, {
    path: '/proyectos',
    name: 'Proyectos'
}, {
    path: '/sobre-mi',
    name: "Sobre mi"
}]

const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 27px;

    a {
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 2px;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.primary};
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.2s ease-in-out;
        }
        &[aria-current="page"]::after {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: scaleX(1);
        }
    }
`
const FloatNav = styled.div`
    position: absolute;
    width: 180px;
    top: 100%;
    right: 0;
    padding: 16px 24px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.bgPaper};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`
type NavbarProps = {
    label: string
}

export const Navbar = ({ label }: NavbarProps) => {
    const { asPath } = useRouter()
    const { colors } = useTheme()
    const isDesktop = useMediaQuery("sm")
    const {ref, isOpen, setIsOpen} = useMenu<HTMLDivElement>(false)
    
    if(isDesktop){
        return (
            <nav aria-label={label}>
                <NavList>
                    {routes.map((route) => (
                        <li key={route.name}>
                            <NavLink href={route.path} active={asPath === route.path}>
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </NavList>
            </nav>
        );
    }

    return (
        <Box as="nav" pos="relative" aria-label={label} ref={ref}>
            <IconButton icon={isOpen ? "close" : "menu"} color={colors.contrastMedium} onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <FloatNav>
                    <ul>
                      {routes.map((route) => (
                          <li key={route.name}>
                            <NavLink onClick={() => setIsOpen(false)} href={route.path} active={asPath === route.path}>
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                    </ul>
                </FloatNav>
            )}
        </Box>
    )
}