'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useMediaQuery } from 'react-responsive'
import { ArrowRight } from '@/components/svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export default function News({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)',
    })

    if (!data) return null

    return (
        <section
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} w-full pb-10 text-white`}
        >
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
                    <>
                        {data?.data?.map((item: any, index: number) => (
                            <CarouselItem
                                key={index}
                                className="pl-6 md:basis-1/2 lg:basis-1/4 lg:pl-10"
                            >
                                <Link href={`/news/${item.id}`}>
                                    <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom">
                                        <div className="h-[200px] w-full">
                                            <Image
                                                className="h-full w-full object-cover object-center"
                                                src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
                                                alt="Village"
                                                width={600}
                                                height={600}
                                            />
                                        </div>
                                        <div className="relative flex h-40 w-full flex-col gap-2 bg-[#0f1017] bg-card-gradient px-3 py-2 md:h-40">
                                            <h1 className="line-clamp-1 h-14 overflow-hidden text-center">
                                                {item.attributes.header}
                                            </h1>
                                            <div className="h-[1px] w-full bg-white"></div>
                                            {/* <ReactMarkdown
                                               className="line-clamp-2 overflow-hidden text-ellipsis text-xs"
                                            remarkPlugins={[remarkGfm]}
                                                   >
                                             {item.attributes.description}
                                                <   /ReactMarkdown> */}
                                            <div className="line-clamp-4 h-full w-full overflow-hidden text-ellipsis text-xs">
                                                <BlocksRenderer
                                                    content={item.attributes.description}
                                                />
                                            </div>
                                            <div className="h-[1px] w-full bg-white"></div>
                                            <div className="flex h-6 w-full items-center justify-between">
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
