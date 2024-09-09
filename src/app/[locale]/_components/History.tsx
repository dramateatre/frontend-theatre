'use client'

import Image from 'next/image'
import React from 'react'
import Old from '../../../../public/imgs/OldTheatre.jpg'
import New from '../../../../public/imgs/New.webp'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function History() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <div className={`relative flex h-auto w-full py-20 md:pb-44 md:pt-20 lg:py-28`}>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-0 md:pl-6 lg:pl-6 xl:pl-32">
                <div className="relative h-full w-full">
                    <div className="flex h-full w-full flex-row justify-start">
                        <Image
                            src={Old}
                            alt="New Image"
                            className="h-[220px] w-4/5 rounded-br-[5px] rounded-tr-[5px] border border-white object-cover shadow-customWhiteSmall md:flex md:h-[250px] md:w-full md:rounded-none lg:h-[400px]"
                        />
                        <div className="ml-10 flex h-full w-auto flex-col items-center justify-between text-white md:hidden">
                            <span>{t('1')}</span>
                            <span>{t('2')}</span>
                            <span>{t('3')}</span>
                            <span>{t('4')}</span>
                            <span>{t('5')}</span>
                            <span>{t('6')}</span>
                            <span>{t('7')}</span>
                        </div>
                    </div>
                </div>

                <span
                    className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-lg text-white underline md:hidden`}
                >
                    <Link href="/history">{t('findMore')}</Link>
                </span>

                <div className="relative flex w-full flex-col items-end md:items-center md:pr-10">
                    <div className="flex w-full flex-col items-center md:gap-3">
                        <h1
                            className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} hidden text-center text-4xl tracking-widest text-white md:flex`}
                        >
                            {t('theatreHistory')}
                        </h1>
                        <Link href="/history">
                            <span
                                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} hidden cursor-pointer text-lg text-white underline md:block`}
                            >
                                {t('findMore')}...
                            </span>
                        </Link>
                    </div>
                    <div className="relative hidden h-full w-full md:block">
                        <div className="relative flex flex-row md:-translate-x-6 md:translate-y-20 lg:-translate-x-20">
                            <Image
                                src={New}
                                alt="New Image"
                                className="h-full w-full border border-white object-cover shadow-customWhiteSmall md:h-[220px] lg:h-[400px]"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-row justify-end">
                        <div className="mr-10 flex h-full w-auto flex-col items-center justify-between text-white md:hidden">
                            <span>{t('8')}</span>
                            <span>{t('9')}</span>
                            <span>{t('10')}</span>
                            <span>{t('11')}</span>
                            <span>{t('12')}</span>
                            <span>{t('13')}</span>
                            <span>{t('14')}</span>
                        </div>
                        <Image
                            src={New}
                            alt="New Image"
                            className="h-[220px] w-4/5 rounded-bl-[5px] rounded-tl-[5px] border border-white object-cover shadow-customWhiteSmall md:hidden md:h-full lg:w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
