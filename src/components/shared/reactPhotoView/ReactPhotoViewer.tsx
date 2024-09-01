import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const ReactPhotoViewer = ({ data }: any) => {
    const baseURL = process.env.REACT_APP_BASE_URL || 'https://api.batumitheatre.ge'
    const src = `${baseURL}${data?.attributes?.image?.data?.attributes?.url}`

    return (
        <PhotoProvider>
            <PhotoView src={src}>
                <div className="h-full w-full">
                    <Image
                        src={src}
                        fill
                        objectFit="cover"
                        alt="w-full h-full object-cover object-center cursor-zoom-in  rounded-[4px]"
                    />
                </div>
            </PhotoView>
        </PhotoProvider>
    )
}

export default ReactPhotoViewer
