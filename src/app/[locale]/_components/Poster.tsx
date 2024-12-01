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
import NoImage from '@images/NoImage.jpg'
import { MapPin } from 'lucide-react'

export default function Poster({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    const PremiereDateDisplay = ({ date }: any) => (
        <span className="flex flex-row items-center gap-1">
            <Calendar className="text-sm" />
            <span className="text-sm">{formatDate(date)}</span>
            <Clock className="fill-zinc-300 text-sm" />
            <span className="text-sm">{formatTime(date)}</span>
        </span>
    )

    const PremiereDates = ({ item }: any) => {
        const premiereDates = [
            item.attributes?.premiereDate1,
            item.attributes?.premiereDate2,
            item.attributes?.premiereDate3,
            item.attributes?.premiereDate4,
            item.attributes?.premiereDate5,
            item.attributes?.premiereDate6,
        ].filter(Boolean)

        return (
            <div className="mt-2 grid grid-cols-2 items-center justify-center gap-1 md:gap-2">
                {premiereDates.map((date, index) => (
                    <PremiereDateDisplay key={index} date={date} />
                ))}
            </div>
        )
    }

    if (!data?.data?.length) return null

    return (
        <section className={`w-full text-white`}>
            <div className="flex w-full flex-row justify-center pt-10">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl tracking-[5px] md:text-4xl`}
                >
                    {t('poster')}
                </h1>
            </div>
            <Carousel
                opts={{
                    watchDrag: data?.data?.length > 1,
                    skipSnaps: true,
                }}
                className="flex justify-center"
            >
                <CarouselContent className="py-10">
                    {data?.data?.map((item: any, index: any) => (
                        <CarouselItem key={index} className="flex justify-center">
                            <div
                                className={`relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] border border-slate-700 shadow-xl md:w-[480px] lg:w-[680px] xl:w-[1300px] xl:flex-row`}
                            >
                                <div className="relative h-[230px] w-full md:h-[250px] lg:h-[350px] xl:h-[450px] xl:w-[70%]">
                                    <Image
                                        width={680}
                                        height={450}
                                        className="h-full w-full object-cover"
                                        src={`${process.env.NEXT_PUBLIC_REST_API}${item?.attributes?.image?.data?.attributes?.url || NoImage}`}
                                        alt={item?.attributes?.title}
                                    />
                                </div>
                                <div className="flex h-[400px] w-full flex-col justify-center gap-1 bg-[#0f1017] bg-poster-gradient px-4 py-4 lg:order-2 lg:py-8 xl:h-auto xl:w-[30%]">
                                    <div className="flex items-center justify-center gap-1 text-center text-sm">
                                        <MapPin className="h-3 w-3" /> - {item.attributes?.place}
                                    </div>

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

                                    <div className="flex h-full flex-col justify-center gap-1 md:px-3">
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
                                        {/* {item.attributes?.scene && (
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('scene')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.scene}
                                                </span>
                                            </span>
                                        )} */}
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
                                        <PremiereDates item={item} />
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
