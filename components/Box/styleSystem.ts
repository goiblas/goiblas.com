// import Theme from "../ThemeProvider/theme";
import { BoxStyleProps } from "./BoxProps";
import { Theme } from  '@emotion/react';

type ShortCodes = {
  [key: string]: readonly string[];
}

export const shortcodes: ShortCodes = {
  "m": ["margin"],
  "mt": ["marginTop"],
  "mr": ["marginRight"],
  "mb": ["marginBottom"],
  "ml": ["marginLeft"],
  "mx": ["marginLeft", "marginRight"],
  "my": ["marginTop", "marginBottom"],
  "marginX": ["marginLeft", "marginRight"],
  "marginY": ["marginTop", "marginBottom"],
  "p": ["padding"],
  "pt": ["paddingTop"],
  "pr": ["paddingRight"],
  "pb": ["paddingBottom"],
  "pl": ["paddingLeft"],
  "px": ["paddingLeft", "paddingRight"],
  "py": ["paddingTop", "paddingBottom"],
  "paddingX": ["paddingLeft", "paddingRight"],
  "paddingY": ["paddingTop", "paddingBottom"],
  "maxW": ["maxWidth"],
  "maxH": ["maxHeight"],
  "minW": ["minWidth"],
  "minH": ["minHeight"],
  "w": ["width"],
  "h": ["height"],
  "d": ["display"],
  "pos": ["position"],
  "t": ["top"],
  "r": ["right"],
  "b": ["bottom"],
  "l": ["left"],
  "z": ["zIndex"],
} as const;

type StyleProperty = keyof BoxStyleProps;

export const styleProperties: readonly StyleProperty[] = [
  // shorthand properties
  "m", "mt", "mr", "mb", "ml", "mx", "my", "marginX", "marginY",
  "p", "pt", "pr", "pb", "pl", "px", "py", "paddingX", "paddingY",
  "maxW", "maxH", "minW", "minH", "w", "h", "d", "pos", "t", "r", "b", "l", "z",
  // longhand properties
  "margin", "marginTop", "marginRight", "marginBottom", "marginLeft",
  "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
  "maxWidth", "maxHeight", "minWidth", "minHeight", "width", "height",
  "display", "position", "top", "right", "bottom", "left", "zIndex",
  "overflow", "overflowX", "overflowY",
  "transform", "transformOrigin",
  "boxSizing", "textAlign",
  // flex
  "flex", "flexDirection", "flexWrap", "flexFlow", "flexGrow", "flexShrink",
  "flexBasis", "justifyContent", "alignItems", "alignContent", "order",
  "alignSelf", "justifySelf",
  // grid
  "gridTemplateColumns", "gridTemplate", "gridTemplateRows", "gridTemplateAreas",
  "gridAutoColumns", "gridAutoRows", "gridAutoFlow", "gridColumn", "gridRow",
  "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea",
  // gap
  "gap", "columnGap", "rowGap",
];

export const isStyleProperty = (property: string): property is StyleProperty => {
  return styleProperties.includes(property as StyleProperty);
}

export type StyleProps = {
  [key in keyof BoxStyleProps]: BoxStyleProps[key] | BoxStyleProps[key][];
}

type Processor = {
  test: (key: string) => boolean;
  process: (value: any, theme: Theme) => string;
}

export const processors: Processor[] = [
  {
    test: (key: string) => ["margin", "padding", "gap", "rowGap", "columnGap"].some(prop => key.startsWith(prop)),
    process: (value: any, theme: Theme) => theme.spaces[value] ?? value
  }
];