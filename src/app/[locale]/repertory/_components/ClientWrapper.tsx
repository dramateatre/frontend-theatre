'use client'

import Pagination from '@/components/shared/pagination/Pagination'
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
                <section className="min-h-screen w-full bg-[#1a1b2f] px-6 py-10 md:px-7 lg:px-7 xl:px-40">
                    <div className={`flex w-full flex-col items-center gap-16 text-white`}>
                        <div className="flex w-full flex-row justify-center">
                            <h1
                                className={`text-center ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-2xl tracking-[20px] md:text-3xl`}
                            >
                                {t('repertoires')}
                            </h1>
                        </div>
                        {data?.data?.map((item: any) => (
                            <div
                                className={`relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:w-[480px] lg:w-full lg:flex-row`}
                            >
                                <div className="relative h-[200px] w-full md:h-[350px] lg:h-[420px] lg:w-[70%]">
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
                                <div className="flex h-[270px] w-full flex-col justify-center gap-1 bg-[#0f1017] bg-poster-gradient px-3 py-5 lg:order-2 lg:h-auto lg:w-[30%] lg:py-6">
                                    <h1 className="text-center text-lg">
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
                                                <span className="text-sm md:text-base">
                                                    {t('author')}
                                                </span>
                                                <span className="ml-2 text-sm md:text-base">
                                                    {item.attributes?.author}
                                                </span>
                                            </span>
                                        )}
                                        {item.attributes?.director && (
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm md:text-base">
                                                    {t('director')}
                                                </span>
                                                <span className="ml-2 text-sm md:text-base">
                                                    {item.attributes?.director}
                                                </span>
                                            </span>
                                        )}
                                        {item.attributes?.duration && (
                                            <span className="line-clamp-1 lg:line-clamp-2">
                                                <span className="text-sm md:text-base">
                                                    {t('duration')}
                                                </span>
                                                <span className="ml-2 text-sm md:text-base">
                                                    {item.attributes?.duration
                                                        ?.split(':')
                                                        .slice(0, 2)
                                                        .join(':')}{' '}
                                                    {t('hour')}
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex w-full flex-row gap-5 px-5 pt-1 md:pt-4 lg:gap-3">
                                        <Link className="w-full" href={`/repertory/${item.id}`}>
                                            <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white md:text-base">
                                                {t('viewMore')}
                                            </button>
                                        </Link>
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
