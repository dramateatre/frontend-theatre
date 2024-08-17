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
    const baseURL = process.env.REACT_APP_BASE_URL || 'http://192.168.100.13:1337'

    return (
        <PhotoProvider>
            {data.attributes.gallery.data.map((item) => {
                const src = `${baseURL}${item.attributes.url}`
                return (
                    <PhotoView key={item.id} src={src}>
                        <img src={src} alt={`Photo ${item.id}`} />
                    </PhotoView>
                )
            })}
        </PhotoProvider>
    )
}

export default ReactGalleryViewer
