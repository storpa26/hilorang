import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const CMSImg = ({ imgProps }) => {
    const imageSrc = urlFor(imgProps).url();
    return (
        <Image
            src={imageSrc}
            alt="product photo"
            width={400}
            height={400}
            priority="true"
        />
    );
};

export default CMSImg;
