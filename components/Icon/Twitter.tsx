import React from "react";
import type { InnerIconProps } from "./Icon";

export const Twitter = ({ size = 24, color = "currentColor" }: InnerIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
    <path
        fill={color}
        d="M10.14 1.246c-4.9 0-8.872 3.904-8.872 8.72 0 4.815 3.973 8.72 8.872 8.72 4.9 0 8.873-3.905 8.873-8.72 0-4.816-3.973-8.72-8.873-8.72zm4.264 6.573c.006.091.006.186.006.28 0 2.857-2.214 6.149-6.26 6.149a6.318 6.318 0 01-3.379-.97c.178.02.349.027.53.027 1.03 0 1.978-.342 2.732-.922a2.196 2.196 0 01-2.056-1.499c.339.049.644.049.993-.039a2.206 2.206 0 01-1.266-.752 2.138 2.138 0 01-.495-1.37v-.027c.291.162.634.261.992.275a2.177 2.177 0 01-.72-.779 2.133 2.133 0 01.039-2.11 6.225 6.225 0 002.023 1.605 6.33 6.33 0 002.512.655c-.31-1.47.806-2.659 2.15-2.659.633 0 1.203.261 1.605.682a4.392 4.392 0 001.397-.52c-.165.5-.51.923-.967 1.19a4.41 4.41 0 001.268-.338 4.566 4.566 0 01-1.103 1.122z"
      />
    </svg>
  );
}

export default Twitter;