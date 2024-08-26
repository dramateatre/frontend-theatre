'use client'

import Image from 'next/image'
import ActorsIcon from '@images/ActorsIcon.png'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function Actors({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <section className="flex w-full flex-col items-center gap-5 lg:gap-10">
            <h1
                className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} px-6 text-left text-2xl text-white md:text-4xl`}
            >
                {t('creativeGroup')}
            </h1>
            <Image src={ActorsIcon} className="h-3 w-auto" alt="Actors icon" />
            <Carousel className="flex w-full justify-center">
                <CarouselContent className="w-full py-5 pr-6 lg:pr-7 xl:pr-10">
                    {data.map((item: any, index: any) => (
                        <CarouselItem
                            key={index}
                            className="pl-6 sm:basis-1/2 lg:basis-1/3 lg:pl-7 xl:basis-1/5 xl:pl-10"
                        >
                            <Link href={`/creative-group/${item.id}`}>
                                <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[5px] border border-white">
                                    <Image
                                        fill
                                        src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
                                        alt="123123"
                                        className="h-fullw-full object-cover"
                                    />
                                </div>
                            </Link>

                            {/* {item?.attributes?.image?.data && (
                                <Image
                                    src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
                                    alt={`Actor ${index + 1}`}
                                    className="h-[200px] w-full object-cover"
                                    layout="fill"
                                />
                            )} */}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
