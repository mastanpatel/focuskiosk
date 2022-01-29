import React, { useEffect, useState } from 'react';
import { ImagePreviewProps } from './common.type';

function ImagePreview({ properties }: ImagePreviewProps) {

    const [currentImage, setcurrentImage] = useState(0);

    const mystyle = {
        width: "1400px",
        height: "800px",
        padding: "2px"
    };

    const switchImage = () => {
        if (currentImage < properties.length - 1) {
            setcurrentImage(currentImage + 1);
        } else {
            setcurrentImage(0);
        }
        return currentImage;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            switchImage();
        }, 5000)
        return () => clearInterval(interval);
    }, [currentImage])


    return (
        <div className='image-preview'>
            <img src={properties[currentImage].propertyImageURL} alt={properties[currentImage].propertyName} style={mystyle} />
        </div>
    );
}

export default ImagePreview;