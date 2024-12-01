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
    const baseURL = process.env.NEXT_PUBLIC_REST_API
    const [showAll, setShowAll] = useState(false)
    const windowWidth = useWindowWidth()
    const { t } = useTranslation()

    const handleViewMore = () => {
        setShowAll(true)
    }

    const isMobile = windowWidth < 768 // Assuming 768px as the breakpoint for mobile

    const initialItemCount = isMobile ? 4 : 6

    const imagesToShow = showAll
        ? data?.attributes?.gallery?.data
        : data?.attributes?.gallery?.data?.slice(0, initialItemCount)

    return (
        <>
            {data?.attributes?.gallery?.data?.length ? (
                <>
                    <div
                        className={`relative mt-10 grid w-full gap-2 md:gap-6 ${
                            isMobile ? 'grid-cols-2' : 'grid-cols-6'
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
                                            className="h-[150px] w-full cursor-zoom-in rounded-[4px] overflow-hidden border border-white object-cover object-center md:h-[180px]"
                                            alt={`Photo ${item.id}`}
                                        />
                                    </PhotoView>
                                )
                            })}
                        </PhotoProvider>
                    </div>
                    {!showAll && data.attributes.gallery.data.length > initialItemCount && (
                        <div className="flex w-full justify-center">
                            <button
                                onClick={handleViewMore}
                                className="mt-4 w-40 rounded border border-white p-2 text-white hover:bg-white hover:text-black"
                            >
                                {t('viewMore')}
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="flex justify-center py-10 text-white">{t('noPhoto')}</div>
            )}
        </>
    )
}

export default ReactGalleryViewer
