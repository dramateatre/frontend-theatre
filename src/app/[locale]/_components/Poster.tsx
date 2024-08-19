'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'

import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Poster({ posterData }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <section className="w-full pb-10 text-white md:pb-20">
            <div className="flex w-full flex-row justify-center pt-10">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} texet-center text-3xl tracking-[20px]`}
                >
                    {t('poster')}
                </h1>
            </div>
            <Carousel
                opts={{
                    watchDrag: posterData?.data.length > 1,
                }}
                className="flex justify-center"
            >
                <CarouselContent className="py-10 pr-2 lg:px-7 xl:px-20">
                    {posterData.data.map((item: any, index: any) => (
                        <>
                            <CarouselItem key={index} className="pl-6 lg:pl-7 xl:pl-10">
                                <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom lg:h-[400px] lg:flex-row">
                                    <div className="relative h-[200px] w-full md:h-[300px] lg:h-full lg:w-[70%]">
                                        <Image
                                            fill
                                            className="h-full w-full object-cover object-center"
                                            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
                                            alt="Village"
                                        />
                                    </div>
                                    <div className="flex h-auto flex-col items-center justify-between gap-3 bg-[#0f1017] bg-poster-gradient pb-8 pt-4 lg:order-2 lg:w-[30%] lg:py-8">
                                        <span className="text-cente text-xs">
                                            ბათუმის დრამატული თეატრი
                                        </span>
                                        <div className="flex flex-row items-center gap-3 lg:flex-col">
                                            <span className="text-sm">
                                                {item.attributes?.premierDate}
                                            </span>
                                        </div>
                                        <h1 className="text-xl lg:text-2xl">
                                            {item.attributes?.header}
                                        </h1>
                                        <span className="px-5 text-center text-sm">
                                            მიხეილ ჯავახიშვილის პიესის "შერცხვენილნი" ის მიხედვითqe
                                        </span>
                                        <div className="flex w-full flex-row gap-5 px-5 pt-4 lg:gap-3">
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
