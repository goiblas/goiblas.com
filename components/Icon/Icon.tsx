import React from "react";
import { Moon } from "./Moon";
import { Sun } from "./Sun";
import { Menu } from "./Menu";
import { Close } from "./Close";
import { Github } from "./Github";
import { Codepen } from "./Codepen";
import { Twitter } from "./Twitter";
import { Anchor } from "./Anchor";

export const icons = {
    moon: Moon,
    sun: Sun,
    menu: Menu,
    close: Close,
    github: Github,
    codepen: Codepen,
    twitter: Twitter,
    anchor: Anchor,
}

export type InnerIconProps = {
    size?: number;
    color?: string;
}

type IconProps = {
    name: keyof typeof icons,
} & InnerIconProps;

const Icon = ({ name, ...props }: IconProps) => {
    const IconComponent = icons[name];
    if(!IconComponent) return null;

    return <IconComponent {...props} />;
}

export default Icon