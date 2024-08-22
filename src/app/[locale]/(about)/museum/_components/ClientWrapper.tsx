'use client'

import ReactGalleryViewer from '@/components/shared/reactPhotoView/ReactGalleryViewer'
import { PhotoIcon, VideoIcon } from '@/components/svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const [galleryType, setGalleryType] = useState(false)
    return (
        <div className="min-h-screen w-full">
            <div className="flex flex-col md:flex-row">
                <Image  />
                <div className="px-3 py-10 text-sm text-white md:px-6 md:py-20 lg:px-6 xl:px-32">
                    <BlocksRenderer content={data[0]?.attributes?.description} />
                </div>
            </div>
            {data?.attributes?.gallery?.data && (
                <div className="flex w-full flex-col gap-5 pt-10">
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
                            <ReactGalleryViewer data={data} />
                        </div>
                    ) : (
                        <div className="w-full text-center">video </div>
                    )}
                </div>
            )}
        </div>
    )
}
