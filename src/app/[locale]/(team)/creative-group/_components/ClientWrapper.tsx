'use client'

import { EmailSms, PhoneCall } from '@/components/svg'
import Link from 'next/link'

import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex h-auto w-full flex-col items-center gap-6 px-6 py-5 text-white md:min-h-screen md:gap-10 md:px-32 md:py-10`}
        >
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-xl tracking-wider md:text-2xl`}
            >
                {t('creativeGroup')}
            </h1>

            <div className="grid h-auto w-full flex-col gap-x-20 gap-y-10 border-white bg-opacity-100 px-3 md:w-full md:grid-cols-2">
                {data?.map((item: any, index: any) => (
                    <div
                        key={index}
                        className="relative grid w-full grid-cols-1 items-center justify-start gap-3 rounded-[4px] border bg-card-gradient px-3 py-3 pt-5 text-sm md:text-base"
                    >
                        <span className="text-center font-bold">{item.attributes.position}</span>
                        <div className="h-[1px] w-full bg-slate-200"></div>

                        <div className="flex flex-row justify-start gap-2 md:justify-center">
                            <span>{item.attributes.firstname}</span>
                            <span>{item.attributes.lastname}</span>
                        </div>
                        <div className="flex flex-col justify-start  md:justify-center gap-3 md:flex-row">
                            {item.attributes.email && (
                                <a
                                    href={`mailto:${item.attributes.email}`}
                                    className="flex cursor-pointer flex-row items-center justify-start gap-1"
                                >
                                    <EmailSms className="h-5 w-5" />
                                    <span>{item.attributes.email}</span>
                                </a>
                            )}
                            {item.attributes.phone && (
                                <a
                                    href={`tel:${item.attributes.phone}`}
                                    className="flex cursor-pointer flex-row items-center justify-start gap-1"
                                >
                                    <PhoneCall className="h-3 w-3" />
                                    <span>{item.attributes.phone}</span>
                                </a>
                            )}
                        </div>
                        {item.attributes.description && (
                            <div className="flex flex-row justify-end">
                                <Link href={`/creative-group/${item.id}`}>
                                    <button className="hover:underline">{t('viewMore')}</button>
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}
