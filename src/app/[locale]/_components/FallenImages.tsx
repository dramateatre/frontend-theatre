'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'
import { ArrowRight } from '@/components/svg'

// Import Shadcn UI Carousel components
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

// Import your images
import OldTheatre from '@images/OldTheatre.jpg'
import Theatre1 from '@images/Theatre1.jpg'
import Theatre2 from '@images/Theatre2.webp'
import TheatreHall from '@images/TheatreHall.jpg'
import NewTheatre from '@images/New.webp'

const TheatreCarousel = ({
    images = [OldTheatre, Theatre1, Theatre2, TheatreHall, NewTheatre],
}) => {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient && (
                <section className="w-full px-4 py-12 md:py-16">
                    <h1
                        className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} mb-10 text-center text-3xl tracking-[5px] text-white md:text-4xl`}
                    >
                        {t('theatreHistory')}
                    </h1>

                    <div className="mx-auto w-full">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <div className="relative aspect-[4/3] overflow-hidden  rounded-lg">
                                                <Image
                                                    src={image}
                                                    alt={`Theatre Image ${index + 1}`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-md transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-white/10 text-white hover:bg-white/20" />
                            <CarouselNext className="right-2 bg-white/10 text-white hover:bg-white/20" />
                        </Carousel>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Link href="/history">
                            <button className="flex items-center gap-2 rounded-md bg-white bg-opacity-20 px-5 py-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30">
                                {t('viewMore')}
                                <ArrowRight className="ml-1" />
                            </button>
                        </Link>
                    </div>
                </section>
            )}
        </>
    )
}

export default TheatreCarousel
