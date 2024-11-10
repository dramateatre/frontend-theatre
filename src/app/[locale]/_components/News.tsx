'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { useMediaQuery } from 'react-responsive'
import { ArrowRight, Calendar } from '@/components/svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'
import NoImage from '@images/NoImage.jpg'

export default function News({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    const isDesktop = useMediaQuery({
        query: '(min-width: 1280px)',
    })

    if (!data?.data?.length) return null

    return (
        <section
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} w-full py-5 text-white`}
        >
            <div className="flex w-full flex-row justify-center">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl tracking-[5px] md:text-4xl`}
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
                <CarouselContent className="py-10 lg:px-8 xl:py-12">
                    <>
                        {data?.data
                            ?.sort(
                                (a: any, b: any) =>
                                    new Date(b.attributes.date).getTime() -
                                    new Date(a.attributes.date).getTime()
                            )
                            .map((item: any, index: number) => (
                                <CarouselItem key={index} className="md:basis-1/3 xl:basis-1/4 md:pl-10">
                                    <Link href={`/news/${item.id}`}>
                                        <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] border border-slate-700 shadow-xl">
                                            <div className="h-[200px] w-full">
                                                <Image
                                                    className="h-full w-full object-cover object-center"
                                                    src={`${process.env.NEXT_PUBLIC_REST_API}${item?.attributes?.image?.data?.attributes?.url || NoImage}`}
                                                    alt={
                                                        item?.attributes?.image?.data?.attributes
                                                            ?.url
                                                    }
                                                    width={600}
                                                    height={600}
                                                />
                                            </div>
                                            <div className="h-42 relative flex w-full flex-col gap-2 bg-[#0f1017] bg-card-gradient px-3 py-4 md:h-40">
                                                <h1 className="line-clamp-1 h-auto overflow-hidden text-center md:h-16">
                                                    {item.attributes.header}
                                                </h1>
                                                <div className="h-[1px] w-full bg-white"></div>
                                                <div className="line-clamp-5 h-full w-full overflow-hidden text-ellipsis text-xs">
                                                    <BlocksRenderer
                                                        content={item.attributes.description}
                                                    />
                                                </div>
                                                <div className="h-[1px] w-full bg-white"></div>
                                                <div className="flex h-auto w-full items-center justify-between">
                                                    <div className="flex gap-2">
                                                        <Calendar />
                                                        <span className="text-sm">
                                                            {new Date(
                                                                item.attributes.date
                                                                    ? item.attributes.date
                                                                    : item.attributes.publishedAt
                                                            ).toLocaleString('en-US', {
                                                                year: 'numeric',
                                                                month: 'numeric',
                                                                day: 'numeric',
                                                            })}
                                                        </span>
                                                    </div>
                                                    <button className="text-sm underline underline-offset-1">
                                                        {t('viewMore')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                    </>
                </CarouselContent>
                <CarouselPrevious className="xl:hidden" />
                <CarouselNext className="xl:hidden" />
            </Carousel>
            <div className="hidden w-full justify-end pr-20 md:flex">
                <Link href="/news">
                    <button className="flex w-auto items-center gap-2 text-sm underline-offset-2 hover:underline">
                        {t('viewMoreNews')}
                        <ArrowRight className="mt-1" />
                    </button>
                </Link>
            </div>
        </section>
    )
}
