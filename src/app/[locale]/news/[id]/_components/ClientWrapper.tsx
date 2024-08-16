'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useStore } from '@/zustand/zustand'

import GalleryViewer from '@/components/shared/ReactPhotoViewer/GalleryViewer'
import PhovoViewer from '@/components/shared/ReactPhotoViewer/PhotoViewer'
import { ArrowLeft, Calendar, PhotoIcon, VideoIcon } from '@/components/svg'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const [isClient, setIsClient] = useState(false)
    const router = useRouter()

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
        <main className="relative h-full w-full overflow-hidden p-5 md:px-7 md:pb-20 lg:px-20">
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
                    <div className="relative h-[250px] w-full md:float-left md:mr-7 md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[600px]">
                        <PhovoViewer
                            mainSrc={`http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`}
                            thumbnailSrc={`http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`}
                        />
                    </div>
                    <div className="w-full pt-5 md:p-0">
                        <h1 className="text-center text-lg text-white md:text-lg">
                            {data?.attributes?.header}
                        </h1>

                        <div className="my-2 h-[1px] w-full bg-white md:my-6"></div>

                        <p className="text-sm text-white md:text-sm">
                            <BlocksRenderer content={data?.attributes?.description} />
                        </p>
                    </div>
                    
                    <div className="flex w-full flex-col gap-5 pt-10">
                        <Button className="text text-center text-2xl font-normal italic tracking-widest text-white">
                            {t('gallery')}
                        </Button>
                        <div className="flex w-full items-center justify-between md:text-lg">
                            <div className="flex items-center gap-5">
                                <button className="mt-1 h-8 w-6 md:mt-2 md:h-8 md:w-10">
                                    <PhotoIcon className="h-full w-full fill-white text-white" />
                                </button>
                                <button className="h-7 w-7 md:h-10 md:w-10">
                                    <VideoIcon className="h-full w-full fill-white text-white" />
                                </button>
                            </div>
                            <span className="text-lg tracking-widest text-white md:text-xl">
                                {t('photo')}
                            </span>
                            <span className="text-lg tracking-widest text-white md:text-xl">
                                {t('video')}
                            </span>
                        </div>
                    </div>
                    <div className="relative mt-10 h-full w-full">
                        {data?.attributes?.gallery?.data && (
                            <GalleryViewer
                                images={data.attributes.gallery.data.map((item: any) => {
                                    return `http://localhost:1337${item.attributes.url}`
                                })}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div>...loading</div>
            )}
        </main>
    )
}
