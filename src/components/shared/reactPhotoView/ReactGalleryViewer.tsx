import { useTranslation } from 'react-i18next'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

interface GalleryItem {
    id: number
    attributes: {
        formats: any
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
    const baseURL = process.env.REACT_APP_BASE_URL || 'https://api.batumitheatre.ge'
    const { t } = useTranslation()

    return (
        <>
            {data?.attributes?.gallery?.data?.length ? (
                <div className="relative mt-10 grid w-full grid-cols-2 gap-2 md:grid-cols-5 md:gap-10">
                    <PhotoProvider>
                        {data?.attributes?.gallery?.data?.map((item) => {
                            const src = `${baseURL}${item.attributes.url}`
                            const srcThumbnail = `${baseURL}${item.attributes?.formats?.thumbnail?.url}`
                            return (
                                <PhotoView key={item.id} src={src}>
                                    <img
                                        src={srcThumbnail}
                                        className="h-[150px] w-full cursor-zoom-in rounded-[4px] border object-cover object-center md:h-[200px]"
                                        alt={`Photo ${item.id}`}
                                    />
                                </PhotoView>
                            )
                        })}
                    </PhotoProvider>
                </div>
            ) : (
                <div className="flex justify-center py-10">{t('noPhoto')}</div>
            )}
        </>
    )
}

export default ReactGalleryViewer
