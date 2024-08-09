'use client'

import Link from 'next/link'
import React from 'react'
import LangChoose from './LangChoose'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { BurgerMenu } from './BurgerMenu'

export default function Header() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <div
            className={` ${locale === 'en' ? 'text-lg' : 'text-base'} relative z-50 flex h-16 w-full flex-row items-center justify-end gap-6 border-b border-white bg-[#0f1017] px-6 backdrop-blur-none md:h-20 md:px-7 lg:px-20`}
        >
            <div className="hidden gap-6 md:flex">
                <Link href="/">
                    <h1 className="text-white">{t('main')}</h1>
                </Link>
                <Link href="/news">
                    <h1 className="text-white">{t('news')}</h1>
                </Link>
                <Link href="/repertories">
                    <h1 className="text-white">{t('repertory')}</h1>
                </Link>
                {/* <details className="dropdown">
                <summary className="btn order-2 m-1 cursor-pointer text-white">{t('team')}</summary>
                <ul className="menu dropdown-content absolute z-[1] mt-3 flex w-52 flex-col gap-5 overflow-hidden rounded-[6px] bg-[#282837] p-4 text-white shadow">
                    <li>
                        <h>
                            <Link href="/troupe" className="btn text-white">
                                Troupe
                            </Link>
                        </h>
                    </li>
                    <li>
                        <a>სამხატვრო გუნდი</a>
                    </li>
                </ul>
            </details> */}
                {/* <details className="dropdown">
                <summary className="btn order-2 m-1 cursor-pointer text-white">
                    {t('about')}
                </summary>
                <ul className="menu dropdown-content absolute z-[1] mt-3 flex w-52 flex-col gap-5 overflow-hidden rounded-[6px] bg-[#282837] p-4 text-white shadow">
                    <li>
                        <a>თეატრის ისტორია</a>
                    </li>
                    <li>
                        <a>სპეკტაკლოგრაფია</a>
                    </li>
                    <li>
                        <a>მუზეუმი</a>
                    </li>
                </ul>
            </details> */}

                <Link href="/contact">
                    <h1 className="text-white">{t('contact')}</h1>
                </Link>
                <Link href="/tickets">
                    <h1 className="text-white">{t('tickets')}</h1>
                </Link>
            </div>
            <LangChoose className="cursor-pointer text-white text-sm md:text-base" spanClassname=" " />
            <BurgerMenu />
        </div>
    )
}
