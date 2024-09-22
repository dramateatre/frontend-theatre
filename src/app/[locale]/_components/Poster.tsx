'use client'

import { Calendar, Clock } from '@/components/svg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { formatDate } from '@/utils/formatDate'
import { formatTime } from '@/utils/formatTime'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Poster({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    if (!data.data.length) return null

    return (
        <section className={`${locale === 'en' ? 'italic' : 'font-georgian'} w-full text-white`}>
            <div className="flex w-full flex-row justify-center pt-10">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} texet-center text-3xl tracking-[20px]`}
                >
                    {t('poster')}
                </h1>
            </div>
            <Carousel
                opts={{
                    watchDrag: data?.data?.length > 1,
                }}
                className="flex justify-center"
            >
                <CarouselContent className="py-10 pr-2 lg:px-7 xl:px-10">
                    {data?.data?.map((item: any, index: any) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-center pl-6 lg:pl-7 xl:pl-10"
                        >
                            <div
                                className={`relative z-50 flex w-[380px] flex-col overflow-hidden rounded-[16px] shadow-custom md:w-[480px] lg:w-[680px] xl:w-[1300px] xl:flex-row`}
                            >
                                <div className="relative h-[180px] w-full md:h-[250px] lg:h-[350px] xl:h-[470px] xl:w-[70%]">
                                    <Image
                                        fill
                                        className="object-cover"
                                        src={`https://api.batumitheatre.ge${item?.attributes?.image?.data?.attributes?.url}`}
                                        alt={item?.attributes?.title || 'Theatre Image'}
                                    />
                                </div>
                                <div className="flex h-[340px] flex-col justify-center gap-1 bg-[#0f1017] bg-poster-gradient px-4 py-3 lg:order-2 lg:h-auto lg:py-6 xl:w-[30%]">
                                    <span className="hidden text-center text-xs md:block">
                                        {item.attributes?.place}
                                    </span>

                                    <h1 className="text-center text-xl">
                                        {item.attributes?.header}
                                    </h1>
                                    <div className="flex w-full flex-row justify-center gap-5">
                                        {item.attributes?.premiere && (
                                            <span className="ml-3 animate-fade text-sm font-bold text-[red] md:text-lg">
                                                {t('premiere')}
                                            </span>
                                        )}
                                        {item.attributes?.tour && (
                                            <span className="ml-3 animate-fade text-sm font-bold text-[red] md:text-lg">
                                                {t('tour')}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex h-full flex-col justify-center gap-1 px-2 md:px-3">
                                        {item.attributes?.author && (
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('author')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.author}
                                                </span>
                                            </span>
                                        )}
                                        {item.attributes?.director && (
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('director')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.director}
                                                </span>
                                            </span>
                                        )}
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
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex w-full flex-row gap-5 px-5 pt-1 md:pt-4 lg:gap-3">
                                        <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                            <Link href={`/repertory/${item.id}`}>
                                                {t('viewMore')}
                                            </Link>
                                        </button>

                                        <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                            <Link
                                                target="_blank"
                                                href={
                                                    item?.attributes?.ticketLink
                                                        ? item?.attributes?.ticketLink
                                                        : 'https://biletebi.ge/theatres'
                                                }
                                            >
                                                {t('ticketsExactly')}
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {data?.data?.length > 1 && <CarouselPrevious />}
                {data?.data?.length > 1 && <CarouselNext />}
            </Carousel>
        </section>
    )
}
