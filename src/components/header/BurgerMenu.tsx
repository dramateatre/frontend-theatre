import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BurgerIcon, Email, FbIcon, InstaIcon, PhoneCall, WhatsappIcon } from '../svg'
import { Accordion } from '@radix-ui/react-accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export function BurgerMenu() {
    const { t } = useTranslation()
    const pathname = usePathname()

    const isActive = (paths: any) => paths.includes(pathname)

    return (
        <Sheet>
            <SheetTrigger asChild>
                <BurgerIcon className="block h-6 w-6 cursor-pointer fill-slate-500 lg:hidden" />
            </SheetTrigger>
            <SheetContent className="bg-[#0f1017] text-white">
                <div className="flex h-full w-full flex-col justify-between pt-5">
                    <div className="flex flex-col gap-5 text-sm">
                        <SheetTrigger asChild>
                            <Link href="/">
                                <span className={isActive(['/', '/en']) ? 'underline' : ''}>
                                    {t('main')}
                                </span>
                            </Link>
                        </SheetTrigger>
                        <SheetTrigger asChild>
                            <Link href="/news">
                                <span
                                    className={isActive(['/news', , '/en/news']) ? 'underline' : ''}
                                >
                                    {t('news')}
                                </span>
                            </Link>
                        </SheetTrigger>
                        <SheetTrigger asChild>
                            <Link href="/repertory">
                                <span
                                    className={
                                        isActive(['/repertory', , '/en/repertory'])
                                            ? 'underline'
                                            : ''
                                    }
                                >
                                    {t('repertory')}
                                </span>
                            </Link>
                        </SheetTrigger>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{t('team')}</AccordionTrigger>
                                <AccordionContent>
                                    <SheetTrigger asChild>
                                        <Link href="/troupe">
                                            <span
                                                className={
                                                    isActive(['/troupe', '/en/troupe'])
                                                        ? 'underline'
                                                        : ''
                                                }
                                            >
                                                {t('troupe')}
                                            </span>
                                        </Link>
                                    </SheetTrigger>
                                </AccordionContent>
                                <AccordionContent>
                                    <SheetTrigger asChild>
                                        <Link href="/creative-group">
                                            <span
                                                className={
                                                    isActive([
                                                        '/creative-group',
                                                        '/en/creative-group',
                                                    ])
                                                        ? 'underline'
                                                        : ''
                                                }
                                            >
                                                {t('creativeGroup')}
                                            </span>
                                        </Link>
                                    </SheetTrigger>
                                </AccordionContent>
                                <AccordionContent>
                                    <SheetTrigger asChild>
                                        <Link href="/administration">
                                            <span
                                                className={
                                                    isActive([
                                                        '/administration',
                                                        '/en/administration',
                                                    ])
                                                        ? 'underline'
                                                        : ''
                                                }
                                            >
                                                {t('administration')}
                                            </span>
                                        </Link>
                                    </SheetTrigger>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{t('about')}</AccordionTrigger>
                                <AccordionContent>
                                    <SheetTrigger asChild>
                                        <Link href="/history">
                                            <span
                                                className={
                                                    isActive(['/history', '/en/history'])
                                                        ? 'underline'
                                                        : ''
                                                }
                                            >
                                                {t('theatreHistory')}
                                            </span>
                                        </Link>
                                    </SheetTrigger>
                                </AccordionContent>
                                <AccordionContent>
                                    <SheetTrigger asChild>
                                        <Link href="/museum">
                                            <span
                                                className={
                                                    isActive(['/museum', '/en/museum'])
                                                        ? 'underline'
                                                        : ''
                                                }
                                            >
                                                {t('museum')}
                                            </span>
                                        </Link>
                                    </SheetTrigger>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <SheetTrigger asChild>
                            <Link href="/contact">
                                <span
                                    className={
                                        isActive(['/contact', '/en/contact']) ? 'underline' : ''
                                    }
                                >
                                    {t('contact')}
                                </span>
                            </Link>
                        </SheetTrigger>
                        <SheetTrigger asChild>
                            <Link href="/tickets">
                                <span
                                    className={
                                        isActive(['/tickets', '/en/tickets']) ? 'underline' : ''
                                    }
                                >
                                    {t('tickets')}
                                </span>
                            </Link>
                        </SheetTrigger>
                    </div>
                    <div className="flex flex-col pb-0">
                        <div className="flex w-full flex-row items-center">
                            <PhoneCall className="h-4 w-4 fill-[#484848]" />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="tel:+995577980858"
                                className="ml-2 text-sm"
                            >
                                577 980 858
                            </a>
                        </div>
                        <div className="mt-4 flex w-full flex-row items-center">
                            <Email className="h-4 w-4 fill-[#484848]" />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:batumidramatheatre@gmail.com"
                                className="ml-2 text-sm"
                            >
                                batumidramatheatre@gmail.com
                            </a>
                        </div>
                        <div className="mt-4 h-[2px] w-full bg-[#DADDE7]"></div>
                        <div className="mt-6 flex w-full flex-row items-center justify-end gap-6">
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <FbIcon className="h-7 w-7 cursor-pointer" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <InstaIcon className="h-7 w-7 cursor-pointer" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/%2B995577980858"
                            >
                                <WhatsappIcon className="h-7 w-7 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
