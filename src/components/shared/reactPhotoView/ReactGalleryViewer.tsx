import React, { useState, useEffect } from 'react'
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

// Custom hook to get window width
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth
}

const ReactGalleryViewer: React.FC<ReactGalleryViewerProps> = ({ data }) => {
    const baseURL = process.env.REACT_APP_BASE_URL || 'https://api.batumitheatre.ge'
    const { t } = useTranslation()
    const [showAll, setShowAll] = useState(false)
    const windowWidth = useWindowWidth()

    const handleViewMore = () => {
        setShowAll(true)
    }

    const isMobile = windowWidth < 768 // Assuming 768px as the breakpoint for mobile

    const initialItemCount = isMobile ? 4 : 5

    const imagesToShow = showAll
        ? data.attributes.gallery?.data
        : data.attributes.gallery?.data?.slice(0, initialItemCount)

    return (
        <>
            {data?.attributes?.gallery?.data?.length ? (
                <>
                    <div
                        className={`relative mt-10 grid w-full gap-2 md:gap-10 ${
                            isMobile ? 'grid-cols-2' : 'grid-cols-5'
                        }`}
                    >
                        <PhotoProvider>
                            {imagesToShow.map((item) => {
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
                    {!showAll && data.attributes.gallery.data.length > initialItemCount && (
                        <button
                            onClick={handleViewMore}
                            className="mt-4 rounded bg-blue-500 p-2 text-white"
                        >
                            {t('viewMore')}
                        </button>
                    )}
                </>
            ) : (
                <div className="flex justify-center py-10 text-white">{t('noPhoto')}</div>
            )}
        </>
    )
}

export default ReactGalleryViewer
