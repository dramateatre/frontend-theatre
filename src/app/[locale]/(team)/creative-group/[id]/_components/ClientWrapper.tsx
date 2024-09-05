'use client'

import { useStore } from '@/zustand/zustand'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import AvatarImage from './AvatarImage'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'

export default function ClientWrapper({ data }: any) {
    const setCreativeGroupAlternateLocales = useStore(
        (state) => state.setCreativeGroupAlternateLocales
    )
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        if (data.attributes?.localizations?.data[0]?.id) {
            setCreativeGroupAlternateLocales(data.attributes.localizations.data[0].id)
        } else {
            setCreativeGroupAlternateLocales(undefined)
        }
    }, [])

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} relative flex min-h-screen w-full justify-center overflow-hidden text-white md:py-10`}
        >
            {isClient ? (
                <div className="flex flex-col items-center">
                    <div className="mb-10 hidden flex-row items-center gap-2 rounded-[6px] border bg-[#0f1017] bg-card-gradient px-7 py-1 shadow-custom md:flex">
                        <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                        <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                    </div>
                    <div className="h-auto w-full overflow-hidden bg-[#0f1017] bg-card-gradient pb-5 shadow-custom md:w-4/5 md:rounded-[4px]">
                        <div className="relative mr-5 h-[250px] w-full md:float-left md:h-[300px] md:w-[300px] lg:w-[400px]">
                            <AvatarImage data={data} />
                        </div>
                        <div className="w-full px-3">
                            <div className="flex flex-col items-center gap-2 py-2 md:flex-row">
                                <div className="flex flex-row">
                                    <span className="my-1 text-lg md:hidden">
                                        {data?.attributes?.firstname}
                                    </span>
                                    <span className="my-1 text-lg md:hidden">
                                        {data?.attributes?.lastname}
                                    </span>
                                </div>
                                <span className="my-1 text-center text-sm md:text-start md:text-lg">
                                    {data?.attributes?.position}
                                </span>
                            </div>
                            <div className="h-[1px] w-full bg-white"></div>
                            <p className="py-5 text-sm md:text-base">
                                <BlocksRenderer content={data?.attributes?.description} />
                            </p>
                            {data?.attributes?.repertuaris?.data?.length > 0 ? (
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-center text-xl">ნათამაშები სპექტაკლები</h2>
                                    {data.attributes.repertuaris.data.map(
                                        (item: any, index: any) => (
                                            <Link key={item.id} href={`/repertory/${item.id}`}>
                                                <span>
                                                    {index + 1}. {item.attributes.header}
                                                </span>
                                            </Link>
                                        )
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </main>
    )
}
