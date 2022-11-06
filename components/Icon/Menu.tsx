import React from "react";
import type { InnerIconProps } from "./Icon";

export const Menu = ({ size = 24, color = "currentColor" }: InnerIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M2 5.25c0-.699.56-1.266 1.25-1.266h17.5c.69 0 1.25.567 1.25 1.266 0 .699-.56 1.266-1.25 1.266H3.25C2.56 6.516 2 5.949 2 5.25zM2 12c0-.699.56-1.266 1.25-1.266h17.5c.69 0 1.25.567 1.25 1.266 0 .699-.56 1.266-1.25 1.266H3.25C2.56 13.266 2 12.699 2 12zm1.25 5.484c-.69 0-1.25.567-1.25 1.266 0 .699.56 1.266 1.25 1.266h17.5c.69 0 1.25-.567 1.25-1.266 0-.699-.56-1.266-1.25-1.266H3.25z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Menu;
