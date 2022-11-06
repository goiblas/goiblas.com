import React from "react";
import type { InnerIconProps } from "./Icon";

export const Anchor = ({ size = 24, color = "currentColor" }: InnerIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.158 7.842a3.276 3.276 0 00-4.632 0L3.21 10.158a3.276 3.276 0 004.633 4.633L9 13.633"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.842 10.158a3.276 3.276 0 004.632 0l2.316-2.316a3.276 3.276 0 10-4.632-4.633L9 4.367"
      ></path>
    </svg>
  );
}

export default Anchor;
