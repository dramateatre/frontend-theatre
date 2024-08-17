import React, { useState, useMemo } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Photo = {
    src: string
}

interface MyGalleryProps {
    images: string[]
}

const ReactImage: React.FC<MyGalleryProps> = ({ images }) => {
    const [index, setIndex] = useState(-1)

    const photos: Photo[] = useMemo(() => images.map((url) => ({ src: url })), [images])

    return (
        <div className="relative w-full">
            <div className="relative h-[250px] w-full md:float-left md:mr-7 md:h-[300px] md:w-[400px] lg:h-[400px] xl:w-[600px]">
                {photos.map((photo, idx) => (
                    <div key={idx} className="h-full w-full">
                        <img
                            src={photo.src}
                            alt={`Gallery image ${idx + 1}`}
                            className="h-full w-full cursor-pointer object-cover"
                            onClick={() => setIndex(idx)}
                        />
                    </div>
                ))}
            </div>

            <Lightbox slides={photos} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </div>
    )
}

export default ReactImage
