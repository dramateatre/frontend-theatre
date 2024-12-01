'use client'

import { useParams } from 'next/navigation'
import AvatarImage from './AvatarImage'
import Paragraph from './Paragraph'
import { useEffect, useState } from 'react'
import { useStore } from '@/zustand/zustand'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import ReactGalleryViewer from '@/components/shared/reactPhotoView/ReactGalleryViewer'
import ReactVideoPlayer from '@/components/shared/reactPhotoView/ReactVideoViewer'
import { PhotoIcon, VideoIcon } from '@/components/svg'
import { Button } from '@/components/ui/button'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)
    const [galleryType, setGalleryType] = useState(false)
    const setTroupeAlternateLocales = useStore((state) => state.setTroupeAlternateLocales)

    useEffect(() => {
        if (data.attributes?.localizations?.data[0]?.id) {
            setTroupeAlternateLocales(data.attributes.localizations.data[0].id)
        } else {
            setTroupeAlternateLocales(undefined)
        }
    }, [data, setTroupeAlternateLocales])

    useEffect(() => {
        setIsClient(true)
    }, [])

    const fallAndStandUpVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 10,
                duration: 0.8,
            },
        },
    }

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex min-h-screen w-full flex-col justify-center gap-5 overflow-hidden pb-20 text-white md:gap-10 md:px-7 md:pt-10 lg:bg-[#1a1b2f] xl:px-20`}
        >
            {isClient ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fallAndStandUpVariants}
                    className="flex w-full flex-col items-center"
                >
                    <div className="mb-10 hidden flex-row items-center gap-2 rounded-[6px] border bg-[#0f1017] px-7 py-1 md:flex lg:bg-poster-gradient lg:shadow-custom">
                        <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                        <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                    </div>

                    <div className="h-full w-full overflow-hidden rounded-[4px] bg-[#0f1017] md:w-2/3 lg:bg-poster-gradient lg:shadow-xl">
                        <div className="relative mr-5 h-[250px] w-full md:float-left md:h-[300px] md:w-[400px]">
                            <AvatarImage data={data} />
                        </div>
                        <div className="relative w-full px-3 pb-6">
                            <div className="flex flex-row items-center justify-center gap-2 py-2 md:hidden">
                                <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                                <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                            </div>
                            <div className="h-[1px] w-full bg-white md:hidden"></div>
                            {data?.attributes?.description && (
                                <div className="py-5 text-sm md:text-base">
                                    <Paragraph content={data?.attributes?.description} />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ) : null}

            {true && (
                <div className="flex w-full flex-col gap-5 px-4 pt-10 md:px-0">
                    <Button className="text text-center text-2xl font-normal italic tracking-widest">
                        {t('gallery')}
                    </Button>
                    <div className="flex w-full items-center justify-between md:text-lg">
                        <div className="flex items-center gap-3">
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

                        <div className="flex items-center gap-1 text-sm tracking-widest md:gap-2 md:text-base">
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
                            {data.attributes.article && (
                                <>
                                    -
                                    <Link target="_blank" href={data.attributes.article}>
                                        <button
                                            className={`flex items-center justify-center rounded-[4px] border px-3 py-1 text-white`}
                                        >
                                            {t('article')}
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    {!galleryType ? (
                        <div>
                            <ReactGalleryViewer data={data} />
                        </div>
                    ) : (
                        <div>
                            <ReactVideoPlayer data={data} />
                        </div>
                    )}
                </div>
            )}
        </main>
    )
}
