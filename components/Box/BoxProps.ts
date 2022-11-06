import type { Property } from 'csstype'
import { Theme } from "@emotion/react"

type ResponsiveArray<T> = Array<T | null>
type ResponsiveValue<T> = T | ResponsiveArray<T>

type ThemeTypings = {
    spaces: keyof Theme['spaces']
}

type Token<CSStype, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings 
    ? ResponsiveValue<CSStype | ThemeTypings[ThemeKey]>
    : ResponsiveValue<CSStype>

export type BoxStyleProps = {
    // display
    display?: Token<Property.Display>
    d?: Token<Property.Display>
    // margin
    margin?: Token<Property.Margin, "spaces">;
    marginTop?: Token<Property.MarginTop, "spaces">;
    marginRight?: Token<Property.MarginRight, "spaces">;
    marginBottom?: Token<Property.MarginBottom, "spaces">;
    marginLeft?: Token<Property.MarginLeft, "spaces">;
    marginX?: Token<Property.MarginLeft, "spaces">;
    marginY?: Token<Property.MarginTop, "spaces">;
    m?: Token<Property.Margin, "spaces">;
    mt?: Token<Property.MarginTop, "spaces">;
    mr?: Token<Property.MarginRight, "spaces">;
    mb?: Token<Property.MarginBottom, "spaces">;
    ml?: Token<Property.MarginLeft, "spaces">;
    mx?: Token<Property.MarginLeft, "spaces">;
    my?: Token<Property.MarginTop, "spaces">;
    // padding
    padding?: Token<Property.Padding, "spaces">;
    paddingTop?: Token<Property.PaddingTop, "spaces">;
    paddingRight?: Token<Property.PaddingRight, "spaces">;
    paddingBottom?: Token<Property.PaddingBottom, "spaces">;
    paddingLeft?: Token<Property.PaddingLeft, "spaces">;
    paddingX?: Token<Property.PaddingLeft, "spaces">;
    paddingY?: Token<Property.PaddingTop, "spaces">;
    p?: Token<Property.Padding, "spaces">;
    pt?: Token<Property.PaddingTop, "spaces">;
    pr?: Token<Property.PaddingRight, "spaces">;
    pb?: Token<Property.PaddingBottom, "spaces">;
    pl?: Token<Property.PaddingLeft, "spaces">;
    px?: Token<Property.PaddingLeft, "spaces">;
    py?: Token<Property.PaddingTop, "spaces">;
    // maxWidth
    maxWidth?: Token<Property.MaxWidth>;
    maxW?: Token<Property.MaxWidth>;
    // maxHeight
    maxHeight?: Token<Property.MaxHeight>;
    maxH?: Token<Property.MaxHeight>;
    // minWidth
    minWidth?: Token<Property.MinWidth>;
    minW?: Token<Property.MinWidth>;
    // minHeight
    minHeight?: Token<Property.MinHeight>;
    minH?: Token<Property.MinHeight>;
    // width
    width?: Token<Property.Width>;
    w?: Token<Property.Width>;
    // height
    height?: Token<Property.Height>;
    h?: Token<Property.Height>;
    // position
    position?: Token<Property.Position>;
    pos?: Token<Property.Position>;
    // top
    top?: Token<Property.Top>;
    t?: Token<Property.Top>;
    // right
    right?: Token<Property.Right>;
    r?: Token<Property.Right>;
    // bottom
    bottom?: Token<Property.Bottom>;
    b?: Token<Property.Bottom>;
    // left
    left?: Token<Property.Left>;
    l?: Token<Property.Left>;
    // zIndex
    zIndex?: Token<Property.ZIndex>;
    z?: Token<Property.ZIndex>;
    // flex
    flex?: Token<Property.Flex>;
    flexGrow?: Token<Property.FlexGrow>;
    flexShrink?: Token<Property.FlexShrink>;
    flexBasis?: Token<Property.FlexBasis>;
    flexDirection?: Token<Property.FlexDirection>;
    flexWrap?: Token<Property.FlexWrap>;
    justifyContent?: Token<Property.JustifyContent>;
    alignItems?: Token<Property.AlignItems>;
    alignContent?: Token<Property.AlignContent>;
    alignSelf?: Token<Property.AlignSelf>;
    justifySelf?: Token<Property.JustifySelf>;
    order?: Token<Property.Order>;
    flexFlow?: Token<Property.FlexFlow>;
    // grid
    gridColumn?: Token<Property.GridColumn>;
    gridRow?: Token<Property.GridRow>;
    gridAutoFlow?: Token<Property.GridAutoFlow>;
    gridAutoColumns?: Token<Property.GridAutoColumns>;
    gridAutoRows?: Token<Property.GridAutoRows>;
    gridTemplateColumns?: Token<Property.GridTemplateColumns>;
    gridTemplateRows?: Token<Property.GridTemplateRows>;
    gridTemplateAreas?: Token<Property.GridTemplateAreas>;
    gridArea?: Token<Property.GridArea>;
    gridTemplate?: Token<Property.GridTemplate>;
    gridColumnStart?: Token<Property.GridColumnStart>;
    gridColumnEnd?: Token<Property.GridColumnEnd>;
    gridRowStart?: Token<Property.GridRowStart>;
    gridRowEnd?: Token<Property.GridRowEnd>;
    // gap
    gap?: Token<Property.Gap, "spaces">;
    columnGap?: Token<Property.ColumnGap, "spaces">;
    rowGap?: Token<Property.RowGap, "spaces">;
    // overflow
    overflow?: Token<Property.Overflow>;
    overflowX?: Token<Property.OverflowX>;
    overflowY?: Token<Property.OverflowY>;
    // transform
    transform?: Token<Property.Transform>;
    transformOrigin?: Token<Property.TransformOrigin>;
    // box model
    boxSizing?: Token<Property.BoxSizing>;
    // text alignment
    textAlign?: Token<Property.TextAlign>;
}

type BoxOwnProps<E extends React.ElementType = React.ElementType> = {
    as?: E
    children?: React.ReactNode
    inline?: boolean
} & BoxStyleProps

export type BoxProps<E extends React.ElementType> =
BoxOwnProps<E> & Omit<React.ComponentProps<E>, keyof BoxOwnProps>;
