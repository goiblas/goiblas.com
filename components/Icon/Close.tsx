import React from "react";
import type { InnerIconProps } from "./Icon";

export const Close = ({ size = 24, color = "currentColor" }: InnerIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M10.004 12L4.418 6.413a1.412 1.412 0 111.995-1.999L12 10.001l5.587-5.587a1.414 1.414 0 011.999 2L13.999 12l5.587 5.587a1.414 1.414 0 01-2 1.999L12 13.999l-5.587 5.587a1.414 1.414 0 01-1.999-2L10.004 12z"
      ></path>
    </svg>
  );
}

export default Close;
