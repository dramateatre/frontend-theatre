'use client'

import Link from 'next/link'
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
import { ArrowDown, Logo } from '../svg'

export default function Header() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <div
            className={` ${locale === 'en' ? 'text-base' : 'text-base'} relative z-50 flex h-20 w-full flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#a3abb8] via-[#383f4d] to-[#0b0c10] px-6 py-5 text-white md:h-28 md:px-5 xl:px-10`}
        >
            <Link href="/">
                <Logo className="mt-5 fill-[#eeededee] text-[180px] md:mt-10 md:text-[200px] xl:text-[270px]" />
            </Link>

            <div className="flex flex-row gap-4">
                <div className="hidden gap-4 lg:flex">
                    <Link href="/">
                        <h1 className="text-white">{t('main')}</h1>
                    </Link>
                    <Link href="/news">
                        <h1 className="text-white">{t('news')}</h1>
                    </Link>
                    <Link href="/poster" className="hidden xl:block">
                        <h1 className="text-white">{t('poster')}</h1>
                    </Link>
                    <Link href="/repertory">
                        <h1 className="text-white">{t('repertory')}</h1>
                    </Link>
                    <Link href="/artistic-director">
                        <h1 className="text-white">{t('aritsticDir')}</h1>
                    </Link>

                    <Link href="/troupe">
                        <h1 className="text-white">{t('troupe')}</h1>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex cursor-pointer flex-row items-center gap-2">
                                <span className="text-white outline-none">{t('theatre')}</span>
                                <ArrowDown className="mt-1 fill-white text-xs" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="inset-0 mt-3 overflow-hidden rounded-[4px] border-none bg-header-gradient text-white">
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Link href="/director">
                                        <DropdownMenuLabel className="cursor-pointer">
                                            {t('directorCompany')}
                                        </DropdownMenuLabel>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/creative-group">
                                        <DropdownMenuLabel className="cursor-pointer">
                                            {t('creativeGroup')}
                                        </DropdownMenuLabel>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/administration">
                                        <DropdownMenuLabel className="cursor-pointer">
                                            {t('administration')}
                                        </DropdownMenuLabel>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/gallery">
                                        <DropdownMenuLabel className="cursor-pointer">
                                            {t('gallery')}
                                        </DropdownMenuLabel>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/history">
                                        <DropdownMenuLabel className="cursor-pointer">
                                            {t('theatreHistory')}
                                        </DropdownMenuLabel>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/tickets">
                                        <DropdownMenuLabel className="cursor-pointer">
                                            {t('tickets')}
                                        </DropdownMenuLabel>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/contact">
                        <h1 className="text-white">{t('contact')}</h1>
                    </Link>
                </div>
                <button className="flex gap-4">
                    <LangChoose
                        className="cursor-pointer text-sm text-white md:text-base"
                        spanClassname=" "
                    />
                    <BurgerMenu />
                </button>
            </div>
        </div>
    )
}
