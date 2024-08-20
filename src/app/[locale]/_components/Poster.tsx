'use client'

import { Calendar, Clock } from '@/components/svg'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { formatDate } from '@/utils/formatDate'
import { formatTime } from '@/utils/formatTime'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Poster({ posterData }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <section
            className={`${locale === 'en' ? 'italic' : 'font-georgian'} w-full pb-10 text-white md:pb-20`}
        >
            <div className="flex w-full flex-row justify-center pt-10">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} texet-center text-3xl tracking-[20px]`}
                >
                    {t('poster')}
                </h1>
            </div>
            <Carousel
                opts={{
                    watchDrag: posterData?.data?.length > 1,
                }}
                className="flex justify-center"
            >
                <CarouselContent className="py-10 pr-2 lg:px-7 xl:px-10">
                    {posterData.data.map((item: any, index: any) => (
                        <>
                            <CarouselItem key={index} className="pl-6 lg:pl-7 xl:pl-10">
                                <div
                                    className={`relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom lg:h-[400px] lg:flex-row`}
                                >
                                    <div className="relative h-[250px] w-full md:h-[300px] lg:h-full lg:w-[70%]">
                                        <Image
                                            fill
                                            className="h-full w-full object-cover object-center"
                                            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
                                            alt="Village"
                                        />
                                    </div>
                                    <div className="flex h-[305px] flex-col justify-center gap-1 bg-[#0f1017] bg-poster-gradient px-4 py-3 lg:order-2 lg:h-auto lg:w-[30%] lg:py-6">
                                        <span className="hidden text-center text-xs md:block">
                                            {item.attributes?.place}
                                        </span>

                                        <h1 className="text-center text-xl">
                                            {item.attributes?.header}
                                        </h1>

                                        <div className="flex h-full flex-col justify-center gap-1 px-2 md:px-6">
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('author')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.author}
                                                </span>
                                            </span>
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('director')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.director}
                                                </span>
                                            </span>
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('duration')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.duration
                                                        ?.split(':')
                                                        .slice(0, 2)
                                                        .join(':')}{' '}
                                                    {t('hour')}
                                                </span>
                                            </span>

                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('ticketPrice')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.ticketPrice} ₾
                                                </span>
                                            </span>

                                            {item.attributes?.premiereDate1 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate1)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate1)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="animate-fade ml-3 text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate2 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate2)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate2)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="animate-fade ml-3 text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate3 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate3)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate3)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="animate-fade ml-3 text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate4 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate4)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate4)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="animate-fade ml-3 text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex w-full flex-row gap-5 px-5 pt-1 md:pt-4 lg:gap-3">
                                            <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                                {t('viewMore')}
                                            </button>
                                            <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                                {t('tickets')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
