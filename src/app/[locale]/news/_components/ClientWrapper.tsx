'use client'

import Pagination from '@/components/shared/pagination/Pagination'
import { Calendar } from '@/components/svg'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion' // Import motion from framer-motion
import NoImage from '@images/NoImage.jpg'

export default function ClientWrapper({ data, page, pageSize }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    // Define animation variants
    const slideInVariants = {
        hidden: (direction: string) => ({
            x: direction === 'left' ? -100 : 100, // Slide from left or right
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5, // Animation duration
                type: 'spring',
                stiffness: 100,
            },
        },
    }

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex min-h-screen w-full flex-col items-center gap-10 bg-[#1a1b2f] px-6 pb-20 pt-10 md:px-7 lg:px-20 xl:px-48`}
        >
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl tracking-[5px] text-white`}
            >
                {t('news')}
            </h1>
            {data?.data?.map((item: any, index: number) => (
                <Link href={`/news/${item.id}`} key={item.id}>
                    <motion.div
                        className="relative z-50 flex h-[410px] w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:h-[200px] md:flex-row"
                        initial="hidden" // Set the initial state
                        whileInView="visible" // Set to animate on entering the viewport
                        custom={index % 2 === 0 ? 'left' : 'right'} // Alternate directions
                        variants={slideInVariants} // Use defined variants
                        viewport={{ once: true }} // Trigger animation only once
                    >
                        <div className="relative min-h-[200px] w-full md:w-[400px]">
                            <Image
                                fill
                                src={`${process.env.NEXT_PUBLIC_REST_API}${item?.attributes?.image?.data?.attributes?.url || NoImage}`}
                                alt={item?.attributes?.image?.data?.attributes?.url}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="flex h-full w-full flex-col items-start justify-between gap-3 bg-[#8a8989] bg-opacity-10 bg-card-gradient px-3 pb-3 pt-3 md:px-6">
                            <div className="flex w-full flex-col justify-between">
                                <h1 className="line-clamp-1 h-7 overflow-hidden text-ellipsis text-center text-base text-white md:text-left md:text-lg">
                                    {item.attributes.header}
                                </h1>
                                <div className="my-2 h-[1px] w-full bg-white"></div>
                                <div className="line-clamp-7 h-20 overflow-hidden text-ellipsis text-sm text-white">
                                    <BlocksRenderer content={item.attributes.description} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-1">
                                <div className="h-[1px] w-full bg-white"></div>
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex gap-2">
                                        <Calendar />
                                        <span className="text-sm text-white">
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
                                    <button className="flex flex-row items-center justify-center text-sm text-white underline-offset-2 hover:underline">
                                        {t('viewMore')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
            {data?.meta?.pagination && (
                <Pagination
                    currentPage={data?.meta?.pagination?.page}
                    totalPages={data?.meta?.pagination?.pageCount}
                />
            )}
        </main>
    )
}
