import React, { useState, useMemo } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Photo = {
    src: string
}

interface MyGalleryProps {
    images: string[]
}

const MyGallery: React.FC<MyGalleryProps> = ({ images }) => {
    const [index, setIndex] = useState(-1)

    const photos: Photo[] = useMemo(() => images.map((url) => ({ src: url })), [images])

    return (
        <div className="relative mt-10 w-full">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {photos.map((photo, idx) => (
                    <div key={idx} className="h-[150px] w-auto md:h-[250px]">
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

export default MyGallery
