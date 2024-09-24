'use client'

import { useStore } from '@/zustand/zustand'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import AvatarImage from './AvatarImage'

export default function ClientWrapper({ data }: any) {
    const params = useParams()
    const locale = params.locale
    const [isClient, setIsClient] = useState(false)

    console.log(data)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} relative flex min-h-screen w-full flex-col gap-5 items-center overflow-hidden text-white md:px-20 md:py-10`}
        >
            <h1>სამხატვრო ხელმძღვანელი</h1>
            {isClient ? (
                <div className="flex w-full flex-col items-center md:w-4/5">
                    <div className="mb-10 hidden flex-row items-center gap-2 rounded-[6px] border bg-[#0f1017] bg-card-gradient px-7 py-1 shadow-custom md:flex">
                        <span className="my-1 text-lg">{data[0]?.attributes?.firstname}</span>
                        <span className="my-1 text-lg">{data[0]?.attributes?.lastname}</span>
                    </div>
                    <div className="h-auto w-full overflow-hidden bg-[#0f1017] bg-card-gradient pb-5 shadow-custom md:w-full md:rounded-[4px]">
                        <div className="relative mr-5 h-[250px] w-full md:float-left md:h-[300px] md:w-[300px] lg:w-[400px]">
                            <AvatarImage data={data[0]} />
                        </div>
                        <div className="w-full px-3">
                            <div className="flex flex-col items-center gap-2 py-2 md:flex-row">
                                <div className="flex flex-row">
                                    <span className="my-1 text-lg md:hidden">
                                        {data[0]?.attributes?.firstname}
                                    </span>
                                    <span className="my-1 text-lg md:hidden">
                                        {data[0]?.attributes?.lastname}
                                    </span>
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-white"></div>
                            <p className="py-5 text-sm md:text-base">
                                <BlocksRenderer content={data[0]?.attributes?.description} />
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}
        </main>
    )
}