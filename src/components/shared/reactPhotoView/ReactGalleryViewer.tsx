import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

interface GalleryItem {
    id: number
    attributes: {
        url: string
    }
}

interface GalleryData {
    attributes: {
        gallery: {
            data: GalleryItem[]
        }
    }
}

interface ReactGalleryViewerProps {
    data: GalleryData
}

const ReactGalleryViewer: React.FC<ReactGalleryViewerProps> = ({ data }) => {
    const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:1337'

    return (
        <div className="mt-10 relative grid w-full grid-cols-2 gap-2 md:grid-cols-5">
            <PhotoProvider>
                {data.attributes.gallery.data.map((item) => {
                    const src = `${baseURL}${item.attributes.url}`
                    return (
                        <PhotoView key={item.id} src={src}>
                            <img
                                src={src}
                                className="h-[150px] w-full object-cover object-center md:h-[200px]"
                                alt={`Photo ${item.id}`}
                            />
                        </PhotoView>
                    )
                })}
            </PhotoProvider>
        </div>
    )
}

export default ReactGalleryViewer
