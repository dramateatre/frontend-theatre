'use client'

import ReactGalleryViewer from '@/components/shared/reactPhotoView/ReactGalleryViewer'
import { PhotoIcon, VideoIcon } from '@/components/svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactPhotoViewer from '@/components/shared/reactPhotoView/ReactPhotoViewer'
import { useParams } from 'next/navigation'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [galleryType, setGalleryType] = useState(false)

    if (!data) return null

    return (
        <div
            className={`${locale === 'en' ? 'italic' : 'font-georgian'} flex min-h-screen w-full flex-col gap-5 px-6 py-10 text-white md:px-7 xl:px-20`}
        >
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl tracking-widest md:mb-5 md:text-4xl`}
            >
                {t('museum')}
            </h1>
            <div className="flex w-full flex-col gap-5 md:block">
                {data.length && (
                    <div className="relative h-[280px] w-full cursor-zoom-in rounded-[4px] border border-white md:float-left md:mr-5 md:h-[400px] md:w-[400px]">
                        <ReactPhotoViewer data={data} />
                    </div>
                )}
                {data.length && (
                    <div className="w-full text-sm md:text-base">
                        <BlocksRenderer content={data[0]?.attributes?.description} />
                    </div>
                )}
            </div>
            {data[0]?.attributes?.gallery?.data && (
                <div className="flex w-full flex-col gap-5">
                    <button className="text text-center text-2xl font-normal italic tracking-widest">
                        {t('gallery')}
                    </button>
                    <div className="flex w-full items-center justify-between md:text-lg">
                        <div className="flex items-center gap-5">
                            <button
                                onClick={() => setGalleryType(false)}
                                className="mt-1 h-8 w-6 md:mt-2 md:h-8 md:w-10"
                            >
                                <PhotoIcon className="h-full w-full fill-white" />
                            </button>
                            <button
                                onClick={() => setGalleryType(true)}
                                className="h-7 w-7 md:h-10 md:w-10"
                            >
                                <VideoIcon className="h-full w-full fill-white" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2 text-sm tracking-widest md:text-base">
                            <button
                                onClick={() => setGalleryType(false)}
                                className={`${!galleryType ? 'border-black bg-white text-black' : 'bg-none'} flex items-center justify-center rounded-[4px] border px-3 py-1`}
                            >
                                {t('photo')}
                            </button>
                            -
                            <button
                                onClick={() => setGalleryType(true)}
                                className={`${galleryType ? 'border-black bg-white text-black' : 'bg-none'} flex items-center justify-center rounded-[4px] border px-3 py-1`}
                            >
                                {t('video')}
                            </button>
                        </div>
                    </div>
                    {!galleryType ? (
                        <div>
                            <ReactGalleryViewer data={data[0]} />
                        </div>
                    ) : (
                        <div className="w-full text-center">video </div>
                    )}
                </div>
            )}
        </div>
    )
}
