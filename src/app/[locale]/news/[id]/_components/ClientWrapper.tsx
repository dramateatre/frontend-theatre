'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useStore } from '@/zustand/zustand'

export default function ClientWrapper({ data }: any) {
    const { t } = useTranslation()
    const setAlternateLocaleId = useStore((state) => state.setNewsAlternateLocales)

    useEffect(() => {
        if (data.attributes?.localizations?.data[0].id) {
            setAlternateLocaleId(data.attributes.localizations.data[0].id)
        }
    }, [])

    return (
        <main className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0f1017] md:flex-row">
            <div className="relative h-[250px] w-full md:w-[400px]">
                <Image
                    fill
                    src={`http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`}
                    alt="Village"
                    className="object-cover object-center"
                />
            </div>
            <div className="flex h-full w-full flex-col items-start gap-5 bg-card-gradient px-3 pb-10 pt-3 md:h-auto md:px-6">
                <div className="flex w-full flex-col justify-between">
                    <h1 className="text-center text-base text-white md:text-left md:text-lg">
                        {data?.attributes?.header}
                    </h1>
                    <div className="my-2 h-[1px] w-full bg-white"></div>
                    <div className="overflow-hidden text-ellipsis text-xs text-white">
                        <BlocksRenderer content={data?.attributes?.description} />
                    </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <div className="h-[1px] w-full bg-white"></div>
                    <div className="flex w-full items-center justify-between">
                        <span className="text-sm text-white">
                            {new Date(data?.attributes?.publishedAt).toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            })}
                        </span>

                        <button className="flex flex-row items-center justify-center text-sm text-white underline-offset-2 hover:underline">
                            {t('gallery')}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
