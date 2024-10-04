'use client'

import { EmailSms, PhoneCall } from '@/components/svg'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    return (
        <main
            className={`min-h-screen px-4 py-8 md:px-8 md:py-16 ${locale === 'en' ? 'italic' : 'font-georgian'}`}
        >
            <div className="mx-auto max-w-4xl">
                <h1
                    className={`mb-8 text-center text-xl text-white md:text-3xl ${
                        locale === 'en' ? 'font-playwrite' : 'font-georgian'
                    }`}
                >
                    {t('creativeGroup')}
                </h1>

                <div className="overflow-hidden rounded-[6px] bg-[#8a8989] bg-opacity-10 bg-card-gradient shadow-xl">
                    {data?.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="border-b border-blue-200 border-opacity-30 p-6 last:border-b-0"
                        >
                            <div className="mb-4 flex flex-col justify-between md:flex-row md:items-center">
                                <div className="mb-2 flex items-center md:mb-0">
                                    {item.attributes.description ? (
                                        <Link href={`/creative-group/${item.id}`}>
                                            <span className="cursor-pointer text-lg font-semibold text-white transition-colors duration-200 hover:text-blue-200">
                                                {item.attributes.firstname}{' '}
                                                {item.attributes.lastname}
                                            </span>
                                        </Link>
                                    ) : (
                                        <span className="text-lg font-semibold text-white">
                                            {item.attributes.firstname} {item.attributes.lastname}
                                        </span>
                                    )}
                                </div>
                                <span className="text-blue-200">{item.attributes.position}</span>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                {item.attributes.email && (
                                    <a
                                        href={`mailto:${item.attributes.email}`}
                                        className="flex items-center text-blue-100 transition-colors duration-200 hover:text-white"
                                    >
                                        <EmailSms className="mr-2 h-5 w-5" />
                                        <span>{item.attributes.email}</span>
                                    </a>
                                )}
                                {item.attributes.phone && (
                                    <a
                                        href={`tel:${item.attributes.phone}`}
                                        className="flex items-center text-blue-100 transition-colors duration-200 hover:text-white"
                                    >
                                        <PhoneCall className="mr-2 h-4 w-4" />
                                        <span>{item.attributes.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
