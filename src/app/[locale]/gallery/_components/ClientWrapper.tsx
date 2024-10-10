'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import NoImage from '@images/NoImage.jpg'

export default function ClientWrapper({ data }: any) {
    const params = useParams()
    const locale = params.locale as string
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    }

    return (
        <>
            <h1
                className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} pt-5 text-center text-2xl tracking-widest text-white md:pt-10 md:text-2xl`}
            >
                {t('gallery')}
            </h1>
            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex min-h-screen w-full flex-col justify-between gap-10 px-12 py-5 text-white md:px-7 md:py-16 lg:px-20"
            >
                <motion.div className="grid h-auto w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-5">
                    {data?.data &&
                        data?.data[0]?.attributes?.image?.data.map((image: any, index: number) => (
                            <motion.div key={index} variants={itemVariants}>
                                <div className="group relative z-10 h-[350px] w-auto cursor-pointer overflow-hidden rounded-[6px] transition-all duration-500 ease-in-out md:h-[230px]">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_REST_API}${image.attributes.url}`}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                                        layout="fill"
                                    />
                                </div>
                            </motion.div>
                        ))}
                </motion.div>
            </motion.main>
        </>
    )
}
