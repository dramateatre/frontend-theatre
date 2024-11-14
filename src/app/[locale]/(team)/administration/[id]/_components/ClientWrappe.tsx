'use client'

import { useTranslation } from 'react-i18next'
import AvatarImage from './AvatarImage'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    console.log(data)
    return (
        <main
            className={`${
                locale === 'en' ? 'italic' : 'font-georgian'
            } relative flex min-h-screen w-full flex-col items-center gap-8 overflow-hidden bg-[#1a1b2f] px-4 py-10 text-white md:px-20 md:py-16`}
        >
            {isClient && data?.attributes && (
                <div className="w-full max-w-4xl rounded-[6px] bg-[#0f1017] bg-card-gradient p-6 shadow-2xl transition-all duration-300 hover:shadow-blue-900/20 md:p-8">
                    <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold md:text-3xl">
                                {data.attributes?.firstname} {data.attributes?.lastname}
                            </h2>
                            <p className="mt-2 text-blue-300">{data.attributes?.position}</p>
                        </div>
                        <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-slate-700 shadow-lg md:h-64 md:w-64">
                            <AvatarImage data={data} />
                        </div>
                    </div>

                    {data.attributes?.description && (
                        <div className="mt-6 space-y-4 text-sm leading-relaxed md:text-base">
                            <BlocksRenderer content={data.attributes?.description} />
                        </div>
                    )}
                </div>
            )}
        </main>
    )
}
