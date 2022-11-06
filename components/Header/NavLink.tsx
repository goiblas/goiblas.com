import React from "react"
import Link from "next/link"
import styled from "@emotion/styled"

type NavLinkProps =  {
    href: string,
    children: React.ReactNode,
    onClick?: () => void,
    active?: boolean,
    className?: string
}

const Anchor = styled.a`
    display: block;
    padding: 12px 0 9px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .05em;
`;

export const NavLink = ({ href, onClick, children, className, active = false }: NavLinkProps) => {
    return (
        <Link href={href} passHref>
            <Anchor aria-current={active ? 'page' : undefined} onClick={onClick} className={className}>
                {children}
            </Anchor>
        </Link>
    )
}

