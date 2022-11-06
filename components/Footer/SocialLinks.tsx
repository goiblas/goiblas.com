import styled from "@emotion/styled";
import React from "react"
import { Icon, icons } from "../Icon";

type SocialLink = {
    icon: keyof typeof icons,
    url: string,
    label: string
}

const socialLinks: SocialLink[]  = [{
    label: "Github",
    url: "asdfasdf",
    icon: "github"
}, {
    label: "Twitter",
    url: "adsf",
    icon: "twitter"
}, {
    label: "Codepen",
    url: "asdf",
    icon: "codepen"
}]

const SocialLink = styled.a`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    font-size: 13px;
`
const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 24px;
    padding: 0;
    margin: 0;
`
export const SocialLinks = () => {
    return (
        <nav aria-label="Redes sociales">
            <List>
                {socialLinks.map((socialLink) => (
                    <li key={socialLink.label}>
                        <SocialLink href={socialLink.url} target="_blank" rel="noopener noreferrer">
                            <Icon size={20} name={socialLink.icon} />
                            {socialLink.label}
                        </SocialLink>
                    </li>
                ))}
            </List>
        </nav>
    )
}