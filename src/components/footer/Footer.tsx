import { Social } from '../shared/socialIcons/SocialIcons'
import { HomePhoneCall, Message, PhoneCall } from '../svg'
import Link from 'next/link'
import axiosInstance from '@/AxiosInstance'
import initTranslations from '@/libs/i18n/i18n'

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/contacts', {
            params: {
                locale: locale,
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}

export default async function Footer({ locale }: any) {
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)
    const data = await fetchData(locale)

    return (
        <section
            className={`flex h-auto w-full flex-col bg-footer-cover bg-cover bg-top bg-no-repeat px-10 pt-12 md:h-auto md:flex-col md:justify-between md:bg-center md:px-5 lg:px-16`}
        >
            <div className="flex w-full flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-5">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-xl text-white lg:text-3xl`}
                >
                    {t('batumiTheatreShort')}
                </h1>
                <div className="grid grid-flow-col grid-cols-2 grid-rows-4 items-center gap-5 text-sm text-white lg:gap-x-20">
                    <span className="cursor-pointer underline-offset-2 hover:underline">
                        <Link href="/"> {t('main')}</Link>
                    </span>

                    <span className="cursor-pointer underline-offset-2 hover:underline">
                        <Link href="/news"> {t('news')}</Link>
                    </span>
                    <span className="cursor-pointer underline-offset-2 hover:underline">
                        <Link href="/repertory"> {t('repertory')}</Link>
                    </span>

                    <span className="cursor-pointer underline-offset-2 hover:underline">
                        <Link href="/contact"> {t('contact')}</Link>
                    </span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-sm font-semibold text-white">{t('contact')}</h1>
                    <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-1">
                        <div className="flex cursor-pointer flex-row items-center gap-3">
                            <PhoneCall className="h-4 w-4" />
                            <a target="_blank" rel="noopener noreferrer" href="tel:+995577980858">
                                <span className="text-sm text-white hover:underline">
                                    {data?.data[0]?.attributes?.mobile1}
                                </span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="tel:+995577980858">
                                <span className="text-sm text-white hover:underline">
                                    {data?.data[0]?.attributes?.mobile2}
                                </span>
                            </a>
                        </div>
                        <div className="flex cursor-pointer flex-row items-center gap-3">
                            <HomePhoneCall className="h-5 w-5" />
                            <a target="_blank" rel="noopener noreferrer" href="tel:0422 27 31 80 ">
                                <span className="text-sm text-white hover:underline">
                                    {data?.data[0]?.attributes?.phone1}
                                </span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="tel:0422 27 31 80 ">
                                <span className="text-sm text-white hover:underline">
                                    {data?.data[0]?.attributes?.phone2}
                                </span>
                            </a>
                        </div>

                        <div className="flex cursor-pointer flex-row items-center gap-3">
                            <Message className="h-4 w-4" />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:batumidramatheatre@gmail.com"
                            >
                                <span className="text-sm text-white hover:underline">
                                    {data?.data[0]?.attributes?.email}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden pt-16 md:flex">
                        <Social />
                    </div>
                </div>
                <div className="flex w-full flex-col items-start md:hidden">
                    <Social />
                    <div className="mt-8 h-[1px] w-full bg-white md:mt-0 md:hidden"></div>
                </div>
            </div>

            <div className="mt-6 hidden h-[1px] w-full bg-white md:block"></div>
            <div className="flex flex-row items-center justify-center py-4 md:justify-center">
                <p className="text-[10px] text-white">Copyrighyt 2024</p>
            </div>
        </section>
    )
}
