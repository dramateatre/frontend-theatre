'use client'
import ReactGalleryViewer from '@/components/shared/reactPhotoView/ReactGalleryViewer'
import { Calendar, Clock, PhotoIcon, VideoIcon } from '@/components/svg'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/utils/formatDate'
import { formatTime } from '@/utils/formatTime'
import { useStore } from '@/zustand/zustand'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactPhotoViewer from '@/components/shared/reactPhotoView/ReactPhotoViewer'
import ReactVideoPlayer from '@/components/shared/reactPhotoView/ReactVideoViewer'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
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
        <>
            {isClient ? (
                <main className={`min-h-screen w-full text-white md:px-7 xl:px-20`}>
                    <div className="flex h-full flex-col gap-5 md:py-10 lg:flex-row">
                        <div className="relative h-[220px] w-full sm:min-h-[300px] md:float-left lg:min-h-[300px] lg:min-w-[600px] xl:min-h-[400px] xl:min-w-[800px]">
                            <ReactPhotoViewer data={data} />
                        </div>

                        <div className="flex h-full w-full flex-col justify-between gap-5 px-6 py-3 md:px-0 md:py-0">
                            <h1 className="text-center text-xl">{data.attributes?.header}</h1>
                            <div className="flex h-full flex-col justify-center gap-1 px-2">
                                {data.attributes?.author && (
                                    <span className="line-clamp-2">
                                        <span className="text-base">{t('author')}</span>
                                        <span className="ml-2 text-base">
                                            {data.attributes?.author}
                                        </span>
                                    </span>
                                )}
                                {data.attributes?.director && (
                                    <span className="line-clamp-2">
                                        <span className="text-base">{t('director')}</span>
                                        <span className="ml-2 text-base">
                                            {data.attributes?.director}
                                        </span>
                                    </span>
                                )}
                                {data.attributes?.performance && (
                                    <span className="line-clamp-1">
                                        <span className="text-base">{t('performance')}</span>
                                        <span className="ml-2 text-base">
                                            {data.attributes?.performance}
                                        </span>
                                    </span>
                                )}
                                <span className="line-clamp-2">
                                    <span className="text-base">{t('duration')}</span>
                                    <span className="ml-2 text-base">
                                        {data.attributes?.duration
                                            ?.split(':')
                                            .slice(0, 2)
                                            .join(':')}{' '}
                                        {t('hour')}
                                    </span>
                                </span>

                                {data.attributes?.poster && (
                                    <>
                                        {data.attributes?.ticketPrice && (
                                            <span className="line-clamp-2">
                                                <span className="text-base">
                                                    {t('ticketPrice')}
                                                </span>
                                                <span className="ml-2 text-base">
                                                    {data.attributes?.ticketPrice} ₾
                                                </span>
                                            </span>
                                        )}
                                        {data.attributes?.premiereDate1 && (
                                            <span className="datas-center flex flex-row gap-2">
                                                <Calendar className="text-base" />
                                                <span className="text-base">
                                                    {formatDate(data.attributes?.premiereDate1)}
                                                </span>
                                                <Clock className="fill-zinc-300 text-base" />
                                                <span className="text-base">
                                                    {formatTime(data.attributes?.premiereDate1)}
                                                </span>
                                                {data.attributes?.premiere && (
                                                    <span className="ml-3 animate-fade text-base text-[red]">
                                                        {t('premiere')}
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                        {data.attributes?.premiereDate2 && (
                                            <span className="datas-center flex flex-row gap-2">
                                                <Calendar className="text-base" />
                                                <span className="text-base">
                                                    {formatDate(data.attributes?.premiereDate2)}
                                                </span>
                                                <Clock className="fill-zinc-300 text-base" />
                                                <span className="text-base">
                                                    {formatTime(data.attributes?.premiereDate2)}
                                                </span>
                                                {data.attributes?.premiere && (
                                                    <span className="ml-3 animate-fade text-base text-[red]">
                                                        {t('premiere')}
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                        {data.attributes?.premiereDate3 && (
                                            <span className="datas-center flex flex-row gap-2">
                                                <Calendar className="text-base" />
                                                <span className="text-base">
                                                    {formatDate(data.attributes?.premiereDate3)}
                                                </span>
                                                <Clock className="fill-zinc-300 text-base" />
                                                <span className="text-base">
                                                    {formatTime(data.attributes?.premiereDate3)}
                                                </span>
                                                {data.attributes?.premiere && (
                                                    <span className="ml-3 animate-fade text-base text-[red]">
                                                        {t('premiere')}
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                        {data.attributes?.premiereDate4 && (
                                            <span className="datas-center flex flex-row gap-2">
                                                <Calendar className="text-base" />
                                                <span className="text-base">
                                                    {formatDate(data.attributes?.premiereDate4)}
                                                </span>
                                                <Clock className="fill-zinc-300 text-base" />
                                                <span className="text-base">
                                                    {formatTime(data.attributes?.premiereDate4)}
                                                </span>
                                                {data.attributes?.premiere && (
                                                    <span className="ml-3 animate-fade text-base text-[red]">
                                                        {t('premiere')}
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-slate-100"></div>
                    <div className="gap flex h-full w-full flex-col gap-3 px-6 py-5 md:px-0">
                        <h2 className="text-center text-xl">აღწერა</h2>
                        <span className="text-base">
                            <BlocksRenderer content={data.attributes?.description} />
                        </span>
                        {true && (
                            <div className="flex w-full flex-col gap-5 pt-10">
                                <Button className="text text-center text-2xl font-normal italic tracking-widest">
                                    {t('gallery')}
                                </Button>
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

                                    <div className="flex items-center gap-2 text-base tracking-widest md:text-base">
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
                                    <div>
                                        <ReactVideoPlayer data={data} />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            ) : (
                <div className="flex h-screen items-center justify-center text-white">
                    ... loading
                </div>
            )}
        </>
    )
}
