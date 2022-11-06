import { shortcodes, processors } from "./styleSystem";
import { Theme } from "@emotion/react";

import { StyleProps } from "./styleSystem";

/**
 * Expands object to syntax responsive style
 *
 * @example
 * expandResponsive({ mx: [1, 2] })
 * // or
 * expandResponsive({ mx: { base: 1, sm: 2 } })
 */
type StylePropsWithMediaQueries = StyleProps & { [key: string]: StyleProps };

const expandResponsive = (styles: StyleProps, theme: Theme): StylePropsWithMediaQueries => {
    const computedStyles: any = {};
    const medias = [null, ...Object.values(theme.breakpoints)];

    Object.entries(styles).forEach(([key, value]) => {
        if (!Array.isArray(value)) {
            computedStyles[key] = value;
            return;
        }

        const queries = value.slice(0, medias.length).length;
        
        for (let index = 0; index < queries; index += 1) {
            const media = medias[index];

            if (!media) {
                computedStyles[key] = value[index];
                continue;
            }

            if (value[index] == null) {
                continue;
            }

            computedStyles[media] = computedStyles[media] ?? {};

            computedStyles[media][key] = value[index];
        }
    })
    return computedStyles;
};

/**
 * Resolve theme values  
 *
 * @example
 * resolveTokenValue({ maxWidth: "md" })
 */
const resolveTokenValue = (token: string, value: unknown | unknown[], theme: Theme): unknown | unknown[] => {
    if(Array.isArray(value)) {
        return value.map(v => resolveTokenValue(token, v, theme));
    }

    const processor = processors.find(pro => pro.test(token));
    if (processor) {
        return processor.process(value, theme);
    }

    return value;
};

/**
 * Expand short codes css properties
 *
 * @example
 * expandShortCode({ mx: "md" })
 */
const expandShortCode = (styles: StyleProps): StyleProps => {
    const computedStyled: any = {};

    Object.entries(styles).forEach(([key, value]) => {
        if (key in shortcodes) {
            const styleProp = shortcodes[key];
            styleProp.forEach(prop => {
                computedStyled[prop] = value;
            });
        } else {
            computedStyled[key] = value;
        }
    })

    return computedStyled;
};

const resolveValues = (styles: StyleProps, theme: Theme): StyleProps => {
    const stylesWithValues: any = {};

    Object.entries(styles).forEach(([key, value]) => {
        stylesWithValues[key] = resolveTokenValue(key, value as unknown | unknown[], theme);
    })

    return stylesWithValues;
}

const css = (_styles: StyleProps, theme: Theme) => {
    /**
     * Converts shortcodes of style prop to valid
     * "mb" -> "marginBottom"
     */
    const stylesExpanded = expandShortCode(_styles);

    /**
     * Resolve theme values
     * 2 -> 1rem
     */
    const stylesResolved = resolveValues(stylesExpanded, theme);

    /**
     *  Allows pass array values
     *  maxWidth: [400px, 600px] -> maxWidth: 400px, "@media (max-width: 678px)": { maxWidth: 600px; }
     */
    const responsiveStyles = expandResponsive(stylesResolved, theme);

    return responsiveStyles;
};

export default css;
