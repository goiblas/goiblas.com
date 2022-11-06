import React from "react";
import { Box } from "../Box";

type CodepenProps = {
  hash: string;
  title: string;
}

const Codepen = ({ hash, title }: CodepenProps) => {
  return (
    <Box mb={4}>
      <iframe
        height="600"
        style={{ width: "100%" }}
        scrolling="no"
        title={title}
        src={`https://codepen.io/alexandercerutti/embed/${hash}?height=600&theme-id=dark&default-tab=js,result&embed-version=2`}
        frameBorder="no"
        loading="lazy"
        allowFullScreen
      />
    </Box>
  );
}

export default Codepen