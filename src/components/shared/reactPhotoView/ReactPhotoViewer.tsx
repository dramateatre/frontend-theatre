import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const ReactPhotoViewer = ({ data }: any) => {
    const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:1337'
    const src = `${baseURL}${data?.attributes?.image?.data?.attributes?.url}`

    return (
        <PhotoProvider>
            <PhotoView src={src}>
                <div className="h-full w-full">
                    <Image src={src} fill alt="w-full h-full object-cover object-center" />
                </div>
            </PhotoView>
        </PhotoProvider>
    )
}

export default ReactPhotoViewer
