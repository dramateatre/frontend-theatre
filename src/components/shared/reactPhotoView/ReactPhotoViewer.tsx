import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import NoImage from '@images/NoImage.jpg'

const ReactPhotoViewer = ({ data }: any) => {
    // Check if NoImage is StaticImageData and get its src as a string
    const noImageSrc = typeof NoImage === 'string' ? NoImage : NoImage.src

    const imageUrl = data?.attributes?.image?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_REST_API}/${data.attributes.image.data.attributes.url}`
        : noImageSrc // Fallback to NoImage src

    return (
        <PhotoProvider>
            <PhotoView src={imageUrl}>
                <div className="relative h-full w-full">
                    <Image
                        src={imageUrl}
                        alt="Image preview"
                        layout="fill"
                        objectFit="cover"
                        className="h-full w-full cursor-zoom-in border border-slate-200 rounded-[4px] object-cover object-center"
                    />
                </div>
            </PhotoView>
        </PhotoProvider>
    )
}

export default ReactPhotoViewer
