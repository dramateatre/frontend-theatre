import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import OldTheatre from '@images/OldTheatre.jpg'
import Theatre1 from '@images/Theatre1.jpg'
import Theatre2 from '@images/Theatre2.webp'
import TheatreHall from '@images/TheatreHall.jpg'
import NewTheatre from '@images/New.webp'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import { ArrowRight } from '@/components/svg'

const FallenImages = ({ images = [OldTheatre, Theatre1, Theatre2, TheatreHall, NewTheatre] }) => {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsclient] = useState(false)
    const tabletQuery = useMediaQuery({ query: '(min-width: 768px)' })
    const laptopQuery = useMediaQuery({ query: '(min-width: 1024px)' })
    const desktopQuery = useMediaQuery({ query: '(min-width: 1280px)' })

    const getImageCount = () => {
        if (desktopQuery) return 5
        if (laptopQuery) return 4
        if (tabletQuery) return 4
        return 3 // Mobile
    }

    const imageCount = getImageCount()

    const imagePositions = [
        { top: '2%', left: '5%', rotate: '-5deg', scale: 0.95, zIndex: 10 },
        { top: '10%', left: '23%', rotate: '9deg', scale: 1, zIndex: 20 },
        { top: '5%', left: '42%', rotate: '-5deg', scale: 0.98, zIndex: 30 },
        { top: '12%', left: '60%', rotate: '6deg', scale: 0.97, zIndex: 25 },
        { top: '1%', left: '75%', rotate: '-3deg', scale: 0.99, zIndex: 15 },
    ]

    useEffect(() => {
        setIsclient(true)
    }, [])

    return (
        <>
            {isClient ? (
                <section className="flex w-full flex-col pt-10">
                    <h1
                        className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} mb-8 text-center text-xl tracking-[5px] text-white md:text-3xl`}
                    >
                        {t('theatreHistory')}
                    </h1>
                    <div className="relative w-full items-center justify-center p-4 md:flex md:h-80">
                        {images.slice(0, imageCount).map((image, index) => (
                            <motion.div
                                key={index}
                                className="mx-auto mb-4 flex items-center justify-center md:absolute md:mx-0 md:mb-0"
                                style={{
                                    top: imagePositions[index].top,
                                    left: imagePositions[index].left,
                                    zIndex: imagePositions[index].zIndex,
                                }}
                                initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: imagePositions[index].rotate,
                                    scale: imagePositions[index].scale,
                                }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                                whileHover={{
                                    scale: 1.1,
                                    zIndex: 50,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className="relative h-44 w-4/5 sm:h-48 sm:w-64 md:h-52 md:w-72">
                                    <Image
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-[4px] object-cover shadow-lg"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex w-full justify-center md:flex md:justify-end md:pr-20">
                        <Link href="/history">
                            <button className="flex w-auto items-center gap-2 text-sm text-white underline-offset-2 hover:underline">
                                {t('viewMore')}
                                <ArrowRight className="mt-1" />
                            </button>
                        </Link>
                    </div>
                </section>
            ) : null}
        </>
    )
}

export default FallenImages
