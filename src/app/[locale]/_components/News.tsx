'use client'
import Image from 'next/image'
import Test from '../../../../public/imgs/Test.jpg'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useMediaQuery } from 'react-responsive'
import { ArrowRight } from '@/components/svg'

export default function News() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)',
    })
    return (
        <section className="w-full pb-10 text-white">
            <div className="flex w-full flex-row justify-center">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} texet-center text-3xl tracking-[5px]`}
                >
                    {t('news')}
                </h1>
            </div>
            <Carousel
                opts={{
                    watchDrag: !isDesktop,
                }}
                className="flex justify-center"
            >
                <CarouselContent className="py-10 pr-4 xl:py-16 xl:pl-4 xl:pr-10">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <>
                            <CarouselItem
                                key={index}
                                className="pl-6 md:basis-1/2 lg:basis-1/4 lg:pl-10"
                            >
                                <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom">
                                    <div className="h-[200px] w-full">
                                        <Image
                                            className="h-full w-full object-cover object-center"
                                            src={Test}
                                            alt="Village"
                                        />
                                    </div>
                                    <div className="items-startg bg-card-gradient flex h-[150px] flex-col justify-around bg-[#0f1017] px-3 py-2">
                                        <h1>რაც გინახავს ვეღარ ნახავ</h1>
                                        <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
                                            თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე -
                                            იცინის. თეატრის სამხატვრო ხელმძღვანელმა, ალექსანდრე
                                            ქანთარიამ ამჯერად თეატრალური ნიღბის ის მხარე აირჩია,
                                            რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას,
                                            გულიანად ახარხარებს, რადგან ბათუმის დრამატული თეატრის
                                            სცენაზე ავქსე
                                        </p>
                                        <div className="h-[1px] w-full bg-white"></div>
                                        <div className="flex w-full items-center justify-between">
                                            <span className="text-sm">07.25.2024</span>
                                            <button className="text-sm underline underline-offset-1">
                                                {t('viewMore')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="hidden w-full justify-end pr-20 md:flex">
                <button className="flex w-auto items-center gap-2 text-sm underline-offset-2 hover:underline">
                    {t('viewMoreNews')}
                    <ArrowRight className="mt-1" />
                </button>
            </div>
        </section>
    )
}
