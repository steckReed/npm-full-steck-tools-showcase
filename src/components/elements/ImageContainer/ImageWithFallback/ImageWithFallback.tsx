/*
  Created By npm full-steck-tools
*/

import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props) => {
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    const [altTxt, setAltTxt] = useState(alt);

    return (
        <Image
            {...rest}
            src={imgSrc}
            alt={altTxt}
            onError={() => {
                setAltTxt('Sorry, Image Not Found')
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback;
