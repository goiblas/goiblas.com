import React from "react";
import type { InnerIconProps } from "./Icon";

export const Sun = ({ size = 24, color = "currentColor" }: InnerIconProps) => {
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
        d="M12 2.4a1.2 1.2 0 011.2 1.2v1.2a1.2 1.2 0 11-2.4 0V3.6A1.2 1.2 0 0112 2.4zm4.8 9.6a4.8 4.8 0 11-9.6 0 4.8 4.8 0 019.6 0zm-.557 5.94l.849.848a1.2 1.2 0 001.696-1.696l-.848-.849a1.2 1.2 0 00-1.697 1.697zm2.544-12.728a1.2 1.2 0 010 1.696l-.847.849a1.2 1.2 0 11-1.697-1.697l.849-.848a1.2 1.2 0 011.696 0zM20.4 13.2a1.2 1.2 0 100-2.4h-1.2a1.2 1.2 0 000 2.4h1.2zM12 18a1.2 1.2 0 011.2 1.2v1.2a1.2 1.2 0 11-2.4 0v-1.2A1.2 1.2 0 0112 18zM6.06 7.757A1.2 1.2 0 107.758 6.06l-.85-.848a1.2 1.2 0 00-1.696 1.696l.848.849zM7.757 17.94l-.849.848a1.2 1.2 0 01-1.696-1.696l.848-.849a1.2 1.2 0 011.697 1.697zM4.8 13.2a1.2 1.2 0 100-2.4H3.6a1.2 1.2 0 000 2.4h1.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
