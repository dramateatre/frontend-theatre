'use client'

import Pagination from '@/components/shared/pagination/Pagination'
import { Calendar, Clock } from '@/components/svg'
import { formatDate } from '@/utils/formatDate'
import { formatTime } from '@/utils/formatTime'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import NoImage from '@images/NoImage.jpg'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {!isClient ? (
                <div className="flex h-screen items-center justify-center text-white">
                    loading...
                </div>
            ) : (
                <section className="min-h-screen w-full px-6 py-10 md:px-7 lg:px-20 xl:px-40">
                    <div className={`flex w-full flex-col items-center gap-16 text-white`}>
                        <div className="flex w-full flex-row justify-center">
                            <h1
                                className={`text-center ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-2xl tracking-[20px] md:text-3xl`}
                            >
                                {t('repertoires')}
                            </h1>
                        </div>
                        {data?.data?.map((item: any, index: any) => (
                            <div
                                className={`relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:w-[480px] lg:w-[680px] xl:w-[1300px] xl:flex-row`}
                            >
                                <div className="relative h-[180px] w-full md:h-[250px] lg:h-[350px] xl:h-[470px] xl:w-[70%]">
                                    {item?.attributes?.image?.data?.attributes?.url ? (
                                        <Image
                                            fill
                                            className="object-cover"
                                            src={`${process.env.NEXT_PUBLIC_REST_API}${item?.attributes?.image?.data?.attributes?.url}`}
                                            alt={item?.attributes?.title || 'Theatre Image'}
                                        />
                                    ) : (
                                        <Image
                                            fill
                                            className="object-cover"
                                            src={NoImage}
                                            alt="No Image Available"
                                        />
                                    )}
                                </div>
                                <div className="flex h-[340px] w-full flex-col justify-center gap-1 bg-[#0f1017] bg-poster-gradient px-3 py-3 lg:order-2 lg:h-auto lg:py-6 xl:w-[30%]">
                                    <span className="hidden text-center text-xs md:block">
                                        {item.attributes?.place}
                                    </span>

                                    <h1 className="text-center text-xl">
                                        {item.attributes?.header}
                                    </h1>
                                    {item.attributes?.poster && (
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
                                    )}

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
                                        {item.attributes?.duration && (
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
                                        )}

                                        {item.attributes?.ticketPrice && (
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm">{t('ticketPrice')}</span>
                                                <span className="ml-2 text-sm">
                                                    {item.attributes?.ticketPrice} ₾
                                                </span>
                                            </span>
                                        )}
                                        {item.attributes?.poster && (
                                            <div className="mt-2 grid grid-cols-2 items-center justify-center gap-1 md:gap-2">
                                                {item.attributes?.premiereDate1 && (
                                                    <span className="flex flex-row items-center gap-1">
                                                        <Calendar className="text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatDate(
                                                                item.attributes?.premiereDate1
                                                            )}
                                                        </span>
                                                        <Clock className="fill-zinc-300 text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatTime(
                                                                item.attributes?.premiereDate1
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                                {item.attributes?.premiereDate2 && (
                                                    <span className="flex flex-row items-center gap-1">
                                                        <Calendar className="text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatDate(
                                                                item.attributes?.premiereDate2
                                                            )}
                                                        </span>
                                                        <Clock className="fill-zinc-300 text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatTime(
                                                                item.attributes?.premiereDate2
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                                {item.attributes?.premiereDate3 && (
                                                    <span className="flex flex-row items-center gap-1">
                                                        <Calendar className="text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatDate(
                                                                item.attributes?.premiereDate3
                                                            )}
                                                        </span>
                                                        <Clock className="fill-zinc-300 text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatTime(
                                                                item.attributes?.premiereDate3
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                                {item.attributes?.premiereDate4 && (
                                                    <span className="flex flex-row items-center gap-1">
                                                        <Calendar className="text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatDate(
                                                                item.attributes?.premiereDate4
                                                            )}
                                                        </span>
                                                        <Clock className="fill-zinc-300 text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatTime(
                                                                item.attributes?.premiereDate4
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                                {item.attributes?.premiereDate5 && (
                                                    <span className="flex flex-row items-center gap-1">
                                                        <Calendar className="text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatDate(
                                                                item.attributes?.premiereDate5
                                                            )}
                                                        </span>
                                                        <Clock className="fill-zinc-300 text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatTime(
                                                                item.attributes?.premiereDate5
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                                {item.attributes?.premiereDate6 && (
                                                    <span className="flex flex-row items-center gap-1">
                                                        <Calendar className="text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatDate(
                                                                item.attributes?.premiereDate6
                                                            )}
                                                        </span>
                                                        <Clock className="fill-zinc-300 text-base" />
                                                        <span className="text-xs md:text-sm">
                                                            {formatTime(
                                                                item.attributes?.premiereDate6
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex w-full flex-row gap-5 px-5 pt-1 md:pt-4 lg:gap-3">
                                        <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                            <Link href={`/repertory/${item.id}`}>
                                                {t('viewMore')}
                                            </Link>
                                        </button>

                                        {item.attributes?.poster && (
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
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {data?.meta?.pagination && (
                            <Pagination
                                currentPage={data?.meta?.pagination?.page}
                                totalPages={data?.meta?.pagination?.pageCount}
                            />
                        )}
                    </div>
                </section>
            )}
        </>
    )
}
