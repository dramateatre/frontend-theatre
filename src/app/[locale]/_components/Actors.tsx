'use client'

import Image from 'next/image'
import ActorsIcon from '../../../../public/imgs/ActorsIcon.png'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Creative from '../../../../public/imgs/actor.jpeg'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'

export default function Actors() {
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
            <Carousel className="flex justify-center">
                <CarouselContent className="py-5 pr-6 lg:pr-7 xl:pr-10">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-6 sm:basis-1/2 lg:basis-1/3 lg:pl-7 xl:basis-1/5 xl:pl-10"
                        >
                            <div className="flex items-center justify-center overflow-hidden rounded-[5px] border border-white">
                                <Image
                                    src={Creative}
                                    alt="123123"
                                    className="h-[200px] w-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
