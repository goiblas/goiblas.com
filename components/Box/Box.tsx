import React, { useMemo, forwardRef } from "react";
import { jsx } from "@emotion/react";
import getCss from "./css";
import { BoxProps } from "./BoxProps"
import { useTheme } from  '@emotion/react';
import { isStyleProperty, StyleProps } from "./styleSystem";

const defaultElement = "div";

export type PolymorphicRef<
  C extends React.ElementType
> = React.ComponentPropsWithRef<C>['ref']

type ObjectProps = {
    [key: string]: unknown;
}

const extractStyleProps = (props: ObjectProps): [StyleProps, ObjectProps] => {
    const styles: any = {};
    const otherProps: ObjectProps = {};

    Object.entries(props).forEach(([key, value]) => {     
        const container = isStyleProperty(key) ? styles : otherProps;
        container[key] = value;
    })

    return [styles, otherProps];
}

type BoxComponent = <C extends React.ElementType = typeof defaultElement>(
    props: BoxProps<C>,
) => React.ReactElement | null;

const Box: BoxComponent = forwardRef(<E extends React.ElementType = typeof defaultElement>(
    props: BoxProps<E>,
    ref: PolymorphicRef<E>
) => {
    const theme = useTheme();
    const { as = defaultElement, inline = false, ...rest } = props;

    const [allStyleProps, otherProps] = useMemo(() => extractStyleProps(rest), [rest]);
    const css = useMemo(() => { 
        const cssWithTheme = getCss(allStyleProps, theme)
        return { 
            ...(inline && { display: "inline-block" }),
            ...cssWithTheme
        }
    }, [allStyleProps, inline, theme]);

    return jsx(as, { css, ref, ...otherProps });
});

// @ts-ignore
Box.displayName = "Box";

export default Box;

