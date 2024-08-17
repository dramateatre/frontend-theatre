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
    const baseURL = process.env.REACT_APP_BASE_URL || 'https://strapi-4wr0.onrender.com'

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
