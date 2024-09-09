'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useStore } from '@/zustand/zustand'
import { ArrowLeft, Calendar, PhotoIcon, VideoIcon } from '@/components/svg'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import ReactPhotoViewer from '@/components/shared/reactPhotoView/ReactPhotoViewer'
import ReactGalleryViewer from '@/components/shared/reactPhotoView/ReactGalleryViewer'
import ReactVideoPlayer from '@/components/shared/reactPhotoView/ReactVideoViewer'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const router = useRouter()
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)
    const [galleryType, setGalleryType] = useState(false)

    const setAlternateLocaleId = useStore((state) => state.setNewsAlternateLocales)

    useEffect(() => {
        if (data.attributes?.localizations?.data[0]?.id) {
            setAlternateLocaleId(data.attributes.localizations.data[0].id)
        } else {
            setAlternateLocaleId(undefined)
        }
    }, [])

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} relative min-h-screen w-full overflow-hidden p-5 pb-10 md:px-7 md:pb-20 lg:px-20`}
        >
            {isClient ? (
                <div className="h-auto w-full">
                    <div className="mb-4 flex w-full justify-between md:justify-end">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-sm text-white md:hidden"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            {t('arrowBack')}
                        </button>
                        <div className="flex w-auto flex-row items-center justify-end gap-1">
                            <Calendar className="h-5 w-5 text-white" />
                            <span className="text-sm text-white md:text-sm">
                                {new Date(data?.attributes?.publishedAt).toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                })}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-center text-lg text-white md:mb-4 md:text-xl">
                        {data?.attributes?.header}
                    </h1>
                    <div className="my-4 h-[1px] w-full bg-white"></div>
                    <div className="relative h-[280px] w-full cursor-zoom-in overflow-hidden rounded-[4px] md:float-left md:mr-8 md:h-[350px] md:w-[400px] lg:w-[500px]">
                        <ReactPhotoViewer data={data} />
                    </div>

                    <div className="w-full pt-5 md:p-0">
                        <p className="text-sm text-white md:text-base">
                            <BlocksRenderer content={data?.attributes?.description} />
                        </p>
                    </div>

                    {data.attributes?.gallery?.data && (
                        <div className="flex w-full flex-col gap-5 pt-10">
                            <Button className="text text-center text-2xl font-normal italic tracking-widest text-white">
                                {t('gallery')}
                            </Button>
                            <div className="flex w-full items-center justify-between md:text-lg">
                                <div className="flex items-center gap-5">
                                    <button
                                        onClick={() => setGalleryType(false)}
                                        className="mt-1 h-8 w-6 md:mt-2 md:h-8 md:w-10"
                                    >
                                        <PhotoIcon className="h-full w-full fill-white text-white" />
                                    </button>
                                    <button
                                        onClick={() => setGalleryType(true)}
                                        className="h-7 w-7 md:h-10 md:w-10"
                                    >
                                        <VideoIcon className="h-full w-full fill-white text-white" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-sm tracking-widest text-white md:text-base">
                                    <button
                                        onClick={() => setGalleryType(false)}
                                        className={`${!galleryType ? 'border-black bg-white text-black' : 'bg-none text-white'} flex items-center justify-center rounded-[4px] border px-3 py-1`}
                                    >
                                        {t('photo')}
                                    </button>
                                    -
                                    <button
                                        onClick={() => setGalleryType(true)}
                                        className={`${galleryType ? 'border-black bg-white text-black' : 'bg-none text-white'} flex items-center justify-center rounded-[4px] border px-3 py-1`}
                                    >
                                        {t('video')}
                                    </button>
                                </div>
                            </div>
                            {!galleryType ? (
                                <ReactGalleryViewer data={data} />
                            ) : (
                                <div>
                                    <ReactVideoPlayer data={data} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div>...loading</div>
            )}
        </main>
    )
}
