import React from "react";
import { StartLogo } from "./StartLogo";
import { EndLogo } from "./EndLogo";
import { useTheme } from "@emotion/react";

export type InnerLogoProps = {
    primaryColor: string
    secondaryColor: string
}

type LogoProps = {
    position: "start" | "end"
}

const logoByPosition = {
    start: StartLogo,
    end: EndLogo
}

const Logo = ({ position }: LogoProps ) => {
    const { colors } = useTheme();
    const LogoComponent = logoByPosition[position];

    return (
        <LogoComponent
            primaryColor={colors.contrastHigher}
            secondaryColor={colors.contrastLow}
        />
    )
}

export default Logo