'use client'

import Link from 'next/link'
import React from 'react'
import LangChoose from './LangChoose'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { BurgerMenu } from './BurgerMenu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
} from '../ui/dropdown-menu'
import { ArrowDown } from '../svg'

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
                <Link href="/repertory">
                    <h1 className="text-white">{t('repertory')}</h1>
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex cursor-pointer flex-row items-center gap-2">
                            <span className="text-white outline-none">{t('about')}</span>
                            <ArrowDown className="mt-1 fill-white text-xs" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="inset-0 overflow-hidden bg-blue-300 text-white">
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <Link href="/history">
                                    <DropdownMenuLabel className="cursor-pointer">
                                        {t('theatreHistory')}
                                    </DropdownMenuLabel>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/museum">
                                    <DropdownMenuLabel className="cursor-pointer">
                                        {t('museum')}
                                    </DropdownMenuLabel>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex cursor-pointer flex-row items-center gap-2">
                            <span className="text-white outline-none">{t('team')}</span>
                            <ArrowDown className="mt-1 fill-white text-xs" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="inset-0 overflow-hidden bg-blue-300 text-white">
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <Link href="/administration">
                                    <DropdownMenuLabel className="cursor-pointer">
                                        {t('administration')}
                                    </DropdownMenuLabel>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/troupe">
                                    <DropdownMenuLabel className="cursor-pointer">
                                        {t('troupe')}
                                    </DropdownMenuLabel>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/creativeGroup">
                                    <DropdownMenuLabel className="cursor-pointer">
                                        {t('creativeGroup')}
                                    </DropdownMenuLabel>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/contact">
                    <h1 className="text-white">{t('contact')}</h1>
                </Link>
                <Link href="/tickets">
                    <h1 className="text-white">{t('tickets')}</h1>
                </Link>
            </div>
            <LangChoose
                className="cursor-pointer text-sm text-white md:text-base"
                spanClassname=" "
            />
            <BurgerMenu />
        </div>
    )
}
