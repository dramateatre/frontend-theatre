'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <main className="flex min-h-screen w-full flex-col items-center gap-10 px-6 pb-10 pt-5 text-white md:px-7 md:pb-20 md:pt-10 lg:px-20">
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-2xl tracking-widest md:text-2xl`}
            >
                {t('creativeGroup')}
            </h1>
            <div className="h-auto w-full border-t border-white bg-opacity-100 bg-card-gradient md:w-2/3 md:border-x">
                {data?.map((item: any, index: any) => (
                    <Link href={`/creative-group/${item.id}`}>
                        <div
                            key={index}
                            className="flex w-full flex-col gap-2 pt-5 text-sm md:text-base"
                        >
                            <div className="flex flex-row items-start gap-4 px-3 md:items-center md:px-10">
                                <div className="flex flex-row items-center gap-2">
                                    <span>{item.attributes.firstname}</span>
                                    <span>{item.attributes.lastname}</span>
                                </div>
                                <span>-</span>
                                <span>{item.attributes.position}</span>
                            </div>

                            <div className="h-[1px] w-full bg-slate-200"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
