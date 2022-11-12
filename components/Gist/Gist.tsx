import React from "react";

type GistProps = {
    src: string;
}

const Gist = ({ src }: GistProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<script src="${src}"></script>` }} />
    );
};

export default Gist;