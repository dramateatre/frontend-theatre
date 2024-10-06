'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} pt-5 text-center text-2xl tracking-widest text-white md:pt-10 md:text-2xl`}
            >
                {t('troupe')}
            </h1>
            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex min-h-screen w-full flex-col justify-between gap-10 px-12 py-5 text-white md:px-7 md:py-16 lg:px-20"
            >
                <motion.div className="grid h-auto w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-5">
                    {data?.data.map((item: any, index: number) => (
                        <motion.div key={index} variants={itemVariants}>
                            <div className="group relative z-10 h-[250px] w-auto cursor-pointer overflow-hidden rounded-[6px] transition-all duration-500 ease-in-out md:h-[230px]">
                                {item?.attributes?.image?.data && (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_REST_API}${item?.attributes?.image?.data?.attributes?.url || NoImage}`}
                                        alt={`Actor ${index + 1}`}
                                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110" // Subtle hover effect
                                        layout="fill"
                                    />
                                )}
                                <div className="absolute bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-90" />
                                <div className="absolute inset-0 flex -translate-x-full transform flex-col items-center justify-between bg-black/80 p-4 py-5 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                                    <div
                                        className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} flex flex-row items-center justify-center gap-1 text-xl text-white`}
                                    >
                                        <h3>{item.attributes?.firstname}</h3>
                                        <h3>{item.attributes?.lastname}</h3>
                                    </div>
                                    <Link className="w-full" href={`/troupe/${item.id}`}>
                                        <div className="flex w-full flex-row items-center justify-center gap-1 rounded-[4px] border px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black">
                                            {t('bio')}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.main>
        </>
    )
}
