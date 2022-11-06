import React from "react"
import styled from "@emotion/styled"
import { icons, Icon } from "../Icon"

const StyledButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 6px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

type IconButtonProps = {
    icon: keyof typeof icons,
    color?: string,
    size?: number,
} & React.ComponentPropsWithoutRef<"button">


const IconButton = ({ icon, color = "currentColor", size = 24, ...props }: IconButtonProps) => {
    return (
        <StyledButton {...props}>
            <Icon color={color} name={icon} size={size} />
        </StyledButton>
    )
}

export default IconButton