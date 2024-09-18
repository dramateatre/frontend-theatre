'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Pagination from '@/components/shared/pagination/Pagination'

export default function ClientWrapper({ data }: any) {
    const params = useParams()
    const locale = params.locale as string
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1.5, // Slow down the stagger and container transition
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5, // Slower appearance
                ease: 'easeInOut', // Smooth easing
            },
        },
    }

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex min-h-screen w-full flex-col gap-10 px-12 py-5 text-white md:px-7 md:py-16 lg:px-20"
        >
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-2xl tracking-widest md:text-2xl`}
            >
                {t('troupe')}
            </h1>
            <motion.div className="grid h-auto w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
                {data?.data.map((item: any, index: number) => (
                    <motion.div key={index} variants={itemVariants}>
                        <div className="group relative z-10 h-[350px] w-auto cursor-pointer overflow-hidden rounded-[6px] transition-all duration-700 ease-in-out md:h-[280px] md:hover:z-10">
                            {item?.attributes?.image?.data && (
                                <Image
                                    src={`https://api.batumitheatre.ge${item?.attributes?.image?.data?.attributes?.url}`}
                                    alt={`Actor ${index + 1}`}
                                    className="h-full w-full object-cover transition-all duration-700 ease-in-out" // Slow image transition
                                    layout="fill"
                                />
                            )}
                            <div className="absolute bg-gradient-to-t from-black to-transparent opacity-100" />
                            <div className="absolute inset-0 flex -translate-x-full transform flex-col items-center justify-between bg-black/90 p-4 py-5 transition-transform duration-700 ease-in-out group-hover:translate-x-0">
                                <div
                                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} flex flex-row items-center justify-center gap-1 text-xl text-white`}
                                >
                                    <h3>{item.attributes && item.attributes.firstname}</h3>
                                    <h3>{item.attributes && item.attributes.lastname}</h3>
                                </div>
                                <Link className="w-full" href={`/troupe/${item.id}`}>
                                    <div className="flex w-full flex-row items-center justify-center gap-1 rounded-[4px] border px-5 py-2 text-sm text-white hover:bg-white hover:text-black">
                                        {t('bio')}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Pagination
                currentPage={data?.meta?.pagination?.page}
                totalPages={data?.meta?.pagination?.pageCount}
            />
        </motion.main>
    )
}
