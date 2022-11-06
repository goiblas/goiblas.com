import React from "react";
import type { InnerIconProps } from "./Icon";

export const Github = ({ size = 24, color = "currentColor" }: InnerIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
    <path
        fill={color}
        d="M9.992 1.49a8.734 8.734 0 00-8.742 8.735 8.744 8.744 0 005.855 8.252c.46.115.39-.211.39-.434v-1.514c-2.651.31-2.759-1.443-2.936-1.736-.36-.613-1.21-.77-.955-1.063.603-.31 1.218.079 1.931 1.131.516.764 1.522.635 2.031.508.112-.459.35-.869.678-1.187-2.746-.492-3.89-2.168-3.89-4.16 0-.967.318-1.856.943-2.573-.399-1.181.037-2.193.096-2.344 1.134-.101 2.314.813 2.406.885.644-.174 1.38-.265 2.205-.265.828 0 1.566.095 2.217.271.22-.168 1.314-.953 2.369-.857.056.15.482 1.138.107 2.304.633.72.955 1.616.955 2.584 0 1.996-1.152 3.674-3.906 4.159a2.49 2.49 0 01.744 1.777v2.197c.016.176 0 .35.293.35a8.744 8.744 0 005.95-8.283c0-4.829-3.915-8.737-8.74-8.737z"
      />
    </svg>
  );
}

export default Github;
