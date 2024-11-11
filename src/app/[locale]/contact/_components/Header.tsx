'use client'

import axiosInstance from '@/AxiosInstance'
import { FbIcon, HomePhoneCall, InstaIcon, PhoneCall, WhatsappIcon } from '@/components/svg'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const [data, setData] = useState<any>([])

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/contacts', {
                params: {
                    locale: locale,
                },
            })
            setData(response.data.data[0])
        } catch (error) {
            setData([])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="flex h-auto w-full flex-col items-center gap-6 px-6 text-white md:gap-10 md:px-7 lg:px-40 xl:px-64">
            <h1
                className={`text-center ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} pb-5 text-2xl lg:text-4xl`}
            >
                {t('batumiTheatre')}
            </h1>
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 text-sm md:grid-cols-2 md:gap-y-4">
                <span className="text-sm underline-offset-4 hover:underline">
                    <span className="font-semibold">{t('address')}: </span>
                    <span></span> {data.attributes?.address}
                </span>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                        <span className="text-sm font-semibold">{t('phone')}: </span>
                        {data.attributes?.mobile1 && (
                            <a
                                className="flex flex-row items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`tel:+995${data.attributes?.mobile1}`}
                            >
                                <PhoneCall className="h-4 w-4" />
                                <span className="text-sm underline-offset-4 hover:underline">
                                    {data.attributes?.mobile1}
                                </span>
                            </a>
                        )}
                        {data.attributes?.mobile2 && (
                            <a
                                className="flex flex-row items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`tel:+995${data.attributes?.mobile2}`}
                            >
                                <PhoneCall className="h-4 w-4" />
                                <span className="text-sm underline-offset-4 hover:underline">
                                    {data.attributes?.mobile2}
                                </span>
                            </a>
                        )}
                    </div>
                    <div className="flex flex-row gap-4">
                        {data.attributes?.phone1 && (
                            <a
                                className="flex flex-row items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`tel:+995${data.attributes?.phone1}`}
                            >
                                <HomePhoneCall className="h-4 w-4" />
                                <span className="text-sm underline-offset-4 hover:underline">
                                    {data.attributes?.phone1}
                                </span>
                            </a>
                        )}
                        {data.attributes?.phone2 && (
                            <a
                                className="flex flex-row items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`tel:+995${data.attributes?.phone2}`}
                            >
                                <HomePhoneCall className="h-4 w-4" />
                                <span className="text-sm underline-offset-4 hover:underline">
                                    {data.attributes?.phone1}
                                </span>
                            </a>
                        )}
                    </div>
                </div>
                {data.attributes?.email && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${data.attributes?.email}`}
                    >
                        <span className="flex gap-1 text-sm underline-offset-4 hover:underline">
                            <span className="font-semibold">{t('address')}: </span>
                            <span></span> {data.attributes?.email}
                        </span>
                    </a>
                )}

                <div className="flex flex-row items-center gap-5">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/BatumiDrama"
                    >
                        <FbIcon className="h-5 w-5" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/batumitheatre/?hl=en"
                    >
                        <InstaIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header
