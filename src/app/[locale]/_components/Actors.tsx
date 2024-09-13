'use client'

import Image from 'next/image'
import ActorsIcon from '@images/ActorsIcon.png'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { ArrowRight } from '@/components/svg'

export default function Actors({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const isDesktop = useMediaQuery({
        query: '(min-width: 1440px)',
    })

    if (!data?.length) return null

    return (
        <section className="flex w-full flex-col items-center gap-5 text-center text-sm text-white lg:gap-10">
            <h1
                className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} px-6 text-left text-2xl text-white md:text-4xl`}
            >
                {t('creativeGroup')}
            </h1>
            <Image src={ActorsIcon} className="h-3 w-auto" alt="Actors icon" />
            <Carousel
                opts={{
                    watchDrag: !isDesktop && data?.length < 6,
                }}
                className="flex w-full justify-center"
            >
                <CarouselContent className="w-full py-5 pr-16 lg:pr-7 xl:pl-6 xl:pr-10">
                    {data.map((item: any, index: any) => (
                        <CarouselItem
                            key={index}
                            className="pl-10 sm:basis-1/2 lg:basis-1/3 lg:pl-7 xl:basis-1/5 xl:pl-6"
                        >
                            <div className="group relative z-10 h-[280px] w-auto cursor-pointer overflow-hidden rounded-[6px] transition-all duration-700 ease-in-out md:h-[280px] md:hover:z-10">
                                <Image
                                    fill
                                    src={`https://api.batumitheatre.ge${item?.attributes?.image?.data?.attributes?.url}`}
                                    alt="123123"
                                    className="h-fullw-full object-cover"
                                />

                                <div className="absolute bg-gradient-to-t from-black to-transparent opacity-100" />
                                <div className="absolute inset-0 flex -translate-x-full transform flex-col items-center justify-between bg-black/90 p-4 py-5 transition-transform duration-700 ease-in-out group-hover:translate-x-0">
                                    <div
                                        className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} flex flex-row items-start justify-center gap-1 text-xl text-white`}
                                    >
                                        <h3>{item.attributes && item.attributes.firstname}</h3>
                                        <h3>{item.attributes && item.attributes.lastname}</h3>
                                    </div>
                                    <Link className="w-full" href={`/creative-group/${item.id}`}>
                                        <div className="flex w-full flex-row items-center justify-center gap-1 rounded-[4px] border px-5 py-2 text-sm text-white hover:bg-white hover:text-black">
                                            {t('bio')}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="hidden w-full justify-end pr-20 md:flex">
                <Link href="/creative-group">
                    <button className="flex w-auto items-center gap-2 text-sm underline-offset-2 hover:underline">
                        {t('viewMore')}
                        <ArrowRight className="mt-1" />
                    </button>
                </Link>
            </div>
        </section>
    )
}
