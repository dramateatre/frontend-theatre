import Image from 'next/image'
import React, { useState, useMemo } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Photo = {
    src: string
}

interface MyGalleryProps {
    image: string
}

const ReactImage: React.FC<MyGalleryProps> = ({ image }) => {
    const [index, setIndex] = useState(-1)

    const photos: Photo[] = useMemo(() => {
        return [{ src: image }]
    }, [image])

    return (
        <div className="relative w-full">
            <div className="relative h-[250px] w-full md:float-left md:mr-7 md:h-[300px] md:w-[400px] lg:h-[400px] xl:w-[600px]">
                <Image
                    fill
                    src={photos[0].src}
                    alt="Gallery image"
                    className="h-full w-full cursor-pointer object-cover"
                    onClick={() => setIndex(0)}
                />
            </div>

            <Lightbox slides={photos} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </div>
    )
}

export default ReactImage
