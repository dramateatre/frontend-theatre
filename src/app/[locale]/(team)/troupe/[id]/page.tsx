import axiosInstance from '@/AxiosInstance'
import Image from 'next/image'
import React from 'react'
import Temporary from '../../../../../../public/imgs/actor.jpeg'

async function fetchData(locale: string, id?: number) {
    try {
        const endpoint = id ? `/troupes/${id}` : '/troupes'
        const response = await axiosInstance.get(endpoint, {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        return response.data.data
    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}

export default async function Page({
    params: { locale, id },
}: {
    params: { locale: string; id?: number }
}) {
    const data = await fetchData(locale, id)

    return (
        // <main className="h-screen w-full pt-40">
        //     <Image
        //         src={`http://localhost:1337${data.attributes.Avatar.data.attributes.url}`}
        //         alt="123"
        //         width={600}
        //         height={600}
        //         className="h-64 w-64"
        //     />
        // </main>
        <main className="m flex min-h-screen w-full flex-col bg-[#1a1c2f] text-white md:gap-6 md:px-20 md:pb-24 md:pt-40 xl:px-[320px]">
            <section className="flex h-full w-full flex-col md:h-[280px] md:flex-row md:gap-3 lg:gap-6">
                <div className="h-[300px] w-full overflow-hidden md:h-full md:rounded-[8px] md:shadow-md">
                    <Image
                        width={600}
                        height={600}
                        src={`http://localhost:1337${data.attributes.Avatar.data.attributes.url}`}
                        className="h-full w-full object-cover object-center"
                        alt="123"
                    />
                </div>
                <div
                    style={{
                        background:
                            'radial-gradient(46.99% 43.05% at 2.58% 100%, rgba(46, 48, 56, 0.4) 0%, transparent 100%), radial-gradient(55.18% 55.16% at 12.42% -3.42%, rgba(112, 220, 211, 0.3) 0%, transparent 100%)',
                    }}
                    className="z-50 -mt-4 flex h-auto w-full flex-col overflow-hidden rounded-t-3xl bg-[#0D0E12] px-6 pt-6 md:mt-0 md:rounded-xl md:border md:border-[#E3E3E3] md:p-6 md:shadow-sm"
                >
                    <div className="flex w-full flex-row items-start justify-between">
                        <div className="flex flex-col gap-[6px] md:flex-row">
                            <span className="text-base font-semibold md:text-sm">
                                მაკო - 32 წლის
                            </span>
                            <span className="text-sm text-[#838CAC]">16.04.2022</span>
                        </div>
                    </div>

                    <div className="mt-5 h-[1px] w-full bg-[#A0A0A0]"></div>
                    <div className="mb-1 mt-4 flex w-full flex-row items-center justify-between">
                        <span className="text-sm text-[#838CAC] md:mt-4">ჩემს შესახებ</span>
                        <button className="flex flex-row items-center rounded-md bg-[#0A7CFF] px-3 py-2">
                            <span className="ml-2 text-sm text-white">message</span>
                        </button>
                    </div>
                    <p className="mt-2 text-sm">
                        შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული
                        ნაწარმის, შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                        ტიპოგრაფიული ნაწარმის.
                    </p>
                    <div className="mt-5 h-[1px] w-full bg-[#A0A0A0] md:hidden"></div>
                </div>
            </section>

            <section className="flex h-full w-full flex-col gap-6 bg-[#FFFFFF] px-6 pt-4 md:flex-row md:justify-start md:gap-8 md:rounded-xl md:border-2 md:border-[#E3E3E3] md:p-6 md:shadow-sm">
                <div className="flex w-auto flex-row items-start">
                    <div className="ml-4 flex flex-col">
                        <span className="mb-2 text-sm text-[#838CAC]">ბიუჯეტი</span>
                        <span className="text-sm">500$ / თვეში</span>
                    </div>
                </div>
                <div className="flex w-auto flex-row items-start">
                    <div className="ml-4 flex flex-col">
                        <span className="mb-2 text-sm text-[#838CAC]">ხელმისაწვდომია</span>
                        <span className="text-sm">2 აპრილი 2024</span>
                    </div>
                </div>
                <div className="flex w-auto flex-row items-start">
                    <div className="ml-4 flex flex-col">
                        <span className="mb-2 text-sm text-[#838CAC]">ადგილმდებარეობა</span>
                        <span className="text-sm">გოთუას #2</span>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#A0A0A0] md:hidden"></div>
            </section>
            <section className="flex h-full w-full flex-col gap-8 bg-[#FFFFFF] px-6 pt-4 md:flex-row md:justify-start md:gap-8 md:rounded-xl md:border-2 md:border-[#E3E3E3] md:p-6 md:shadow-sm">
                <div className="flex w-auto flex-row items-start">
                    <div className="ml-4 flex flex-col">
                        <span className="mb-2 text-sm text-[#838CAC]">შინაური ცხოველები</span>
                        <span className="text-sm">5 თხა</span>
                    </div>
                </div>
                <div className="flex w-auto flex-row items-start">
                    <div className="ml-4 flex flex-col">
                        <span className="mb-2 text-sm text-[#838CAC]">ინტერესები</span>
                        <span className="text-sm">ხატვა, ცეკვა</span>
                    </div>
                </div>
            </section>
            <section className="h-full w-full overflow-hidden rounded-md bg-[#FFFFFF] px-6 pb-6 pt-12 md:p-0">
                <div className="h-full w-full shadow-sm">
                    <div className="flex h-auto w-full items-center gap-2 border-[#52A630] bg-[#52A630] px-4 py-2">
                        <span className="text-sm text-white">ვერიფიცირებული მომხმარებელი</span>
                    </div>
                    <div className="flex h-full w-full flex-col gap-6 border-x-2 border-b-2 border-[#E3E3E3] p-6 md:flex-row">
                        <div className="flex h-auto w-auto flex-col">
                            <span className="text-[#838CAC]">ID ვერიფიკაცია</span>
                            <div className="flex w-full flex-row items-center gap-2">
                                <span>სახელი</span>
                            </div>
                            <div className="flex w-full flex-row items-center gap-2">
                                <span>გვარი</span>
                            </div>
                        </div>
                        <div className="flex h-auto w-auto flex-col">
                            <span className="text-[#838CAC]">კონტაქტის ვერიფიკაცია</span>
                            <div className="flex w-full flex-row items-center gap-2">
                                <span>მამის სახელი</span>
                            </div>
                            <div className="flex w-full flex-row items-center gap-2">
                                <span>სტატუსი</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full flex-col gap-6 overflow-hidden rounded-b-md border-x-2 border-b-2 border-[#E3E3E3] px-6 py-4">
                        <span className="text-xs text-[#838CAC]">
                            შემთხვევითად გენერირებული ტექსტი დიზაინერებს და ტიპოგრაფიული ნაწარმის
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}
