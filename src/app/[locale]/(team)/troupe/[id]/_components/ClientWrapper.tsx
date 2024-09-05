'use client'

import { useParams } from 'next/navigation'
import AvatarImage from './AvatarImage'
import Paragraph from './Paragraph'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useStore } from '@/zustand/zustand'

export default function ClientWrapper({ data }: any) {
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)
    const setTroupeAlternateLocales = useStore((state) => state.setTroupeAlternateLocales)

    useEffect(() => {
        if (data.attributes?.localizations?.data[0]?.id) {
            setTroupeAlternateLocales(data.attributes.localizations.data[0].id)
        } else {
            setTroupeAlternateLocales(undefined)
        }
    }, [])

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex min-h-screen w-full justify-center overflow-hidden text-white md:py-10`}
        >
            {isClient ? (
                <div className="flex w-full flex-col items-center">
                    <div className="mb-10 hidden flex-row items-center gap-2 rounded-[6px] border bg-[#0f1017] bg-card-gradient px-7 py-1 shadow-custom md:flex">
                        <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                        <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                    </div>
                    <div className="h-full w-full overflow-hidden rounded-[4px] bg-[#0f1017] bg-opacity-10 bg-card-gradient shadow-custom md:w-2/3">
                        <div className="relative mr-5 h-[250px] w-full md:float-left md:h-[300px] md:w-[400px]">
                            <AvatarImage data={data} />
                        </div>
                        <div className="w-full px-3">
                            <div className="flex flex-row items-center gap-2 py-2 md:hidden">
                                <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                                <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                            </div>
                            <div className="h-[1px] w-full bg-white md:hidden"></div>
                            {data?.attributes?.description && (
                                <div className="py-5 text-sm md:text-base">
                                    <Paragraph content={data && data?.attributes?.description} />
                                </div>
                            )}
                            {data?.attributes?.repertuaris?.data?.length > 0 ? (
                                <div className="flex flex-col gap-4 pb-10">
                                    <h2 className="text-center text-xl">ნათამაშები სპექტაკლები</h2>
                                    {data.attributes.repertuaris.data.map(
                                        (item: any, index: any) => (
                                            <Link key={item.id} href={`/repertory/${item.id}`}>
                                                <span className="cursor-pointer">
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
