'use client'

import { useParams } from 'next/navigation'
import AvatarImage from './AvatarImage'
import Paragraph from './Paragraph'
import { useEffect, useState } from 'react'
import { useStore } from '@/zustand/zustand'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)
    const setTroupeAlternateLocales = useStore((state) => state.setTroupeAlternateLocales)

    useEffect(() => {
        if (data.attributes?.localizations?.data[0]?.id) {
            setTroupeAlternateLocales(data.attributes.localizations.data[0].id)
        } else {
            setTroupeAlternateLocales(undefined)
        }
    }, [data, setTroupeAlternateLocales])

    useEffect(() => {
        setIsClient(true)
    }, [])

    const fallAndStandUpVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 10,
                duration: 0.8,
            },
        },
    }

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex min-h-screen w-full justify-center overflow-hidden bg-[#1a1b2f] text-white md:py-10`}
        >
            {isClient ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fallAndStandUpVariants}
                    className="flex w-full flex-col items-center"
                >
                    <div className="mb-10 hidden flex-row items-center gap-2 rounded-[6px] border bg-[#0f1017] bg-poster-gradient px-7 py-1 shadow-custom md:flex">
                        <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                        <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                    </div>

                    <div className="h-full w-full overflow-hidden rounded-[4px] bg-[#0f1017] bg-poster-gradient shadow-xl md:w-2/3">
                        <div className="relative mr-5 h-[250px] w-full md:float-left md:h-[300px] md:w-[400px]">
                            <AvatarImage data={data} />
                        </div>
                        <div className="relative w-full px-3">
                            <div className="absolute right-4 top-3">
                                {data.attributes.article && (
                                    <Link target="_blank" href={data.attributes.article}>
                                        <button
                                            className={`flex items-center justify-center rounded-[4px] border px-3 py-1 text-sm text-white hover:bg-slate-200 hover:text-black`}
                                        >
                                            {t('article')}
                                        </button>
                                    </Link>
                                )}
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2 py-2 md:hidden">
                                <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                                <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                            </div>
                            <div className="h-[1px] w-full bg-white md:hidden"></div>
                            {data?.attributes?.description && (
                                <div className="py-5 text-sm md:text-base">
                                    <Paragraph content={data?.attributes?.description} />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ) : null}
        </main>
    )
}
